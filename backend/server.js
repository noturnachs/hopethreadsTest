const express = require("express");
require("dotenv").config();

const app = express();
const bodyParser = require("body-parser");
const fs = require("fs");
const path = require("path");
const TelegramBot = require("node-telegram-bot-api");
const axios = require("axios");
const cors = require("cors"); // Import the cors middleware

// Path to the events.json file
const eventsFilePath = path.join(__dirname, "events.json");
const metricsFilePath = path.join(__dirname, "metrics.json");

// Middleware to parse incoming JSON
app.use(
  cors({
    origin: "https://hopethreadstest.onrender.com", // Allow only this origin
    methods: ["GET", "POST", "PUT", "DELETE"], // Allow these methods
  })
);
app.use(bodyParser.json());

// Default metrics
const defaultMetrics = [
  { label: "Volunteers", value: 40, max: 100 },
  { label: "Funds Raised", value: 7500, max: 10000 },
  { label: "Social Media Impressions", value: 3000, max: 5000 }, // Updated label
  { label: "Community Engagement", value: 300, max: 500 },
  { label: "Publications", value: 2, max: 5 },
];

const ensureMetricsFile = () => {
  if (!fs.existsSync(metricsFilePath)) {
    fs.writeFileSync(
      metricsFilePath,
      JSON.stringify(defaultMetrics, null, 2),
      "utf-8"
    );
  }
};

// Function to read events from the JSON file
const readEventsFromFile = () => {
  if (!fs.existsSync(eventsFilePath)) {
    // If the file doesn't exist, create it with an empty array
    fs.writeFileSync(eventsFilePath, JSON.stringify([], null, 2), "utf-8");
  }

  try {
    const data = fs.readFileSync(eventsFilePath, "utf-8");

    // Handle empty file by returning an empty array
    if (data.trim() === "") {
      return [];
    }

    return JSON.parse(data);
  } catch (err) {
    console.error("Error reading or parsing events.json:", err);
    return [];
  }
};

// Function to write events to the JSON file
const writeEventsToFile = (events) => {
  fs.writeFileSync(eventsFilePath, JSON.stringify(events, null, 2), "utf-8");
};

// Get metrics
app.get("/metrics", (req, res) => {
  ensureMetricsFile();
  try {
    const data = fs.readFileSync(metricsFilePath, "utf-8");
    const metrics = data.trim() === "" ? defaultMetrics : JSON.parse(data);
    res.json(metrics);
  } catch (err) {
    console.error("Error reading or parsing metrics.json:", err);
    res.status(500).json({ message: "Error reading metrics" });
  }
});

// Update metrics
app.put("/metrics", (req, res) => {
  ensureMetricsFile();
  const newMetrics = req.body;

  try {
    fs.writeFileSync(
      metricsFilePath,
      JSON.stringify(newMetrics, null, 2),
      "utf-8"
    );
    res.json(newMetrics);
  } catch (err) {
    console.error("Error writing to metrics.json:", err);
    res.status(500).json({ message: "Error updating metrics" });
  }
});

// Get all events
app.get("/events", (req, res) => {
  const events = readEventsFromFile();
  res.json(events);
});

// Add new event
app.post("/events", (req, res) => {
  const events = readEventsFromFile();
  const newEvent = req.body;

  // Add the new event to the list
  events.push(newEvent);

  // Save the updated list to the file
  writeEventsToFile(events);

  res.json(newEvent);
});

// Edit an event
app.put("/events/:id", (req, res) => {
  const events = readEventsFromFile();
  const eventId = parseInt(req.params.id, 10);
  const updatedEvent = req.body;

  // Find the event by its index in the array
  const eventIndex = events.findIndex((event, index) => index === eventId);

  if (eventIndex !== -1) {
    events[eventIndex] = updatedEvent;
    writeEventsToFile(events);
    res.json(updatedEvent);
  } else {
    res.status(404).json({ message: "Event not found" });
  }
});

// Delete an event
app.delete("/events/:id", (req, res) => {
  const events = readEventsFromFile();
  const eventId = parseInt(req.params.id, 10);

  // Filter out the event
  const updatedEvents = events.filter((event, index) => index !== eventId);

  if (updatedEvents.length < events.length) {
    writeEventsToFile(updatedEvents);
    res.json({ message: "Event deleted" });
  } else {
    res.status(404).json({ message: "Event not found" });
  }
});

