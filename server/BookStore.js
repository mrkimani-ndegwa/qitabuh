const shortId = require('shortid');

class BookStore {
    constructor() {
        this.allBooks = [];
    };

    addBook(title, category = null) {
        const book = {
            id: shortId(),
            title,
            category,
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