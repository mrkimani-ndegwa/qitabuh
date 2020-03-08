import "regenerator-runtime/runtime";
import React from 'react';
import ReactDOM from "react-dom";
import { Provider } from 'react-redux'

// Configure Store
import configureStore from "./configureStore.js";

// Styling
import './styling/index.scss';

// Main App Component
import BookStore from "./BookStore/BookStore.jsx"

const mountPoint = document.getElementById("qitabuh");
mountPoint ? ReactDOM.render(
<Provider store={configureStore()}>
<BookStore/>
</Provider>, 
mountPoint): false;