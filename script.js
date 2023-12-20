var btc = document.getElementById("bitcoin");
var eth = document.getElementById("ethereum");
var doge = document.getElementById("dogecoin");

var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=usd",
    "method": "GET",
    "headers": {}
}

$.ajax(settings).done(function (response) {
    console.log(response); // Log the entire response for debugging

    // Assuming btc, eth, and doge are the IDs of HTML elements
    if (response.bitcoin && response.bitcoin.usd) {
        btc.innerHTML = response.bitcoin.usd;
    } else {
        console.error("Bitcoin data not found in the response.");
    }

    if (response.ethereum && response.ethereum.usd) {
        eth.innerHTML = response.ethereum.usd;
    } else {
        console.error("Ethereum data not found in the response.");
    }

    if (response.dogecoin && response.dogecoin.usd) {
        doge.innerHTML = response.dogecoin.usd;
    } else {
        console.error("Dogecoin data not found in the response.");
    }
});
