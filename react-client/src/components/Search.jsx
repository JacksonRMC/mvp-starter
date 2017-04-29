import React from 'react';


class Search extends React.Component {
	constructor ( props ){
		super(props);

	}


render () {
	
	return ( 
	<div>
    <h4>Search</h4>
    <form onSubmit={this.props.onSearch}>  
  	Search:  <input type="text" 
  	 onChange={this.props.onSerachTermChange}
  	/>
    <button type="submit">GiphMe</button>
    </form>
  </div>
  )
  
  }
}

export default Search;

