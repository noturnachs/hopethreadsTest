// Loading.jsx
import React, { useEffect, useState } from "react";

const Loading = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev < 100) {
          return prev + 10; // Increase progress by 10% every interval
        }
        clearInterval(interval);
        return prev;
      });
    }, 300); // Adjust the interval time as needed

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="loading-container">
      <div className="loading-content">
        <h1>Hopethreads is loading...</h1>
        <div className="progress-bar">
          <div className="progress" style={{ width: `${progress}%` }} />
        </div>
        <p>{progress}%</p>
      </div>
      <style jsx>{`
        .loading-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100vh;
          width: 100vw;
          background-color: rgba(255, 255, 255, 0.9);
          position: fixed;
          top: 0;
          left: 0;
          z-index: 9999; // Ensure it covers everything
        }
        .loading-content {
          text-align: center;
        }
        .progress-bar {
          width: 100%;
          background-color: #e0e0e0;
          border-radius: 5px;
          overflow: hidden;
          margin: 20px 0;
        }
        .progress {
          height: 20px;
          background-color: #3b82f6; // Blue color for the progress
          transition: width 0.3s ease;
        }
      `}</style>
    </div>
  );
};

export default Loading;
