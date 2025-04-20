const performance = ["Boost performance", "Stop snoring", "Optimized Airflow", "100% Drug Free"];
const information = ["Sizing information", "Free resizing", "Money back guarantee & free returns"];
const pain = ["Persistent snoring", "Nasal congestion", "Allergies affecting breathing", "Struggling to breathe during workouts"];
const solution = ["Enhance airflow", "Reduce snoring", "Clear nasal passages", "Made from soft", "Comfortable Materials"];
const positives = [
  {
    title: "Actually opens your nose",
    description: ""
  },
  {
    title: "Durable",
    description: "Intake is built strong and durable so your nose Stays open right where <br />you want it, as long as you want it."
  },
  {
    title: "Stays on all day/night",
    description: "Intake will be precisely where you left it when you awaken, keeping your <br />nasal passages open for uninterrupted breathing."
  },
  {
    title: "Skin safe",
    description: "Intake uses a strong magnetic Band to hold your nose open, not the <br />bridge of your nose. We use less adhesive and we care that your skin <br />stays where it belongs—on your nose."
  },
  {
    title: "Pulls outward",
    description: "Intake pulls out on your nose. Using the suction cup like Tabs, the Band."
  }
];

const negatives = [
  {
    title: "Flimsy",
    description: "Nasal strips have very little structure. When you inhale, they can still <br />collapse."
  },
  {
    title: "Unsupportive",
    description: "Nasal strips don't hold your nose open as wide as Intake."
  },
  {
    title: "Falls off",
    description: "Don't wake up with your nasal strip stuck to your pillow again."
  },
  {
    title: "Hurts your skin",
    description: "Nasal strips stick to the bridge of your nose using an aggressive <br />adhesive. When you pull it off, your skin goes with it."
  },
  {
    title: "Pulls forward",
    description: "Nasal strips rely on the leverage of your nose bridge to widen the passage."
  }
];

const performanceContainer = document.getElementById("noseclip-performance");
const informationContainer = document.getElementById("noseclip-information");
const painContainer = document.getElementById("pain-points");
const solutionContainer = document.getElementById("solution-points");
const positiveDiv = document.getElementById("positive");
const negativeDiv = document.getElementById("negative")

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

positives.forEach(feature => {
  const item = document.createElement("div");
  item.style.marginBottom = "24px";

  item.innerHTML = `
    <div>
      <div style="margin-bottom: 16px; display: flex; align-items: center; gap: 10px;">
        <img src="images/Right.png" alt="">
        <h4 style="font-size: 1.5rem; font-weight: 600;">${feature.title}</h4>
      </div>
      <p style="font-size: 1rem; font-weight: 400; line-height: 160%; text-align: left;">${feature.description}</p>
    </div>
  `;

  positiveDiv.appendChild(item);
});

negatives.forEach(feature => {
  const item = document.createElement("div");
  item.style.marginBottom = "24px";

  item.innerHTML = `
    <div style="color: rgb(74, 76, 86);">
      <div style="margin-bottom: 16px; display: flex; align-items: center; gap: 10px;">
        <img src="images/Wrong.png" alt="">
        <h4 style="font-size: 1.5rem; font-weight: 600;">${feature.title}</h4>
      </div>
      <p style="font-size: 1rem; font-weight: 400; line-height: 160%; text-align: left;">${feature.description}</p>
    </div>
  `;

  negativeDiv.appendChild(item);
});