document.addEventListener("DOMContentLoaded", function () {
  var captureButton = document.getElementById("captureButton");

  captureButton.addEventListener("click", function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      var url = tabs[0].url;
      var qrCodeUrl = "https://api.qrserver.com/v1/create-qr-code/?data=" + encodeURIComponent(url);

      var xhr = new XMLHttpRequest();
      xhr.open("GET", qrCodeUrl, true);
      xhr.responseType = "blob";

      xhr.onload = function (event) {
        var blob = xhr.response;
        var url = window.URL.createObjectURL(blob);

        var a = document.createElement("a");
        a.href = url;
        a.download = "capture.png";
        a.click();
      };

      xhr.send();
    });
  });
});