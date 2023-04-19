(function () {
const editor = document.querySelector('#editor');
const textColor = document.querySelector('#text-color');
const backgroundColor = document.querySelector('#background-color');
const fontSelect = document.querySelector('#font-select');
const fontSize = document.querySelector('#font-size');
const letterSpacing = document.querySelector('#letter-spacing');

textColor.addEventListener('input', () => {
  editor.style.color = textColor.value;
});

backgroundColor.addEventListener('input', () => {
  editor.style.backgroundColor = backgroundColor.value;
});

fontSelect.addEventListener('change', () => {
  editor.style.fontFamily = fontSelect.value;
});

fontSize.addEventListener('input', () => {
  editor.style.fontSize = fontSize.value + 'px';
});

letterSpacing.addEventListener('input', () => {
  editor.style.letterSpacing = letterSpacing.value + 'px';
});


})();
