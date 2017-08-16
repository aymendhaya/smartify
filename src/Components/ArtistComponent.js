import React, { Component } from 'react';

import { Card, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import { getAlbumsByArtist } from '../lib/SpotifyUtil';
import Album from './AlbumComponent';
// import { createStore }          from 'redux'

const styles = {
  chip: {
    margin: 3,
    display: 'inline-flex',
  },
};

class Artist extends Component {

  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
      albums: undefined
    };

    getAlbumsByArtist(this.props.objArtist.id).then(
      json => {
        this.setState({ albums: json.items })
        // console.log(this.state.albums)
      })
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.objArtist.id !== nextProps.objArtist.id) {
      this.setState({
        expanded: false,
        albums: undefined
      }, () => {
        getAlbumsByArtist(nextProps.objArtist.id).then(
          json => {
            this.setState({ albums: json.items })
          })
      })

    }
  }

  handleExpandChange = () => {
    this.props.onExpandClick(this.props.expanded ? undefined : this.props.objArtist.id)
  };

  handleToggle = (event, toggle) => {
    this.setState({ expanded: toggle });
  };

  handleExpand = () => {
    this.setState({ expanded: true });
  };

  handleReduce = () => {
    this.setState({ expanded: false });
  };

  render() {
    return (
      <Card expanded={this.props.expanded} onExpandChange={(expanded) => this.handleExpandChange(expanded) }>
        <CardHeader
          title={this.props.objArtist.name}
          subtitle={'Followers: ' + this.props.objArtist.followers.total + ' / Popularity: ' + this.props.objArtist.popularity}
          actAsExpander={true}
          showExpandableButton={true}
          avatar={this.props.objArtist.images.length > 0 ? this.props.objArtist.images[0].url : "http://via.placeholder.com/150x150"} alt="" />

        />


        <CardMedia
          expandable={true}

          overlay={<CardTitle title={this.props.objArtist.name + '\'s Albums List'}
            subtitle={this.props.objArtist.genres.map((data, key) =>
            { return <span key={key} style={styles.chip} className="label label-danger">{data}</span> })} />}

        // {return <Chip key={key} style={styles.chip} >{data} </Chip> })} />}
        >
          <img src={this.props.objArtist.images.length > 0 ? this.props.objArtist.images[0].url : "http://via.placeholder.com/600x500"} alt="" />
        </CardMedia>
        <CardTitle title="" expandable={true} />
        <CardText expandable={true}>

          {this.state.albums ? (this.state.albums).map((data, key) =>
          { return <Album objAlbum={data} key={key} /> })
            : null}

        </CardText>

      </Card>
    );
  }
}

export default Artist;
