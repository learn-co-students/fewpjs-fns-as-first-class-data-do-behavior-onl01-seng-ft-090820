/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(time){

  let split_time = time.split(":");
  let merged_time = split_time[0].concat(split_time[1]);
  let final_time = parseInt(merged_time, 10);

  if(final_time < 1200){
    return "Good Morning";
  }
  if ((final_time >= 1200) && (final_time <= 1700)){
    return "Good Afternoon";
  } else if (final_time > 1700) {
    return "Good Evening";
  } 

  }
/* Write your implementation of displayMessage() */

function displayMessage(message){
  let greeting = document.getElementById("greeting");
  greeting.innerText = message;
}