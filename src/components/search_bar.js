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

    // this is how we define/init state in a class-based component
    constructor(props) {
        super(props);

        this.state = { term: '' };
    }

    render() {
        return <input onChange={event => console.log(event.target.value)} />;
    };
}

export default SearchBar;