// Initialize Telegram Bot
const token = process.env.TELEGRAM_BOT_TOKEN; // Use the token from .env
const bot = new TelegramBot(token, { polling: true });

// Function to get the home button
const getHomeButton = () => ({
  reply_markup: {
    inline_keyboard: [[{ text: "Go Back Home", callback_data: "home" }]],
  },
});

// Store message IDs for updating
const messageIds = {};

// Start command
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;

  // Send welcome message with options including 'Edit Metrics'
  bot
    .sendMessage(chatId, "Welcome! Choose an option:", {
      reply_markup: {
        inline_keyboard: [
          [
            { text: "Add Event", callback_data: "add_event" },
            { text: "View Events", callback_data: "view_events" },
          ],
          [
            { text: "Edit Event", callback_data: "edit_event" },
            { text: "Delete Event", callback_data: "delete_event" },
          ],
          [
            { text: "Edit Metrics", callback_data: "edit_metrics" }, // New button for editing metrics
          ],
        ],
      },
    })
    .then((sentMessage) => {
      messageIds[chatId] = { homeMessageId: sentMessage.message_id };
    });
});

// Handle button presses
bot.on("callback_query", async (callbackQuery) => {
  const chatId = callbackQuery.message.chat.id;
  const action = callbackQuery.data;
  const messageId = callbackQuery.message.message_id;

  // Function to handle metric updates
  const handleMetricUpdate = (metricLabel, metricKey) => {
    bot.editMessageText(`Please enter the new value for ${metricLabel}:`, {
      chat_id: chatId,
      message_id: messageId,
    });

    bot.once("message", (msg) => {
      const newValue = parseInt(msg.text, 10);
      if (isNaN(newValue)) {
        bot.sendMessage(chatId, "Invalid input. Please enter a number.");
        return;
      }

      // Fetch existing metrics, update the selected one, and send PUT request
      axios
        .get(`${process.env.BACKEND_URL}/metrics`)
        .then((response) => {
          const metrics = response.data;
          const metric = metrics.find((m) => m.label === metricLabel);
          if (metric) {
            metric.value = newValue;
            metric.max = newValue * 2; // Update max to double the new value
          }

          // Send updated metrics to the server
          axios
            .put(`${process.env.BACKEND_URL}/metrics`, metrics)
            .then(() => {
              bot.sendMessage(
                chatId,
                `${metricLabel} updated successfully. Max is now ${metric.max}.`
              );

              // Show the edit metrics view again
              bot.sendMessage(chatId, "Select a metric to edit:", {
                reply_markup: {
                  inline_keyboard: [
                    [
                      { text: "Volunteers", callback_data: "edit_volunteers" },
                      {
                        text: "Funds Raised",
                        callback_data: "edit_funds_raised",
                      },
                    ],
                    [
                      {
                        text: "Social Media Impressions ",
                        callback_data: "edit_social_media_impressions",
                      },
                      {
                        text: "Community Engagement",
                        callback_data: "edit_community_engagement",
                      },
                    ],
                    [
                      {
                        text: "Publications",
                        callback_data: "edit_publications",
                      },
                    ],
                    [{ text: "Go Back Home", callback_data: "home" }],
                  ],
                },
              });
            })
            .catch(() => {
              bot.sendMessage(chatId, "Failed to update metric.");
            });
        })
        .catch(() => {
          bot.sendMessage(chatId, "Failed to fetch metrics.");
        });
    });
  };

  // Handle Go Back Home
  if (action === "home") {
    bot.editMessageText("Welcome! Choose an option:", {
      chat_id: chatId,
      message_id: messageId,
      reply_markup: {
        inline_keyboard: [
          [
            { text: "Add Event", callback_data: "add_event" },
            { text: "View Events", callback_data: "view_events" },
          ],
          [
            { text: "Edit Event", callback_data: "edit_event" },
            { text: "Delete Event", callback_data: "delete_event" },
          ],
          [{ text: "Edit Metrics", callback_data: "edit_metrics" }],
        ],
      },
    });
    return;
  }

  // Add Event
  if (action === "add_event") {
    bot.editMessageText(
      "Please send the event in the format: `date,title,description`.",
      {
        chat_id: chatId,
        message_id: messageId,
        reply_markup: {
          inline_keyboard: [
            [{ text: "Cancel", callback_data: "cancel_add_event" }],
          ],
        },
      }
    );

    bot.once("message", (msg) => {
      const eventDetails = msg.text.split(",");
      if (eventDetails.length === 3) {
        const newEvent = {
          date: eventDetails[0].trim(),
          title: eventDetails[1].trim(),
          description: eventDetails[2].trim(),
        };

        axios
          .post(`${process.env.BACKEND_URL}/events`, newEvent)
          .then(() => {
            bot.editMessageText("Event added successfully!", {
              chat_id: chatId,
              message_id: messageId,
            });

            // Send the home message after successful addition
            bot
              .sendMessage(
                chatId,
                "Event added successfully. Returning to home.",
                {
                  reply_markup: {
                    inline_keyboard: [
                      [
                        { text: "Add Event", callback_data: "add_event" },
                        { text: "View Events", callback_data: "view_events" },
                      ],
                      [
                        { text: "Edit Event", callback_data: "edit_event" },
                        { text: "Delete Event", callback_data: "delete_event" },
                      ],
                    ],
                  },
                }
              )
              .then((sentMessage) => {
                messageIds[chatId] = { homeMessageId: sentMessage.message_id };
              });
          })
          .catch(() => {
            bot.editMessageText("Failed to add event.", {
              chat_id: chatId,
              message_id: messageId,
            });
          });
      } else {
        bot.editMessageText(
          "Invalid format. Please send the event in the format: `date,title,description`.",
          {
            chat_id: chatId,
            message_id: messageId,
          }
        );
      }
    });
  }

  // View Events
  if (action === "view_events") {
    axios
      .get(`${process.env.BACKEND_URL}/events`)
      .then((response) => {
        const events = response.data;
        if (events.length === 0) {
          bot.editMessageText("No events yet.", {
            chat_id: chatId,
            message_id: messageId,
            reply_markup: getHomeButton().reply_markup,
          });
        } else {
          const eventButtons = events.map((event, index) => [
            {
              text: `${event.title} (${event.date})`,
              callback_data: `view_event_${index}`,
            },
          ]);

          bot.editMessageText("Here are the events:", {
            chat_id: chatId,
            message_id: messageId,
            reply_markup: {
              inline_keyboard: [
                ...eventButtons,
                [{ text: "Go Back Home", callback_data: "home" }],
              ],
            },
          });
        }
      })
      .catch(() =>
        bot.editMessageText("Failed to fetch events.", {
          chat_id: chatId,
          message_id: messageId,
          reply_markup: getHomeButton().reply_markup,
        })
      );
  }

  // Handle event selection to display details
  if (action.startsWith("view_event_")) {
    const eventId = parseInt(action.split("_")[2]);

    axios
      .get(`${process.env.BACKEND_URL}/events`)
      .then((response) => {
        const events = response.data;
        const selectedEvent = events[eventId];

        bot.editMessageText(
          `Event Details:\n\nTitle: ${selectedEvent.title}\nDate: ${selectedEvent.date}\nDescription: ${selectedEvent.description}`,
          {
            chat_id: chatId,
            message_id: messageId,
            reply_markup: getHomeButton().reply_markup,
          }
        );
      })
      .catch(() =>
        bot.editMessageText("Failed to fetch event details.", {
          chat_id: chatId,
          message_id: messageId,
        })
      );
  }

  // Edit Event
  if (action === "edit_event") {
    axios
      .get(`${process.env.BACKEND_URL}/events`)
      .then((response) => {
        const events = response.data;
        if (events.length === 0) {
          bot.editMessageText("No events to edit.", {
            chat_id: chatId,
            message_id: messageId,
            reply_markup: getHomeButton().reply_markup,
          });
        } else {
          const eventButtons = events.map((event, index) => [
            {
              text: `${event.title} (${event.date})`,
              callback_data: `edit_event_${index}`,
            },
          ]);

          bot.editMessageText("Select the event to edit:", {
            chat_id: chatId,
            message_id: messageId,
            reply_markup: {
              inline_keyboard: [
                ...eventButtons,
                [{ text: "Go Back Home", callback_data: "home" }],
              ],
            },
          });
        }
      })
      .catch(() =>
        bot.editMessageText("Failed to fetch events.", {
          chat_id: chatId,
          message_id: messageId,
          reply_markup: getHomeButton().reply_markup,
        })
      );
  }

  // Handle event editing
  if (action.startsWith("edit_event_")) {
    const eventId = parseInt(action.split("_")[2]);

    axios
      .get(`${process.env.BACKEND_URL}/events`)
      .then((response) => {
        const events = response.data;
        const eventToEdit = events[eventId];

        bot.editMessageText(
          `Editing event: ${eventToEdit.title} (${eventToEdit.date})\nPlease send the new details in the format: \`date,title,description\``,
          {
            chat_id: chatId,
            message_id: messageId,
          }
        );

        bot.once("message", (msg) => {
          const editDetails = msg.text.split(",");
          const updatedEvent = {
            date: editDetails[0].trim(),
            title: editDetails[1].trim(),
            description: editDetails[2].trim(),
          };

          axios
            .put(`http://localhost:4444/events/${eventId}`, updatedEvent)
            .then(() =>
              bot.editMessageText("Event updated successfully!", {
                chat_id: chatId,
                message_id: messageId,
              })
            )
            .catch(() =>
              bot.editMessageText("Failed to update the event.", {
                chat_id: chatId,
                message_id: messageId,
              })
            );
        });
      })
      .catch(() =>
        bot.editMessageText("Failed to fetch events.", {
          chat_id: chatId,
          message_id: messageId,
        })
      );
  }

  // Delete Event
  if (action === "delete_event") {
    axios
      .get(`${process.env.BACKEND_URL}/events`)
      .then((response) => {
        const events = response.data;
        if (events.length === 0) {
          bot.editMessageText("No events to delete.", {
            chat_id: chatId,
            message_id: messageId,
            reply_markup: getHomeButton().reply_markup,
          });
        } else {
          const eventButtons = events.map((event, index) => [
            {
              text: `${event.title} (${event.date})`,
              callback_data: `confirm_delete_${index}`,
            },
          ]);

          bot.editMessageText("Select the event to delete:", {
            chat_id: chatId,
            message_id: messageId,
            reply_markup: {
              inline_keyboard: [
                ...eventButtons,
                [{ text: "Go Back Home", callback_data: "home" }],
              ],
            },
          });
        }
      })
      .catch(() =>
        bot.editMessageText("Failed to fetch events.", {
          chat_id: chatId,
          message_id: messageId,
        })
      );
  }

  // Handle delete confirmation
  if (action.startsWith("confirm_delete_")) {
    const eventId = parseInt(action.split("_")[2]);

    axios
      .delete(`${process.env.BACKEND_URL}/events/${eventId}`)
      .then(() => {
        bot.editMessageText("Event deleted successfully.", {
          chat_id: chatId,
          message_id: messageId,
        });

        // Send a message with the home button
        bot.sendMessage(chatId, "Choose an option:", {
          reply_markup: {
            inline_keyboard: [
              [
                { text: "Add Event", callback_data: "add_event" },
                { text: "View Events", callback_data: "view_events" },
              ],
              [
                { text: "Edit Event", callback_data: "edit_event" },
                { text: "Delete Event", callback_data: "delete_event" },
              ],
              [{ text: "Edit Metrics", callback_data: "edit_metrics" }],
            ],
          },
        });
      })
      .catch(() =>
        bot.editMessageText("Failed to delete event.", {
          chat_id: chatId,
          message_id: messageId,
        })
      );
  }

  // Metrics-related actions
  if (action === "edit_metrics") {
    bot.editMessageText("Select a metric to edit:", {
      chat_id: chatId,
      message_id: messageId,
      reply_markup: {
        inline_keyboard: [
          [
            { text: "Volunteers", callback_data: "edit_volunteers" },
            { text: "Funds Raised", callback_data: "edit_funds_raised" },
          ],
          [
            {
              text: "Social Media Impressions",
              callback_data: "edit_social_media_impressions",
            }, // Updated callback data

            {
              text: "Community Engagement",
              callback_data: "edit_community_engagement",
            },
          ],
          [{ text: "Publications", callback_data: "edit_publications" }],
          [{ text: "Go Back Home", callback_data: "home" }],
        ],
      },
    });
  }

  // Handle specific metric edits
  if (action === "edit_volunteers") {
    handleMetricUpdate("Volunteers", "volunteers");
  } else if (action === "edit_funds_raised") {
    handleMetricUpdate("Funds Raised", "fundsRaised");
  } else if (action === "edit_social_media_impressions") {
    handleMetricUpdate("Social Media Impressions", "socialMediaImpressions");
  } else if (action === "edit_community_engagement") {
    handleMetricUpdate("Community Engagement", "communityEngagement");
  } else if (action === "edit_publications") {
    handleMetricUpdate("Publications", "publications");
  }
});

app.listen(4444, () => {
  console.log("Server is running on port 4444");
});
