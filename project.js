

const editor = document.getElementById("editor");
const textColor = document.getElementById("text-color");
const backgroundColor = document.getElementById("background-color");
const emojiButton = document.getElementById("emoji-button");
const fontSelect = document.getElementById("font-select");
const saveButton = document.getElementById("save-button");



//  кольор тексту
textColor.addEventListener("input", () => {
  editor.style.color = textColor.value;
});

//  кольор фону тексту
backgroundColor.addEventListener("input", () => {
  editor.style.backgroundColor = backgroundColor.value;
});

// шрифту
fontSelect.addEventListener("change", () => {
  editor.style.fontFamily = fontSelect.value;
});

editor.addEventListener("focus", function() {
  editor.classList.add("focused");
});

// Отримуємо значення полів з форми
const textColorInput = document.getElementById("text-color");
const backgroundColorInput = document.getElementById("background-color");


// збереження зображення
const saveBtn = document.getElementById("save-btn");

// кнопки збереження зображення
saveBtn.addEventListener("click", function() {
  // текст та стилі зображення з елемента з ID "editor"
  const editor = document.getElementById("editor");
  const editorStyles = getComputedStyle(editor);

  //canvas елемент, на якому буде зображення
  const canvas = document.createElement("canvas");
  canvas.width = editor.offsetWidth;
  canvas.height = editor.offsetHeight;

  // контекст canvas
  const context = canvas.getContext("2d");

  // Заповнюємо canvas 
  context.fillStyle = backgroundColorInput.value;
  context.fillRect(0, 0, canvas.width, canvas.height);

  // Змінюємо стилі тексту 
  context.font = editorStyles.font;
  context.fillStyle = textColorInput.value;

  // Записуємо текст
  context.fillText(editor.innerHTML, 0, 50);

  // Зберігаємо canvas як зображення
  const image = canvas.toDataURL("image/png");
  const link = document.createElement("a");
  link.download = "image.png";
  link.href = image;
  link.click();
});
