import React from "react";
import { Link } from "react-router-dom";
import "./home.css";
import { Typography,Grid } from "@mui/material";
    function Home() {
        return (
          <Grid>
          <div className="home-container">
            <div className="profile-section">
              <img
                className="profile-img"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfU3XecMSuwoBPiMBpjUcmPYORdhVGeYbQ8w&s"
                alt="Profile"
              />
              <h1>Welcome to My Portfolio</h1>
              <center className="Home-text">
                Hello! I'm Claudio, a passionate developer with expertise in creating dynamic and responsive web applications. Explore my work and projects below.
              </center>
            </div>
            <div className="portfolio-section">
            <Typography variant = "h2">My Portfolio</Typography>
              <div className="project">
                <h3>Hacking something big</h3>
                <p>Hacked America in 1 day</p>
              </div>
              <div className="project">
                <h3>Making something BIG</h3>
                <p>I made Facebook for Mack Zuckerberg</p>
              </div>
              <div className="project">
                <h3>Robots</h3>
                <p>Made an army of robots and conquered 15 planets(at the moment    )</p>
              </div>
            </div>
          </div></Grid>
        );
      }
      
      export default Home;