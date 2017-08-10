import React, { Component } from 'react';
import { getSongsByAlbum } from '../lib/SpotifyUtil';
import { Card, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import Track from './TrackComponent';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import { createStore }          from 'redux'

class Album extends Component {

  constructor(props) {
    super(props);

    this.state = {
      expanded: false,
      tracks: undefined,
    };

    getSongsByAlbum(this.props.objAlbum.id).then(
      json => {
        this.setState({ tracks: json.tracks.items })
        // console.log(this.state.tracks)
      })
  }


  render() {

    return (
      <div>
        <Card >
          <CardHeader
            title={this.props.objAlbum.name}
            subtitle={this.props.objAlbum.artists[0].name}
            avatar={this.props.objAlbum.images[0].url}
            actAsExpander={true}
            showExpandableButton={true}
          />

          <CardMedia
            expandable={true}
            overlay={<CardTitle title={this.props.objAlbum.name + "\'s Tracklist"}
              subtitle={'By ' + this.props.objAlbum.artists[0].name} />}
          >
            <img src={this.props.objAlbum.images[0].url} alt="" />
          </CardMedia>

          <CardText expandable={true}>
            <MuiThemeProvider><Track tracks={this.state.tracks} /></MuiThemeProvider>
          </CardText>
        </Card>
      </div>
    );
  }
}

export default Album;