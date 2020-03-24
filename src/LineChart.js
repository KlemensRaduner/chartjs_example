import React, { useRef, useEffect } from "react";
import Chart from "chart.js";

function LineChart({ data, type, options }) {
  const canvas = useRef(null);
  useEffect(() => {
    new Chart(canvas.current, {
      type: type,
      data: data,
      options: options
    });
  }, [canvas, data, type, options]);
  return <canvas ref={canvas} id="myChart" />;
}

export default LineChart;
