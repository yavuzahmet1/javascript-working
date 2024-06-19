function QuestionFunction(questionText, questionOption, correctAnswer) {
  this.questionText = questionText;
  this.questionOption = questionOption;
  this.correctAnswer = correctAnswer;

  console.log(this);
}

let questions = [
  new QuestionFunction(
    "JavaScript'deki yorum satirlari, _______ tarafindan yok sayilir.",
    {
      a: "bilgisayar ",
      b: "işletim sistemi",
      c: "derleyici",
      d: "tarayici",
    },
    "d"
  ),
  new QuestionFunction(
    "var str = JavaScript dilini seviyorum.; var sub = str.substr( 4, 6 );alert (sub);",
    {
      a: "Scr",
      b: "Script",
      c: "aSc",
      d: "aScrp",
    },
    "b"
  ),
  new QuestionFunction(
    "Which tag is correct for JavaScript?",
    {
      a: "<?……?> ",
      b: "<JavaScript…...>…..</JavaScript>",
      c: "<script Language=”JavaScript”>……</JavaScript>",
      d: "<script type = “text/JavaScript”>……</script>",
    },
    "d"
  ),
];
