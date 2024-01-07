const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const clearCanvasButton = document.getElementById("clear-canvas");
let isDrawing = false;
let x = 0;
let y = 0;

clearCanvasButton.addEventListener("click", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  chrome.runtime.sendMessage({message: "clear_canvas"});
});

canvas.addEventListener("mousedown", e => {
  x = e.clientX;
  y = e.clientY;
  isDrawing = true;
});

canvas.addEventListener("mouseup", () => {
  isDrawing = false;
});

canvas.addEventListener("mousemove", e => {
  if (isDrawing === true) {
    draw(x, y, e.clientX, e.clientY);
    x = e.clientX;
    y = e.clientY;
  }
});

function draw(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
}
