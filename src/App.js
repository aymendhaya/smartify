import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SearchForm from './SearchFormComponent';
import injectTapEventPlugin from 'react-tap-event-plugin';


// import logo from './logo.svg';
// import './App.css';
// import {search} from './lib/SpotifyUtil'

injectTapEventPlugin();


    const SearchFormTag = () => (<MuiThemeProvider><SearchForm /></MuiThemeProvider>);


class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      search_text: '',
      search_type: 'artist',
      search_result: undefined
    }
  }

  render() {

    // var auxData = ['Radiohead', 'Queen', 'Archenemy'];
    // var dataList = auxData.map(function(data, index){ return <li key={ index }>{data}</li>; })

    return (
      
      <div className="App">

         <p className="App-intro">
          To get started, type a <code>keyword</code> and select a <code>category</code> then click search button.
        </p> 
      
<SearchFormTag />

{/* <ul>{ dataList }</ul> */}
 
        {
          (
            this.state.search_result ?
              <pre style={{textAlign: 'left'}}>{JSON.stringify(this.state.search_result, false, 3)}</pre>
            : undefined
          )
        }
      </div>
    );
  }

}

export default App;
