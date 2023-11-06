const container = document.querySelector('.container');
const accross = document.getElementById('accross');
const down = document.getElementById('down');

const num = {"5": "1","17": "2","21": "3","39": "4","40": "5","72": "7","76": "8","92": "9","95": "10","125": "11","127": "12","151": "13","176": "14","200": "15", "66": "6"}

const ans = [17, 18, 19, 20, 22, 23, 24, 25,5, 18,31, 44,40,41,42,43,44,45,39,52,65,78,40,53,66,79,105,92,93,94,95,108,121,134,147,160,21,34,47,60,73,86,72,73,74,75,77,78,76,89,102,115,128,125,126,127,128,129,127,140,153,166,179,192,205,151,152,153,154,155,176,189,202,215,228,200,201,202,203,204,205,206,207,208,67,68,69
]

const clues = {
  accross: {
    2: "A device you use to call and play games on",
    5 : "A container for your water and bring to school",
    6 : "A poem that can be sunk",
    9 : "A test to see what you learned in school",
    11 : "What you drink to stay healthy",
    7 : "The place where mother cooks yummy food",
    13 : "A container to pour your drink in",
    15 : "The room where you study at school",
  },
  down: {
    1: "A round toy you can bounce and play with",
    3 : "A tool for drawing and writing",
    4: "The machine in kitchen that makes bread",
    5: "Something to carry your things or put eggs in",
    8: "A place where you live with your family",
    10: "The person who  gave birth to you and loves you",
    12: "The person who teach you in school",
    14: "The flat thing you eat your dinner on"
  }
}

for(let i=1; i<=234; i++) {
  const box = document.createElement('div');
  box.className = 'box';
  box.textContent = num[i] || "";

  container.appendChild(box);

  if (ans.includes(i)) {
    box.classList.add('highlight');
    
    const letter = document.createElement('input');
    letter.setAttribute('maxLength', '1');
    letter.setAttribute('id', i);
    letter.className = "answer";
    
    letter.addEventListener('keydown', function (event) {
      const currentId = parseInt(letter.id);

      if (event.key === 'ArrowRight') {
        const nextId = currentId + 1;
        const nextFocus = document.getElementById(String(nextId));

        if(nextFocus) {
          nextFocus.focus();
        }
      }
      
      if (event.key === 'ArrowLeft') {
        const prevId = currentId - 1;
        const prevFocus = document.getElementById(String(prevId));
        
        if(prevFocus) {
          prevFocus.focus();
        }
      }
      
      if (event.key === 'ArrowUp') {
        const upperId = currentId - 13;
        const upperFocus = document.getElementById(String(upperId));
        
        if(upperFocus) {
          upperFocus.focus();
        }
      }

      if (event.key === 'ArrowDown') {
        const downId = currentId + 13;
        const downFocus = document.getElementById(String(downId));

        if(downFocus) {
          downFocus.focus();
        }
      }
    });
    
    box.appendChild(letter);
  }
}

for(let i in clues) {
  for(let key in clues[i]) {
    const clue = document.createElement('div');
    const numClue = document.createElement('p');
    const clueDesc = document.createElement('p');
  
    clue.classList.add('individualClue');
    numClue.classList.add('num');
    clueDesc.classList.add('desc');
  
    numClue.textContent = `${key}.`;
    clueDesc.textContent = clues[i][key];
    clue.classList.add('individualClue');
    clue.appendChild(numClue);
    clue.appendChild(clueDesc);

    if(i=="accross") {
      accross.appendChild(clue);
    } else {
      down.appendChild(clue);
    }
  }
}