import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from 'components/search-bar';

const API = 'AIzaSyAKRu9Q1NFeewHGbsC85jAXa-Cwkm3avZQ';
// create a new component. 
// this component should create some HTML.
const App = () => {
    return <div>mie!</div>;
};

// Take this component's generated HTML and put it
// on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
// document.querySelector('.container') is the root container element