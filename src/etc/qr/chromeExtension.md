```
chrome 익스텐션을 만든다. 
1. chrome의 확장프로그램에서 "나만의 캡쳐"라는 프로그램을 등록시킨다. 
2. "나만의 캡쳐"를 실행하면 현재 브라우저의 주소를 QR로 만든다. 
3. QR로 만든 파일을 capture.png로 내려받는다. 
javascript로 만들어줘
```

### ChatGPT(🤖)

아래는 JavaScript로 작성된 Chrome 익스텐션 예제입니다. 이 예제는 "나만의 캡쳐"라는 프로그램을 만들고, 현재 브라우저의 주소를 QR 코드로 변환하여 capture.png 파일로 다운로드하는 기능을 제공합니다.

먼저, 프로젝트 폴더를 생성하고 그 안에 다음과 같은 파일들을 생성합니다:

manifest.json: 익스텐션의 메타데이터를 포함하는 파일입니다.
popup.html: 익스텐션 팝업 창의 HTML 파일입니다.
popup.js: 익스텐션 팝업 창에서 실행되는 JavaScript 파일입니다.
1. manifest.json

```json
{
  "manifest_version": 2,
  "name": "나만의 캡쳐",
  "version": "1.0",
  "permissions": ["tabs", "activeTab"],
  "browser_action": {
    "default_popup": "popup.html"
  }
}
```
2. popup.html

```html
<!DOCTYPE html>
<html>
  <head>
    <title>나만의 캡쳐</title>
    <script src="popup.js"></script>
  </head>
  <body>
    <button id="captureButton">캡쳐</button>
  </body>
</html>
```
3. popup.js

```javascript
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

````
위의 코드를 각각 manifest.json, popup.html, popup.js 파일에 복사하여 저장합니다.

이제 확장프로그램을 등록하려면 다음 단계를 따르세요:

Chrome 브라우저에서 chrome://extensions/을 입력하여 확장프로그램 관리 페이지를 엽니다.
확장프로그램 관리 페이지의 오른쪽 상단에 있는 "개발자 모드"를 활성화합니다.
"압축해제된 확장프로그램을 로드합니다" 버튼을 클릭하고, 프로젝트 폴더를 선택합니다.
이제 Chrome 브라우저의 확장프로그램 툴바에 "나만의 캡쳐"라는 이름의 버튼이 나타나고, 클릭하면 현재 페이지의 주소가 QR 코드로 변환되어 capture.png 파일로 다운로드됩니다.


#### [ChatGPT(🤖) Thread](https://chat.openai.com/share/9280ed2e-c75f-4a58-af72-de9ad4d107da)