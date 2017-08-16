import React, {Component} from 'react';

import Artist from './ArtistComponent';
import Album from './AlbumComponent';
import Track from './TrackComponent';

import PropTypes from 'prop-types'

class SearchResult extends Component {

  constructor(props) {
    super(props)
    this.state = {
      expanded_artist: undefined
    }
  }

  render() {

    if (!this.props.search_result) {
      return null
    }

    switch(this.props.search_type) {
      case 'artist':
        return <div>
          {(this.props.search_type === 'artist') ?
            (this.props.search_result)
              .map((data, key) => {
                return <Artist key={key} objArtist={data} expanded={data.id === this.state.expanded_artist} onExpandClick={id => this.handleArtistExpanded(id)} />
              })
            : null}
        </div>

      case 'album':
        return <div>
          {(this.props.search_type === 'album') ?
            (this.props.search_result)
              .map((data, key) => {
                return <Album key={key} objAlbum={data}/>
              })
            : null}
        </div>

      case 'track':
        return <Track tracks={this.props.search_result}/>

      default:
        return <div className="error">Unkown search type</div>
    }
  }

  handleArtistExpanded(id) {
    this.setState({expanded_artist: id})
  }
}

SearchResult.propTypes = {
  search_result: PropTypes.array.isRequired,
  search_type: PropTypes.string.isRequired
}

export default SearchResult
