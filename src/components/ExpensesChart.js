// Example component for data visualization
import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

function ExpensesChart({ data }) {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");
    new Chart(ctx, {
      type: "bar",
      data: {
        labels: data.map((item) => item.category),
        datasets: [
          {
            label: "Expenses",
            data: data.map((item) => item.amount),
            backgroundColor: "rgba(75, 192, 192, 0.6)",
          },
        ],
      },
    });
  }, [data]);

  return <canvas ref={chartRef}></canvas>;
}

export default ExpensesChart;
