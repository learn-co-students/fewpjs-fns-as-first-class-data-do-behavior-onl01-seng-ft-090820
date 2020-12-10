/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(input) {
  let time = input.split(":")
  let hour = parseInt(time[0])
	let min = parseInt(time[1])
  
  if (hour < 12) {
    greeting =  "Good Morning"
  } else if (hour > 17) {
    greeting = "Good Evening"
  } else if (12 <= hour <= 17) {
		greeting = "Good Afternoon"
  } else {
    greeting = "TEST"
  }
	return greeting
}

/* Write your implementation of displayMessage() */
function displayMessage(msg) {
  document.querySelector('#greeting').innerText = msg 
}