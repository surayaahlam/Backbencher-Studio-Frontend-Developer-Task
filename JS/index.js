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

const feedbacks = [
  {
    name: "Arlene McCoy",
    avatar: "/images/Avatar3.png",
    text: "This nasal clip has helped me reduce snoring and breathe easier at night. Comfortable and <br />barely noticeable!"
  },
  {
    name: "Ralph Edwards",
    avatar: "/images/Avatar4.png",
    text: "I use this nasal clip during my runs, and it really improves airflow. I can breathe more freely <br />and last longer during intense sessions."
  },
  {
    name: "Cameron Williamson",
    avatar: "/images/Avatar5.png",
    text: ""
  }
];

const pricingOptions = [
  {
    label: "1-month supply",
    tabs: "30 Tabs",
    price: "$29.99",
    discount: "5% discount",
    features: [
      "60 days Money back <br />guarantee",
      "Whole Starter kit",
      "Free Returns",
      "Free shipping with every <br />bundle after 3 month <br />supply"
    ],
    highlighted: false
  },
  {
    label: "3-month supply",
    tabs: "90 Sticky Tabs",
    price: "$79.99",
    discount: "10% discount",
    features: [
      "60 days Money back <br />guarantee",
      "Whole Starter kit",
      "Free Returns",
      "Free shipping with every <br />bundle after 3 month <br />supply"
    ],
    highlighted: true
  },
  {
    label: "6-month supply",
    tabs: "180 Sticky Tabs",
    price: "$149.99",
    discount: "20% discount",
    features: [
      "60 days Money back <br />guarantee",
      "Whole Starter kit",
      "Free Returns",
      "Free shipping with every <br />bundle after 3 month <br />supply"
    ],
    highlighted: false
  },
  {
    label: "1-Year supply",
    tabs: "365 Sticky Tabs",
    price: "$240.99",
    discount: "30% discount",
    features: [
      "60 days Money back <br />guarantee",
      "Whole Starter kit",
      "Free Returns",
      "Free shipping with every <br />bundle after 3 month <br />supply"
    ],
    highlighted: false
  }
];

const performanceContainer = document.getElementById("noseclip-performance");
const informationContainer = document.getElementById("noseclip-information");
const painContainer = document.getElementById("pain-points");
const solutionContainer = document.getElementById("solution-points");
const positiveDiv = document.getElementById("positive");
const negativeDiv = document.getElementById("negative");
const feedbackContainer = document.getElementById("feedbacks");
const pricingContainer = document.getElementById("pricing");

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


feedbacks.forEach(review => {
  const reviewCard = document.createElement("div");
  reviewCard.style.borderTop = "1px solid rgba(119, 198, 123, 0.37)";
  reviewCard.style.paddingTop = "40px";
  reviewCard.style.marginBottom = "24px";

  reviewCard.innerHTML = `
    <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 24px">
      <div style="display: flex; align-items: center; gap: 16px;">
        <img src="${review.avatar}" />
        <h5 style="font-size: 2.5rem; font-weight: 800;">${review.name}</h5>
        <img src="images/shield.png"  />
      </div>
      <div style="background-color: rgba(159, 203, 204, 0.23); color: #014955; font-size: 1.125rem; font-weight: 500; padding: 12px 24px; border-radius: 10px; border: 1px solid rgb(195, 218, 214)">
        1 Week Ago
      </div>
    </div>
    
    <div style="display: flex; flex-direction: column; gap: 16px; margin-bottom: 24px;">
      <div style="display: flex; align-items: center;">
        <div style="display: flex; align-items: center; gap: 10px; margin-right: 25px;">
          <img src="images/star1.png"  />
          <img src="images/star1.png"  />
          <img src="images/star1.png"  />
          <img src="images/star1.png"  />
          <img src="images/star1.png"  />
        </div>
        <div style="border: 1px solid rgb(165, 165, 171); width: 0; height: 23px; margin-right: 25px;"></div>
        <img style="margin-right: 12px;" src="images/heart.png"  />
        <p style="font-size: 0.875rem; font-weight: 600;">(1.5K)</p>
      </div>
      <p style="color: rgb(74, 76, 86); font-size: 1.25rem; font-weight: 500; line-height: 140%;">${review.text}</p>
    </div>
    <img src="images/image-4.png" style="border-radius: 14px; width: 233px; height: 188px; object-fit: cover;" />
  `;

  feedbackContainer.appendChild(reviewCard);
});

