$("document").ready(function() {
	
	var myList = $('p')

	function userInput() {
		return parseInt(prompt("Enter a number")); //prompt user to enter number
	}

	var uI;

 	do {
 		uI = userInput();

 		if (isNaN(uI)) {
 			alert('Not a number! Please enter a number!');
 		}
 	} while (isNaN(uI));
// 	console.log(uI);
 

	function fizzbuzzer(uI) {
	  function check(n) {
	    var msg = '';
	    if ( n % 3 == 0 ) { 
	    	msg += "Fizz" };
	    if ( n % 5 == 0 ) { 
	    	msg += "Buzz" };
	    return msg || n;
	  }
	  for (var i = 1; i <= uI; i++) {
	    console.log(check(i));
	    myList.append('<p>' + check(i) + '</p>');
	  }
	}
	fizzbuzzer(uI);
});