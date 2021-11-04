/* SetTimeOut and reload of page */

let btnContinue = document.getElementById("case1-continue");

btnContinue.addEventListener("click", test);

function test() {
  setTimeout(function () {
    window.location.reload();
  }, 1000);

}

/* Legend dynamic */

/* let legendData = document.querySelector("legend").innerHTML; //get legend content

console.log(legendData);

let colorBtn = document.querySelector('.orange-button'); // get colors as buttons

colorBtn.addEventListener('click', changeToOrange);

function changeToOrange() {
  legendData.innerHTML = legendData.replace('Rojo', 'Caléndula');
  console.log(legendData);
}; */

/* Change img src iPhone 13 to Orange */

let btnOrange = document.querySelector('.orange-button');

btnOrange.addEventListener('click', case1ChangeImgToOrange);

function case1ChangeImgToOrange() {
  let case1RedMainImg = document.querySelector('.case1-main-image');
  let case1RedFirstSideImg = document.querySelector('.firstSideRed');
  let case1RedSecondSideImg = document.querySelector('.secondSideRed');
  let case1RedThirdSideImg = document.querySelector('.thirdSideRed');
  case1RedMainImg.src = "src/assets/img/MM243_13.jpeg";
  case1RedFirstSideImg.src = "src/assets/img/MM243_13.jpeg";
  case1RedSecondSideImg.src = "src/assets/img/MM243_AV5_13.jpeg";
  case1RedThirdSideImg.src = "src/assets/img/MM243_AV6_13.jpeg";
}

/* Change img src iPhone 13 to Red */

let btnRed = document.querySelector('.red-button');

btnRed.addEventListener('click', case1ChangeImgToRed);

function case1ChangeImgToRed() {
  let case1OrangeMainImg = document.querySelector('.case1-main-image');
  let case1OrangeFirstSideImg = document.querySelector('.firstSideRed');
  let case1OrangeSecondSideImg = document.querySelector('.secondSideRed');
  let case1OrangeThirdSideImg = document.querySelector('.thirdSideRed');
  case1OrangeMainImg.src = "src/assets/img/MM2C3.jpeg";
  case1OrangeFirstSideImg.src = "src/assets/img/MM2C3.jpeg";
  case1OrangeSecondSideImg.src = "src/assets/img/MM2C3_AV5.jpeg";
  case1OrangeThirdSideImg.src = "src/assets/img/MM2C3_AV6.jpeg";
}

/* Change img to Main Display */

let case1RedMainImg = document.querySelector('.case1-main-image');
let case1RedFirstSideImg = document.querySelector('.firstSideRed');
let case1RedSecondSideImg = document.querySelector('.secondSideRed');
let case1RedThirdSideImg = document.querySelector('.thirdSideRed');

case1RedFirstSideImg.addEventListener('click', case1ChangeFirstToMain);
case1RedSecondSideImg.addEventListener('click', case1ChangeSecondToMain);
case1RedThirdSideImg.addEventListener('click', case1ChangeThirdToMain);

function case1ChangeFirstToMain() {
  case1RedMainImg.src = case1RedFirstSideImg.src;
}

function case1ChangeSecondToMain() {
  case1RedMainImg.src = case1RedSecondSideImg.src;
}

function case1ChangeThirdToMain() {
  case1RedMainImg.src = case1RedThirdSideImg.src;
}