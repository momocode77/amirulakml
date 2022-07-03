function showUpper()
{
    let v = document.getElementById('string').value;
    document.getElementById('string').value = v.toUpperCase();
    
}

function showCounter()
{
    let date1 = new Date();
    let dtString = document.getElementById('dateFuture').value;
    let date2 = new Date(dtString);
  
    // To calculate the time difference of two dates
    let Difference_In_Time = date2.getTime() - date1.getTime();
  
    // To calculate the no. of days between two dates
    let Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
    document.getElementById('counter').innerHTML = 'Countdown:'
    +Difference_In_Days.toFixed(0);

}

function showFlag(country)
{
    document.getElementById('flag').innerHTML = '<img src="Photo/'+country+'.png" width="300" >'; 
}

const btnSubmit = document.querySelector('#btnSubmit');
const btnCalculate = document.querySelector('#btnCalculate');
const num = document.querySelector('#textNum');
btnSubmit.addEventListener('click', addCourse);
btnCalculate.addEventListener('click', calculateGrade);


function addCourse() {
    let num = parseInt(textNum.value);
   if (textNum.value == "" || num > 7) {
        alert("Please enter valid number of course");
        return;
   }
    txt = "";
    for (i = 0; i < num; i++) {
        txt += '<p>Course ' + (i + 1) + ': <input type="text" class="name" placeholder="Course name" size="30"> <input type="number" class="marks" placeholder="Marks (%)" min="1" max="100"></p>'
    }
    document.querySelector('#listCourse').innerHTML = txt;
    btnCalculate.style.display = "block";
    console.log("Hello world!");
}

function calculateGrade() {
    let num = parseInt(textNum.value);
    let listMarks = document.querySelectorAll('.marks');
    totalMarks = 0.0;
    avgMarks = 0.0;
    grade = "";
    listMarks.forEach(marks => totalMarks += parseFloat(marks.value));
    if (totalMarks > 0){
        avgMarks = totalMarks / num;
        if (avgMarks >= 80)
            grade = "A";
        else if (avgMarks <80 && avgMarks >= 70)
            grade = "B";
        else if (avgMarks < 70 && avgMarks >= 50)
            grade = "C";
        else if (avgMarks < 50)
            grade = "Fail";
        document.querySelector('#totalMarks').innerHTML = "<h2>Total Marks: " + avgMarks.toFixed(1)
        + "</h2><h2>Grade:" + grade + "</h2>";
    }
}