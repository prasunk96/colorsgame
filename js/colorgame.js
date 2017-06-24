var numSquares = 6;
var colors = [];
var picked;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var message = document.querySelector("#message");
var resetButton = document.querySelector("#reset")
var h1 = document.querySelector("h1");
var modeBtn = document.querySelectorAll(".mode");

init();

function init()
{
	setUpModeButtons();
	setUpSquares();
	reset();
}

function setUpModeButtons()
{   
	for(var i=0;i<modeBtn.length;i++)
	{
		modeBtn[i].addEventListener("click", function()
		{
			modeBtn[0].classList.remove("selected");
			modeBtn[1].classList.remove("selected");
			this.classList.add("selected");

			this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
			reset();
		});
	}

}

function setUpSquares()
{
	for(var i=0; i<squares.length;i++)
	{	
		//add click listner to square

		squares[i].addEventListener("click", function()
		{
			//grab color
			var clickedColor = this.style.backgroundColor;
		//compare color 	
			if(clickedColor === picked)
			{
				message.textContent = "Correct";
				changeColors(clickedColor);
				resetButton.textContent = "Play Again?";
				h1.style.backgroundColor = picked;
			}
			else
			{
				this.style.backgroundColor = "#232323";
				message.textContent = "Try Again";
			}
		});
	}	
}

function reset()
{
		//generate all new colors
	colors = generateColors(numSquares);
	//pick new random color from array
	picked = pickColor();
	//change colorDisplay to match picke color
	colorDisplay.textContent = picked;
	//change colors of squares
	for(var i=0; i<squares.length;i++)
{	//add initial colors to squares
	if(colors[i])
	{
		squares[i].style.display = "block";
		squares[i].style.backgroundColor = colors[i];
	}
	else
	{
		squares[i].style.display = "none";
	}
}

	resetButton.textContent = "New Colors";
	h1.style.backgroundColor = "steelblue";
	message.textContent = " ";
}

resetButton.addEventListener("click",function()
{
	reset();
});

// for(var i=0; i<squares.length;i++)
// {	
// 	//add click listner to square

// 	squares[i].addEventListener("click", function()
// 	{
// 		//grab color
// 		var clickedColor = this.style.backgroundColor;
// 	//compare color 	
// 		if(clickedColor === picked)
// 		{
// 			message.textContent = "Correct";
// 			changeColors(clickedColor);
// 			resetButton.textContent = "Play Again?";
// 			h1.style.backgroundColor = picked;
// 		}
// 		else
// 		{
// 			this.style.backgroundColor = "#232323";
// 			message.textContent = "Try Again";
// 		}
// 	});
// }

function changeColors(color)
{
	//loop through all the aquares

	for(var i =0;i<squares.length;i++)
	{
		squares[i].style.backgroundColor = color;
	}
}

function pickColor()
{
	var random = Math.floor(Math.random()*colors.length);
	return colors[random];

}

function generateColors(num)
{
	//make an array
	var arr = [] 
	//ass num random to array
	for (var i = 0; i < num; i++) 
		{
			arr.push(randomColor());
		}
		//return the array
		return arr;
}

function randomColor()
{
	//pick a "red" from 0 to 255
	var r = Math.floor(Math.random()*256);
	//pick a "green" from 0 to 255
	var g = Math.floor(Math.random()*256);
	//pick a "blue" from  0 rtp 255
	var b = Math.floor(Math.random()*256);

	return "rgb(" + r + ", " + g + ", " + b + ")";
}