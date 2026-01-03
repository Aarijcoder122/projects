var btn = document.getElementById("btn")

btn.onclick = function () {
    var hexcode = "0123456789ABCDEF"
    var color = "#"
    for( i=0; i < 6; i++){
        color = color + hexcode[Math.floor(Math.random()*16)]
    }

    document.body.style.backgroundColor = color
    document.getElementById("code").innerHTML = "Color is " + color
}