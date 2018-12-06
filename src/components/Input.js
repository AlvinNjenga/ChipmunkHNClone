import React, { Component } from 'react';

class Input extends Component {

    returnSearchBar = (event) => {
        this.props.getSearchBar(event.target.value)
    }

    render(){
        return(
            <input 
            onChange={this.returnSearchBar}
            className="searchbar-input" 
            type="text" 
            placeholder="Search stories by title, url or author">
            </input>
        )
    }
}

export default Input;