var Specsmax_main = document.getElementById("Specsmax-main")
var promax_main = document.getElementById("promax-main")
var IPhon13_main = document.getElementById("IPhon13-main")
var Specs13_main = document.getElementById("Specs13-main")


promax_main.addEventListener("mouseover", visiblemax)
promax_main.addEventListener("mouseout", visiblemax)
IPhon13_main.addEventListener("mouseover", visible13)
IPhon13_main.addEventListener("mouseout", visible13)
IPhon13_main.addEventListener("click", remAdd)
promax_main.addEventListener("click", remAdd)


function visiblemax() {
    Specsmax_main.classList.toggle("visible")
}

function visible13() {
    Specs13_main.classList.toggle("visible")
}


function remAdd() {
    promax_main.removeEventListener("mouseover", visiblemax)
    promax_main.removeEventListener("mouseout", visiblemax)
    IPhon13_main.removeEventListener("mouseover", visible13)
    IPhon13_main.removeEventListener("mouseout", visible13)
    promax_main.removeEventListener("click", remAdd)
    IPhon13_main.removeEventListener("click", remAdd)
    console.log("patata")
}



//                                 shipping
var checks = document.querySelectorAll(".shipping>p>input")
var gift = document.querySelector(".chekgift-shipping>input")
var giftText = document.querySelectorAll(".gift-shipping>div")
var Tenvio = document.querySelector(".shipping>h3")
var dataEnvio = document.getElementById("dataEnvio-shipping")
var btn_shipping = document.getElementById("button-shipping")


gift.addEventListener("click", isGift)
checks[0].addEventListener("click", shipping)
checks[1].addEventListener("click", shipping)
checks[2].addEventListener("click", shipping)

function isGift() {
    giftText[0].classList.toggle("visible")
    giftText[1].classList.toggle("visible")
}

function shipping(event) {
    var d = new Date();
    switch (event.srcElement.classList[0]) {
        case "i1":
            checks[1].checked = false
            checks[2].checked = false
            d.setUTCMilliseconds(86400000);
            break
        case "i2":
            checks[0].checked = false
            checks[2].checked = false
            d.setUTCMilliseconds(172800000);
            break
        case "i3":
            checks[1].checked = false
            checks[0].checked = false
            d.setUTCMilliseconds(259200000);
            break
    }
    var md = d
    dataEnvio.innerHTML = showTime(d) + " hasta el ";
    md.setUTCMilliseconds(86400000)
    dataEnvio.innerHTML = dataEnvio.innerHTML + showTime(md)
    if (checks[0].checked == true || checks[1].checked == true || checks[2].checked == true) {
        Tenvio.classList = "visible"
        btn_shipping.disabled = false
        btn_shipping.className = "btn-apple"
    } else {
        Tenvio.classList = ""
        btn_shipping.disabled = true
        btn_shipping.className = ""
    }
}

function showTime(a) {
    year = a.getFullYear();
    month = a.getMonth();
    Day = a.getDate();
    hours = a.getHours();
    minutes = a.getMinutes();
    return (year + "-" + month + "-" + Day + " " + hours + ":" + minutes);
}

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
/* Password input check */
function CheckPassword(inputtxt) {
    var decimal = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    if (inputtxt.value.match(decimal) && inputtxt.length >= 8 && inputtxt.length <= 20) {
        return true;
    } else {
        return false;
    }
}

/* Profile validation check */

var profileInputs = document.querySelectorAll(".profile-ul>input")
console.log(profileInputs);
var inp = document.querySelector(".address>div")
var contry = document.getElementById("select-contry")
var prefix = document.getElementById("select-prefix")
var num_address = document.getElementById("num-address")
var regular = document.getElementById("Regular-address")
var btn_address = document.getElementById("next-address")
var btn_Next = document.getElementById("next-address-a")




//            event lisener
contry.addEventListener("click", prefix_contry)
btn_address.addEventListener("click", next)
regular.addEventListener("click", function () {
    inp.classList.toggle("visible")
})
for (var i = 0; i < profileInputs.length; i++) {
    inputs[i].addEventListener("mouseup", comprovaciones)
    inputs[i].addEventListener("keyup", comprovaciones)
}
//                    comprobacion validacion
function comprovaciones(event) {
    var cont_input = event.srcElement.value;
    if (cont_input.length > 1) {
        event.srcElement.style.color = "#008000";
        event.srcElement.style.backgroundColor = "#ffffff";
    } else {
        event.srcElement.style.backgroundColor = "#ff0000";
    }
}

function next() {
    var a = 0
    for (const input of inputs) {
        if (input.classList[0] == "num-address") {
            if (allnumeric(input)) {
                console.log(allnumeric(input))
                input.style.color = "#008000";
                input.style.backgroundColor = "#ffffff";
                a++
                console.log(a)
            } else {
                input.style.color = "#000000";
                input.style.backgroundColor = "#ff0000";
            }
        } else {
            if (input.value.length > 1) {
                input.style.color = "#008000";
                input.style.backgroundColor = "#ffffff";
                a++
                console.log(a)
            } else {
                input.style.backgroundColor = "#ff0000";
            }
        }

        if (input.style.backgroundColor == "#ffffff") {
            a++
            console.log(a)
        }
    }
    if (a == 6) {
        btn_Next.href = "#shipping"
    }

}

function allnumeric(inputtxt) {
    var numbers = /^[0-9]+$/;
    if (inputtxt.value.match(numbers)) {
        return true;
    } else {
        return false;
    }
}

function prefix_contry() {
    let a = contry.selectedIndex;
    prefix.selectedIndex = a;
}
//                              end address