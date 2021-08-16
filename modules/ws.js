import {
  myChart
} from './mychart.js';


var lastUpdate = Date.now();
var lastLap = -1;

export function init_ws(endpoint, fps) {
  var ws = new WebSocket(endpoint);

  ws.onmessage = function(event) {
    var telemetry = JSON.parse(event.data);
    var x1 = telemetry.DistanceTraveled;
    var y1 = telemetry.CurrentEngineRpm;
    var d = myChart.data.datasets[0].data;

    if (telemetry.LapNumber != lastLap) {
      lastLap = telemetry.LapNumber;
      myChart.data.datasets[0].data = [];
    }

    if (d.length > 3600) {
      d.shift();
    }
    // console.log(x1 + ", " + y1);
    myChart.data.datasets[0].data.push({
      x: x1,
      y: y1
    });

    var n = Date.now();
    //console.log(n);
    if (n > lastUpdate + 1000/fps) {
      // console.log("updated");
      myChart.update();
      lastUpdate = n;
    }
  };
}
