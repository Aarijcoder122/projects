var para = document.getElementById("para")
var btn = document.getElementById("btn")
var fulltext = `Hello My name is batman I am one of the famous heroes in DC`
var shorttext = `Hello My name is batman`

btn.onclick = function ( ) {
    if ( btn.innerText == "See More" ) {
        para.innerText = fulltext
        btn.innerText = "See Less"
    } else {
        para.innerText = shorttext
        btn.innerText = "See More"
    }
}