pricingOptions.forEach(plan => {
  const card = document.createElement("div");
  card.style.border = "1px solid";
  card.style.borderColor = `${plan.highlighted ? '#FF6600' : '#D2D2D5'}`;
  card.style.borderRadius = "16px";
  card.style.paddingBottom = "32px";
  if (plan.highlighted) {
    card.style.transform = "scale(1.05)";
    card.style.zIndex = "1";
  }

  card.innerHTML = `
    <div style="display: flex; flex-direction: column;">
      <div style="padding: 20px 0; display: flex; flex-direction: column; background-color: ${plan.highlighted ? '#FF6600' : '#FFF0E6'};  border-radius: 16px 16px 0 0;">
        <h3
          style="font-size: 1.5rem; font-weight: 600; text-align: center; color: ${plan.highlighted ? '#FFFFFF' : '#1D1F2C'};">
          ${plan.label}</h3>
        <h4
          style="font-size: 1rem; font-weight: 500; text-align: center; color: ${plan.highlighted ? '#FFFFFF' : '#1D1F2C'};">
          ${plan.tabs}</h4>
      </div>

<div style="margin-top: 40px; display: flex; flex-direction: column; justify-content: center; align-items: center;">
    <h2 style="font-size: 2rem; font-weight: 800; margin-bottom: 16px;">${plan.price}</h2>
    <div style="border: 2px solid; border-color: ${plan.highlighted ? '#FF6600' : '#D2D2D5'}; width: 179px; height: 0;"></div>
    <h3 style="font-size: 1.25rem; font-weight: 600; color: rgb(255, 102, 0); margin-top: 17px;">(${plan.discount})</h3>
    <div style="margin-top: 40px; margin-bottom: 16px;">
        <button style="
          background-color: ${plan.highlighted ? '#FF6600' : 'white'};
          color: ${plan.highlighted ? 'white' : '#FF6600'};
          border: 1px solid #FF6600;
          border-radius: 8px;
          padding: 18px 48px;
          font-size: 2.25rem
          font-weight: 800;
          cursor: pointer;
        ">Buy Now</button>
    </div>
    <ul style="list-style: none; display: flex; flex-direction: column; flex: auto; gap: 8px; margin-left: 5px;">
      ${plan.features.map(f => `
        <li style="display: flex; align-items: flex-start; gap: 12px; font-size: 1rem; font-weight: 400; line-height: 160%; color: rgb(71, 84, 103);">
          <img src="images/tick-mark.png" alt="" style="object-fit: contain; margin-top: 3px;">
          ${f}
        </li>
      `).join("")}
    </ul>
    <div style="padding: 0 10px 0 14px;  font-family: 'Poppins', sans-serif; display: flex; align-items: center;">
        <div style="display: flex; align-items: center; gap: 6px; margin-right: 4px;">
            <img style="width: 14px;" src="images/star1.png" alt="">
            <img style="width: 14px;" src="images/star1.png" alt="">
            <img style="width: 14px;" src="images/star1.png" alt="">
            <img style="width: 14px;" src="images/star1.png" alt="">
            <img style="width: 14px;" src="images/star1.png" alt="">
        </div>
        <h6 style="font-weight: 600; font-size: 0.875rem; margin-right: 8px;">5</h6>
        <p style="font-weight: 400; font-size: 0.875rem;">(500+Reviews)</p>
    </div>
  </div>
  </div>
  `;

  pricingContainer.appendChild(card);
});
