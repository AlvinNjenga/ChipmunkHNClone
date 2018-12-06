import React, { Component } from 'react';

class Dropdowns extends Component {

    constructor(props){
        super(props);
        this.state = {
            dropdownTime: "alltime"
        }
    }

    changeTime = (event) => {
        this.setState({
            dropdownTime: event.target.value
        })
        this.props.getTime(event.target.value);
    }

    render(){
        return(
            <div className="dropdown-wrapper d-flex">

                <div id="stories-dropdown" className="dropdowny d-flex">
                    <p className="dropdown-title">Search</p>
                    <div className="stories-select">
                        <select>
                            <option value="stories">Stories</option>
                            <option value="all">All</option>
                            <option value="comments">Comments</option>
                        </select>
                    </div>
                </div>

                <div id="popularity-dropdown" className="dropdowny d-flex">
                    <p className="dropdown-title">by</p>
                    <div className="popularity-select">
                        <select>
                            <option value="popularity">Popularity</option>
                            <option value="date">Date</option>
                        </select>
                    </div>
                </div>

                <div id="alltime-dropdown" className="dropdowny d-flex">
                    <p className="dropdown-title">for</p>
                    <div className="alltime-select">
                        <select id="time-dropdown" onChange={this.changeTime.bind(this)}>
                            <option value="alltime">All Time</option>
                            <option value="past24h">Past 24hrs</option>
                            <option value="lastweek">Last Week</option>
                        </select>
                    </div>
                </div>

            </div>
        )
    }
}

export default Dropdowns;