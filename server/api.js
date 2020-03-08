const BookStore = require('./BookStore');

const bookStore = new BookStore();

// Please have as much fun as you want with these titles.
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
        api: {
            books: bookStore.getAllBooks()
        }
    }
}