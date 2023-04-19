
const saveBtn = document.getElementById("save-btn");

saveBtn.addEventListener("click", () => {
  
  const text = editor.innerText;
  const textColor = getComputedStyle(editor).color;
  const backgroundColor = getComputedStyle(editor).backgroundColor;
  
 
  const canvas = document.createElement("canvas");
  canvas.width = editor.clientWidth;
  canvas.height = editor.clientHeight;
  
  const ctx = canvas.getContext("2d");
  
 
  ctx.fillStyle = backgroundColor;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  
 
  ctx.fillStyle = textColor;
  ctx.font = getComputedStyle(editor).font;
  ctx.fillText(text, 0, 0);
  
  // Створюємо посилання 
  const link = document.createElement("a");
  link.download = "image.png";
  link.href = canvas.toDataURL("image/png");
  link.click();
});




const editor = document.getElementById("editor");
const textColor = document.getElementById("text-color");
const backgroundColor = document.getElementById("background-color");
const emojiButton = document.getElementById("emoji-button");
const fontSelect = document.getElementById("font-select");
const saveButton = document.getElementById("save-button");


//  зміни кольору тексту
textColor.addEventListener("input", () => {
  editor.style.color = textColor.value;
});

//  зміни кольору фону тексту
backgroundColor.addEventListener("input", () => {
  editor.style.backgroundColor = backgroundColor.value;
});

//  зміни шрифту
fontSelect.addEventListener("change", () => {
  editor.style.fontFamily = fontSelect.value;
});





