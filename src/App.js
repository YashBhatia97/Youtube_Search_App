import React, { Component } from 'react';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyCx_f1nFUCtC0Rf8tqOKKiXvyfKXcag-0c';

class App extends Component {

  constructor (props){

    super(props);

    this.state = { 

      videos: [],
      selectedVideo: null

    };

    this.videoSearch('Prateek kuhad');
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (data) => {
      console.log(data);    
      data.sort((a,b) => {
        return a.snippet.title.toUpperCase() > b.snippet.title.toUpperCase()? 1:-1;
      });
     
      this.setState({ 
        videos: data,
        selectedVideo: data[0]
      });
    });
  }
  

  render() {
    return (
      <div>
      <h4 className="col-md-3 heading-youtube" color="red"> My YouTube </h4>
      <SearchBar onSearchTermChange={searchTerm => this.videoSearch(searchTerm)}/>
      <VideoDetail video= {this.state.selectedVideo} />
      <form className="form-sort col-md-4">
      <label> Sort By:- </label> 
      <button type="button" className="button1-click"> Name </button>
      <button type="button" className="button2-click"> Publish Date </button> </form>
      <VideoList 
      onVideoSelect={userSelected => this.setState({selectedVideo: userSelected})}
      videos={this.state.videos} />
      </div>
      );
    }
  }

  export default App;