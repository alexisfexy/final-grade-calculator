var current =  document.getElementById('currentGrade');
var desired =  document.getElementById('desiredGrade');
var finalWeight = document.getElementById('finalWeight');
var results =  document.getElementById('finalWeights');

var form = document.getElementById('%Calc');


form.addEventListener('submit', function() {
    if (!current || !desired || !finalWeight) {
        alert("Please enter all fields.")  }
    else {
        
        var have = current.value;
        var want = desired.value;
        var weight = finalWeight.value;
        
        
    }
        
        

    
  
    alert("We did something!")
    
});