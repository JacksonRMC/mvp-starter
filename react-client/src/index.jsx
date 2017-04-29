import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './components/List.jsx';
import Search from './components/Search.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      items: [],
      term: ''
    }
  }

  onSerachTermChange(e){
    this.setState({
      term: e.target.value
    })
  }

  clickhandler(term) {
     var q = this.state.term

    $.ajax({
      url: 'http://127.0.0.1:1128/repos',
      type: 'POST',
      data: {"term": `${term}`},
      dataType: 'application/json',
      success: (data) => {
        console.log(data)
      },
      error: (err) => {
        console.log('err')
      }
    })
  }

  componentDidMount() {
    $.ajax({
      url: '/items', 
      success: (data) => {
        this.setState({
          items: data
        })
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }

  render () {
    return (<div>
      <h1>Item List</h1>
      <List items={this.state.items}/>
      <Search onSearch={this.clickhandler.bind(this)} 
      onSerachTermChange={this.onSerachTermChange.bind(this)}
      />
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));