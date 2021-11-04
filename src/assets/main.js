//           main
//            dom
var Specsmax_main = document.getElementById("Specsmax-main")
var promax_main = document.getElementById("promax-main")
var IPhon13_main = document.getElementById("IPhon13-main")
var Specs13_main = document.getElementById("Specs13-main")

//           Event lisener
promax_main.addEventListener("mouseover",visiblemax)
promax_main.addEventListener("mouseout",visiblemax)
IPhon13_main.addEventListener("mouseover",visible13)
IPhon13_main.addEventListener("mouseout",visible13)
IPhon13_main.addEventListener("click",remAdd)
promax_main.addEventListener("click",remAdd)


function visiblemax(){
    Specsmax_main.classList.toggle("visible")
}
function visible13(){
    Specs13_main.classList.toggle("visible")
}


function remAdd(){
    promax_main.removeEventListener("mouseover",visiblemax)
    promax_main.removeEventListener("mouseout",visiblemax)
    IPhon13_main.removeEventListener("mouseover",visible13)
    IPhon13_main.removeEventListener("mouseout",visible13)
    promax_main.removeEventListener("click",remAdd)
    IPhon13_main.removeEventListener("click",remAdd)
}



//                                 shipping
//                                    DOM
var checks=document.querySelectorAll(".shipping>p>input")
var gift=document.querySelector(".chekgift-shipping>input")
var giftText=document.querySelectorAll(".gift-shipping>div")
var Tenvio=document.querySelector(".shipping>h3")
var dataEnvio=document.getElementById("dataEnvio-shipping")
var btn_shipping=document.getElementById("button-shipping")

//           Event lisener
gift.addEventListener("click",isGift)
checks[0].addEventListener("click",shipping)
checks[1].addEventListener("click",shipping)
checks[2].addEventListener("click",shipping)
//            es un regalo
function isGift(){
    giftText[0].classList.toggle("visible")
    giftText[1].classList.toggle("visible")
}
//              selecion envio
function shipping(event){
    var d= new Date();
    switch(event.srcElement.classList[0]){
        case"i1":
        checks[1].checked=false
        checks[2].checked=false
        d.setUTCMilliseconds(86400000);
        break
        case"i2":
        checks[0].checked=false
        checks[2].checked=false
        d.setUTCMilliseconds(172800000);
        break
        case"i3":
        checks[1].checked=false
        checks[0].checked=false
        d.setUTCMilliseconds(259200000);
        break
    }
    var md = d
    dataEnvio.innerHTML=showTime(d) +" hasta el ";
    md.setUTCMilliseconds(86400000)
    dataEnvio.innerHTML=dataEnvio.innerHTML+showTime(md)
    if(checks[0].checked==true||checks[1].checked==true||checks[2].checked==true){
        Tenvio.classList= "visible"
        btn_shipping.disabled =false
        btn_shipping.className="btn-apple"
    }
    else{
        Tenvio.classList= ""
        btn_shipping.disabled =true
        btn_shipping.className=""
    }
}

function showTime(a){
    year = a.getFullYear();
    month = a.getMonth();
    Day = a.getDate();
    hours = a.getHours();
    minutes = a.getMinutes();
    return (year+"-"+month+"-"+Day+" "+hours+":"+minutes);
}

//                 address
//                  dom
var inputs=document.querySelectorAll(".address>p>input")
var inp=document.querySelector(".address>div")
var regular = document.getElementById("Regular-address")
var btn_address = document.getElementById("next-address")
var btn_Next = document.getElementById("next-address-a")


//            event lisener
btn_address.addEventListener("click",next)
regular.addEventListener("click",function(){inp.classList.toggle("visible")})
for(var i =0;i<inputs.length;i++){
    inputs[i].addEventListener("mouseup",comprovaciones)
    inputs[i].addEventListener("keyup",comprovaciones) 
}
//                    comprobacion validacion
function comprovaciones(event){
    var cont_input=event.srcElement.value;
    if(cont_input.length>1){
        event.srcElement.style.color="#008000";
        event.srcElement.style.backgroundColor="#ffffff";
    }
    else{
        event.srcElement.style.backgroundColor="#ff0000";
    }
 
}

function next(){
    var a =0
    for (const input of inputs) {
        if(input.value.length>1){
            input.style.color="#008000";
            input.style.backgroundColor="#ffffff";
            a++
            console.log(a)
        }
        else{
            input.style.backgroundColor="#ff0000";
        }
        if(input.style.backgroundColor=="#ffffff"){
            a++
            console.log(a)
        }
    }
    if(a==6){
        btn_Next.href="#shipping"
    }

}