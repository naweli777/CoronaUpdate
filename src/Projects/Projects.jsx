import React from "react";
import { Grid, Typography, Paper } from "@material-ui/core";
import "../Projects/Projects.css";

const Projects = () => {
  return (
    <>
      <Paper className="PaperDiv" elevation={0}>
        <Typography variant="h2" className="ProjectHeading">
          <u>Projects</u>
        </Typography>
        <div className="Bekar">
          <Grid
            container
            className="ProjectGrid"
            direction="coloumn"
            justify="center"
            alignItems="center"
          >
            <img
              className="ProjectImage"
              src={require("../Images/DUMM1.jpg")}
              alt="the gif"
            />

            <img
              className="ProjectImage"
              src={require("../Images/DUMM1.jpg")}
              alt="the gif"
            />

            <img
              className="ProjectImage"
              src={require("../Images/DUMM1.jpg")}
              alt="the gif"
            />
          </Grid>

          <Grid
            container
            className="ProjectGrid"
            direction="coloumn"
            justify="center"
            alignItems="center"
          >
            <img
              className="ProjectImage"
              src={require("../Images/DUMM1.jpg")}
              alt="the gif"
            />

            <img
              className="ProjectImage"
              src={require("../Images/DUMM1.jpg")}
              alt="the gif"
            />

            <img
              className="ProjectImage"
              src={require("../Images/DUMM1.jpg")}
              alt="the gif"
            />
          </Grid>
          <Grid
            container
            className="ProjectGrid"
            direction="coloumn"
            justify="center"
            alignItems="center"
          >
            <img
              className="ProjectImage"
              src={require("../Images/DUMM1.jpg")}
              alt="the gif"
            />

            <img
              className="ProjectImage"
              src={require("../Images/DUMM1.jpg")}
              alt="the gif"
            />

            <img
              className="ProjectImage"
              src={require("../Images/DUMM1.jpg")}
              alt="the gif"
            />
          </Grid>
        </div>
        <Typography variant="h2" className="ProjectHeading">
          <u>Know My Ideas More</u>
        </Typography>

        
        <div className="Ideas">
          <a href="https://www.quora.com/profile/Naweli-Verma-1">
            <img
              className="MySitesImage"
              src={require("../Images/QUORA.png")}
              alt="the gif"
            />
          </a>

          <a href="https://www.instagram.com/_digital_witch/?hl=en">
            <img
              className="MySitesImage"
              src={require("../Images/INSTA.png")}
              alt="the gif"
            />
          </a>
          <a href="https://dribbble.com/naweli_verma7">
            <img
              className="MySitesImage"
              src={require("../Images/pngegg.png")}
              alt="the gif"
            />
          </a>
          </div>
        
      </Paper>
    </>
  );
};
export default Projects;
