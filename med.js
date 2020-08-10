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
