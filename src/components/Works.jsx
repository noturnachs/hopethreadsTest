import React, { useEffect, useState } from "react";

const Work = () => {
  const [amountCount, setAmountCount] = useState(0);
  const [peopleCount, setPeopleCount] = useState(0);
  const [chapterCount, setChapterCount] = useState(0);
  const [volCount, setVolCount] = useState(0);

  const targetAmount = 7548; // Target amount for donations
  const targetPeople = 600; // Target amount for people helped
  const targetChapters = 7; // Target amount for chapters initiated
  const targetVols = 100; // Target amount for volunteers

  const [showMetrix, setShowMetrix] = useState(false);

  useEffect(() => {
    const timer5 = setTimeout(() => setShowMetrix(true), 2500); // Show button after 2000ms

    return () => {
      clearTimeout(timer5);
    };
  }, []);

  useEffect(() => {
    const duration = 2000; // Duration of the animation in milliseconds

    // Animate the amount raised
    const amountStepTime = Math.abs(Math.floor(duration / targetAmount));
    const amountInterval = setInterval(() => {
      setAmountCount((prevCount) => {
        if (prevCount < targetAmount) {
          return Math.min(prevCount + 1, targetAmount); // Increment count
        } else {
          clearInterval(amountInterval); // Clear interval when target is reached
          return prevCount;
        }
      });
    }, amountStepTime);

    // Animate the people helped
    const peopleStepTime = Math.abs(Math.floor(duration / targetPeople));
    const peopleInterval = setInterval(() => {
      setPeopleCount((prevCount) => {
        if (prevCount < targetPeople) {
          return Math.min(prevCount + 1, targetPeople); // Increment count
        } else {
          clearInterval(peopleInterval); // Clear interval when target is reached
          return prevCount;
        }
      });
    }, peopleStepTime);

    // Animate the chapters initiated
    const chapterStepTime = Math.abs(Math.floor(duration / targetChapters));
    const chapterInterval = setInterval(() => {
      setChapterCount((prevCount) => {
        if (prevCount < targetChapters) {
          return Math.min(prevCount + 1, targetChapters); // Increment count
        } else {
          clearInterval(chapterInterval); // Clear interval when target is reached
          return prevCount;
        }
      });
    }, chapterStepTime);

    // Animate the volunteers
    const volStepTime = Math.abs(Math.floor(duration / targetVols));
    const volInterval = setInterval(() => {
      setVolCount((prevCount) => {
        if (prevCount < targetVols) {
          return Math.min(prevCount + 1, targetVols); // Increment count
        } else {
          clearInterval(volInterval); // Clear interval when target is reached
          return prevCount;
        }
      });
    }, volStepTime);

    return () => {
      clearInterval(amountInterval); // Cleanup on unmount
      clearInterval(peopleInterval); // Cleanup on unmount
      clearInterval(chapterInterval); // Cleanup on unmount
      clearInterval(volInterval); // Cleanup on unmount
    };
  }, [targetAmount, targetPeople, targetChapters, targetVols]);

  return (
    <div
      className={`grid grid-cols-2 gap-6 justify-items-center md:flex md:flex-row md:justify-center md:space-x-8 transition-transform duration-700 ease-in-out ${
        showMetrix ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
      }`}
    >
      <div className="flex flex-col items-center justify-center w-24 h-24 bg-gray-100 rounded-full shadow-lg">
        <h2 className="text-xs font-bold">Raised</h2>
        <p className="text-2xl font-extrabold text-blue-500">${amountCount}</p>
      </div>
      <div className="flex flex-col items-center justify-center w-24 h-24 bg-gray-100 rounded-full shadow-lg">
        <h2 className="text-xs font-bold">Helped</h2>
        <p className="text-2xl font-extrabold text-blue-500">{peopleCount}+</p>
      </div>
      <div className="flex flex-col items-center justify-center w-24 h-24 bg-gray-100 rounded-full shadow-lg">
        <h2 className="text-xs font-bold">Chapters</h2>
        <p className="text-2xl font-extrabold text-blue-500">{chapterCount}</p>
      </div>
      <div className="flex flex-col items-center justify-center w-24 h-24 bg-gray-100 rounded-full shadow-lg">
        <h2 className="text-xs font-bold">Volunteers</h2>
        <p className="text-2xl font-extrabold text-blue-500">{volCount}</p>
      </div>
    </div>
  );
};

export default Work;
