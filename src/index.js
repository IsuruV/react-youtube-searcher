// Create a new component. This compnent should produce some HTML
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import _ from 'lodash';

const API_KEY = '####';

class App extends Component{
  constructor(props){
    super(props);
    this.state = { videos: [],
                   selectedVideo: null
                  };

    this.onSearch = this.onSearch.bind(this)
    this.onSearch('surfboard')

  }

  onSearch(term){
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({ videos: videos,
                      selectedVideo: videos[0]
                    });
    });
  }

  onVideoSelect(selectedVideo){
    this.setState({selectedVideo});
  }
  render(){
    const videoSearch = _.debounce((term) => {this.onSearch(term), 800})
    return(
      <div>
        <SearchBar onSearch={videoSearch}/>
        <VideoDetail video={this.state.selectedVideo}/>
          <VideoList onVideoSelect={this.onVideoSelect.bind(this)} videos={this.state.videos}/>
      </div>
    )
  }
}

// Take this compnent's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
