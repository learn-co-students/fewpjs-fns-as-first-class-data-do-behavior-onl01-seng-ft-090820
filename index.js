/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(time) {
  const timestamps = time.split(':')
  const hour = parseInt(timestamps[0])
  const min = parseInt(timestamps[1])
  let message = "TEST"
  if ((min >= 0) && (min <=59)) {
    if ((hour > 16) && (hour <= 23)) {
      message = "Good Evening"
    } else if ((hour > 11) && (hour <= 16)) {
      message = "Good Afternoon"
    } else if ((hour >= 0) && (hour <= 11)) {
     message = "Good Morning"
    }
  }
  return message
}


/* Write your implementation of displayMessage() */

function displayMessage(message) {
  const greeting = document.getElementById("greeting");
  greeting.innerText = message
}