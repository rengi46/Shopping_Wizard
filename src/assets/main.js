var Specsmax_main = document.getElementById("Specsmax-main")
var promax_main = document.getElementById("promax-main")
var IPhon13_main = document.getElementById("IPhon13-main")
var Specs13_main = document.getElementById("Specs13-main")


promax_main.addEventListener("mouseover",visiblemax)
promax_main.addEventListener("mouseout",visiblemax)
IPhon13_main.addEventListener("mouseover",visible13)
IPhon13_main.addEventListener("mouseout",visible13)


function visiblemax(){
    Specsmax_main.classList.toggle("visible")
}
function visible13(){
    Specs13_main.classList.toggle("visible")
}