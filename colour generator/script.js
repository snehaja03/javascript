let colourCodes = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f']

const changeColour = () =>
{
    let display = document.getElementById("display");
    let randColor = "#";
    let color = document.getElementById("color");
    for(let index = 0 ; index < 6 ; index++)
    {
        let randNo = Math.floor(Math.random() * 16)
        randColor += colourCodes[randNo];
    }
    color.innerHTML = randColor;
    display.style.backgroundColor = randColor;
}