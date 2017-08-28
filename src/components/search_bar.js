import React, { Component } from 'react';

// const SearchBar = () => {
// 	return <input/>;
// }


class SearchBar extends Component {
	constructor(props){
		super(props);
		this.state = { term: '' };
	}

	render(){
		// event
		// return <input onChange={this.onInputChange}/>;
		// return <input onChange={(event) => console.log(event.target.value)}/>;
		return (
			<div className='search-bar'>

			<input 
			value={this.state.term}//controlled component
			onChange={(event) => {this.onInputChange(event.target.value)}}/>

			</div>
						// onChange={(event) => this.setState({ term: event.target.value})}/>

						// Value of term: {this.state.term};

		);
	
	}

	onInputChange(term){
		this.setState({ term: term});
		this.props.onSearchTermChange(term);
	}

	//event Handler
	// onInputChange(event){
	// 	console.log(event.target.value)
	// }
}

export default SearchBar;