import React from "react";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import Provider from "react-redux";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import fetchMock from "fetch-mock";

// Project Based
import { API_URL } from "../constants";
import * as types from "../actions/types";
import { fetchBooks } from "../actions/bookStoreActions";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const dummyProps = {};

// beforeAll(()=>{
//     const props = {
//         allBooks: [],
//         selectedBooks: [],
//         isLoading: true
//     };

//     const propsAlt = {
//         allBooks: [{
//             id: 'abcd',
//             title: "Title",
//             durationInDays: 0,
//             isSelected: false,
//             category: ""
//         }],
//         selectedBooks: [],
//         isLoading: false
//     };

//     dummyProps.props = props;
//     dummyProps.propsAlt = propsAlt;
// });

afterEach(() => {
  fetchMock.restore();
});

test("Should be able to fetch Books on load.", async () => {
  fetchMock.getOnce(API_URL, {
    books: [
      {
        id: "ffew",
        title: "Some book",
        isSelected: false
      }
    ]
  });

  const expectedActions = [
    { type: types.GET_ALL_BOOKS },
    {
      type: types.GET_ALL_BOOKS_RESOLVED,
      payload: {
        books: [
          {
            id: "ffew",
            title: "Some book",
            isSelected: false
          }
        ]
      }
    }
  ];

  const store = mockStore({ allBooks: [] });
  // console.log(store.getActions(), "Get")
  return store.dispatch(fetchBooks()).then(() => {
    // return of async actions
    expect(store.getActions()).toEqual(expectedActions);
  });
});
