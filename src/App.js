import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SearchForm from './Components/SearchFormComponent';
import injectTapEventPlugin from 'react-tap-event-plugin';
import TopBar from './Components/appLayouts/TopBarComponent';




injectTapEventPlugin();

// import logo from './logo.svg';
// import './App.css';
// import {search} from './lib/SpotifyUtil'
//  let  SearchFormTag = () => ( <MuiThemeProvider><SearchForm/></MuiThemeProvider>);
/* <SearchFormTag /> */

         

class App extends Component {

  render() {



    return (
      
      <div className="App">
        
  <MuiThemeProvider><TopBar/></MuiThemeProvider> 

 <MuiThemeProvider><SearchForm/></MuiThemeProvider> 
  
      </div>
    );
  }

}

export default App;
