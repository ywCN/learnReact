import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyAKRu9Q1NFeewHGbsC85jAXa-Cwkm3avZQ';

// // experiment: This code will log out 5 video information
// YTSearch({key: API_KEY, term: 'surfboards'}, function(data) {
//     console.log(data);
// });

// create a new component. 
// this component should create some HTML.
// this component should be responsible for fetching data
class App extends Component {
    // init state
    constructor(props) {
        super(props);

        this.state = { 
            videos: [],  // [] for list of Objects
            selectedVideo: null // null for init
        };
        // still need to init first video
        this.videoSearch('surfboards');
    }

    videoSearch(term) {
        YTSearch({key: API_KEY, term: term}, (videos) => {
            this.setState({ 
                videos: videos,
                selectedVideo: videos[0]
            });
        });
    }

    render() {
        // returns a new function that can only be called every 300 ms
        const videoSearch = _.deboune((term) => { this.videoSearch(term) }, 300);
        return (
            <div>
                <SearchBar onSearchTermChange={videoSearch} />
                <VideoDetail video={this.state.selectedVideo} />
                {/* pass props to VideoList */}
                <VideoList
                    onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                    videos={this.state.videos}
                />
                
            </div>
        );
    }
}

// Take this component's generated HTML and put it
// on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
// document.querySelector('.container') is the root container element
