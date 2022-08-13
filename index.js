
let char = "AEIOURNDMBZTXYVWSHPG";

let stack = {}
let letter = 0;
for (let i = 0; i < char.length; i++) {
  let random_num = Math.floor(Math.random() * 4 + 1);
  letter += random_num;
  stack[char[i]] = random_num;
}
const Count = document.getElementById('Count');
Count.innerText = letter;

let chars = {
  A: 3,
  B: 2,
  C: 3,
  D: 2,
  E: 2,
  F: 4,
  G: 2,
  H: 4,
  I: 1,
  J: 8,
  K: 5,
  L: 1,
  M: 1,
  N: 3,
  O: 2,
  P: 3,
  Q: 10,
  R: 1,
  S: 2,
  T: 2,
  U: 3,
  V: 1,
  W: 2,
  X: 8,
  Y: 4,
  Z: 10,
};
let time = 99;
let timer = setInterval(function () {
  if (time <= 0) {
    clearInterval(timer);
    document.getElementById('timer').innerHTML = '0';
  } else {
    document.getElementById('timer').innerHTML = time;
  }
  time -= 1;
}, 1000);
let Points = document.getElementById('Points');
let keys = document.getElementById('container1');
let result = document.getElementById('container2');
for (let j = 0; j < char.length; j++) {
  let div = document.createElement('div');
  div.setAttribute('class', 'words');
  let h2 = document.createElement('h2');
  h2.innerText = char[j];
  h2.setAttribute('class', 'chars');
  let p = document.createElement('p');
  p.innerText = stack[char[j]];
  p.setAttribute('class', 'count');
  div.addEventListener('click', () => {
    if (p.innerText == 1) {
      p.innerText = '';
      h2.innerText = '';
      Count.innerText -= 1;
      result.innerText += char[j];
      console.log(char[char[j]]);
      Points.innerText = +Points.innerText + +char[chars[j]];
    }
    if (p.innerText > 0) {
      Count.innerText -= 1;
      p.innerText -= 1;
      result.innerText += char[j];
      console.log(char[char[j]]);
      Points.innerText = +Points.innerText + +char[char[j]];
    }
  });
  div.append(h2, p);
  keys.append(div);
}



