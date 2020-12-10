/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time) {
  let t = time.split(':')
  let h = parseInt(t[0])
  if (h < 12) {
    return 'Good Morning'
  } else if (h < 17) {
    return 'Good Afternoon'
  } else {
    return 'Good Evening'
  }
  
}
/* Write your implementation of displayMessage() */
function displayMessage(message) {
  let h1 = document.querySelector('#greeting')
  h1.innerText = message 
  
}