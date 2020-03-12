const shortId = require('shortid');

class BookStore {
    constructor() {
        this.allBooks = [];
        this.categories = ["regular", "fiction", "novel"];
    };

    addBook(title) {
        const book = {
            id: shortId(),
            title,
            category: this.categories[Math.floor(Math.random() * this.categories.length)],
            isSelected: false,
            durationInDays: 0
        };
        // Add the book to our array
        this.allBooks = [...this.allBooks, book];
    };

    // Getters
    getAllBooks(){
        return this.allBooks;
    };

    // Setters
    clearStore(){
        return this.allBooks = [];
    };

};

module.exports = BookStore;