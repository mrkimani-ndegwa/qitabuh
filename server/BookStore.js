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
        };
        // Add the book to our array
        this.allBooks = [...this.allBooks, book];
    };

    // Get All Books.
    getAllBooks(){
        return this.allBooks;
    };
};

module.exports = BookStore;