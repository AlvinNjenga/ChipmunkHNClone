import React, { Component } from 'react'
import ListItem from './ListItem'

const data = [{"name":"This is other random text"},{"name":"This is random text"},{"name":"This is even more random text"}];

class List extends Component{

    
    constructor(){
        super();
        this.state = {
            data: data,
        }
    }

    render(){
        return(
            <div className="row d-flex justify-content-center">
                <div className="col-lg-9 list-parent">
                    <ListItem returnApi={this.props.getApi} searchBar={this.props.searchBar} time={this.props.time} data={this.state.data} />
                </div>
            </div>
        )
    }
}

export default List;