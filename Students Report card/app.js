var students = [

 {
    name : "Aarij Maniar",
    rollno : 1,
       sem1 : {maths : 56, eng : 89, urdu : 67, Isl : 56, Pst : 72},
       sem2 : {maths : 54, eng : 81, urdu : 63, Isl : 59, Pst : 73},
       sem3 : {maths : 51, eng : 82, urdu : 62, Isl : 51, Pst : 74},
       sem4 : {maths : 52, eng : 83, urdu : 60, Isl : 50, Pst : 71},
       sem5 : {maths : 59, eng : 87, urdu : 64, Isl : 53, Pst : 70},
},

{
    name : "Umer Farooq",
    rollno : 2,
       sem1 : {maths : 41, eng : 54, urdu : 30, Isl : 56, Pst : 41},
       sem2 : {maths : 44, eng : 43, urdu : 32, Isl : 59, Pst : 43},
       sem3 : {maths : 46, eng : 41, urdu : 37, Isl : 51, Pst : 44},
       sem4 : {maths : 49, eng : 49, urdu : 38, Isl : 50, Pst : 49},
       sem5 : {maths : 37, eng : 52, urdu : 35, Isl : 53, Pst : 35},
},

{
    name : "Pappeyy",
    rollno : 3,
       sem1 : {maths : 60, eng : 88, urdu : 67, Isl : 56, Pst : 62},
       sem2 : {maths : 59, eng : 85, urdu : 61, Isl : 51, Pst : 53},
       sem3 : {maths : 51, eng : 81, urdu : 65, Isl : 59, Pst : 64},
       sem4 : {maths : 53, eng : 80, urdu : 67, Isl : 61, Pst : 71},
       sem5 : {maths : 55, eng : 89, urdu : 69, Isl : 65, Pst : 73},
},

{
    name : "flexxxxx",
    rollno : 4,
       sem1 : {maths : 45, eng : 98, urdu : 67, Isl : 50, Pst : 64},
       sem2 : {maths : 59, eng : 82, urdu : 63, Isl : 52, Pst : 61},
       sem3 : {maths : 52, eng : 76, urdu : 64, Isl : 61, Pst : 54},
       sem4 : {maths : 55, eng : 79, urdu : 61, Isl : 70, Pst : 67},
       sem5 : {maths : 57, eng : 87, urdu : 69, Isl : 53, Pst : 72},
},

{
    name : "zubairr",
    rollno : 5,
       sem1 : {maths : 63, eng : 83, urdu : 57, Isl : 50, Pst : 67},
       sem2 : {maths : 67, eng : 89, urdu : 63, Isl : 59, Pst : 71},
       sem3 : {maths : 70, eng : 87, urdu : 61, Isl : 51, Pst : 62},
       sem4 : {maths : 73, eng : 83, urdu : 60, Isl : 50, Pst : 56},
       sem5 : {maths : 51, eng : 85, urdu : 69, Isl : 53, Pst : 74},
},

]

var Reportcard = document.getElementById("Reportcard")
var searchbutton = document.getElementById("searchbutton")
var userinp = document.getElementById("userinp")
var userinfo = document.getElementById("userinfo")

// var obatinedsem1 = students.sem1.maths + students.sem1.eng + students.sem1.urdu + students.sem1.Isl + students.sem1.Pst

