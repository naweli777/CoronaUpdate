import React from "react";
import "../About/Introduction.css";
import { Card, Paper, Typography} from "@material-ui/core";
import Methodologies from "./Methodologies";
const Introduction = () => {
  return (
    <>
      <Card className="InfoCard" elevation={0}>
        <Paper className="PaperContainer" elevation={0}>
          <Typography variant="h2" className="Heading">
            Hola Amigos!
          </Typography>
          <div className="MyIntro">
          <Typography className="IntroContent">
            Hey! This is <b>Naweli Verma.</b>
            I am a Computer Sciencee student. I love to create and build.
            I am a developer and a UI-UX designer. I love to code and design.
            When I am not coding you can find me cooking, talking, reading
            and writing. I love to do photography and for good photos, I need
            roam and roam. I actually like to travel.
          </Typography>
          </div>

          <Methodologies/>




        </Paper>
      </Card>
    </>
  );
};
export default Introduction;
