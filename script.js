// let heading = document.getElementsByTagName("h1");
// heading[2].innerText = "Changed h1";
// console.log(heading[0].innerText);
// let para = document.getElementById("para");
// para.textContent
// para.innerText = "<b>Changed para </b>"
// para.innerHTML = "<b> Changed p tag</b>"
// let hola = document.getElementsByClassName('hola');
// hola[1].innerHTML = "Bye bye";

const change = () =>
{
    let display = document.getElementById("display");
    display.innerHTML = "Changed with onclick"
    display.style.backgroundColor = "pink"
    display.style.color = "blue"

}

