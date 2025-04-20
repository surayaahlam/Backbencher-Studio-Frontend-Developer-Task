const performance = ["Boost performance", "Stop snoring", "Optimized Airflow", "100% Drug Free"];
const information = ["Sizing information", "Free resizing", "Money back guarantee & free returns"];
const pain = ["Persistent snoring", "Nasal congestion", "Allergies affecting breathing", "Struggling to breathe during workouts"];
const solution = ["Enhance airflow", "Reduce snoring", "Clear nasal passages", "Made from soft", "Comfortable Materials"];

const performanceContainer = document.getElementById("noseclip-performance");
const informationContainer = document.getElementById("noseclip-information");
const painContainer = document.getElementById("pain-points");
const solutionContainer = document.getElementById("solution-points");

performance.forEach(item => {
  const div = document.createElement("div");
  div.style.display = "flex";
  div.style.alignItems = "center";
  div.style.gap = "9px";

  const icon = document.createElement("span");
  icon.innerHTML = `<img src="images/Frame-1.png" alt="">`;

  const text = document.createElement("span");
  text.textContent = item;

  div.appendChild(icon);
  div.appendChild(text);
  performanceContainer.appendChild(div);
});


information.forEach(item => {
  const itemDiv = document.createElement("div");
  itemDiv.style.display = "flex";
  itemDiv.style.justifyContent = "space-between";
  itemDiv.style.alignItems = "center";
  itemDiv.style.padding = "12px";
  itemDiv.style.borderBottom = "1px solid rgb(255, 208, 176)";
  itemDiv.style.color = "#4A4C56";
  itemDiv.style.fontSize = "1rem";
  itemDiv.style.fontWeight = "600";

  const text = document.createElement("span");
  text.textContent = item;

  const arrow = document.createElement("span");
  arrow.innerHTML = `<img src="images/down.png" alt="">`;

  itemDiv.appendChild(text);
  itemDiv.appendChild(arrow);
  informationContainer.appendChild(itemDiv);
});


pain.forEach(item => {
  const bullet = document.createElement("div");
  bullet.style.display = "flex";
  bullet.style.alignItems = "center"
  bullet.style.gap = "6px";
  bullet.style.marginBottom = "16px";
  bullet.style.fontSize = "1rem";
  bullet.style.fontWeight = "600";

  const dot = document.createElement("span");
  dot.textContent = "•";
  dot.style.color = "rgb(255, 102, 0)";
  dot.style.fontSize = "25px";

  const text = document.createElement("span");
  text.textContent = item;

  bullet.appendChild(dot);
  bullet.appendChild(text);
  painContainer.appendChild(bullet);
});

solution.forEach(item => {
  const points = document.createElement("div");
  points.style.display = "flex";
  points.style.alignItems = "center"
  points.style.gap = "8.45px";
  points.style.marginBottom = "16px";
  points.style.fontSize = "1rem";
  points.style.fontWeight = "600";

  const icon1 = document.createElement("span");
  icon1.innerHTML = `<img src="images/Frame-1.png" alt="">`;

  const text = document.createElement("span");
  text.textContent = item;

  points.appendChild(icon1);
  points.appendChild(text);
  solutionContainer.appendChild(points);
});