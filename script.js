

const firstElement = document.createElement("h1");
firstElement.setAttribute("id", "countdown");
firstElement.textContent = "10";
document.body.appendChild(firstElement);


const countdown = document.getElementById("countdown");
let timeLeft = 10;

setTimeout(() => {
  countdown.textContent = timeLeft;

  setTimeout(() => {
    timeLeft--;
    countdown.textContent = timeLeft;

    setTimeout(() => {
      timeLeft--;
      countdown.textContent = timeLeft;

      setTimeout(() => {
        timeLeft--;
        countdown.textContent = timeLeft;

        setTimeout(() => {
          timeLeft--;
          countdown.textContent = timeLeft;

          setTimeout(() => {
            timeLeft--;
            countdown.textContent = timeLeft;

            setTimeout(() => {
              timeLeft--;
              countdown.textContent = timeLeft;

              setTimeout(() => {
                timeLeft--;
                countdown.textContent = timeLeft;

                setTimeout(() => {
                  timeLeft--;
                  countdown.textContent = timeLeft;

                  setTimeout(() => {
                    countdown.textContent = "Happy Independence Day!";
                  }, 1000);
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);