import {API_LISTINGS_URL} from "./listings-main";

// Define the API response with the date and time to countdown to
// const apiResponse = {endsAt: endsAt};

// Parse the date and time string from the API response using the Date object
const endDate = new Date(API_LISTINGS_URL.endsAt);

// Create a timer using the setInterval() function
const timer = setInterval(() => {
    // Calculate the remaining time until the specified date and time
    const remainingTime = endDate - Date.now();

    // If the remaining time is less than or equal to zero, stop the timer
    if (remainingTime <= 0) {
        clearInterval(timer);
    } else {
        // Calculate the remaining time in days, hours, minutes, and seconds
        const remainingDays = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
        const remainingHours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const remainingMinutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
        const remainingSeconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

        // Log the remaining time to the console
        console.log(`${remainingDays} days, ${remainingHours} hours, ${remainingMinutes} minutes, ${remainingSeconds} seconds`);
    }
}, 1000);
