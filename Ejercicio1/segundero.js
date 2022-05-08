async function sleep(ms) {
  return new Promise((f) => setTimeout(f, ms));
}

async function printTimeCounter(max, ms) {
  const time = ms ? ms : 1000;
  var now = new Date();

  for (var i = 0; i < max; i++) {
    console.log(i);
    await sleep(time);
  }
  return Math.round((new Date() - now) / 1000);
}

printTimeCounter(5);

module.exports = printTimeCounter;
