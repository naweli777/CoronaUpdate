import React from "react";
import "../About/Introduction.css";
import { Card, Paper, Typography} from "@material-ui/core";
const Introduction = () => {
  return (
    <>
      <Card className="InfoCard" elevation={0}>
        <Paper className="PaperContainer" elevation={0}>
          <Typography variant="h2" className="Heading">
            Hola Amigos!
          </Typography>
          <Typography className="IntroContent">
            Hey! This is <b>Naweli Verma.</b>
            <br />
            I am a Computer Sciencee student. I love to create and build.
            <br />
            I am a developer and a UI-UX designer. I love to code and design.
            <br />
            When I am not coding you can find me cooking, talking, reading
            <br />
            and writing. I love to do photography and for good photos, I need <br/>
            roam and roam. I actually like to travel.
          </Typography>


          {/* <Grid
  container
  direction="row"
  justify="center"
  alignItems="center"
  className="MethodologiesImage"
> */} 
         <div>

          <img
            className="Think"
            src={require("../Images/THINK.png")}
            alt="the gif"
          />
          <img
            className="Analysing"
            src={require("../Images/ANALYSING.png")}
            alt="the gif"
          />
          <img
            className="Imply"
            src={require("../Images/IMPLYY.png")}
            alt="the gif"
          />
          <img
            className="Revaluation"
            src={require("../Images/REVALUATION.png")}
            alt="the gif"
          />
         
          </div>

          <div className="Meethodologies">
            <Typography variant="h4">DESIGN</Typography>
            <Typography variant="h4">CODE</Typography>
            <Typography variant="h4">ILLUSTRATING</Typography>
            <Typography variant="h4">DEBUGGING</Typography>
          </div>
        </Paper>
      </Card>
    </>
  );
};
export default Introduction;
