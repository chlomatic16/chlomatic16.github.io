const magnetWords = [
  "ocean",
  "moon",
  "heart",
  "shadow",
  "coffee",
  "dream",
  "skin",
  "wind",
  "storm",
  "light",
  "silence",
  "salt",
  "fire",
  "bone",
  "star",
  "velvet",
  "rain",
  "ghost",
  "garden",
  "glass",
  "is",
  "am",
  "are",
  "dance",
  "break",
  "whisper",
  "burn",
  "wander",
  "forget",
  "bloom",
  "sink",
  "glow",
  "touch",
  "feel",
  "sing",
  "drift",
  "kiss",
  "breathe",
  "ache",
  "hide",
  "bitter",
  "bright",
  "cold",
  "dark",
  "wild",
  "soft",
  "golden",
  "lost",
  "heavy",
  "sweet",
  "electric",
  "hollow",
  "blue",
  "sharp",
  "quiet",
  "infinite",
  "the",
  "a",
  "an",
  "my",
  "your",
  "and",
  "but",
  "or",
  "with",
  "of",
  "in",
  "on",
  "to",
  "-s",
  "-ed",
  "-ing",
  "-ly",
  "!",
  "?",
  ",",
];

const fridge = document.getElementById("fridge");
const scatterBtn = document.getElementById("scatterBtn");

// Save positions to LocalStorage
function savePositions() {
  const positions = [];
  document.querySelectorAll(".magnet").forEach((el) => {
    positions.push({
      text: el.textContent,
      top: el.style.top,
      left: el.style.left,
      transform: el.style.transform,
    });
  });
  localStorage.setItem("fridgeMagnets", JSON.stringify(positions));
}

// Create a single magnet element
function createMagnet(text, pos = null) {
  const newDiv = document.createElement("div");
  newDiv.textContent = text;
  newDiv.classList.add("magnet");

  // Position: Use saved data or random
  if (pos) {
    newDiv.style.top = pos.top;
    newDiv.style.left = pos.left;
    newDiv.style.transform = pos.transform;
  } else {
    newDiv.style.top = Math.random() * 80 + 5 + "vh";
    newDiv.style.left = Math.random() * 80 + 5 + "vw";
    newDiv.style.transform = `rotate(${Math.random() * 12 - 6}deg)`;
  }

  // Dragging Logic
  const startDrag = (e) => {
    const event = e.type === "touchstart" ? e.touches[0] : e;
    let shiftX = event.clientX - newDiv.getBoundingClientRect().left;
    let shiftY = event.clientY - newDiv.getBoundingClientRect().top;
    newDiv.style.zIndex = 1000;

    const onMove = (moveEvent) => {
      const ev =
        moveEvent.type === "touchmove" ? moveEvent.touches[0] : moveEvent;
      newDiv.style.left = ev.pageX - shiftX + "px";
      newDiv.style.top = ev.pageY - shiftY + "px";
    };

    document.addEventListener("mousemove", onMove);
    document.addEventListener("touchmove", onMove, { passive: false });

    const stopDrag = () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("touchmove", onMove);
      newDiv.style.zIndex = "";
      savePositions();
    };

    document.onmouseup = stopDrag;
    document.ontouchend = stopDrag;
  };

  newDiv.addEventListener("mousedown", startDrag);
  newDiv.addEventListener("touchstart", startDrag, { passive: false });
  newDiv.ondragstart = () => false;

  fridge.appendChild(newDiv);
}

// Initialize Fridge
function init() {
  const saved = JSON.parse(localStorage.getItem("fridgeMagnets"));
  fridge.innerHTML = ""; // Clear existing
  if (saved && saved.length > 0) {
    saved.forEach((item) => createMagnet(item.text, item));
  } else {
    magnetWords.forEach((word) => createMagnet(word));
  }
}

// // Scatter Button logic
// scatterBtn.addEventListener("click", () => {
//   localStorage.removeItem("fridgeMagnets");
//   init();
// });

init();
