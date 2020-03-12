import React, {Component} from 'react';
import PropTypes from "prop-types";
import { connect } from 'react-redux'

// Components
import BooksList from "../BooksList/BooksList.jsx"
import TotalCharge from "../TotalCharge/TotalCharge.jsx"

// Action creators
import { fetchBooks, selectBook, selectDuration } from "../actions/bookStoreActions";

const Loading = ({isLoading}) => {
    if(!isLoading) return null;
    return <div>Loading Data...</div>;
};

class BookStore extends Component {
    // Life cycle Methods
    componentDidMount(){
        // Fetch All Data.
        this.props.fetchBooks();
    };
    // Functions
    handleSelectBook = (event, id) => {
        event.preventDefault();
        if(event.target.className === "duration-selection") return;
        this.props.selectBook(id);
    };

    handleSelectDurationInDays = (event, id) => {
        event.preventDefault();
        const durationInDays = Number(event.target.value);
        this.props.selectDuration(id, durationInDays);
    };

    // Render Function
    render (){
        const {
            allBooks,
            selectedBooks,
            isLoading,
            error
        } = this.props;
        if(error !== null){
            return <div className="error">Ooops! An error occurred. Please try again later.</div>
        }

        <Loading isLoading={isLoading}/>

        return <div className="book-store-ctn">
            <div className="store-title">
                Qitabuh<span>.</span>   
                <div className="sub-title">Please select a book(s) below. Happy reading!</div>
                📚
            </div>
            <BooksList
                books={allBooks}
                selectBook={this.handleSelectBook}
                selectDuration={this.handleSelectDurationInDays}
            />
            <TotalCharge
                selectedBooks={selectedBooks}
            />
        </div>
    }
};

const mapStateToProps = (state) => {
    return {
      allBooks: state.books.allBooks,
      selectedBooks: state.books.allBooks && state.books.allBooks.filter(book => book.isSelected && book.durationInDays > 0),
      isLoading: state.books.pendingResolution,
      error: state.books.error
    }
};

const mapDispatchToProps = { fetchBooks, selectBook, selectDuration };

const ConnectedBookStore =  connect(
    mapStateToProps,
    mapDispatchToProps
)(BookStore);

BookStore.propTypes = {
    allBooks: PropTypes.array.isRequired,
    selectedBooks: PropTypes.array.isRequired,
    isLoading: PropTypes.bool.isRequired
};

export {
    ConnectedBookStore,
    Loading
}


