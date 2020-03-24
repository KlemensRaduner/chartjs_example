import React from "react";
import LineChart from "./LineChart";
import data from "./data.json";
import "./style.css";

function App() {
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
        data: [element["count(*)"]]
      });
    }
  });

  return (
    <div className={"wrapper"}>
      <LineChart
        data={{
          labels: Array.from(labels),
          datasets: datasets
        }}
        type={"line"}
      />
    </div>
  );
}

export default App;
