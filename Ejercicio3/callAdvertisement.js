class callAd {
  constructor(ad, promise, retry) {
    this.ad = ad;
    this.promise = promise;
    this.retry = retry ? retry : 0;
  }
}

module.exports = callAd;
