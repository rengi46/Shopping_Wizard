/* SetTimeOut and reload of page */

let btnContinueCase2 = document.getElementById("case2-continue");

btnContinueCase2.addEventListener("click", test);

function test() {
    setTimeout(function () {
        window.location.reload();
    }, 50000);
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

/* Change img src iPhone 13 Pro to Orange */

let btnOrangeCase2 = document.querySelector('.orange-button2');

btnOrangeCase2.addEventListener('click', case2ChangeImgToOrange);

function case2ChangeImgToOrange() {
    let case1RedMainImgCase2 = document.querySelector('.case2-main-image');
    let case1RedFirstSideImgCase2 = document.querySelector('.firstSideRed2');
    let case1RedSecondSideImgCase2 = document.querySelector('.secondSideRed2');
    let case1RedThirdSideImgCase2 = document.querySelector('.thirdSideRed2');
    case1RedMainImgCase2.src = "src/assets/img/MM2D3_AV1.jpeg";
    case1RedFirstSideImgCase2.src = "src/assets/img/MM2D3_AV1.jpeg";
    case1RedSecondSideImgCase2.src = "src/assets/img/MM2D3_AV4.jpeg";
    case1RedThirdSideImgCase2.src = "src/assets/img/MM2D3_AV5.jpeg";
}

/* Change img src iPhone 13 to Red */

let btnRedCase2 = document.querySelector('.red-button2');

btnRedCase2.addEventListener('click', case2ChangeImgToRed);

function case2ChangeImgToRed() {
    let case1OrangeMainImgCase2 = document.querySelector('.case2-main-image');
    let case1OrangeFirstSideImgCase2 = document.querySelector('.firstSideRed2');
    let case1OrangeSecondSideImgCase2 = document.querySelector('.secondSideRed2');
    let case1OrangeThirdSideImgCase2 = document.querySelector('.thirdSideRed2');
    case1OrangeMainImgCase2.src = "src/assets/img/MM2L3_AV1_Pro.jpeg";
    case1OrangeFirstSideImgCase2.src = "src/assets/img/MM2L3_AV1_Pro.jpeg";
    case1OrangeSecondSideImgCase2.src = "src/assets/img/MM2L3_AV4_Pro.jpeg";
    case1OrangeThirdSideImgCase2.src = "src/assets/img/MM2L3_AV5_Pro.jpeg";
}

/* Change img to Main Display */

let case1RedMainImgCase2 = document.querySelector('.case2-main-image');
let case1RedFirstSideImgCase2 = document.querySelector('.firstSideRed2');
let case1RedSecondSideImgCase2 = document.querySelector('.secondSideRed2');
let case1RedThirdSideImgCase2 = document.querySelector('.thirdSideRed2');

case1RedFirstSideImgCase2.addEventListener('click', case2ChangeFirstToMain);
case1RedSecondSideImgCase2.addEventListener('click', case2ChangeSecondToMain);
case1RedThirdSideImgCase2.addEventListener('click', case2ChangeThirdToMain);

function case2ChangeFirstToMain() {
    case1RedMainImgCase2.src = case1RedFirstSideImgCase2.src;
}

function case2ChangeSecondToMain() {
    case1RedMainImgCase2.src = case1RedSecondSideImgCase2.src;
}

function case2ChangeThirdToMain() {
    case1RedMainImgCase2.src = case1RedThirdSideImgCase2.src;
}