import React from 'react';
import PropTypes from 'prop-types';

// Components
import Book from "../Book/Book";

const BooksList = ({books, selectBook, selectDuration}) => {
    if(!books || (books && books.length === 0)){
        return null
    }

    const booksHtml = books.map(book=>{
        return <Book 
        key={book.id} 
        {...book} 
        selectBook={selectBook} 
        selectDuration={selectDuration}
        />
    });
    return(
        <ul className="books-list-ctn">
            {booksHtml}
        </ul>
    )
};

BooksList.propTypes = {
    books: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            isSelected: PropTypes.bool.isRequired,
            category: PropTypes.string,
            durationInDays: PropTypes.number.isRequired
        })
    ),
    selectBook: PropTypes.func.isRequired,
    selectDuration: PropTypes.func.isRequired
}

export default BooksList;