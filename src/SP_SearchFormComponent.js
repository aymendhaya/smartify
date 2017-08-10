import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import {search} from './lib/SpotifyUtil';



const styles = {
  block: {
    width: 155,
    display: 'flex',
    
    

    
  },
  radioButton: {
    marginBottom: 6,
  },
};



// let doSearch = function() {
//     console.log(state.search_type);
//     search('Radiohead', 'artist').then(
//       json => {
//         this.setState({search_result: json})
//     })
//   }

//      let state = {
//       search_text: '',
//       search_type: 'artist',
//       search_result: undefined
//     }
  
    class SearchFormComponent extends Component {
  constructor(props) {

    super(props)

    this.state = {
      search_text: '',
      search_type: 'artist',
      search_result: undefined
    }
  }

  render() {
    return (
      
    <div className="col-md-6 col-md-offset-3 col-sm-6 col-sm-offset-3">
  
 <RadioButtonGroup name="searchBy" defaultSelected="artist" style={styles.block}>
    
          <RadioButton
        value="artist"
        label="Artist"
        style={styles.radioButton}

      />

      <RadioButton
        value="album"
        label="Album"
        style={styles.radioButton}
        
      />

       <RadioButton
        value="track"
        label="Track"
        style={styles.radioButton}
   
      />
      
    </RadioButtonGroup> 

    <RaisedButton onClick={ e => doSearch()} label="Search" primary={true} fullWidth={true}/>

  </div>
    );
  }

  // Private methods

  doSearch() {
    console.log('sdsds');
    // search(this.state.search_text, this.state.search_type).then(
    //   json => {
    //     this.setState({search_result: json})
    // })
  }
}

// const SearchFormComponent = () => (


 

//   <div className="col-md-6 col-md-offset-3 col-sm-6 col-sm-offset-3">
  
//  <RadioButtonGroup name="searchBy" defaultSelected="artist" style={styles.block}>
    
//           <RadioButton
//         value="artist"
//         label="Artist"
//         style={styles.radioButton}

//       />

//       <RadioButton
//         value="album"
//         label="Album"
//         style={styles.radioButton}
        
//       />

//        <RadioButton
//         value="track"
//         label="Track"
//         style={styles.radioButton}
   
//       />
      
//     </RadioButtonGroup> 

//     <RaisedButton onClick={ e => doSearch()} label="Search" primary={true} fullWidth={true}/>

//   </div>

  
// );


 

export default SearchFormComponent;