// Define the countdown function with a callback
function countdown(number, callback) {
  if (number > 0) {
    setTimeout(function () {
      document.getElementById('countdown').innerText = number;
      countdown(number - 1, callback);
    }, 1000);
  } else {
    callback();
  }
}

// Start the countdown from 10
countdown(10, function () {
  // When the countdown completes, display "Happy Independence Day!" with another callback
  setTimeout(function () {
    document.getElementById('countdown').innerText = 'Happy Independence Day!';
  }, 1000);
});
