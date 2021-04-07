import React from "react";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";

import CardContent from "@material-ui/core/CardContent";

import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import "./Methodologies.css";
function Methodologies() {
  return (
      <>
       <Typography variant="h2" className="MethodoHeading">
            That's How I Do
          </Typography>
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      className="MethodologiesImage"
     
    >
      <Card className="parent">
        <CardActionArea>
          <img
            className="Think"
            src={require("../Images/THINK.png")}
            alt="the gif"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              DESIGN
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card className="parent">
        <CardActionArea>
          <img
            className="ANALYSING"
            src={require("../Images/ANALYSING.png")}
            alt="the gif"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              CODE
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card className="parent">
        <CardActionArea>
          <img
            className="REVALUATION"
            src={require("../Images/REVALUATION.png")}
            alt="the gif"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              DEBUGGING
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card className="parent">
        <CardActionArea>
          <img
            className="IMPLYY"
            src={require("../Images/IMPLYY.png")}
            alt="the gif"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              ILLUSTRATING
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
    </>
  );
}
export default Methodologies;
