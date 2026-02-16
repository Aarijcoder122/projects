var btn = document.getElementById("btn")
var firstform = document.getElementById("submitform")
var myname = document.getElementById("name")
var email = document.getElementById("email")
var rollno = document.getElementById("rollno")
var course = document.getElementById("Course")
var campus = document.getElementById("Campus")
var username = document.getElementById("username")
var useremail = document.getElementById("useremail")
var userrollno = document.getElementById("userrollno")
var usercourse = document.getElementById("usercourse")
var usercampus = document.getElementById("usercampus")
var secondform = document.getElementById("submintformdetails") 

var backbtn = document.getElementById("backbtn")

btn.onclick = function () {
    username.innerText = myname.value
    useremail.innerText = email.value
    userrollno.innerText = rollno.value
    usercourse.innerText = course.value
    usercampus.innerText = campus.value

    if(!myname.value){
        alert("Please Enter Your Name")
        return
    }

    if(!email.value){
        alert("Please Enter Your Email")
        return
    }

    if(!rollno.value){
        alert("Please Enter Your RollNo")
        return
    }

    if(!course.value){
        alert("Please Enter Your COurse")
        return
    }

    if(!campus.value){
        alert("Please Enter Your Campus")
        return
    }

    firstform.style.display = "none"
    secondform.style.display = "block"
}

backbtn.onclick = function ( ) {
    secondform.style.display = "none"
    firstform.style.display = "block"
}