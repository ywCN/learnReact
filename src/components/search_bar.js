import React, { Component } from 'react';
// { Component } is like
// const Component = React.Component;

class SearchBar extends Component {
    // event handler
    // on + Element Name + Event Name
    onInputChange() {

    }

    render() {
        return <input onChange={this.onInputChange} />;
    };
}

export default SearchBar;
