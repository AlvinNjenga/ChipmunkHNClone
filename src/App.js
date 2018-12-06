import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import FilterBar from './components/FilterBar';
import List from './components/List'

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      time:'',
      searchBar: '',
      filteredApi: [],
      api: []
    }
  }
 
  changeTime = (time) => {
    this.setState({
      time: time
    })
  }

  getSearchBar = (searchBar) => {
    this.setState({
      searchBar: searchBar,
    })
  }

  getApi = (api) => {
    console.log(api);
    this.setState({
      api: api
    }) 
  }

  render() {
    return (
      <div className="App container-fluid">
        <SearchBar getSearchBar={this.getSearchBar} />
        <FilterBar getTime={this.changeTime} />
        <List getApi={this.getApi} searchBar={this.state.searchBar} time={this.state.time} />
      </div>
    );
  }
}

export default App;
