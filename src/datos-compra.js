var shoping =[["/src/assets/img/iphone13-blue.png","IPhone13","blue","512G","48h","1259"],
["/src/assets/img/iphone13-pink-cover.png","IPhone13 cover","Pink","","48h","59"]];
const dad = document.getElementById("content-finishing");

for(var shop of shoping){
    var compra = document.createElement("div");
    compra.className="compra-finishing compra";
    var image = document.createElement("img")
    image.src= shop[0];
    var title = document.createElement("h2");
    title.innerHTML=shop[1]+" "+shop[2]+" "+shop[3];
    var envio =document.createElement("p");
    envio.innerHTML="Envio en :"+shop[4];
    envio.id="envios"
    var mony = document.createElement("h2");
    mony.innerHTML=shop[5]+"€";
    mony.className="mony"
    var close = document.createElement("i")
    close.className="fas fa-times-circle close-finishing"

    dad.appendChild(compra);
    compra.appendChild(image);
    compra.appendChild(title);
    compra.appendChild(envio);
    compra.appendChild(mony);
    compra.appendChild(close);
}

var envios = document.getElementById("envios")
var mony = document.getElementsByClassName("mony")
var subtotal = document.getElementById("subTotal-finishing")
var envio = document.getElementById("envio-finishing")
var total = document.getElementById("total-finishing")


var subtot = 0
for (const mon of mony) {
    var sub=parseFloat(mon.innerText.replace(/€/g,""))
    subtot = sub + subtot
}
var env
switch(envios.innerText){
    case "Envio en :24h":
        env =10
        break
    case "Envio en :48h":
        env =5
        break
    case "Envio en :72h":
        env =0
        break
    default:
        env =0
}
subtotal.innerText=subtot+"€"
envio.innerText= env+"€"
total.innerText= subtot + env +"€"

var check = document.getElementById("checkbox-finishing")
var btn_pay = document.getElementById("btn-finishing")

check.addEventListener("click",abtn)
function abtn(){
if (check.checked==true){
    btn_pay.disabled=false
    btn_pay.classList.toggle("btn-apple")
    
}
else if (check.checked==false){
    btn_pay.disabled=true
    btn_pay.classList.toggle("btn-apple")
}
}




var delet =document.getElementsByClassName("close-finishing");
delet[0].addEventListener("click",del)
delet[1].addEventListener("click",del)

function del(event){
    dad.removeChild(event.path[1])
    subtot = 0
    for (const mon of mony) {
        var sub=parseFloat(mon.innerText.replace(/€/g,""))
        subtot = sub + subtot
    }
    if(mony.length==0){env=0}
    subtotal.innerText=subtot+"€"
    envio.innerText= env+"€"
    total.innerText= subtot + env +"€"
}


