// alert("connected");

// var colors = [
// 	"rgb(255, 0, 0)",
// 	"rgb(255, 255, 0)",
// 	"rgb(0, 255, 0)",
// 	"rgb(0, 255, 255)",
// 	"rgb(0, 0, 255)",
// 	"rgb(255, 0, 255)",
// ]
var numOfSqaures = 6;
var colors = generateRandomColors(numOfSqaures);
var h1 = document.querySelector("h1");

var squares = document.querySelectorAll(".square");
// var pickedColor = colors[3];
//Random colors selection

var pickedColor = pickColor(numOfSqaures);
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var resetButton = document.querySelector("#reset");
var easyButton = document.querySelector("#Easy");
var hardButton = document.querySelector("#Hard");

colorDisplay.textContent = pickedColor;

for(var i= 0; i < squares.length; i++){
	//add initial colors to squares
	squares[i].style.backgroundColor = colors[i];

	//add click listeners to squares
	squares[i].addEventListener("click",function(){
		// alert("clicked");
		//grab color of clicked sqaure
		//compare color to pickedColor
		// alert(this.style.backgroundColor);
		var clickColor = this.style.backgroundColor;
		if(clickColor===pickedColor){
			// alert("correct");
			messageDisplay.textContent = "Correct!";
			changeColors(clickColor);
			h1.style.backgroundColor = clickColor;
			resetButton.textContent = "Play Again?";

		}else{
			// alert("wrong");
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again";
		}
	})
};


resetButton.addEventListener("click",function(){

	//generate all new colors
	//pick a new random color
	//change colorDisplay to match picked color
	//change colors of the sqaures

	colors = generateRandomColors(numOfSqaures);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i= 0; i < squares.length; i++){
	//add initial colors to squares
		squares[i].style.backgroundColor = colors[i];
	}	
	h1.style.backgroundColor = "steelblue";
	messageDisplay.textContent = " ";
	this.textContent = "New Colors";

});

hardButton.addEventListener("click",function(){
	numOfSqaures = 6;
	hardButton.classList.add("selected");
	easyButton.classList.remove("selected");
	colors = generateRandomColors(numOfSqaures);
	pickedColor = pickColor()
	colorDisplay.textContent = pickedColor;
	for(var m= 0; m < squares.length; m++){
	//add initial colors to squares
		squares[m].style.backgroundColor = colors[m];
		squares[m].style.display = "block";
	}	
	//alert("clicked");
})

easyButton.addEventListener("click",function(){
	numOfSqaures = 3;
	easyButton.classList.add("selected");
	hardButton.classList.remove("selected");
	colors = generateRandomColors(numOfSqaures);
	pickedColor = pickColor()
	colorDisplay.textContent = pickedColor;
	for(var m= 0; m < squares.length; m++){
	//add initial colors to squares
		if(colors[m]){
			squares[m].style.backgroundColor = colors[m];
		}else{
			squares[m].style.display = "none";
		}
	}	
	//alert("clicked");
});

function changeColors(color){
	for(var j = 0; j < squares.length; j++){
		squares[j].style.backgroundColor = color;
	}
}

function pickColor(){
	//picking random numbers
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	//make an array
	// add num random colors to array
	//return array

	var arr = [];

	for(var k = 0 ; k < num ; k++){
		//get random color and push into array
		arr.push(randomColor());
	}
	return arr;
}


function randomColor(){

	//pick a "red","green""blue" from 0-255
	var r = Math.floor(Math.random() * 256)
	var g = Math.floor(Math.random() * 256)
	var b = Math.floor(Math.random() * 256)

	return "rgb(" + r + ", " + g + ", " + b + ")";
}