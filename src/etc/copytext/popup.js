document.addEventListener("DOMContentLoaded", function() {
  
  // 버튼 클릭 이벤트 핸들러 등록
  // document.getElementById("highlightButton").addEventListener("click", async function() {
    
  // });

  getHighlightedText();
});

function replaceEnterToLi(str){
  if (str == undefined || str == null){
    return "";
  }

  str = str.replace(/\r\n/ig, '<p>');
  str = str.replace(/\\n/ig, '<p>');
  str = str.replace(/\n/ig, '<p>');
  return str;
}

//
async function getHighlightedText() {
  try {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    const result = await chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: getSelectedText
    });
    document.getElementById("highlightedText").innerHTML = replaceEnterToLi(result[0].result);
    // chrome.tts.speak(result[0].result);
  } catch (error) {
    console.error(error);
  }
}
// 현재 탭에서 선택된 텍스트를 반환하는 함수
function getSelectedText() {
  return window.getSelection().toString();
}
