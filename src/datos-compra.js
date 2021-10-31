var shoping =[["/src/assets/img/iphone13-blue.png","IPhone13","blue","512G","48h","1259,00€"],
["/src/assets/img/iphone13-pink-cover.png","IPhone13 cover","Pink","","48h","59,00€"]];
const dad = document.getElementById("content-finishing");

for(var shop of shoping){
    var compra = document.createElement("div");
    compra.className="compra-finishing";
    var image = document.createElement("img")
    image.src= shop[0];
    var title = document.createElement("h2");
    title.innerHTML=shop[1]+" "+shop[2]+" "+shop[3];
    var envio =document.createElement("p");
    envio.innerHTML="Envio en :"+shop[4];
    var mony = document.createElement("h2");
    mony.innerHTML=shop[5];
    var close = document.createElement("i")
    close.className="fas fa-times-circle"

    dad.appendChild(compra);
    compra.appendChild(image);
    compra.appendChild(title);
    compra.appendChild(envio);
    compra.appendChild(mony);
    compra.appendChild(close);
}




