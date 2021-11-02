var Specsmax_main = document.getElementById("Specsmax-main")
var promax_main = document.getElementById("promax-main")
var IPhon13_main = document.getElementById("IPhon13-main")
var Specs13_main = document.getElementById("Specs13-main")


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
    console.log("patata")
}