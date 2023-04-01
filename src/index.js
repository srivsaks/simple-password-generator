import "./styles.css";

const upperCaseEl = document.querySelector("#upper");
const lowerCaseEl = document.querySelector("#lower");
const numbersEl = document.querySelector("#numbers");
const symbolsEl = document.querySelector("#symbols");

const lengthEl = document.querySelector("#length");
const result = document.querySelector(".result");
let len = 0;
const btn = document.querySelector("button");
function getRandomLowerCase() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
function getRandomUpperCase() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
function getRandomNumber() {
  return Math.floor(Math.random() * 9);
}
function getRandomSymbols() {
  const str = `!@#$%^&*(){}[]=_/<>,.~`;
  return str[Math.floor(Math.random() * str.length)];
}
function generateRandom() {
  return {
    upper: getRandomUpperCase(),
    lower: getRandomLowerCase(),
    symbols: getRandomSymbols(),
    numbers: getRandomNumber()
  };
}
function generate() {
  console.log(len);
  if (len === 0) return "";
  let answer = "";
  const values = [
    { checked: upperCaseEl.checked, key: "upper" },
    { checked: lowerCaseEl.checked, key: "lower" },
    { checked: numbersEl.checked, key: "numbers" },
    { checked: symbolsEl.checked, key: "symbols" }
  ];
  for (let i = 0; i < len; i++) {
    values.forEach((item) => {
      if (item.checked) {
        const value = item.key;
        answer += generateRandom()[value].toString();
        console.log(generateRandom()[value]);
      }
    });
  }
  const final = answer.slice(0, len);
  return final;
}
btn.addEventListener("click", () => {
  const data = generate();
  result.innerHTML = data;
});

lengthEl.addEventListener("input", (e) => {
  console.log(e.target.value);
  len = e.target.value;
});
