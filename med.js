/*
async function req(){const a=await fetch("https://ishmels.github.io/data.json");return a.json()}req().then(a=>{let b=a.data,c=document.querySelector(".formulation > div.qtext").innerText.slice(2,8),d=[];for(let b=0;4>b;b++)d[b]=document.querySelector("label[for*=\"answer"+b+"\"").innerText;let e=b.find(a=>~~a.name==~~c).answer;console.log(e);let f=0;for(let b=0;4>b;b++)0<d[b].search(e)&&(f=b);document.querySelector("label[for*=\"answer"+f+"\"").click()});
*/

async function req() {
const response = await fetch('https://ishmels.github.io/data.json');
return response.json()
}

req().then(res=>{
	let TrueAnswerArray = res.data;
	let testName = document
		.querySelector('.formulation > div.qtext')
		.innerText.slice(2, 8);

	let testAnswerArray = [];

	for (let i = 0; i < 4; i++) {
	  testAnswerArray[i] = document.querySelector(
		'label[for*="answer' + i + '"'
	  ).innerText;
	}
	let trueAnswer = TrueAnswerArray.find((el) => ~~el.name === ~~testName).answer;
	console.log(trueAnswer);

	let indexOfTrueAnswer = 0;

	for (let i = 0; i < 4; i++) {
	  if (testAnswerArray[i].search(trueAnswer) > 0) indexOfTrueAnswer = i;
	}

	document.querySelector('label[for*="answer' + indexOfTrueAnswer + '"').click();

})



/*

let TrueAnswerArray = {};
const response = await fetch('https://ishmels.github.io/data.json');

response.ok ? TrueAnswerArray = await response.json() : console.log("ОшибОчка");

let testName = document
  .querySelector('.formulation > div.qtext')
  .innerText.slice(2, 8);

let testAnswerArray = [];

for (let i = 0; i < 4; i++) {
  testAnswerArray[i] = document.querySelector(
    'label[for*="answer' + i + '"'
  ).innerText;
}

let trueAnswer = TrueAnswerArray.data.find((el) => ~~el.name === ~~testName).answer;

let indexOfTrueAnswer = 0;

for (let i = 0; i < 4; i++) {
  if (testAnswerArray[i].search(trueAnswer) > 0) indexOfTrueAnswer = i;
}

document.querySelector('label[for*="answer' + indexOfTrueAnswer + '"').click();
*/
