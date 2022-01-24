const factor = 353908800;

const BTC = document.getElementById("BTC");
const USD = document.getElementById("USD");

BTC.addEventListener("input", function (ev) {
  const value = ev.currentTarget.value;
  const valueIDR = value * factor;
  USD.value = valueIDR;
});

USD.addEventListener("input", function (ev) {
  const value = ev.currentTarget.value;
  const valueUSD = value / factor;
  BTC.value = valueUSD;
});
