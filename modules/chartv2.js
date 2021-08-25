const decimation = {
  enabled: false,
  algorithm: 'lttb',
};

export function create_chart(chartId, type) {
  let ctx = document.getElementById(chartId).getContext('2d');

  let myChart = new Chart(ctx, {
    type: type,
    data: {
      datasets: [{
          data: [],
          parsing: false,
          fill: false,
          pointRadius: 1,
          label: "FL",
          borderColor: 'rgb(128, 0, 255)',
        },
        {
          data: [],
          parsing: false,
          fill: false,
          pointRadius: 1,
          label: "FR",
          borderColor: 'rgb(0, 0, 255)',
        }, {
          data: [],
          parsing: false,
          fill: false,
          pointRadius: 1,
          label: "RL",
          borderColor: 'rgb(128, 255, 0)',
        }, {
          data: [],
          parsing: false,
          fill: false,
          pointRadius: 1,
          label: "RR",
          borderColor: 'rgb(0, 255, 0)',
        }
      ]
    },
    options: {
      animation: false,
      parsing: false,
      plugins: {
        decimation: decimation,
      },
      scales: {
        x: {
          type: 'linear',
          position: 'bottom',
          min: -2,
          max: 2
        },
        y: {
          type: 'linear',
          position: 'left'
        }
      }
    }
  });

  return myChart;
}
