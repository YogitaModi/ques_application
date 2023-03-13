const modernArt = [
  {
    question: "1. Which artist is known for coining the term 'Surrealism'?",
    first: "Pablo Picasso",
    second: "Salvador Dali",
    third: "Vincent van Gogh",
    fourth: "Henri Matisse",
    answer: "Salvador Dali",
  },
  {
    question:
      "2. Which movement is associated with the use of abstract forms and shapes in art?",
    first: "Impressionism",
    second: "Expressionism",
    third: "Futurism",
    fourth: "Cubism",
    answer: "Cubism",
  },

  {
    question:
      "3. Which artist is known for painting the work 'The Persistence of Memory'?",
    first: "Pablo Picasso",
    second: "Salvador Dali",
    third: "Vincent van Gogh",
    fourth: "Henri Matisse",
    answer: "Salvador Dali",
  },
  {
    question:
      "4. Which artist is known for creating the painting 'The Scream'?",
    first: "Vincent van Gogh",
    second: "Salvador Dali",
    third: "Edvard Munch",
    fourth: "Claude Monet",
    answer: "Edvard Munch",
  },
  {
    question:
      "5. What movement was associated with the use of bold, bright colors and thick brushstrokes?",
    first: "Impressionism",
    second: "Expressionism",
    third: "Fauvism",
    fourth: "Cubism",
    answer: "Fauvism",
  },
  {
    question:
      "6. What movement was associated with the use of bright colors, simplified forms, and a focus on movement and speed",
    first: "Impressionism",
    second: "Futurism",
    third: "Surrealism",
    fourth: "Abstract Expressionism",
    answer: "Futurism",
  },
  {
    question:
      "7. Which artist is known for creating the painting 'Water Lilies'?",
    first: "Claude Monet",
    second: "Paul Cezanne",
    third: "Paul Gauguin",
    fourth: "Paul Klee",
    answer: "Claude Monet",
  },
  {
    question:
      "8. Which artist is known for creating the painting 'Les Demoiselles d'Avignon'?",
    first: "Henri Matisse",
    second: "Vincent van Gogh",
    third: "Salvador Dali",
    fourth: "Pablo Picasso",
    answer: "Pablo Picasso",
  },
  {
    question: "9. Which artist is known for creating the painting 'Guernica'?",
    first: "Claude Mone",
    second: "Paul Cezanne",
    third: "Pablo Picasso",
    fourth: "Vincent van Gogh",
    answer: "Pablo Picasso",
  },
  {
    question:
      "10. Which artist is known for creating the sculpture 'The Thinker'?",
    first: "Auguste Rodin",
    second: "Alexander Calder",
    third: "Jean Arp",
    fourth: "Henry Moore",
    answer: "Auguste Rodin",
  },
  {
    question: "",
    first: "",
    second: "",
    third: "",
    fourth: "",
    answer: "",
  },
];

let quesStatement = document.getElementById("ques");
let changeQues = document.getElementById("next");

// let changeQues = document.createElement('button');
// changeQues.setAttribute('id','next')
// changeQues.innerText="Next";

let previousQues = document.getElementById("previous");
let firstLabel = document.getElementById("st");
let secondLabel = document.getElementById("nd");
let thirdLabel = document.getElementById("rd");
let fourthLabel = document.getElementById("th");
let first2 = document.getElementById("first");
let second2 = document.getElementById("second");
let third2 = document.getElementById("third");
let fourth2 = document.getElementById("fourth");
let result = document.getElementById("declaration");
let sub = document.getElementById("submit");
let warn = document.getElementsByClassName("warning");
let remark;
let marks = 0;
function quesChange(ques) {
  quesStatement.innerHTML = ques.question;
  firstLabel.innerHTML = ques.first;
  secondLabel.innerHTML = ques.second;
  thirdLabel.innerHTML = ques.third;
  fourthLabel.innerHTML = ques.fourth;
}

