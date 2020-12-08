/* Given Code, don't edit */



const handleClick = (e) => {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

document.querySelector("button").addEventListener("click", handleClick);
/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
const greet = (timeString) => { 
// function greet(timeString) {
  let time = parseInt(timeString) 
  if (time < 12) {
    return `Good Morning`;}
  else if (time > 12 && time < 17 ) {
    return `Good Afternoon`;}
  else { 
    return `Good Evening`;
  } 
 } 
/* Write your implementation of displayMessage() */

const displayMessage = (message) => {
  let n = document.querySelector("#greeting")
  n.innerText = message
}