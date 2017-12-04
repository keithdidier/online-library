import axios from 'axios';

const initialState = {
    allBooks: []
};

const ALL_BOOKS = "ALL_BOOKS";

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case ALL_BOOKS + "_FULFILLED":
            return Object.assign({}, state, {allBooks: action.payload});

        default: return state;
    }
}

export function getBooks() {
    let books = axios.get('/api/books').then(res => {
        return res.data;
    })
    return {
        type: ALL_BOOKS,
        payload: books
    }
}