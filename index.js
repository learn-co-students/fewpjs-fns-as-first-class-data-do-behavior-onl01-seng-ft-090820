/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(startTime) {
  startTime = startTime.split(":")
  let otherTime = startTime.join("")
  if (otherTime < 1200) {
    return "Good Morning";
  }
  else if (otherTime > 1700) {
    return "Good Evening";
  }
  else if ((otherTime >= 1200)&&(otherTime <= 1700)) {
    return "Good Afternoon";
  }
}
/* Write your implementation of displayMessage() */
function displayMessage(TEST) {
  document.getElementById('greeting').innerText = TEST;
}