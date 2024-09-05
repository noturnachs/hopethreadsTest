import { motion } from "framer-motion";
import { fadeIn } from "../components/anim";
import { useState } from "react";

const Mission = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const missionItems = [
    {
      title: "Empower Communities",
      content:
        "We empower communities by providing essential resources and support to help them rebuild and thrive. Our initiatives focus on education, skill development, and access to vital services, ensuring that individuals have the tools they need to create a better future.",
      supportingText:
        "Through workshops, training programs, and partnerships with local organizations, we aim to uplift those in need and foster a sense of agency and self-sufficiency within communities.",
    },
    {
      title: "Global Reach",
      content:
        "Our mission extends globally, reaching those in need regardless of their location or circumstances. We believe that compassion knows no borders, and we strive to provide assistance wherever it is required.",
      supportingText:
        "By collaborating with international partners and leveraging local networks, we ensure that our efforts are effective and culturally sensitive, addressing the unique challenges faced by different communities.",
    },
    {
      title: "Compassionate Aid",
      content:
        "We provide compassionate aid to those affected by disasters, ensuring they receive the help they need. Our response teams are trained to act swiftly and effectively in times of crisis, delivering essential supplies and support.",
      supportingText:
        "We prioritize the dignity and well-being of those we serve, offering not just material assistance but also emotional support and a listening ear to help individuals navigate their challenges.",
    },
    {
      title: "Sustainable Solutions",
      content:
        "We focus on sustainable solutions that foster long-term recovery and resilience in communities. Our approach emphasizes the importance of building systems that can withstand future challenges and promote self-reliance.",
      supportingText:
        "By investing in local infrastructure, supporting small businesses, and promoting environmentally friendly practices, we aim to create a lasting impact that empowers communities to thrive independently.",
    },
  ];

  return (
    <motion.div
      variants={fadeIn("up", 0.1)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.2 }}
      className="flex flex-col items-center justify-center mt-20 p-6"
    >
      <h2 className="text-5xl font-bold text-blue-600">Our Mission</h2>
      <div className="mt-10 w-full md:w-1/2">
        {missionItems.map((item, index) => (
          <div key={index} className="border-b border-gray-300">
            <button
              onClick={() => toggleAccordion(index)}
              className="flex justify-between items-center w-full p-4 text-left focus:outline-none"
            >
              <h3 className="font-bold">{item.title}</h3>
              <span>{activeIndex === index ? "-" : "+"}</span>
            </button>
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: activeIndex === index ? "auto" : 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              {activeIndex === index && (
                <div className="p-4 text-gray-600">
                  <p>{item.content}</p>
                  <p className="mt-2 italic">{item.supportingText}</p>
                </div>
              )}
            </motion.div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Mission;
