import React, { Component } from 'react';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';

const API_KEY = 'AIzaSyCx_f1nFUCtC0Rf8tqOKKiXvyfKXcag-0c';

class App extends Component {

  constructor (props){
    
    super(props);

    this.state = { videos: [] };

    this.videoSearch('React Tutorials');
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (data) => {
      console.log(data);
      this.setState({ videos: data });
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

export default App;