/* SetTimeOut and reload of page */

let btnContinue = document.getElementById("case1-continue");

console.log(btnContinue);

btnContinue.addEventListener("click", test);

function test() {
  setTimeout(function () {
    window.location.reload();
  }, 50000);
}
