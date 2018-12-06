import React, { Component } from 'react';
import Input from './Input'

class SearchBar extends Component{
    render(){
        return(
            <div className="row d-flex justify-content-center">
                <div className="col-lg-9 search-wrapper">
                    <div className="logo text-left">
                        <h5>Chipmunk's<br></br>Hacker News</h5>
                    </div>
                    <Input getSearchBar={this.props.getSearchBar} />
                </div>
            </div>
        )
    }
}

export default SearchBar;