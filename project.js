
// Отримуємо посилання на всі необхідні елементи
const editor = document.getElementById("editor");
const textColor = document.getElementById("text-color");
const backgroundColor = document.getElementById("background-color");
const emojiButton = document.getElementById("emoji-button");
const fontSelect = document.getElementById("font-select");
const saveButton = document.getElementById("save-button");

// Ініціалізуємо бібліотеку EmojioneArea для вставки емоджі
$(emojiButton).emojioneArea({
  pickerPosition: "bottom",
  tonesStyle: "bullet"
});

// Обробник зміни кольору тексту
textColor.addEventListener("input", () => {
  editor.style.color = textColor.value;
});

// Обробник зміни кольору фону тексту
backgroundColor.addEventListener("input", () => {
  editor.style.backgroundColor = backgroundColor.value;
});

// Обробник зміни шрифту
fontSelect.addEventListener("change", () => {
  editor.style.fontFamily = fontSelect.value;
});


editor.addEventListener("focus", function() {
  editor.classList.add("focused");
});

// Отримуємо значення полів з форми
const textColorInput = document.getElementById("text-color");
const backgroundColorInput = document.getElementById("background-color");


// Отримуємо кнопку збереження зображення
const saveBtn = document.getElementById("save-btn");

// Додаємо обробник події для кнопки збереження зображення
saveBtn.addEventListener("click", function() {
  // Отримуємо текст та стилі зображення з елемента з ID "editor"
  const editor = document.getElementById("editor");
  const editorStyles = getComputedStyle(editor);

  // Створюємо canvas елемент, на якому буде зображення
  const canvas = document.createElement("canvas");
  canvas.width = editor.offsetWidth;
  canvas.height = editor.offsetHeight;

  // Отримуємо контекст canvas
  const context = canvas.getContext("2d");

  // Заповнюємо canvas фоновим кольором
  context.fillStyle = backgroundColorInput.value;
  context.fillRect(0, 0, canvas.width, canvas.height);

  // Змінюємо стилі тексту на отримані від користувача значення
  context.font = editorStyles.font;
  context.fillStyle = textColorInput.value;

  // Записуємо текст на canvas
  context.fillText(editor.innerHTML, 0, 50);

  // Зберігаємо canvas як зображення
  const image = canvas.toDataURL("image/png");
  const link = document.createElement("a");
  link.download = "image.png";
  link.href = image;
  link.click();
});
