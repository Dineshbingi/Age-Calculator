// Get the input element for date
let userInput = document.querySelector('input[type="date"]');
userInput.max = new Date().toISOString().split("T")[0];

// Get the result element to display age
let result = document.getElementById("result");

// Function to calculate age based on user input
function calculateAge() {
    let birthDate = new Date(userInput.value);
    let today = new Date();

    let diff = today - birthDate;

    // Calculate milliseconds in a day, month, and year
    let msPerDay = 24 * 60 * 60 * 1000;
    let msPerMonth = msPerDay * 30.436875; // Approximation for an average month
    let msPerYear = msPerDay * 365.25; // Approximation for an average year

    // Calculate age
    let age = Math.floor(diff / msPerYear);
    let months = Math.floor((diff % msPerYear) / msPerMonth);
    let days = Math.floor(((diff % msPerYear) % msPerMonth) / msPerDay);

    // Display the calculated age in the result element
    result.innerHTML = `You are <span>${age}</span> years, <span>${months}</span> months, and <span>${days}</span> days old`;
}
