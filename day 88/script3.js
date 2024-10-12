function addDaysToDate(dateString, days) {
    const date = new Date(dateString);
    date.setDate(date.getDate() + days);
    return date.toISOString().slice(0, 10); 
}


console.log(addDaysToDate("2026-31-12", 5)); 
