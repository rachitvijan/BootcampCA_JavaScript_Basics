var inputArray = [];
var size = 5
for(var i=0; i<= size; i++) 
{
	inputArray[i] = prompt('Enter number between 1 to 20 ' + (i+1));
}
inputArray.sort();
console.log(inputArray);