document.addEventListener("DOMContentLoaded", () => {

/* =======================
   VARIABLES
======================= */

let teams = [];
let maxTeams = 7;

let currentTeam = 0;
let currentQ = 0;

const teamsDiv = document.getElementById("teams");
const scoreBoard = document.getElementById("scoreBoard");

const addBtn = document.getElementById("addTeam");
const startBtn = document.getElementById("startGame");

/* =======================
   ADD TEAM
======================= */

addBtn.onclick = () => {

if (teams.length >= maxTeams) return;

let name = prompt("Jamoa nomi yoz:") || ("Jamoa " + (teams.length + 1));

teams.push({
name,
questions: [],
score: 0
});

renderTeams();
renderScore();
};

/* =======================
   RENDER TEAMS
======================= */

function renderTeams(){
teamsDiv.innerHTML = "";

teams.forEach(t => {
let div = document.createElement("div");
div.className = "team";
div.innerText = t.name;
teamsDiv.appendChild(div);
});
}

/* =======================
   SCOREBOARD
======================= */

function renderScore(){
scoreBoard.innerHTML = "";

teams.forEach(t => {
let div = document.createElement("div");
div.className = "scoreItem";
div.innerText = `${t.name}: ${t.score} ball`;
scoreBoard.appendChild(div);
});
}

/* =======================
   START GAME
======================= */

startBtn.onclick = () => {

if (teams.length === 0) {
alert("Jamoa qo‘sh!");
return;
}

let shuffled = [...QUESTIONS].sort(() => Math.random() - 0.5);

let perTeam = Math.ceil(shuffled.length / teams.length);

teams.forEach((team, i) => {
team.questions = shuffled.slice(i * perTeam, (i + 1) * perTeam);
});

document.getElementById("teamSetup").style.display = "none";

showQuestion();
};

/* =======================
   SHUFFLE
======================= */

function shuffle(q){

let arr = q.a.map((t, i) => ({
text: t,
correct: i === q.c
}));

arr.sort(() => Math.random() - 0.5);

let newC = arr.findIndex(x => x.correct);

return {
q: q.q,
a: arr.map(x => x.text),
c: newC
};
}

/* =======================
   SHOW QUESTION
======================= */

function showQuestion(){

let team = teams[currentTeam];

if (!team) {
showWinner();
return;
}

if (currentQ >= team.questions.length) {
currentTeam++;
currentQ = 0;
showQuestion();
return;
}

let q = shuffle(team.questions[currentQ]);

document.getElementById("box").innerHTML = `
<div class="card">
<h2>${team.name}</h2>
<h3>${q.q}</h3>

${q.a.map((x, i) => `
<button onclick="answer(${i}, '${x}', ${q.c})">${x}</button>
`).join("")}

</div>
`;
}

/* =======================
   ANSWER
======================= */

window.answer = function(index, text, correctIndex){

if (index === correctIndex) {
teams[currentTeam].score += 10;
}

currentQ++;

renderScore();
showQuestion();
};

/* =======================
   WINNER SCREEN
======================= */

function showWinner(){

let winner = teams[0];

for(let t of teams){
if(t.score > winner.score){
winner = t;
}
}

document.getElementById("winnerText").innerText =
"🏆 " + winner.name + " YUTDI!";

document.getElementById("winnerScore").innerText =
"Ball: " + winner.score;

document.getElementById("winnerScreen").classList.remove("hidden");
}

/* =======================
   LOAD TEXT
======================= */

document.getElementById("introText").innerText = DATA.intro;
document.getElementById("planText").innerText = DATA.plan;
document.getElementById("slavesText").innerText = DATA.slaves;
document.getElementById("gladText").innerText = DATA.gladiators;
document.getElementById("colText").innerText = DATA.colosseum;

/* =======================
   IMAGES
======================= */

function addImage(id, src){
let img = document.createElement("img");
img.src = src;
img.className = "card-img";
document.getElementById(id).appendChild(img);
}

if (typeof IMAGES !== "undefined") {

addImage("introText", IMAGES.intro);
addImage("planText", IMAGES.plan);
addImage("slavesText", IMAGES.slaves);
addImage("gladText", IMAGES.gladiators);
addImage("colText", IMAGES.colosseum);

}

});

window.restartGame = function(){
location.reload();
};