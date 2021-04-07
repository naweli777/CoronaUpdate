import React from "react";
import "../SetsCircle/Sets.css";
import { Grid, Typography } from "@material-ui/core";

const Sets = () => {
  return (
    <>
      <Grid container className="ParentGrid">
        <Grid item xs={6} className="ImageGrid">
        <img
            className="Frontend"
            src={require("../Images/FRONTEND.png")}
            alt="the gif"
          />
         
        </Grid>
        <Grid item xs={6} className="TextGrid">
          

<Typography className="Home">
            I live here.<br/>
            Into the <br/>
            
            combination.
          </Typography>
          <Typography className="WhyIdo">
            Hey! This is <b>Naweli Verma.</b>
            <br />
            I am a Computer Sciencee student. I love to create and build.
            <br />
            I am a developer and a UI-UX designer. I love to code and design.
            <br />
            When I am not coding you can find me cooking, talking, reading
            <br />
            and writing. I love to photography and I am a attention seeker.
          </Typography>
        </Grid>
      </Grid>
      
    </>
  );
};
export default Sets;
