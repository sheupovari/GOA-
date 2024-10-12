function getDayOfWeek(dateString) {
    const date = new Date(dateString);
    const options = { weekday: 'long' };
    return date.toLocaleDateString('en-US', options); 
}


console.log(getDayOfWeek("2026-31-12")); 
