var inputProgram = document.getElementById("eduInput");
var outputProgram = document.getElementById("program");
var inputJob = document.getElementById("jobInput");
var outputJob = document.getElementById("outputJob");
var radioCourse = document.querySelectorAll('input[type="radio"]');
var OutputCourse = document.getElementById("OutputCourse");
var inputFaculty = document.getElementById("inputFaculty");
var outuptFaculty = document.getElementById("outputFaculty");
var inputGrade = document.getElementById("inputGrade");
var outputGrade = document.getElementById("outputGrade");




inputProgram.addEventListener('input', handleInput);
function handleInput(event) {
    inputValue = event.target.value;
    outputProgram.textContent = inputValue;
  }

inputJob.addEventListener('input', handleInput1);
function handleInput1(event1) {
    inputValue1 = event1.target.value;
    outputJob.textContent = inputValue1;
  }

radioCourse.forEach(function(radioOption){
  radioOption.addEventListener('change', function(){
    var label = document.querySelector(`label[for="${this.id}"]`);
    var labelText = label.textContent;
    OutputCourse.textContent = labelText;
  });
});

inputGrade.addEventListener('change', function(){
    outputGrade.textContent = inputGrade.value;
  });

inputFaculty.addEventListener('change', function(){
    outputFaculty.textContent = inputFaculty.value;
    });


