import React from "react";
import "./AboutMe.css";
import { Typography,Grid } from "@mui/material";

function AboutMe() {
  return (
    <Grid>
    <div className="Aboutme">
      <img
        className="img"
        src="https://www.creativefabrica.com/wp-content/uploads/2023/02/27/Aesthetic-Greek-God-Statue-62615187-1-1.png"
        alt="Greek God Statue"
      />
      <div>
        <h1 className="Title">About Me</h1>
        <p>
          Me? Claudio, God of Programming? Laughable. But then Athena, bless her wisdom, shows up with this contraption. A loom, it looked like, but for weaving... logic? Threads of metal whispered with cryptic symbols. Weave 'em right, and bam - an automaton springs to life!
        </p>
        <p>
          Intriguing. A new battlefield, not of flesh and steel, but of code and logic. So I picked up that loom, sparks flying as I fumbled with the threads. Frustrating? You bet. But I'm Claudio. I don't back down.
        </p>
        <p>
          Now, Olympus trembles not just at my blade, but at my code. Who knew a God of War could become also the God of Programming? Seems even a rage-filled warrior can learn new tricks.
        </p>
      </div>
    </div></Grid>
  );
}

export default AboutMe;
