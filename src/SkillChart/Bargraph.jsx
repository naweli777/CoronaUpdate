import React, { Component } from "react";
import { Bar} from "react-chartjs-2";
import "../SkillChart/Bargraph.css";

class Bargraph extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {
        labels: [
          "Loving",
          "C++",
          "HTML",
          "React.js",
          "Cooking",
          "Python",
          "CSS",
          "Photography",
          "Awesome",
          "UI-UX",
          "Graphic Design",
        ],
        datasets: [
          {
            label: "SKILLS",
            data: [100, 60, 90, 50, 95, 40, 70, 90, 88, 100, 70, 80],

            backgroundColor: ["rgba(255,99,132,0.6)","rgba(54, 162, 235, 0.6)",
            "rgba(255, 206, 86, 0.6)",
            "rgba(75, 192, 192, 0.6)",
            "rgba(153, 102, 235, 0.6)",
            "rgba(255, 159, 132, 0.6)",
            "rgba(255, 99, 132, 0.6)","rgba(54, 162, 235, 0.6)",
            "rgba(255, 206, 86, 0.6)",
            "rgba(75, 192, 192, 0.6)",
            "rgba(153, 102, 235, 0.6)",
            ],
            
          },
        ],
      },
    };
  }
  render() {
    return (
      <div className="Bargraph">
        <Bar
          data={this.state.chartData}
          options={{
        
          }}
        />
      </div>
    );
  }
}
export default Bargraph;
