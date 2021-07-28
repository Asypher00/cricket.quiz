var readlineSync = require('readline-sync');
var userName = readlineSync.question('What is your name? ');
console.log("Welcome To Its All About Cricket  " + userName);
console.log("Lets see how much do you know about the game of cricket")
var score = 0;

var high_scores = {
  name : "Ronit",
  high_score : 3 ,
}

function questions(question , answer)
{
  var my_Answer = readlineSync.question(question);
  if (my_Answer === answer)
  {console.log("You are correct ");
  score = score + 1;
  console.log("Current Score = " + score);}
  else
  {console.log("You are incorrect ");
  score=score-1;
  console.log("Current Score = " + score);
  console.log("--------------------");
  }

}
var question_one = {
  question : "When did the first World Cup take place? a.1975 b.1978 c.1981 d.1971 ",
  answer : "a",

}

var question_two = {
  question : "When did Sachin Tendulkar made his debut? a.1995 b.1992 c.1997 d.1989 ",
  answer : "d",

}
 var question_three = {
   question : "Which stadium is regarded as the home of cricket? a.Lords b. Eden gardens c.MCG d. SCG ",
   answer : "a",
 }

var question_four = {
  question : "Who has the highest number of test wickets? a.Shane Warne b. Murlidharan c. Wasim Akram d. Anil Kumble ",
  answer : "b",
};

var question_array = [question_one, question_two, question_three, question_four];
for(var i = 0 ; i < question_array.length ; i++)
{ var current_question = question_array[i];
questions(current_question.question, current_question.answer);}

if(score >= high_scores.high_score)
{console.log("You are the new high scorer");}
else{console.log("high score is " + high_scores.high_score);}


  

console.log("Your total score is " + score);
