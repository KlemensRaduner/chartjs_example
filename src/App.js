import React from "react";
import LineChart from "./LineChart";
import data from "./data.json";
import "./style.css";

const colors = ["#3F51B5", "#FF5252", "#388E3C"];
let x = 0;
function getColor() {
  return colors[x++ % colors.length];
}

const labels = new Set();
const datasets = [];

data.data.forEach(element => {
  labels.add(element.gen_date);
  const set = datasets.find(x => x.label === element.shop);
  if (set) {
    set.data.push(element["count(*)"]);
  } else {
    datasets.push({
      label: element.shop,
      data: [element["count(*)"]],
      fill: false,
      borderColor: getColor(),
      lineTension: 0.2
    });
  }
});

function App() {
  return (
    <div className={"wrapper"}>
      <LineChart
        data={{
          labels: Array.from(labels),
          datasets: datasets
        }}
        type={"line"}
        options={{
          scales: {
            yAxes: [{ ticks: { fontSize: 20 } }],
            xAxes: [{ ticks: { fontSize: 20 } }]
          },
          legend: {
            labels: {
              fontColor: "black",
              fontSize: 20
            }
          }
        }}
      />
    </div>
  );
}

export default App;
