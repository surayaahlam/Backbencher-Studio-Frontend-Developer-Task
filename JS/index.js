const performance = ["Boost performance", "Stop snoring", "Optimized Airflow", "100% Drug Free"]; 
const information = ["Sizing information", "Free resizing", "Money back guarantee & free returns"];

const performanceContainer = document.getElementById("noseclip-performance");
const informationContainer = document.getElementById("noseclip-information");

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
