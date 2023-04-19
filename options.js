
const saveBtn = document.getElementById("save-btn");

saveBtn.addEventListener("click", () => {
  // Отримуємо введений користувачем текст та налаштування кольорів
  const text = editor.innerText;
  const textColor = getComputedStyle(editor).color;
  const backgroundColor = getComputedStyle(editor).backgroundColor;
  
  // Створюємо новий елемент canvas та встановлюємо його розмір
  const canvas = document.createElement("canvas");
  canvas.width = editor.clientWidth;
  canvas.height = editor.clientHeight;
  
  // Отримуємо контекст для малювання на canvas
  const ctx = canvas.getContext("2d");
  
  // Встановлюємо кольор фону та заливаємо canvas цим кольором
  ctx.fillStyle = backgroundColor;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  
  // Встановлюємо кольор тексту та вставляємо текст на canvas
  ctx.fillStyle = textColor;
  ctx.font = getComputedStyle(editor).font;
  ctx.fillText(text, 0, 0);
  
  // Створюємо посилання на зображення та скачуємо його
  const link = document.createElement("a");
  link.download = "image.png";
  link.href = canvas.toDataURL("image/png");
  link.click();
});



// Отримуємо посилання на всі необхідні елементи
const editor = document.getElementById("editor");
const textColor = document.getElementById("text-color");
const backgroundColor = document.getElementById("background-color");
const emojiButton = document.getElementById("emoji-button");
const fontSelect = document.getElementById("font-select");
const saveButton = document.getElementById("save-button");


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





