import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const Chart = ({ expense, income }) => {
  const data = {
    datasets: [
      {
        label: "# of Votes",
        data: [expense, income],
        backgroundColor: [
          "#e9cac3",
          "#bbefa9"
        ],
        borderColor: [
            "#e9cac3",
            "#bbefa9"
        ],
        borderWidth: 0.5,
      },
    ],
  };

  return(
  <div className="chart">
    <Doughnut data={data} />
  </div>
  );
};

export default Chart;
