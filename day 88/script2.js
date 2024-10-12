function calculateDateDifference(date1, date2) {
    const startDate = new Date(date1);
    const endDate = new Date(date2);
    const differenceInTime = endDate - startDate; 
    const differenceInDays = differenceInTime / (1000 * 3600 * 24); 
    return Math.abs(Math.floor(differenceInDays));
}


console.log(calculateDateDifference("2023-10-01", "2023-10-12")); 
