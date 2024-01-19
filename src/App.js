import React from "react";

import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";
import "@leenguyen/react-flip-clock-countdown";
import "@leenguyen/react-flip-clock-countdown/dist/index.css";
import VideoBb from "../src/assets/video.mp4";
import "./styles.css";
const App = () => {
  const targetDate = new Date("February 9, 2024 00:00:00").getTime();

  return (
    <section className="page">
      {}
      <div className="overlay"></div>
      {}
      <video src={VideoBb} autoPlay loop muted></video>
      <div className="page__content">
        <h1>Code for 30 days challenge</h1>
        <h3>
          A website a day is my daily goal! <br />
          Will I achieve it?
        </h3>
        <FlipClockCountdown
          to={targetDate}
          className="flip-clock"
          labels={["DAYS", "HOURS", "MINUTES", "SECONDS"]}
          duration={0.5}
        >
          ✨Congratulations on reaching 30 days of the challenge!🎉
        </FlipClockCountdown>
      </div>
    </section>
  );
};

export default App;
