export class TelemetryManager {
  constructor(chart) {
    this.chart = chart;
    this.lastUpdate = Date.now();
    this.lastLap = -1;
    this.lapCount = 0;
    this.firstLap = -1;
  }

  update(telemetry) {
    // console.log(telemetry);
    if (this.firstLap == -1) {
      this.firstLap = telemetry.LapNumber;
    }
    var myChart = this.chart;
    var x1 = telemetry.DistanceTraveled;
    var y1 = telemetry.CurrentEngineRpm;
    var d = myChart.data.datasets[this.lap_index(telemetry.LapNumber)].data;
    var fps = 1;


    if (telemetry.LapNumber != this.lastLap) {
      this.new_lap(telemetry);
    }

    if (d.length > 3600) {
      d.shift();
    }
    // console.log(x1 + ", " + y1);
    myChart.data.datasets[this.lap_index(telemetry.LapNumber)].data.push({
      x: x1,
      y: y1
    });

    var n = Date.now();
    //console.log(n);
    if (n > this.lastUpdate + 1000 / fps) {
      // console.log("updated");
      myChart.update();
      this.lastUpdate = n;
    }
  }

  lap_index(lapNumber) {
    return lapNumber - this.firstLap;
  }

  new_lap(telemetry) {
    console.log("New lap!" + telemetry.LapNumber);
    this.lastLap = telemetry.LapNumber;
    this.chart.data.datasets.push({
      data: [],
      parsing: false,
      fill: false,
      pointRadius: 1,
      label: "Lap " + telemetry.LapNumber
    });
    this.chart.data.datasets[this.lap_index(telemetry.LapNumber)].data = [];

    this.lapCount++;
  }
}
