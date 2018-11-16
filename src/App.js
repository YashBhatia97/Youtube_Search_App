import React, { Component } from 'react';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import logo from './components/images.png'

const API_KEY = 'AIzaSyCx_f1nFUCtC0Rf8tqOKKiXvyfKXcag-0c';

class App extends Component {

  constructor (props){

    super(props);
    this.sorting1 = this.sorting1.bind(this)
    this.sorting2 = this.sorting2.bind(this)
    this.state = { 

      videos: [],
      selectedVideo: null

    };

    this.videoSearch('Postman API services');
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (data) => {
      console.log(data);    
      this.setState({ 
        videos: data,
        selectedVideo: data[0]
      });
    });
  }

  sorting1(){
    var data = this.state.videos;
    data.sort((a,b) => {
      return a.snippet.title.toUpperCase() > b.snippet.title.toUpperCase()? 1:-1;
    });
    console.log(data);
    this.setState({ 
      videos: data
    });
  }
  
  sorting2() {
    var data = this.state.videos;
    data.sort((a,b) => {
      return a.snippet.publishedAt < b.snippet.publishedAt? 1:-1;
    });
    console.log(data);
    this.setState({ 
      videos: data
    });
  }

  render() {
    return (
      <div>
      <div className="col-md-8 div-one">
      <div className="div-search">
      <img className="col-md-4 logo-youtube" src={logo} />
      <SearchBar onSearchTermChange={searchTerm => this.videoSearch(searchTerm)}/>
      </div>
      <VideoDetail video= {this.state.selectedVideo} />
      </div>
      <div className="col-md-4 div-two">
      <form className="form-sort"> 
      <label> Sort By:- </label>
      <button type="button" className="button1-click" onClick={this.sorting1}> Name </button>
      <button type="button" className="button2-click" onClick={this.sorting2}> Publish Date </button>
      </form>
      <VideoList 
      onVideoSelect={userSelected => this.setState({selectedVideo: userSelected})}
      videos={this.state.videos} />
      </div>
      </div>
      );
    }
  }

  export default App;