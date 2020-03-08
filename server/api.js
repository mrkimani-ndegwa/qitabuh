const BookStore = require('./BookStore');

const bookStore = new BookStore();

// Please have as much fun as you want with these titles.
const RANDOM_TITLES = [
    "Chinua Achebe",
    "Catalyzed Immortality",
    "Harry Potter & the Seven heads or whatever",
    "Habari ndiyo hiyo",
    "Noisey Manouvres",
    "Half A Day and Other Stories",
    "Vioja Mahakamani"
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
};