var current_grade =  document.getElementById('currentGrade');
var desired_grade =  document.getElementById('desiredGrade');
var finalWeight = document.getElementById('finalWeight')

// if using input type= submit: 
// var form = document.getElementById('%Calc'); 
// form.addEventListener('click', function() 
function calculateGrade() {
    // check for blank entries 
    if (!current_grade.value || !desired_grade.value || !finalWeight.value) {
        alert('Please enter all fields.')  }
    // check for non numeric
    else if (isNaN(current_grade.value) || isNaN(desired_grade.value) || isNaN(finalWeight.value)) { 
        alert('Please only enter numeric values.')  }
    // correct input: do calculation 
    else {
    
        var C = parseFloat(current_grade.value); // C = Your current grade
        var D = parseFloat(desired_grade.value); // D = Grade you want for the class
        var final_weight = parseFloat(finalWeight.value); 
        var w = final_weight / 100; // w = Weight of final exam, in decimal
        var F =  (D -((1-w)*C))/w; // F = Final exam grade

        var good_luck_message = function() {
            
            if (F <= 0) { return "Congratulations! Don't bother studying."; }
            if (F > 0 && F <= 40) { return "Well, this will be easy!" }
            if (F > 50 && F <= 70) { return "Nice job!" }
            if (F > 70 && F <= 90 ) { return "You can do it!" }
            if (F > 90 && F <= 100) { return "Don't give up. You got this!" }
            else { return "Don't worry, grades aren't everything.";}
        }
        var result = "You need to score at least a " +  F.toFixed(2) 
        + "% to end your class with a grade of " 
        + D.toFixed(2) + "%. "
        + good_luck_message();
        
        alert(result);
    }
};