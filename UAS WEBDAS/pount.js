const factor = 309904412;

const BTC = document.getElementById("BTC");
const EUR = document.getElementById("GPR");

BTC.addEventListener("input", function (ev) {
  const value = ev.currentTarget.value;
  const valueIDR = value * factor;
  GPR.value = valueIDR;
});

GPR.addEventListener("input", function (ev) {
  const value = ev.currentTarget.value;
  const valueUSD = value / factor;
  BTC.value = valueUSD;
});