const fakeFetch = require("./test");
const CallAd = require("./callAdvertisement");

var seedResolve = 1;
var processResp = true;

function callAdvertisement(index) {
  return new Promise((resolve, reject) =>
    fakeFetch(index, (err, data) => {
      if (err) return reject(err);
      resolve(data);
    })
  );
}

function isResolvedAd(buffer, index) {
  return typeof buffer[index] !== "undefined";
}

function printAd(buffer, i) {
  console.log(buffer[i]);
}

function printError(i) {
  console.log(`Failed to load the ad ${i}`);
}

function manageResp(buffer, indexCall) {
  if (seedResolve === indexCall) {
    if (buffer[indexCall] === null) {
      printError(indexCall);
      processResp = false;
      return null;
    }

    if (isResolvedAd(buffer, indexCall)) {
      printAd(buffer, indexCall);
      seedResolve++;

      if (buffer.length > seedResolve) {
        manageResp(buffer, indexCall + 1);
      }
    }
  }
}

function processCall(currentCall, buffer, totalCalls) {
  currentCall.promise
    .then((resp) => {
      // console.log("resp ", currentCall.ad, ": ", resp);
      buffer[currentCall.ad] = resp;
      if (processResp) {
        manageResp(buffer, currentCall.ad);
        if (seedResolve - 1 === totalCalls) {
          console.log("!Done");
        }
      }
    })
    .catch((error) => {
      // console.log("resp ", currentCall.ad, ": ", null);
      if (currentCall.retry < 3) {
        let newCall = new CallAd(
          currentCall.ad,
          callAdvertisement(currentCall.ad),
          currentCall.retry + 1
        );
        processCall(newCall, buffer, totalCalls);
      } else if (currentCall.retry === 3) {
        buffer[currentCall.ad] = null;
        if (processResp) {
          manageResp(buffer, currentCall.ad);
        }
      }
    });
}

function callAdvertisements(totalCalls) {
  const bufferResult = [];

  for (let i = 1; i <= totalCalls; i++) {
    processCall(new CallAd(i, callAdvertisement(i)), bufferResult, totalCalls);
  }
}

callAdvertisements(5);
