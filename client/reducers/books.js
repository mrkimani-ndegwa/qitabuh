// Redux is definitely overkill for this project but needed to 
// refresh some of the basics with this app.
import * as TYPES from "../actions/types";

const INITIAL_STATE = {
    allBooks: [],
    selectedBooks: [],
    pendingResolution: false,
    error: null
};

const books = (state = INITIAL_STATE, action) => {
    switch (action.type) {
    case TYPES.GET_ALL_BOOKS: 
        return {
            ...state,
            pendingResolution:true
        }

    case TYPES.GET_ALL_BOOKS_RESOLVED: 
        return {
        ...state,
        pendingResolution: false,
        allBooks: action.payload // in DEV please uncomment this.
        // allBooks: action.payload.books
    }

    case TYPES.GET_ALL_BOOKS_FAILED:
        return {
            ...state,
            pendingResolution: false,
            error: action.payload
    }

    case TYPES.SELECT_BOOK:{
        return {
            ...state,
            pendingResolution:true
        }
    }

    case TYPES.SELECT_BOOK_RESOLVED:{
        return {
            ...state,
            allBooks: state.allBooks.map(book=>{
                return book.id === action.payload ? 
                {...book, isSelected: !book.isSelected}: 
                book
            }),
            pendingResolution:false
        }
    }
    case TYPES.SELECT_BOOK_FAILED:{
        return {
            ...state,
            pendingResolution:false,
            error: action.error
        }
    }

    case TYPES.SELECT_DURATION_IN_DAYS:{
        return {
            ...state,
            pendingResolution:true
        }
    }

    case TYPES.SELECT_DURATION_IN_DAYS_RESOLVED:{
        const {
            bookId,
            durationInDays
        } = action.payload;
        return {
            ...state,
            allBooks: state.allBooks.map(book=>{
                return book.id === bookId ? 
                {...book, durationInDays}: 
                book
            }),
            pendingResolution:false
        }
    }
    case TYPES.SELECT_DURATION_IN_DAYS_RESOLVED:{
        return {
            ...state,
            pendingResolution:false,
            error: action.error
        }
    }
    default:
        return state
    }
};


export default books;