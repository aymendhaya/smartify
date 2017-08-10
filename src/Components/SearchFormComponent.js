import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import SearchResult from './SearchResultComponent';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';


import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { search } from '../lib/SpotifyUtil';


class SearchForm extends Component {

  constructor(props) {
    super(props)

    this.state = {
      search_text: '',
      search_type: '',
      search_result: undefined,
      formControl: false,
      alertContent: '',
    }
  }

  handleOpen = (mesage) => {
    let msg = mesage;
    this.setState({ alertContent: msg, formControl: true, });
  };

  handleClose = () => {
    this.setState({ formControl: false });
  };



  render() {

    const actions = [<FlatButton label="Back" primary={true} onTouchTap={this.handleClose} />,];

    return (

      <div className="col-md-6 col-md-offset-3 col-sm-10 col-sm-offset-1">

      <Dialog
          actions={actions}
          modal={false}
          onRequestClose={this.handleClose}
          open={this.state.formControl}

        >
          {this.state.alertContent}
        </Dialog>

        <TextField
          floatingLabelText="What are you searching for ?"
          floatingLabelFixed={true}
          fullWidth={true}
          onChange={(event, value) => { this.setState({ search_text: value }); }}
        />

        <SelectField
          fullWidth={true}
          floatingLabelText="It's a track, an album or an artist ?"
          floatingLabelFixed={true}
          value={this.state.search_type}
          onChange={(event, index, value) => { this.setState({ search_type: value }); this.setState({ search_result: undefined }); }}
        >

          <MenuItem value={'track'} primaryText="Track" />
          <MenuItem value={'album'} primaryText="Album" />
          <MenuItem value={'artist'} primaryText="Artist" />

        </SelectField>

        <RaisedButton

          label="Search" primary={true}
          fullWidth={true}
          onClick={this.doSearch.bind(this)}
        /><br /><br />


        <MuiThemeProvider><SearchResult params={this.state} /></MuiThemeProvider>

        

      </div>

    );

  }



      doSearch = () => {

    this.state.search_text === '' ? this.setState({ alertContent: 'Please enter your Search Key', formControl: true, })
      : this.state.search_type === '' ? this.setState({ alertContent: 'Please select you Search Type', formControl: true, })

        : search(this.state.search_text, this.state.search_type).then(
          json => {

            this.state.search_type === 'artist' ? this.setState({ search_result: json.artists.items })
              : this.state.search_type === 'album' ? this.setState({ search_result: json.albums.items })
                : this.setState({ search_result: json.tracks.items })


            console.log(this.state.search_result)

          })
  };


}

export default SearchForm;