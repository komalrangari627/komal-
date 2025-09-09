function calculateAge(userDob) {
    // Split the input "23/09/2002"
    let parts = userDob.split("/");
    let day = parseInt(parts[0], 10);
    let month = parseInt(parts[1], 10) - 1; // JS months are 0-indexed
    let year = parseInt(parts[2], 10);

    let dob = new Date(year, month, day);
    let currentDate = new Date();

    // Difference in milliseconds
    let difference = currentDate.getTime() - dob.getTime();

    // Extract different units
    let ms = difference;
    let seconds = Math.floor(ms / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    let days = Math.floor(hours / 24);
    let years = Math.floor(days / 365);
    let months = Math.floor((days % 365) / 30); // approx month length
    let remainingDays = (days % 365) % 30;

    return {
        years: years,
        months: months,
        days: remainingDays,
        hours: hours,
        minutes: minutes,
        seconds: seconds,
        milliseconds: ms
    };
}

// Example usage
console.log(calculateAge("23/09/2002"));
