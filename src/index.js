import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyAKRu9Q1NFeewHGbsC85jAXa-Cwkm3avZQ';

// // experiment: This code will log out 5 video information
// YTSearch({key: API_KEY, term: 'surfboards'}, function(data) {
//     console.log(data);
// });

// create a new component. 
// this component should create some HTML.
// this component should be responsible for fetching data
const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    );
};

// Take this component's generated HTML and put it
// on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
// document.querySelector('.container') is the root container element
