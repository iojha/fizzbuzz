$("document").ready(function() {
	var myList = $('p');
	for (var i=1; i <= 100; i++) {
		if ((i%3 === 0) && (i%5 === 0)) {
			console.log("fizzbuzz");
			myList.append('<p>fizzbuzz</p>');
		} else if	(i%3 === 0) {
			console.log("fizz");
			myList.append('<p>fizz</p>');
		} else if (i%5 === 0) {
			console.log("buzz");
			myList.append('<p>buzz</p>');
		} else {
			console.log(i);
			myList.append('<p>' + i + '</p>');
		}
	}

});
/*

any number divisible by 3 fizz, 5 buzz and both fizzbuzz

*/