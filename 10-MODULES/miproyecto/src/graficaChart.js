import Chart from "chart.js/auto";

export function grafica(canvasId = "datos") {
  const data = [
    { year: 2010, count: 10 },
    { year: 2011, count: 20 },
    { year: 2012, count: 15 },
    { year: 2013, count: 25 },
    { year: 2014, count: 22 },
    { year: 2015, count: 30 },
    { year: 2016, count: 2 },
  ];

  new Chart(document.getElementById(canvasId), {
    type: "bar",
    data: {
      labels: data.map((row) => row.year),
      datasets: [
        {
          label: "Ventas Anuales ferreteria el cable",
          data: data.map((row) => row.count),
        },
      ],
    },
  });
}
