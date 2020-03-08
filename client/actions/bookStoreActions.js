import * as TYPES from './types.js';
import { API_URL } from "../constants";

const getAllBooks = () => {
    return {
        type: TYPES.GET_ALL_BOOKS
    }
};

const getAllBooksResolved = (books) => {
    return {
        type: TYPES.GET_ALL_BOOKS_RESOLVED,
        payload: books
    }
};

const getAllBooksFailed = (error) => {
    return {
        type: TYPES.GET_ALL_BOOKS_FAILED,
        payload: error
    }
};

const selectDurationInDays = () => {
    return {
        type: TYPES.SELECT_DURATION_IN_DAYS
    }
};

const selectDurationInDaysResolved = (bookId, durationInDays) => {
    return {
        type: TYPES.SELECT_DURATION_IN_DAYS_RESOLVED,
        payload: {
            bookId,
            durationInDays
        }
    }
};

const selectDurationInDaysFailed = (error) => {
    return {
        type: TYPES.SELECT_DURATION_IN_DAYS_FAILED,
        payload: error
    }
};

const addBookToSelection = () => {
    return {
        type: TYPES.SELECT_BOOK
    }
}

const addBookToSelectionResolved = bookId => {
    return {
        type: TYPES.SELECT_BOOK_RESOLVED,
        payload: bookId
    }
}
const addBookToSelectionFailed = error => {
    return {
        type: TYPES.SELECT_BOOK_FAILED,
        payload: error
    }
}

export const fetchBooks =  () => {
    return async (dispatch) => {
        dispatch(getAllBooks());
        try {
            const data = await fetch(API_URL);
            if(!data.ok){
                throw new Error(`API Call failed: ${JSON.stringify(data)}`)
            }
            const response = await data.json();
            dispatch(getAllBooksResolved(response))
        } catch(error){
            console.log("are we here?", typeof(error))
            dispatch(getAllBooksFailed(error)) 
        }
    }
}

export const selectBook = (bookId) => {
    try {
        return async(dispatch) => {
            dispatch(addBookToSelection())
            dispatch(addBookToSelectionResolved(bookId))
        }
    } catch (error){
        dispatch(addBookToSelectionFailed(error))
    }
}

export const selectDuration = (bookId, durationInDays) => {
    try {
        return async(dispatch) => {
            dispatch(selectDurationInDays())
            dispatch(selectDurationInDaysResolved(bookId, durationInDays))
        }
    } catch (error){
        dispatch(selectDurationInDaysFailed(error))
    }
};
