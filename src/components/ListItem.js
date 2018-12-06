import React, { Component } from 'react';
import Axios from 'axios'

class ListItem extends Component{


    constructor(props){
        super(props);
        this.state = {
            api: []
        }
    }

    // This is my makeshift router based on the props recieved from dropdown menu's!
    getNews = () => {

        switch(this.props.time){
            case "lastweek":
                try {
                    return Axios.get('https://hn.algolia.com/api/v1/search_by_date?tags=story&numericFilters=created_at_i%3E2018-11-27T02:15:20.000Z')
                } catch (error) {
                    console.log(error)
                }
                break;
            case "past24h":
                try {
                    return Axios.get('https://hn.algolia.com/api/v1/search_by_date?tags=story&numericFilters=created_at_i%3E2018-12-04T02:15:20.000Z')
                } catch (error) {
                    console.log(error)
                }
                break;
            default:
                try {
                    return Axios.get('https://hn.algolia.com/api/v1/search?tags=front_page')
                } catch (error) {
                    console.log(error)
                }
                
        }
       
    }

    //Need to see if this function will be any use - maybe use Moment.js
    getTimeNews = () => {
        try {
            var yesterday = new Date(Date.now() - 86400000);
            return Axios.get(`http://hn.algolia.com/api/v1/search_by_date?tags=comment&numericFilters=created_at_i>X`)
        } catch (error){
            console.log(error)
        }
    }

    // Called whenever the component mounts and updates. This calls the API and filters results along
    // whatever is entered in SearchBar.
    countFeed = () => {
        const feed = this.getNews()
            .then(response => {
                if (response.data.hits){
                    let apiData = Array.from(response.data.hits);
                    let filteredApi = apiData.filter((item) => {
                        return item.title.toLowerCase().includes(this.props.searchBar.toLowerCase()) 
                        || item.author.toLowerCase().includes(this.props.searchBar.toLowerCase()) ;
                     })
                     this.setState({
                         api: filteredApi
                     })
                } 
            })
            .catch(error => {
                console.log(error)
            })
    }

    componentDidMount(){
        this.countFeed();
    }

    componentDidUpdate(){
        this.countFeed();
    }

    render(){

        return(

            this.state.api.map((item) => {
                return (
                    <div className="list-item">
                        <p className="list-content" key={item.title}><a href={item.url}>{item.title}</a></p>
                        <div className="list-info-wrapper">
                            <p className="list-info">{item.points} points</p>
                            <p className="list-info" key={item.author}>{item.author}</p>
                            <p className="list-info">Generic info for now.</p>
                            <p className="list-info" key={item.num_comments}>{item.num_comments} comments</p>
                            <p className="list-info list-info-last" key={item.url}><a href={item.url}>({item.url})</a></p>
                        </div>
                    </div>
                )
            })
        )
    }
}

export default ListItem;

// countFeed = () => {
//     const feed = this.getNews()
//         .then(response => {
//             if (response.data.hits && this.props.searchBar === ""){
//                 let apiData = Array.from(response.data.hits);
//                 this.setState({api: apiData})
//             } else if (response.data.hits && this.props.searchBar !== ""){
//                 let filteredApi = this.state.api.filter((item) => {
//                     return item.title.toLowerCase().includes(this.props.searchBar.toLowerCase()) 
//                     || item.author.toLowerCase().includes(this.props.searchBar.toLowerCase()) ;
//                 })
//                 this.setState({
//                     api: filteredApi
//                 })
//             }
//         })
//         .catch(error => {
//             console.log(error)
//         })
// }