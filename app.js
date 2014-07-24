$(document).ready(function() {

for (var num = 1; num < 101; num++) {
	if(num % 3 === 0 && num % 5 === 0) {
		console.log("fizzbuzz");
		$("body").append("<p>" + "fizzbuzz" + "</p>");
	}
	else if(num % 3 === 0) {
		console.log("fizz");
		$("body").append("<p>" + "fizz" + "</p>");
	}
	else if(num % 5 === 0) {
		console.log("buzz");
		$("body").append("<p>" + "buzz" + "</p>");	
	}
	else {
		console.log(num)
		$("body").append("<p>" + num + "</p>");
	}
}

});