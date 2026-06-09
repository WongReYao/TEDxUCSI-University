// ==========================================
// TEDxUCSI University - Countdown Timer Logic
// ==========================================

// 1. SET YOUR TARGET EVENT DATE HERE (Format: "Month Day, Year HH:MM:SS")
const targetDate = new Date("November 6, 2026 09:00:00").getTime();

function updateCountdown() {
    // 2. Get the exact timestamp of the current moment
    const now = new Date().getTime();
    
    // 3. Calculate the remaining distance between now and the target date
    const distance = targetDate - now;
    
    // 4. Time calculations for Months, Days, and Hours
    // (Note: JavaScript math uses milliseconds. 1000ms = 1s)
    const msInHour = 1000 * 60 * 60;
    const msInDay = msInHour * 24;
    const msInMonth = msInDay * 30.44; // Average duration of a month in days

    let months = Math.floor(distance / msInMonth);
    let days = Math.floor((distance % msInMonth) / msInDay);
    let hours = Math.floor((distance % msInDay) / msInHour);
    
    // 5. Inject the calculated values directly into your HTML Span IDs
    if (distance > 0) {
        document.getElementById("month").textContent = months;
        document.getElementById("day").textContent = days;
        document.getElementById("hour").textContent = hours;
    } else {
        // What displays when the countdown clock reaches zero
        clearInterval(countdownInterval);
        document.querySelector(".display-timer").innerHTML = "THE EVENT HAS BEGUN!";
    }
}

// 6. Run the function instantly on load, then loop it every 1 second (1000ms)
updateCountdown();
const countdownInterval = setInterval(updateCountdown, 1000);