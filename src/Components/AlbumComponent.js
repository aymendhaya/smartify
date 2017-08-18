import React, { Component } from 'react';
import { getSongsByAlbum } from '../lib/SpotifyUtil';
import { Card, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import Track from './TrackComponent';

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
            overlay={<CardTitle title={this.props.objAlbum.name + '\'s Tracklist'}
              subtitle={'By ' + this.props.objAlbum.artists[0].name} />}
          >
            <img src={this.props.objAlbum.images[0].url} alt="" />
          </CardMedia>

          <CardText expandable={true}>
            <Track isinFavlist={false} tracks={this.state.tracks} />
          </CardText>
        </Card>
      </div>
    );
  }
}

export default Album
