document.addEventListener("DOMContentLoaded", function() {
    const liveUpdates = document.getElementById("live-updates");

    // Simulate live score updates every minute
    let score = 0;
    setInterval(function() {
        score++;
        liveUpdates.innerHTML = `
            <p><strong>Score:</strong> ${score} - ${score}</p>
            <p><strong>Time:</strong> ${score}:00</p>
        `;
    }, 60000);  // Update every 1 minute
});
