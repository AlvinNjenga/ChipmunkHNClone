import React, { Component } from 'react';
import Dropdowns from './Dropdowns'

class FilterBar extends Component{
    render(){
        return(
            <div className="row d-flex justify-content-center">
                <div className="col-lg-9 d-flex justify-content-between filterbar">
                    <Dropdowns getTime={this.props.getTime} />
                    <p>
                        Temporarily filler text
                    </p>
                </div>
            </div>
        )
    }
}

export default FilterBar;