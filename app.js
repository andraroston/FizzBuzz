$(document).ready(function() {

	var humanInput;

	humanInput = prompt ("Pick a number, any number!");
		while(isNaN(humanInput) === true) {
			humanInput = prompt ("You didn't pick a number! Try again.")
		}
		console.log(humanInput);

		var fizzbuzz = function(choice) {	
			for (var num = 1; num <= choice; num++) {
				if(num % 3 === 0 && num % 5 === 0) {
					console.log("fizzbuzz");
					$("body").append("<p>" + "FizzBuzz" + "</p>");
				}
				else if(num % 3 === 0) {
					console.log("fizz");
					$("body").append("<p>" + "Fizz" + "</p>");
				}
				else if(num % 5 === 0) {
					console.log("buzz");
					$("body").append("<p>" + "Buzz" + "</p>");	
				}
				else {
					console.log(num)
					$("body").append("<p>" + num + "</p>");
				}			
		
			}
		}

	fizzbuzz(humanInput);		
	
});