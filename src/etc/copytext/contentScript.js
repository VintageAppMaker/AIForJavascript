// 선택된 텍스트 가져오기
function getSelectedText() {
    let selectedText = '';
    if (window.getSelection) {
      selectedText = window.getSelection().toString();
    } else if (document.selection && document.selection.type != 'Control') {
      selectedText = document.selection.createRange().text;
    }
    return selectedText;
  }
  
  // 메시지 보내기
  function sendSelectedTextToPopup() {
    const selectedText = getSelectedText();
    //chrome.runtime.sendMessage({ text: selectedText });
  }
  
