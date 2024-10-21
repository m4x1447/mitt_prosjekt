        // Set the date we're counting down to
        const countDownDate = new Date("Jun 21, 2024 00:00:00").getTime();

        // Update the count down every 1 second
        const countdownFunction = setInterval(function() {
            // Get today's date and time
            const now = new Date().getTime();

            // Find the distance between now and the count down date
            const distance = countDownDate - now;

            // Time calculations for days, hours, minutes and seconds
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            // Display the result in the respective elements
            document.getElementById("days").innerText = days + " Dager";
            document.getElementById("hours").innerText = hours + " Timer";
            document.getElementById("minutes").innerText = minutes + " Minutter";
            document.getElementById("seconds").innerText = seconds + " Sekunder";

            // If the count down is over, write some text 
            if (distance < 0) {
                clearInterval(countdownFunction);
                document.querySelector(".countdown").innerText = "Nedtellingen er over!";
            }
        }, 1000);