function evaluvation(a) {
  if (first2.checked && a.first === a.answer) {
    marks += 1;
    result.innerHTML = `${marks}/10 score`;
    document.getElementById("first_option").style.backgroundColor = "#42f587";
    document.getElementById("first_option").style.border = "1px green solid";

    document.getElementById("hint").innerHTML = `correct answer`;
  } else if (second2.checked && a.second === a.answer) {
    marks += 1;
    result.innerHTML = `${marks}/10 score`;
    document.getElementById("second_option").style.backgroundColor = "#42f587";
    document.getElementById("second_option").style.border = "1px green solid";
    document.getElementById("hint").innerHTML = `correct answer`;
  } else if (third2.checked && a.third === a.answer) {
    marks += 1;
    result.innerHTML = `${marks}/10 score`;
    document.getElementById("third_option").style.backgroundColor = "#42f587";
    document.getElementById("third_option").style.border = "1px green solid";
    document.getElementById("hint").innerHTML = `correct answer`;
  } else if (fourth2.checked && a.fourth === a.answer) {
    marks += 1;
    result.innerHTML = `${marks}/10 score`;
    document.getElementById("fourth_option").style.backgroundColor = "#42f587";
    document.getElementById("fourth_option").style.border = "1px green solid";
    document.getElementById("hint").innerHTML = `correct answer`;
  } else if (second2.checked && a.second !== a.answer) {
    marks += 0;
    result.innerHTML = `${marks}/10 score`;
    document.getElementById("second_option").style.backgroundColor = "pink";
    document.getElementById("second_option").style.border = "1px red solid";
    document.getElementById(
      "hint"
    ).innerHTML = `<h3 style="color:red; font-weight:bold;  padding:5px; border:1px black solid; background-color:white">you are wrong, correct answer is ${a.answer}</h3>`;
  } else if (first2.checked && a.first !== a.answer) {
    marks += 0;
    result.innerHTML = `${marks}/10 score`;
    document.getElementById("first_option").style.backgroundColor = "pink";
    document.getElementById("first_option").style.border = "1px red solid";
    document.getElementById(
      "hint"
    ).innerHTML = `<h3 style="color:red; font-weight:bold; padding:5px; border:1px black solid; background-color:white">you are wrong, correct answer is ${a.answer}</h3>`;
  } else if (third2.checked && a.third !== a.answer) {
    marks += 0;
    result.innerHTML = `${marks}/10 score`;
    document.getElementById("third_option").style.backgroundColor = "pink";
    document.getElementById("third_option").style.border = "1px red solid";
    document.getElementById(
      "hint"
    ).innerHTML = `<h3 style="color:red; font-weight:bold; padding:5px; border:1px black solid; background-color:white">you are wrong, correct answer is ${a.answer}</h3>`;
  } else if (fourth2.checked && a.fourth !== a.answer) {
    marks += 0;
    result.innerHTML = `${marks}/10 score`;
    document.getElementById("fourth_option").style.backgroundColor = "pink";
    document.getElementById("fourth_option").style.border = "1px red solid";
    document.getElementById(
      "hint"
    ).innerHTML = `<h3 style="color:red; font-weight:bold; padding:5px; border:1px black solid; background-color:white">you are wrong, correct answer is ${a.answer}</h3>`;
  } else {
    marks += 0;
    document.getElementById(
      "hint"
    ).innerHTML = `<h3 style="color:red; font-weight:bold; padding:5px; border:1px black solid; background-color:white">please select an option to get evaluvated</h3>`;
  }
  sub.disabled = true;
  return marks;
}
function uncheck() {
  first2.checked = false;
  second2.checked = false;
  third2.checked = false;
  fourth2.checked = false;
}
function defaultvalues() {
  document.getElementById("hint").innerHTML = ``;
  document.getElementById("first_option").style.backgroundColor = "#282A35";
  document.getElementById("first_option").style.border = "none";
  document.getElementById("second_option").style.backgroundColor = "#282A35";
  document.getElementById("second_option").style.border = "none";
  document.getElementById("third_option").style.backgroundColor = "#282A35";
  document.getElementById("third_option").style.border = "none";
  document.getElementById("fourth_option").style.backgroundColor = "#282A35";
  document.getElementById("fourth_option").style.border = "none";
}
let j = 0;
let i = 0;
function provideQues() {
  i < modernArt.length && i++;

  let a = quesChange(modernArt[i]);

  let b = defaultvalues();

  let c = uncheck();

  if (i === modernArt.length - 1) {
    changeQues.removeEventListener("click", provideQues);
    
    if (marks > 5) {
      remark = "good job";
    } else {
      remark = "work hard";
    }

    document.getElementById(
      "Page"
    ).innerHTML = `Your score is ${marks}/10 and your remark is ${remark} <button><a href="index.html" style="text-decoration:none;color:black;">Home</a> </button>`;
  }
  sub.disabled = false;
}

function evaluate() {
  j < modernArt.length && j++;
  let b = evaluvation(modernArt[j - 1]);
  if (j === modernArt.length - 1) {
    sub.removeEventListener("click", evaluate);
  }
}
sub.addEventListener("click", evaluate);
changeQues.addEventListener("click", provideQues);

let time1 = 600000;
let time2 = 0;

let t = setInterval(() => {
  time2 = time2 + 1000;
  let difference = time1 - time2;

  let hour = Math.floor(
    (difference % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
  );
  let minute = Math.floor((difference % (60 * 60 * 1000)) / (1000 * 60));
  let second = Math.floor((difference % (60 * 1000)) / 1000);

  document.getElementById(
    "clk"
  ).innerHTML = `${hour}hr : ${minute}min : ${second}sec`;

  if (difference < 0) {
    document.getElementById("clk").innerHTML = "Time out!!!";
    if (marks > 5) {
      remark = "good job";
    } else {
      remark = "work hard";
    }
    document.getElementById(
      "Page"
    ).innerHTML = `Your score is ${marks}/10 and your remark is ${remark} <button><a href="index.html" style="text-decoration:none;color:black;">Home</a> </button>`;
   
    clearInterval(t);
  }
}, 1000);
