//OOP

let question = {
  questionText: "Which tag is correct for JavaScript?",
  ansverOption: {
    a: "<?……?> ",
    b: "<JavaScript…...>…..</JavaScript>",
    c: "<script Language=”JavaScript”>……</JavaScript>",
    d: "<script type = “text/JavaScript”>……</script>",
  },
  correctAnswer: "d",
  checkTheAnswer: function (answer) {
    return answer === this.correctAnswer;
  },
};

function QuestionFunction(questionText, questionOption, correctAnswer) {
  this.questionText = questionText;
  this.questionOption = questionOption;
  this.correctAnswer = correctAnswer;
  this.checkTheAnswer = function (answer) {
    return answer === this.correctAnswer;
  };
}

let question1 = new QuestionFunction(
  "Which tag is correct for JavaScript?",
  {
    a: "<?……?> ",
    b: "<JavaScript…...>…..</JavaScript>",
    c: "<script Language=”JavaScript”>……</JavaScript>",
    d: "<script type = “text/JavaScript”>……</script>",
  },
  "d"
);

console.log(question1.questionText);
