import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import SearchBar from './components/search_bar'
import VideoList from './components/video_list'
import VideoDetail from './components/video_detail'
import YTSearch from 'youtube-api-search'
import _ from 'lodash'
const API_KEY = 'AIzaSyD7dtR3O-Wb_6Vu14NGSmXPvofy6YrhKvk'


class App extends Component {
	constructor(props){
		super(props);
		this.state = { videos: [],
		 selectedVideo: null };

		// YTSearch({key: API_KEY, term: "one plus 5"}, (videos) => {
		// 	this.setState({videos: videos,
		// 		selectedVideo: videos[0]});
		// });

	this.videoSearch('one plus five features')

	}

	videoSearch(term){
		YTSearch({key: API_KEY, term: term}, (videos) => {
			this.setState(
				{
					videos: videos,
				selectedVideo: videos[0]
			});
		});
	}

	render(){

	const videoSearch = _.debounce(term => {this.videoSearch(term)},300);
	//throttling
	return (
		<div>
			<SearchBar onSearchTermChange={videoSearch}/>
			<VideoDetail video={this.state.selectedVideo}/>
			<VideoList onVideoSelect={selectedVideo => {this.setState({selectedVideo}) }}
			videos={this.state.videos}/>
		</div>

		//			// <SearchBar onSearchTermChange={(term) => this.videoSearch(term)}/>

		);
	}
	
}

ReactDOM.render(<App/>, document.querySelector('.container'))