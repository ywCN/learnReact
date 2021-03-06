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

        // only inside the constructor function
        // do we change state like this.state
        // in other context, we use this.setState()
        this.state = { term: '' };
    }

    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term); // onSearchTermChange from index.js
    }

    render() {
        return (
            <div className="search-bar">
                <input
                    value={this.state.term}
                    onChange={event => this.onInputChange(event.target.value)} 
                />
            </div>
        );
    };
}

export default SearchBar;
