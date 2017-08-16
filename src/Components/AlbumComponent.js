import React, { Component } from 'react';
// import {bindActionCreators} from 'redux';
// import {connect} from 'react-redux';
// import * as CartActions from '../actions/cart';

import { getSongsByAlbum } from '../lib/SpotifyUtil';
import { Card, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import Track from './TrackComponent';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

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
            overlay={<CardTitle title={this.props.objAlbum.name + '\'s Tracklist'}
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

// function mapStateToProps(state, prop){

//   return { cart: state.cart }
// }

// function mapDispatchToProps(dispatch) {

//   return { action: bindActionCreators(CartActions, dispatch)}

// }

// export default connect(mapStateToProps, mapDispatchToProps)(Track);

export default Album
