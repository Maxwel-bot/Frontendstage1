// Function to update the current day of the week
function updateDayOfTheWeek() {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const today = new Date();
    const dayOfWeek = daysOfWeek[today.getUTCDay()];
    document.querySelector('[data-testid="currentDayOfTheWeek"]').textContent = `Current Day of the Week: ${dayOfWeek}`;
}

// Function to update the current UTC time in milliseconds
function updateCurrentUTCTime() {
    const currentUTCTime = new Date().getTime();
    document.querySelector('[data-testid="currentUTCTime"]').textContent = `Current UTC Time (ms): ${currentUTCTime}`;
}

// Call the update functions on page load
window.onload = function () {
    updateDayOfTheWeek();
    updateCurrentUTCTime();
};
