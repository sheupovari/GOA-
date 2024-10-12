const book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
    getSummary: function() {
        return `${this.title} by ${this.author}, published in ${this.year}.`;
    }
};
console.log(book.title);  
console.log(book.author); 
book.year = 2021;



console.log(book.year);

console.log(book.getSummary());
const book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
    getSummary: function() {
        return `${this.title} by ${this.author}, published in ${this.year}.`;
    }
};


console.log(book.title);  
console.log(book.author); 


book.year = 2021;
console.log(book.year);  


console.log(book.getSummary());