import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import CircularProgress from 'material-ui/CircularProgress';
import { createStore } from 'redux'
// import {search} from './lib/SpotifyUtil';

class SearchForm extends Component {

     constructor(props) {
         super(props)

         this.formHandler = function (objForm = {}, action) {

             let _objForm = {};

             _objForm.search_text   = action.type.search_text   ? action.type.search_text   : objForm.search_text ;
             _objForm.search_type   = action.type.search_type   ? action.type.search_type   : objForm.search_type ;
             _objForm.search_result = action.type.search_result ? action.type.search_result : objForm.search_result ;

             return _objForm;

         }

         this.formStore = createStore(this.formHandler);

         this.formStore.subscribe(() =>  console.error(this.formStore.getState()))

         this.doSearch = function (){

             this.formStore.dispatch({ type: {search_result: 'RESULT'} })
             console.log(this.formStore.getState());

             // search(this.formStore.getState().search_text, this.formStore.getState().search_type).then(
             //     json => {
             //         this.formStore.dispatch({ type: {search_result: json} })
             //         console.log(this.formStore.getState());
             //     })

         }
     }

    render() {
    return (

      <div className="col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3">

        <TextField
            hintText="Type you favorite track, album or artist here..."
            fullWidth={true}
            onChange={e => this.formStore.dispatch({ type: {search_text: e.target.value} })} value={this.formStore.getState().search_text}
        />

        <SelectField
          //floatingLabelText="It's a track, an album or an artist ?"
          // floatingLabelFixed={true}
           //hintText="Select search type..."
          //floatingLabelText="Searching by..."
          value={this.formStore.getState().search_type}
          onChange={(event, index, value) => this.formStore.dispatch({ type: {search_type: value} })}
          fullWidth={true}
        >

          <MenuItem value={'track'} primaryText="Track" />
          <MenuItem value={'album'} primaryText="Album" />
          <MenuItem value={'artist'} primaryText="Artist" />

        </SelectField>

        <RaisedButton
            onClick     ={e => this.doSearch()}
            label       ="Search" primary={true}
            fullWidth   ={true}
        />

          <CircularProgress style={{display: 'none'}} size={80} thickness={5} />

      </div>
    );
  }



}

export default SearchForm;