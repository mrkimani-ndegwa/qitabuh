const BookStore = require('./BookStore');

const bookStore = new BookStore();

const RANDOM_TITLES = [
    "Dog",
    "Cat",
    "Book",
    "Awesome",
    "Noise"
];

module.exports = () => {
    for(let i = 0; i < RANDOM_TITLES.length; i++){
        bookStore.addBook(RANDOM_TITLES[i]);
    };

    return {
        data: {
            books: bookStore.getAllBooks()
        }
    }
}