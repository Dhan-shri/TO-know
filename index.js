
var readlineSync = require('readline-sync');
var username = readlineSync.question("What is your good name  :- ");
console.log("Hii Welcome "+ username +" to DO YOU KNOW Dhanshri ");


var score= 0;


function play_game(question, answer){
  var question =readlineSync.question(question);
  console.log("You entered " +question)

  if( question ===answer){
    console.log("you are right ");
    score=score+10
    console.log("Current score is : "+score);
    console.log("-------");
  }
  else{
    console.log("Sorry you are wrong ");
    score= score-10
    console.log("Current score : "+ score)
    console.log("-------");
  }
}


var questions =[{
  question:"Am I older than 25 ",
  answer : "no"
}, {
  question: "Where do I live (District) ",
  answer:"Gondia"
} , {
  question :"Am I love to eat sweets ",
  answer:"yes"
}]

for (var i=0; i<questions.length; i++) {
  var currentQuestion= questions[i];
  play_game(currentQuestion.question , currentQuestion.answer);
}

console.log(" Yah !! Your final score is "+score);



