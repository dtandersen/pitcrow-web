const decimation = {
  enabled: true,
  algorithm: 'lttb',
};

var ctx = document.getElementById('myChart').getContext('2d');

export const myChart = new Chart(ctx, {
  type: 'line',
  data: {
    datasets: [{
      data: [],
      parsing: false,
      fill: false,
      pointRadius: 1,
    }]
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
        position: 'bottom'
      },
      y: {
        type: 'linear',
        position: 'left'
      }
    }
  }
});
