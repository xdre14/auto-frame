function openEmojiPanel() {
    let panel = document.getElementById("emoji-panel");
    if (panel.style.display === "none") {
      panel.style.display = "block";
    } else {
      panel.style.display = "none";
    }
  }
  
  function insertImage(src, width, height) {
    let editor = document.getElementById("editor");
    let cursorPosition = window.getSelection().getRangeAt(0).endOffset;
    let textBeforeCursorPosition = editor.innerHTML.substring(0, cursorPosition);
    let textAfterCursorPosition = editor.innerHTML.substring(cursorPosition, editor.innerHTML.length);
    let imgHtml = '<img src="' + src + '" style="width:' + width + 'px;height:' + height + 'px;background-size: ' + width + 'px;">';
    editor.innerHTML = textBeforeCursorPosition + imgHtml + textAfterCursorPosition;
  }
  
  function openEmojiPanel() {
    let panel = document.getElementById("emoji-panel");
    if (panel.style.display === "none") {
      panel.style.display = "block";
    } else {
      panel.style.display = "none";
    }
  }
  
  function insertImage(src, width, height) {
    let editor = document.getElementById("editor");
    let cursorPosition = window.getSelection().getRangeAt(0).endOffset;
    let textBeforeCursorPosition = editor.innerHTML.substring(0, cursorPosition);
    let textAfterCursorPosition = editor.innerHTML.substring(cursorPosition, editor.innerHTML.length);
    let imgHtml = '<img src="' + src + '" style="width:' + width + 'px;height:' + height + 'px;background-size: ' + width + 'px;">';
    editor.innerHTML = textBeforeCursorPosition + imgHtml + textAfterCursorPosition;
  }
  