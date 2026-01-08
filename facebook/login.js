var email = document.getElementById("em")
var password = document.getElementById("pass")
var btn = document.getElementById("btn")

btn.onclick = function ( ) {

    if(!email.value){
        alert("Please Enter Your Email")
        return
    }

    if(!password.value){
        alert("Please Enter Your password")
        return
    }

    if(password.value.length <= 8 ){
        alert("Password length should be 8 characters")
        return
    }


    
setTimeout ( function () {
    window.location.href = "dashboard.html"
},1000)

}




