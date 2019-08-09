// Opposite Number
/*
	Very simple. Write a function, named opposite, that given one parameter (type: integer)
	returns the opposite of the given number. A positive number becomes negative.
	A negative number becomes positive. The output is also an integer.
	Examples:
		console.log(opposite(1)) // output: -1
		console.log(opposite(14)) // output: -14
		console.log(opposite(-24)) // output: 24
		console.log(opposite(0)) // ouput: 0
*/

function opposite(integer){
    const newInt = integer * -1;
    console.log(newInt)
}

opposite(3);