var current =  document.getElementById('currentGrade');
var desired =  document.getElementById('desiredGrade');
var finalWeight = document.getElementById('finalWeight');
var results =  document.getElementById('finalWeights');

var form = document.getElementById('%Calc');


form.addEventListener('submit', function() {
    if (!current || !desired || !finalWeight) {
        alert("Please enter all fields.")  }
    else {
        
        var current_grade = current.value;
        var goal = desired.value;
        var final_weight = finalWeight.value;
        var result = 
        ((goal - current_grade) * (100 - final_weight)) / final_weight
    }
        
        

    
  
    alert("We did something!")
    
});