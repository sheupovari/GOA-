function formatDateInLocales(date) {
    const locales = ['en-US', 'fr-FR', 'de-DE'];
    const formattedDates = locales.map(locale => {
        return date.toLocaleDateString(locale);
    });
    return formattedDates;
}


const date = new Date("2026-31-12");
console.log(formatDateInLocales(date)); 
