document.addEventListener("DOMContentLoaded", () => {
    // Progress Bar
    const progressFill = document.getElementById("progress-fill");
    if (progressFill) {
        setTimeout(() => {
            progressFill.style.width = "20%"; // 6 of 30 families
        }, 500);
    }

    // Countdown Timer
    const timerEl = document.getElementById("timer");
    const targetDate = new Date("March 31, 2026 23:59:59").getTime();
    
    if (timerEl) {
        setInterval(() => {
            const now = new Date().getTime();
            const distance = targetDate - now;
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            timerEl.innerHTML = `Founder Offer Ends In: ${days}d ${hours}h`;
        }, 1000);
    }
});
