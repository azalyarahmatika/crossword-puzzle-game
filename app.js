const container = document.querySelector('.container');

const num = {"5": "1","17": "2","21": "3","39": "4","40": "5","72": "7","76": "8","92": "9","95": "10","125": "11","127": "12","151": "13","176": "14","200": "15", "66": "6"}

const ans = [17, 18, 19, 20, 22, 23, 24, 25,5, 18,31, 44,40,41,42,43,44,45,39,52,65,78,40,53,66,79,105,92,93,94,95,108,121,134,147,160,21,34,47,60,73,86,72,73,74,75,77,78,76,89,102,115,128,125,126,127,128,129,127,140,153,166,179,192,205,151,152,153,154,155,176,189,202,215,228,200,201,202,203,204,205,206,207,208,67,68,69
]

const clueAccross = {
  2: "A device you use to call and play games on",
  5 : "A container for your water and bring to school",
  6 : "A poem that can be sunk",
  9 : "A test to see what you learned in school",
  11 : "What you drink to stay healthy",
  7 : "The place where mother cooks yummy food",
  13 : "A container to pour your drink in",
  15 : "The room where you study at school",
}

const clueDown = {
  1: "A round toy you can bounce and play with",
  3 : "A tool for drawing and writing",
  4: "The machine in kitchen that makes bread",
  5: "Something to carry your things or put eggs in",
  8: "A place where you live with your family",
  10: "The person who  gave birth to you and loves you",
  12: "The person who teach you in school",
  14: "The flat thing you eat your dinner on"
}

for(let i=1; i<=234; i++) {
  const box = document.createElement('div');
  box.className = 'box';
  box.textContent = num[i] || "";
  container.appendChild(box);

  if (ans.includes(i)) {
    box.classList.add('highlight'); 
    box.setAttribute('contenteditable', 'true');
  }

  const paragraph = document.createElement('p');
  paragraph.className = "answer";
  box.appendChild(paragraph);
}

const accross = document.getElementById('accross');
const down = document.getElementById('down');

for(let key in clueAccross) {
  const clue = document.createElement('div');
  const numClue = document.createElement('p');
  const clueDesc = document.createElement('p');

  clue.classList.add('individualClue');
  numClue.classList.add('num');
  clueDesc.classList.add('desc');

  numClue.textContent = key;
  clueDesc.textContent = clueAccross[key];

  clue.classList.add('individualClue');
  accross.appendChild(clue);
  clue.appendChild(numClue);
  clue.appendChild(clueDesc);
}

for(let key in clueDown) {
  const clue = document.createElement('div');
  const numClue = document.createElement('p');
  const clueDesc = document.createElement('p');
  
  clue.classList.add('individualClue');
  numClue.classList.add('num');
  clueDesc.classList.add('desc');

  numClue.textContent = key;
  clueDesc.textContent = clueDown[key];

  down.appendChild(clue);
  clue.appendChild(numClue);
  clue.appendChild(clueDesc);
}