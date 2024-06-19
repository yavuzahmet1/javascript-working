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

let question2 = {
  questionText:
    "JavaScript'deki yorum satırları, _______ tarafından yok sayılır.",
  ansverOption: {
    a: "bilgisayar ",
    b: "işletim sistemi",
    c: "derleyici",
    d: "tarayıcı",
  },
  correctAnswer: "d",
  checkTheAnswer: function (answer) {
    return answer === this.correctAnswer;
  },
};

let question3 = {
  questionText:
    "var str = JavaScript dilini seviyorum.; var sub = str.substr( 4, 6 );alert (sub);",
  ansverOption: {
    a: "Scr",
    b: "Script",
    c: "aSc",
    d: "aScrp",
  },
  correctAnswer: "b",
  checkTheAnswer: function (answer) {
    return answer === this.correctAnswer;
  },
};

console.log(question.questionText);
console.log(question.checkTheAnswer("d"));
console.log(question2.questionText);
console.log(question2.checkTheAnswer("d"));
console.log(question3.questionText);
console.log(question3.checkTheAnswer("b"));
