const BookStore = require("./BookStore");

const testBookStore = new BookStore();

describe("BookStore Class test suite",()=>{
  test('BookStore has no books on initialization', () => {
    const expected = []
    const allBooks = testBookStore.getAllBooks();
    expect(allBooks).toEqual(expect.arrayContaining(expected));
    expect(allBooks.length).toBe(0);
  });

  test('Add Book Functionality', () => {
    testBookStore.addBook('Test Title'); // Add A Book
    // Check All Books 
    const allBooks = testBookStore.getAllBooks();
    expect(allBooks.length).toBe(1);

    // Check Title of the book added
    const title = allBooks[0].title;
    const expectedTitle = 'Test Title';
    expect(title).toBe(expectedTitle);
  });

  test('Ids of the Books are unique', () => {
    // Clear allbooks first
    testBookStore.clearStore();
    
    testBookStore.addBook('Test Title'); // Add A Book
    testBookStore.addBook('Test Title'); // Add A Book with a similar title
    // Check All Books 
    const allBooks = testBookStore.getAllBooks();
    expect(allBooks.length).toBe(2);

    // Check titles
    const book1 = allBooks[0];
    const book2 = allBooks[1];

    // Titles are the same
    expect(book1.title).toBe(book2.title);

    // Ids should be different
    expect(book1.id).not.toBe(book2.id);
  });
})