searchbutton.onclick = function () {

    if(!userinp.value){
        alert("Please Enter Your Roll no")
        return
    }

    var student = students.find( s => s.rollno == userinp.value )

    if(!student){
        alert("Student not found")
        return
    }

var obatinedsem1 = student.sem1.maths + student.sem1.eng + student.sem1.urdu + student.sem1.Isl + student.sem1.Pst
var obatinedsem2 = student.sem2.maths + student.sem2.eng + student.sem2.urdu + student.sem2.Isl + student.sem2.Pst
var obatinedsem3 = student.sem3.maths + student.sem3.eng + student.sem3.urdu + student.sem3.Isl + student.sem3.Pst
var obatinedsem4 = student.sem4.maths + student.sem4.eng + student.sem4.urdu + student.sem4.Isl + student.sem4.Pst
var obatinedsem5 = student.sem5.maths + student.sem5.eng + student.sem5.urdu + student.sem5.Isl + student.sem5.Pst

var totalmarks = 400

var Percentagesem1 = obatinedsem1 / totalmarks * 100
var Percentagesem2 = obatinedsem2 / totalmarks * 100
var Percentagesem3 = obatinedsem3 / totalmarks * 100
var Percentagesem4 = obatinedsem4 / totalmarks * 100
var Percentagesem5 = obatinedsem5 / totalmarks * 100

function Gradesem1 ( Percentagesem1 ) {
    if ( Percentagesem1 >= 90 ){
        return "A+"
    }if ( Percentagesem1 >= 80 ){
        return "A"
    }if ( Percentagesem1 >= 70 ){
        return "B+"
    }if ( Percentagesem1 >= 60 ){
        return "B"
    }if ( Percentagesem1 >= 50 ){
        return "C"
    }if ( Percentagesem1 >= 40 ){
        return "D"
    }if ( Percentagesem1 <= 33 ){
        return "F"
    }
}

function Gradesem2 ( Percentagesem2 ) {
    if ( Percentagesem2 >= 90 ){
        return "A+"
    }if ( Percentagesem2 >= 80 ){
        return "A"
    }if ( Percentagesem2 >= 70 ){
        return "B+"
    }if ( Percentagesem2 >= 60 ){
        return "B"
    }if ( Percentagesem2 >= 50 ){
        return "C"
    }if ( Percentagesem2 >= 40 ){
        return "D"
    }if ( Percentagesem2 <= 33 ){
        return "F"
    }
}

function Gradesem3 ( Percentagesem3 ) {
    if ( Percentagesem3 >= 90 ){
        return "A+"
    }if ( Percentagesem3 >= 80 ){
        return "A"
    }if ( Percentagesem3 >= 70 ){
        return "B+"
    }if ( Percentagesem3 >= 60 ){
        return "B"
    }if ( Percentagesem3 >= 50 ){
        return "C"
    }if ( Percentagesem3 >= 40 ){
        return "D"
    }if ( Percentagesem3 <= 33 ){
        return "F"
    }
}

function Gradesem4 ( Percentagesem4 ) {
    if ( Percentagesem4 >= 90 ){
        return "A+"
    }if ( Percentagesem4 >= 80 ){
        return "A"
    }if ( Percentagesem4 >= 70 ){
        return "B+"
    }if ( Percentagesem4 >= 60 ){
        return "B"
    }if ( Percentagesem4 >= 50 ){
        return "C"
    }if ( Percentagesem4 >= 40 ){
        return "D"
    }if ( Percentagesem4 <= 33 ){
        return "F"
    }
}

function Gradesem5 ( Percentagesem5 ) {
    if ( Percentagesem5 >= 90 ){
        return "A+"
    }if ( Percentagesem5 >= 80 ){
        return "A"
    }if ( Percentagesem5 >= 70 ){
        return "B+"
    }if ( Percentagesem5 >= 60 ){
        return "B"
    }if ( Percentagesem5 >= 50 ){
        return "C"
    }if ( Percentagesem5 >= 40 ){
        return "D"
    }if ( Percentagesem5 <= 33 ){
        return "F"
    }
}

 userinfo.innerHTML = `<div class="displayflex">
    <h4>Student Name:${student.name}</h4>
    <p class="Rollno">Roll-no:${student.rollno}</p>
    </div>`

Reportcard.innerHTML = `<tr>
            <th>Semesters</th>
            <th>Maths</th>
            <th>Eng</th>
            <th>Urdu</th>
            <th>Isl</th>
            <th>P.st</th>
            <th>Obtained Marks</th>
            <th>Total Marks</th>
            <th>Percentage</th>
            <th>Grade</th>
        </tr>

        <tr>
            <th>Sem 1</th>
            <td>${student.sem1.maths}</td>
            <td>${student.sem1.eng}</td>
            <td>${student.sem1.urdu}</td>
            <td>${student.sem1.Isl}</td>
            <td>${student.sem1.Pst}</td>
            <td>${obatinedsem1}</td>
            <td>${totalmarks}</td>
            <td>${Percentagesem1}</td>
            <td>${Gradesem1(Percentagesem1)}</td>
        </tr>

        <tr>
            <th>Sem 2</th>
            <td>${student.sem2.maths}</td>
            <td>${student.sem2.eng}</td>
            <td>${student.sem2.urdu}</td>
            <td>${student.sem2.Isl}</td>
            <td>${student.sem2.Pst}</td>
            <<td>${obatinedsem2}</td>
            <td>${totalmarks}</td>
            <td>${Percentagesem2}</td>
            <td>${Gradesem2(Percentagesem2)}</td>
        </tr>

        <tr>
            <th>Sem 3</th>
            <td>${student.sem3.maths}</td>
            <td>${student.sem3.eng}</td>
            <td>${student.sem3.urdu}</td>
            <td>${student.sem3.Isl}</td>
            <td>${student.sem3.Pst}</td>
            <td>${obatinedsem3}</td>
            <td>${totalmarks}</td>
            <td>${Percentagesem3}</td>
            <td>${Gradesem3(Percentagesem3)}</td>
        </tr>

        <tr>
            <th>Sem 4</th>
            <td>${student.sem4.maths}</td>
            <td>${student.sem4.eng}</td>
            <td>${student.sem4.urdu}</td>
            <td>${student.sem4.Isl}</td>
            <td>${student.sem4.Pst}</td>
            <td>${obatinedsem4}</td>
            <td>${totalmarks}</td>
            <td>${Percentagesem4}</td>
            <td>${Gradesem4(Percentagesem4)}</td>
        </tr>

        <tr>
            <th>Sem 5</th>
            <td>${student.sem5.maths}</td>
            <td>${student.sem5.eng}</td>
            <td>${student.sem5.urdu}</td>
            <td>${student.sem5.Isl}</td>
            <td>${student.sem5.Pst}</td>
            <td>${obatinedsem5}</td>
            <td>${totalmarks}</td>
            <td>${Percentagesem5}</td>
            <td>${Gradesem5(Percentagesem5)}</td>
        </tr>`

        userinp.value = ""

}