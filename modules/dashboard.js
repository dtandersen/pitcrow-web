Vue.filter('toCurrency', function (value) {
    if (typeof value !== "number") {
        return value;
    }
    return value.toFixed(2);
});

export const app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue.js!',
    lapNumber: 0,
    telemetry: {}
  }
})

export function lap(lapNumber) {
  app.lapNumber = lapNumber;
}

export function telemetry(telemetry) {
  app.telemetry = telemetry;
}
