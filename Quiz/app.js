const quiz = [{question:`ゲーム市場、最も売れたゲーム機は次のうちどれ？`,
               answers:[`スーパーファミコン`,`プレイステーション２`,`ニンテンドーDS`],
               correct:`ニンテンドーDS`},
              {question:`ナルトが使う必殺技は？`,
               answers:[`千鳥`,`螺旋丸`,`避雷針の術`],
               correct:`螺旋丸`},
              {question:`黒崎一護の卍解の名前は？`,
               answers:[`鏡花水月`,`千本桜`,`天鎖斬月`],
               correct:`天鎖斬月`}
              ];
let quizIndex = 0;
const quizLength = quiz.length; 
let score = 0;     
//const question = `ゲーム市場、最も売れたゲーム機は次のうちどれ？`
//const answers = [`スーパーファミコン`,`プレイステーション２`,`ニンテンドーDS`];
//const correct = `ニンテンドーDS`;

const $button = document.getElementsByTagName(`button`);
const buttonLength = $button.length;

const setupQuiz = () =>{
document.getElementById('js-question').textContent = quiz[quizIndex].question;
//$button[0].textContent = answers[0];
//$button[1].textContent = answers[1];
//$button[2].textContent = answers[2];

let buttonIndex = 0;
//let buttonLength = $button.length;
while(buttonIndex < buttonLength){
  $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
  buttonIndex++;
}
};
setupQuiz();

const clickHandler = (e) =>{
if(e.target.textContent === quiz[quizIndex].correct){
  window.alert(`正解！`);
  score++;
  } else {
  window.alert(`不正解！`);
  }

  quizIndex++;

if (quizIndex < quizLength){
    setupQuiz();
} else {
    window.alert(`終了！！あなたの正解数は` + score + `/` + quizLength + `です。`);
}
};

//$button[0].addEventListener(`click`,(e) => {
  //clickHandler(e)
//});
//$button[1].addEventListener(`click`,(e) => {
  //clickHandler(e)
//});
//$button[2].addEventListener(`click`,(e) => {
  //clickHandler(e)
//});

let handlerIndex = 0;
//const buttonLength = $button.length;
while(handlerIndex < buttonLength){
$button[handlerIndex].addEventListener(`click`,(e) => {
  clickHandler(e)
});  
  handlerIndex++;
}
