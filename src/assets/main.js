var shoping = []
//           main
//            dom
var Specsmax_main = document.getElementById("Specsmax-main")
var promax_main = document.getElementById("promax-main")
var IPhon13_main = document.getElementById("IPhon13-main")
var Specs13_main = document.getElementById("Specs13-main")

//           Event lisener
promax_main.addEventListener("mouseover", visiblemax)
promax_main.addEventListener("mouseout", visiblemax)
IPhon13_main.addEventListener("mouseover", visible13)
IPhon13_main.addEventListener("mouseout", visible13)
IPhon13_main.addEventListener("click", remAdd1)
promax_main.addEventListener("click", remAdd2)


function visiblemax() {
    Specsmax_main.classList.toggle("visible")
}

function visible13() {
    Specs13_main.classList.toggle("visible")
}


function remAdd1() {
    promax_main.removeEventListener("mouseover", visiblemax)
    promax_main.removeEventListener("mouseout", visiblemax)
    IPhon13_main.removeEventListener("mouseover", visible13)
    IPhon13_main.removeEventListener("mouseout", visible13)
    shopcolor = ["src/assets/img/iphone13-blue.png", "iPhone 13", "blue"]
    promax_main.removeEventListener("click", remAdd2)
    IPhon13_main.removeEventListener("click", remAdd1)
}

function remAdd2() {
    promax_main.removeEventListener("mouseover", visiblemax)
    promax_main.removeEventListener("mouseout", visiblemax)
    IPhon13_main.removeEventListener("mouseover", visible13)
    IPhon13_main.removeEventListener("mouseout", visible13)
    shopcolor = ["src/assets/img/iphone13-pro-graffiti.png", "iPhone 13 Pro Max", "Graffiti"]
    promax_main.removeEventListener("click", remAdd2)
    IPhon13_main.removeEventListener("click", remAdd1)
}




/* SetTimeOut and reload of page + removeEventlisteners of Case1*/

let btnContinue = document.getElementById("case1-continue");

btnContinue.addEventListener("click", test);

