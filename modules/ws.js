export function init_ws(endpoint, watchers) {
  let ws = new WebSocket(endpoint);

  ws.onmessage = function(event) {
    try {
      var telemetry = JSON.parse(event.data);
      console.log(telemetry);
      for (const watcher of watchers) {
        watcher(telemetry);
      }
    } catch (err) {
      console.log(telemetry);
      console.log(err);
      ws.close();
    }
  };
}
