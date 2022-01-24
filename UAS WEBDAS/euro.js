const factor = 309904412;

const BTC = document.getElementById("BTC");
const EUR = document.getElementById("EUR");

BTC.addEventListener("input", function (ev) {
  const value = ev.currentTarget.value;
  const valueIDR = value * factor;
  EUR.value = valueIDR;
});

EUR.addEventListener("input", function (ev) {
  const value = ev.currentTarget.value;
  const valueUSD = value / factor;
  BTC.value = valueUSD;
});