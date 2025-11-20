
const quizData = [
  {q:"Which is the largest rainforest on Earth?", a:["Congo Rainforest","Amazon Rainforest","Daintree","Sundarbans"], c:1},
  {q:"Which is the deepest ocean?", a:["Atlantic","Pacific","Indian","Arctic"], c:1},
  {q:"Mount Everest lies on the border of which two countries?", a:["India & Nepal","Nepal & China","China & Bhutan","India & China"], c:1},
  {q:"Which desert is the largest hot desert?", a:["Sahara","Gobi","Arabian","Kalahari"], c:0},
  {q:"The Great Barrier Reef is located in:", a:["Australia","Indonesia","Philippines","South Africa"], c:0},
  {q:"Which river is the longest in the world?", a:["Amazon","Nile","Yangtze","Mississippi"], c:1},
  {q:"The Northern Lights are also known as:", a:["Aurora Polaris","Aurora Borealis","Solar Glare","Lunar Sparks"], c:1},
  {q:"Which continent has the most countries?", a:["Asia","Europe","Africa","South America"], c:2},
  {q:"Which lake is the deepest in the world?", a:["Lake Superior","Lake Tanganyika","Baikal Lake","Lake Victoria"], c:2},
  {q:"Where is the driest place on Earth?", a:["Sahara Desert","Antarctica","Death Valley","Gobi Desert"], c:1}
];

let index = 0;
let score = 0;

function loadQuestion(){
  const q = quizData[index];
  document.getElementById("q-text").innerText = `${index+1}. ${q.q}`;
  
  const opts = document.getElementById("options");
  opts.innerHTML = "";
  
  q.a.forEach((opt,i)=>{
    const btn = document.createElement("button");
    btn.innerText = opt;
    btn.onclick = () => checkAnswer(btn, i);
    opts.appendChild(btn);
  });
}

function checkAnswer(btn, i){
  const correctIndex = quizData[index].c;
  
  const buttons = document.querySelectorAll(".options button");
  buttons.forEach(b => b.disabled = true);
  
  if(i === correctIndex){
    btn.classList.add("correct");
    score++;
  } else {
    btn.classList.add("wrong");
    buttons[correctIndex].classList.add("correct");
  }
  
  document.querySelector(".next-btn").style.display = "block";
}

function nextQuestion(){
  index++;
  document.querySelector(".next-btn").style.display = "none";
  
  if(index < quizData.length){
    loadQuestion();
  } else {
    showResults();
  }
}

function showResults(){
  let ratingMsg = "";
  if(score <= 3) ratingMsg = "🌱 Beginner Explorer — Keep Exploring!";
  else if(score <= 6) ratingMsg = "🌿 Nature Enthusiast — You're learning well!";
  else if(score <= 8) ratingMsg = "🌳 Geography Expert — Impressive knowledge!";
  else ratingMsg = "🌎 Earth Master — Outstanding!";

  document.getElementById("score-text").innerText = `Your Score: ${score}/10`;
  document.getElementById("rating").innerText = ratingMsg;
  document.getElementById("result-popup").style.display = "block";
}

loadQuestion();

