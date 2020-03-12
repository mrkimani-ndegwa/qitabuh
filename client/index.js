import "regenerator-runtime/runtime";
import React from 'react';
import ReactDOM from "react-dom";
import { Provider } from 'react-redux'

// Configure Store
import configureStore from "./configureStore.js";

// Styling
import './styling/index.scss';

// Main App Component
import { ConnectedBookStore } from "./BookStore/BookStore.jsx";

// Generic Error Boundary Component.
// Reference React Docs: https://reactjs.org/docs/error-boundaries.html.
// TODO: Move to a separate File
class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        hasError: false,
        error: null,
        info: null
      };
    }
    componentDidCatch(error, info) {
      this.setState({
        hasError: true,
        error: error,
        info: info
      });
    }
    render() {
      if (this.state.hasError) {
        return (
          <div className="error">
            <h1>😢</h1>
            <h1>Oops, something went wrong.</h1>
            <p>The error: {this.state.error.toString()}</p>
            <p>Where it occured: {this.state.info.componentStack}</p>
          </div>
        );
      }
      return this.props.children;
    }
};

const mountPoint = document.getElementById("qitabuh");
mountPoint ? ReactDOM.render(
<Provider store={configureStore()}>
<ErrorBoundary>
<ConnectedBookStore/>
</ErrorBoundary>
</Provider>, 
mountPoint): console.error("Please check the mount point. The app is looking for id qitabuh in the DOM.");