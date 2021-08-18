export class ChartManager {
  constructor(chart, max_length, fps) {
    this.chart = chart;
    this.max_length = max_length;
    this.fps = fps;
    this.lastUpdate = Date.now();
  }

  add_value(index, x, y) {
    var d = this.chart.data.datasets[index].data;

    if (d.length > this.max_length) {
      d.shift();
    }

    this.chart.data.datasets[index].data.push({
      x: x,
      y: y
    });
  }

  update() {
    var n = Date.now();

    if (n > this.lastUpdate + 1000 / this.fps) {
      this.chart.update();
      this.lastUpdate = n;
    }
  }
}
