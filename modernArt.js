const modernArt = [
    {
      
      question: "1. Which artist is known for coining the term 'Surrealism'?",
      first: "Pablo Picasso",
      second: "Salvador Dali",
      third: "Vincent van Gogh",
      fourth:  "Henri Matisse",
      answer: "Salvador Dali",
      
    },
    {
      question: "2. Which movement is associated with the use of abstract forms and shapes in art?",
      first: "Impressionism",
      second: "Expressionism",
      third: "Futurism",
      fourth:  "Cubism",
      answer: "Cubism",
    },
    
    {
      
      question: "3. Which artist is known for painting the work 'The Persistence of Memory'?",
      first: "Pablo Picasso",
      second: "Salvador Dali",
      third: "Vincent van Gogh",
      fourth: "Henri Matisse",
      answer: "Salvador Dali",



      
    },
    {
      
      question: "4. Which artist is known for creating the painting 'The Scream'?",
      first: "Vincent van Gogh",
      second:  "Salvador Dali",
      third: "Edvard Munch",
      fourth: "Claude Monet",
      answer: "Edvard Munch",

     
      
    },
    {
    
      question: "5. What movement was associated with the use of bold, bright colors and thick brushstrokes?",
      first: "Impressionism",
      second: "Expressionism", 
      third: "Fauvism",
      fourth: "Cubism",
      answer: "Fauvism",

      
     
    },
    {
      
      question: "6. What movement was associated with the use of bright colors, simplified forms, and a focus on movement and speed",
      first: "Impressionism",
      second: "Futurism",
      third: "Surrealism", 
      fourth: "Abstract Expressionism",
      answer: "Futurism",

      
    },
    {

      question: "7. Which artist is known for creating the painting 'Water Lilies'?",
      first: "Claude Monet",
      second: "Paul Cezanne", 
      third: "Paul Gauguin",
      fourth:"Paul Klee",
      answer: "Claude Monet",
     
    },
    {
   
      question: "8. Which artist is known for creating the painting 'Les Demoiselles d'Avignon'?",
      first: "Henri Matisse", 
      second:  "Vincent van Gogh",
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
      
      question: "10. Which artist is known for creating the sculpture 'The Thinker'?",
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

     
      
    }
  ];
  
let quesStatement = document.getElementById('ques');
let changeQues = document.getElementById('next');
let previousQues = document.getElementById('previous')
let firstLabel = document.getElementById('st');
let secondLabel = document.getElementById('nd');
let thirdLabel = document.getElementById('rd');
let fourthLabel = document.getElementById('th');
let first2 = document.getElementById('first');
let second2 = document.getElementById('second');
let third2 = document.getElementById('third');
let fourth2 = document.getElementById('fourth');
let result = document.getElementById('declaration')
let sub = document.getElementById('submit')
let warn = document.getElementsByClassName('warning')




let marks=0;
function quesChange(ques){
    quesStatement.innerHTML= ques.question;
    firstLabel.innerHTML=ques.first;
    secondLabel.innerHTML=ques.second;
    thirdLabel.innerHTML=ques.third;
    fourthLabel.innerHTML=ques.fourth;
    
   
}


function evaluvation(a){
  console.log(a)
    if (first2.checked && a.first === a.answer){
        marks+=1
        result.innerHTML=marks
        
    }
    else if (second2.checked && a.second === a.answer){

        marks+=1
        result.innerHTML=marks
    }
    else if (third2.checked && a.third===a.answer){
        marks+=1
        result.innerHTML=marks

    }
    else if (fourth2.checked && a.fourth=== a.answer){
        marks+=1
        result.innerHTML=marks

    }
    else{
        marks+=0
    }
   return marks
}
function uncheck(){
  
    first2.checked = false;
    second2.checked=false;
    third2.checked=false;
    fourth2.checked=false;
    
}
let i=0;
function provideQues(){
  
    i<modernArt.length && i++
    console.log(i)
    let a = quesChange(modernArt[i])
    let b = evaluvation(modernArt[i-1])
    let c = uncheck()

    if (i === modernArt.length-1){
     
      changeQues.removeEventListener('click',provideQues);
      let remark;
      
      if (marks>5){
        remark="good job"
      }else{
        remark="work hard"
      }
      
      document.getElementById('Page').innerHTML=`Your score is ${marks}/10 and your remark is ${remark} <button><a href="index.html" style="text-decoration:none;color:black;">Home</a> </button>`
      
      
    }
  
}

changeQues.addEventListener('click', provideQues)


// let time2 = new Date("Feb 20, 2023 24:00:00").getTime();
// let x = setInterval(()=>{
  
//   let time1 = new Date().getTime();
  
//   let diff = time2-time1;
 
//   let hour = Math.floor(((diff)%(24*60*60*1000))/(60*60*1000))
//  let min = Math.floor(((diff)%(60*60*1000))/(60*1000))
//   let sec = Math.floor(((diff)%(60*1000))/(1000))
  
//   document.getElementById('time').innerHTML = hour + "h "
//   + min + "m " + sec + "s ";

// if (diff<0){
//   clearInterval(x);
//   document.getElementById('time').innerHTML= "Times up!!!"
//   quesStatement.innerHTML= " ";
//     firstLabel.innerHTML=" ";
//     secondLabel.innerHTML=" ";
//     thirdLabel.innerHTML=" ";
//     fourthLabel.innerHTML=" ";
//     changeQues.removeEventListener('click',provideQues);
//     result.innerHTML= `${marks}/10 <button onClick=location.reload()> Replay </button>`
//     document.body.querySelectorAll('#Page').style.backgroundColor="white";
//     quesStatement.style.backgroundColor="bisque";
// }

// },1000)









