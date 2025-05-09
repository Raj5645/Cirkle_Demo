import React, { useState } from "react";
import "./Body.css";
import SubmitBody from "./SubmitBody";

function Body() {
  const [show, setShow] = useState(true);

  function handleStart() {
    console.log("Get started clicked")
    setShow(!show);
  }

  return (
    <div className="body">
      {show ? (
        <>
          <div className="body-header">
            <p className="body-title">Cirkle</p>
            <p className="body-subtitle">An ecosystem for events</p>
            <hr class="body-divider" />
            <p className="body-tagline">Beyond Tickets. Built for Impact.</p>
          </div>

          <button className="start" onClick={handleStart}>
            Get Started
            <span className="start-arrow">
              <svg
                viewBox="0 0 64 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line
                  x1="0"
                  y1="20"
                  x2="48"
                  y2="20"
                  stroke="white"
                  stroke-width="4"
                  stroke-linecap="round"
                />
                <polyline
                  points="36,8 60,20 36,32"
                  fill="none"
                  stroke="white"
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
          </button>
        </>
      ) : (
        <div>
          <SubmitBody />
        </div>
      )}
    </div>
  );
}

export default Body;
