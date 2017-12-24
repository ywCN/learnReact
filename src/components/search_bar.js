import React, { Component } from 'react';
// { Component } is like
// const Component = React.Component;

class SearchBar extends Component {
    // event handler
    // on + Element Name + Event Name
    // event can be named different
    // .target.value access value of input
    // onInputChange(event) {
    //     console.log(event.target.value);
    // }

    render() {
        return <input onChange={event => console.log(event.target.value)} />;
    };
}

export default SearchBar;