function test() {
    setTimeout(function () {
        window.location.reload();
        window.scrollTo(0, 0);
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

/* Change img src iPhone 13 to Orange */
var shopcase = []

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
    shopcase = ["src/assets/img/MM243_13.jpeg", "iPhone 13", "Orange", "", "55"]
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
    shopcase = ["src/assets/img/MM2C3.jpeg", "iPhone 13", "red", "", "55"]
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
    btnContinueCase2.href = '#profile'
    setTimeout(function () {
        window.location.reload();
        window.scrollTo(0, 0);
    }, 50000);
    shoping.push(shopcase)
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
    shopcase = ["src/assets/img/MM2D3_AV1.jpeg", "iPhone 13 Pro Max", "Orange", "", "65"]
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
    shopcase = ["src/assets/img/MM2L3_AV1_Pro.jpeg", "iPhone 13 Pro Max", "Red", "", "65"]
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

/* Profile validation check */

var profileInputs = document.querySelectorAll(".profile-ul>li>input")
//console.log(profileInputs);

var profileContinuebtn = document.querySelector('#profile-continue');
/* var correctPassword = document.querySelector('.profile-password');
var toConfirmPassword = document.querySelector('.profile-confirm');
toConfirmPassword.innerText = '';
correctPassword.innerText = ''; */

profileContinuebtn.addEventListener('click', profileNext);

//            event lisener
for (var i = 0; i < profileInputs.length; i++) {
    profileInputs[i].addEventListener("mouseup", comprovaciones)
    profileInputs[i].addEventListener("keyup", comprovaciones)
}
//                    comprobacion validacion
function comprovaciones(event) {
    var profile_cont_input = event.srcElement.value;
    if (profile_cont_input.length > 5) {
        event.srcElement.style.color = "#008000";
        event.srcElement.style.backgroundColor = "#ffffff";
        event.classList.remove('red-input-hidden');
        event.classList.remove('red-input-real');
    } else {
        event.srcElement.style.backgroundColor = "#ff0000";
    }
}

function profileNext() {
    var a = 0
    for (const x of profileInputs) {
        var hiddenInputs = document.querySelectorAll('.red-input-hidden');
        console.log(hiddenInputs);
        if (x.classList[1] == "profile-mail") {
            if (ValidateEmail(x)) {
                console.log(ValidateEmail(x))
                x.style.color = "#008000";
                x.style.backgroundColor = "#ffffff";
                a++
                console.log(a)
            } else {
                x.style.color = "#000000";
                x.style.backgroundColor = "#ff0000";
                x.classList.remove('red-input-hidden');
                x.classList.remove('red-input-real');
            }
        } else if (x.classList[1] == 'profile-password') {
            if (CheckPassword(x)) {
                console.log(CheckPassword(x))
                x.style.color = "#008000";
                x.style.backgroundColor = "#ffffff";
                a++
                console.log(a)
            } else {
                x.style.color = "#000000";
                x.style.backgroundColor = "#ff0000";
                x.classList.remove('red-input-hidden');
                x.classList.remove('red-input-real');
            }
        } else if (x.classList[1] == 'profile-confirm') {
            if (ConfirmPassword(x)) {
                console.log(ConfirmPassword(x))
                x.style.color = "#008000";
                x.style.backgroundColor = "#ffffff";
                a++
                console.log(a)
            } else {
                x.style.color = "#000000";
                x.style.backgroundColor = "#ff0000";
                x.classList.remove('red-input-hidden');
                x.classList.remove('red-input-real');
            }
        } else {
            if (x.value.length >= 5 && x.classList[1] !== 'profile-confirm' && x.classList[1] !==
                'profile-password') {
                x.style.color = "#008000";
                x.style.backgroundColor = "#ffffff";
                a++
                console.log(a)
            } else {
                x.style.backgroundColor = "#ff0000";
            }
        }
        if (x.style.backgroundColor == "#ffffff") {
            a++
            console.log(a)
        }
    }
    if (a == 4) {
        profileContinuebtn.href = "#address"
    }

}

function ValidateEmail(inputText) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (inputText.value.match(mailformat)) {
        return true;
    } else {
        return false;
    }
}


function CheckPassword(inputtxt) {
    var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    if (inputtxt.value.match(passw)) {
        return true;
    } else {
        return false;
    }
}

function ConfirmPassword(inputText) {
    var pw1 = document.getElementById('textpassword').value
    var pw2 = document.getElementById('confirmPassword').value
    console.log(pw1);
    if (pw1 === pw2) {
        return true;
    } else {}
}

//Clear Profile Form

let profileClearButton = document.querySelector('.profile-clear');

profileClearButton.addEventListener('click', clearProfileForm);

function clearProfileForm() {
    var contentProfileInput = document.querySelectorAll('.profile-ul>li>input');
    console.log(contentProfileInput);
    for (const x of contentProfileInput) {
        x.value = '';
        console.log(x.value);
    }
}

//                 address
//                  dom
var inputs = document.querySelectorAll(".address>p>input")
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
for (var i = 0; i < inputs.length; i++) {
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
                input.style.color = "#008000";
                input.style.backgroundColor = "#ffffff";
                a++
            } else {
                input.style.color = "#000000";
                input.style.backgroundColor = "#ff0000";
            }
        } else {
            if (input.value.length > 1) {
                input.style.color = "#008000";
                input.style.backgroundColor = "#ffffff";
                a++
            } else {
                input.style.backgroundColor = "#ff0000";
            }
        }

        if (input.style.backgroundColor == "#ffffff") {
            a++
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

//                                 shipping
//                                    DOM
var checks = document.querySelectorAll(".shipping>p>input")
var gift = document.querySelector(".chekgift-shipping>input")
var giftText = document.querySelectorAll(".gift-shipping>div")
var Tenvio = document.querySelector(".shipping>h3")
var dataEnvio = document.getElementById("dataEnvio-shipping")
var btn_shipping = document.getElementById("button-shipping")

//           Event lisener
gift.addEventListener("click", isGift)
checks[0].addEventListener("click", shipping)
checks[1].addEventListener("click", shipping)
checks[2].addEventListener("click", shipping)
btn_shipping.addEventListener("click", fin)
//            es un regalo
function isGift() {
    giftText[0].classList.toggle("visible")
    giftText[1].classList.toggle("visible")
}
//              selecion envio
function shipping(event) {
    var d = new Date();
    switch (event.srcElement.classList[0]) {
        case "i1":
            checks[1].checked = false
            checks[2].checked = false
            d.setUTCMilliseconds(259200000);
            for (const sh of shoping) {
                sh[5] = d
                sh[6] = "72"
            }
            break
        case "i2":
            checks[0].checked = false
            checks[2].checked = false
            d.setUTCMilliseconds(172800000);
            for (const sh of shoping) {
                sh[5] = d
                sh[6] = "48"
            }
            break
        case "i3":
            checks[1].checked = false
            checks[0].checked = false
            d.setUTCMilliseconds(86400000);
            for (const sh of shoping) {
                sh[5] = d
                sh[6] = "24"
            }
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
//          end shopping

// carrito de la compra



//array de la compra
// shoping =[["/src/assets/img/-blue.png","IPhone13","blue","512G","48h","1259"],
// ["/src/assets/img/iphone13-pink-cover.png","IPhone13 cover","Pink","","48h","59"]];
//contenedor padre
const dad = document.getElementById("content-finishing");
//creacion de html de cada comanda
function fin() {
    for (var shop of shoping) {
        var compra = document.createElement("div");
        compra.className = "compra-finishing compra";
        var image = document.createElement("img")
        image.src = shop[0];
        var title = document.createElement("h2");
        title.innerHTML = shop[1] + " " + shop[2] + " " + shop[3];
        var envio = document.createElement("p");
        envio.innerHTML = "Envio antes de:" + showTime(shop[5]);
        envio.id = "envios"
        var mony = document.createElement("h2");
        mony.innerHTML = shop[4] + "€";
        mony.className = "mony"
        var close = document.createElement("i")
        close.className = "fas fa-times-circle close-finishing"
        dad.appendChild(compra);
        compra.appendChild(image);
        compra.appendChild(title);
        compra.appendChild(envio);
        compra.appendChild(mony);
        compra.appendChild(close);
    }

    //actualizacion precio
    var envios = document.getElementById("envios")
    var mony = document.getElementsByClassName("mony")
    //contenendores donde poner el  precio
    var P_subtotal = document.getElementById("subTotal-finishing")
    var P_envio = document.getElementById("envio-finishing")
    var P_total = document.getElementById("total-finishing")

    //calcular precio productos
    var subtot = 0
    for (const mon of mony) {
        var sub = parseFloat(mon.innerText.replace(/€/g, ""))
        subtot = sub + subtot
    }
    //calcular precio envios
    var env
    switch (shoping[0][6]) {
        case "24":
            env = 10
            break
        case "48":
            env = 5
            break
        default:
            env = 0
    }

    //poner precios en pantalla
    P_subtotal.innerText = subtot + "€"
    P_envio.innerText = env + "€"
    P_total.innerText = subtot + env + "€"

    let delet = document.querySelectorAll(".close-finishing");
    for (const dele of delet) {
        dele.addEventListener("click", del)
    }
}

//terminos y condiciones
var check = document.getElementById("checkbox-finishing")
var btn_pay = document.getElementById("btn-finishing")
check.addEventListener("click", abtn)

function abtn() {
    if (check.checked == true) {
        btn_pay.disabled = false
        btn_pay.classList.toggle("btn-apple")
    } else if (check.checked == false) {
        btn_pay.disabled = true
        btn_pay.classList.toggle("btn-apple")
    }
}

//quitar producto en la cesta
function del(event) {
    var mony = document.getElementsByClassName("mony")
    //contenendores donde poner el  precio
    var P_subtotal = document.getElementById("subTotal-finishing")
    var P_envio = document.getElementById("envio-finishing")
    var P_total = document.getElementById("total-finishing")

    dad.removeChild(event.path[1])
    subtot = 0
    for (const mon of mony) {
        var sub = parseFloat(mon.innerText.replace(/€/g, ""))
        subtot = sub + subtot
    }

    var env
    switch (shoping[0][6]) {
        case "24":
            env = 10
            break
        case "48":
            env = 5
            break
        default:
            env = 0
    }
    console.log(mony.length)
    if (mony.length == 0) {
        env = 0
    }
    console.log(subtot)
    console.log(env)
    P_subtotal.innerText = subtot + "€"
    P_envio.innerText = env + "€"
    P_total.innerText = subtot + env + "€"
}



// iPHONE 13
var shopgiga = []
var shopcolor = []

// color circles

const iPinkCircle = document.getElementById('i13Pcircle');
const iBlueCircle = document.getElementById('i13Bcircle');

//  variables

let i13Front = document.getElementById('iP13BF');
let i13Side = document.getElementById('iP13BS');
let i13Center = document.getElementById('i13Center');

// small images clicked display in center

i13Side.addEventListener('click', () => {
    i13Center.src = i13Side.src;
});

i13Front.addEventListener('click', () => {
    i13Center.src = i13Front.src;
});

//  CHOOSE COLORS

// 13 pink

iPinkCircle.addEventListener('click', (e) => {

    i13Front.src = "src/assets/img/iphone13-pink.png";
    i13Side.src = 'src/assets/img/iphone-13-pink-side.jpeg';
    i13Center.src = "src/assets/img/iphone13-pink.png";
    shopcolor = ["src/assets/img/iphone13-pink.png", "iPhone 13", "pink"]
});

// 13 blue

iBlueCircle.addEventListener('click', (e) => {

    i13Front.src = "src/assets/img/iphone13-blue.png";
    i13Side.src = 'src/assets/img/iphone13-blue-side.png';
    i13Center.src = "src/assets/img/iphone13-blue.png";
    shopcolor = ["src/assets/img/iphone13-blue.png", "iPhone 13", "blue"]
});

// GIGA BYTES CARDS iPHONE 13

const card128 = document.getElementById('128');
const card256 = document.getElementById('256');
const card512 = document.getElementById('512');
const subprice = document.getElementById('subprice');

var total = 0;
var subpriceTotal = 909;


card128.addEventListener('click', () => {
    let card128Price = 699;
    total = card128Price + subpriceTotal;
    total = total.toFixed(2);
    subprice.innerHTML = total + '€';
    shopgiga = ["128G", total]
});

card256.addEventListener('click', () => {
    let card256Price = 799;
    total = card256Price + subpriceTotal;
    total = total.toFixed(2);
    subprice.innerHTML = total + '€';
    shopgiga = ["256G", total]
});

card512.addEventListener('click', () => {
    let card512Price = 999;
    total = card512Price + subpriceTotal;
    total = total.toFixed(2);
    subprice.innerHTML = total + '€';
    shopgiga = ["512G", total]
});

// BUTTONS CONTINUE & GO TO CART iPHONE 13





//----------!!!!    iPHONE 13 PRO  !!!!--------

// color circles PRO

const proGraffitiCircle = document.getElementById('proGcircle');
const proBlueCircle = document.getElementById('proBcircle');

//  variables PRO

let pro13Front = document.getElementById('pro13GF');
let pro13Side = document.getElementById('pro13GS');
let pro13Center = document.getElementById('pro13GC');

// small images clicked display in center PRO

pro13Side.addEventListener('click', () => {
    pro13Center.src = pro13Side.src;
});

pro13Front.addEventListener('click', () => {
    pro13Center.src = pro13Front.src;
});

//  CHOOSE COLOR PRO

//  Graffiti PRO

proGraffitiCircle.addEventListener('click', (e) => {

    pro13Front.src = "src/assets/img/iphone13-pro-graffiti.png";
    pro13Side.src = 'src/assets/img/iphone-13-pro-graffiti-side.png';
    pro13Center.src = "src/assets/img/iphone13-pro-graffiti.png";
    shopcolor = ["src/assets/img/iphone13-pro-graffiti.png", "iPhone 13 Pro Max", "graffiti"]
});

// Blue PRO

proBlueCircle.addEventListener('click', (e) => {

    pro13Front.src = "src/assets/img/iphone13-pro-blue.png";
    pro13Side.src = 'src/assets/img/iphone-13-pro-blue-side.jpeg';
    pro13Center.src = "src/assets/img/iphone13-pro-blue.png";

    shopcolor = ["src/assets/img/iphone13-pro-blue.png", "iPhone 13 Pro Max", "blue"]
});




// GIGA BYTES CARDS iPHONE 13 PRO

const card128Pro = document.getElementById('128Pro');
const card256Pro = document.getElementById('256Pro');
const card512Pro = document.getElementById('512Pro');
const subpricePro = document.getElementById('subpricePro');

var totalPro = 0;
var subpriceTotalPro = 999;

// Card 128 Pro
card128Pro.addEventListener('click', () => {
    let card128PricePro = 699;
    totalPro = card128PricePro + subpriceTotalPro;
    totalPro = totalPro.toFixed(2);
    subpricePro.innerHTML = totalPro + '€';
    shopgiga = ["128G", totalPro]
});
// Card 256 Pro
card256Pro.addEventListener('click', () => {
    let card256PricePro = 799;
    totalPro = card256PricePro + subpriceTotalPro;
    totalPro = totalPro.toFixed(2);
    subpricePro.innerHTML = totalPro + '€';
    shopgiga = ["256G", totalPro]
});
// Card 512 Pro
card512Pro.addEventListener('click', () => {
    let card512PricePro = 999;
    totalPro = card512PricePro + subpriceTotalPro;
    totalPro = totalPro.toFixed(2);
    subpricePro.innerHTML = totalPro + '€';
    shopgiga = ["512G", totalPro]
});

// BUTTONS CONTINUE & GO TO CART PRO

const continueBtnPro = document.getElementById('continueBtnPro');
const goToCartPro = document.getElementById('goToCartBtnPro');

const continueBtn = document.getElementById('continueBtn');
const goToCart = document.getElementById('goToCartBtn');

goToCart.addEventListener("click", unirArr)
continueBtn.addEventListener("click", goCase)
goToCartPro.addEventListener("click", unirArr)
continueBtnPro.addEventListener("click", goCasePro)


function goCase() {
    shopcase = ["src/assets/img/MM2C3.jpeg", "iPhone 13", "red", "", "55"]
    unirArr()
}

function goCasePro() {
    shopcase = ["src/assets/img/MM2L3_AV1_Pro.jpeg", "iPhone 13 Pro Max", "Red", "", "65"]
    unirArr()
}


function unirArr() {
    var shopIphone = shopcolor.concat(shopgiga)
    shoping.push(shopIphone)
}