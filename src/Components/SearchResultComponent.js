import React , { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Artist from './ArtistComponent';
import Album from './AlbumComponent';
import Track from './TrackComponent';



export default class SearchResult extends Component {


  render() {

    return (

                <div style={{ display: this.props.params.search_result ? 'block' : 'none' }}>


          <div style={{ display: this.props.params.search_type === 'artist' ? 'block' : 'none' }}>
            {(this.props.params.search_type === 'artist') && (this.props.params.search_result)  ? (this.props.params.search_result)
              .map((data, key) =>
              { return <MuiThemeProvider key={key}><Artist objArtist={data} /></MuiThemeProvider> })
              : null}

          </div>

             <div style={{ display: this.props.params.search_type === 'album' ? 'block' : 'none' }}>
            {(this.props.params.search_type === 'album') && (this.props.params.search_result)  ? (this.props.params.search_result)
              .map((data, key) =>
              { return <MuiThemeProvider key={key}><Album objAlbum={data} /></MuiThemeProvider> })
              : null}
          </div>

               <div style={{ display: this.props.params.search_type === 'track' ? 'block' : 'none' }}>
            {(this.props.params.search_type === 'track') && (this.props.params.search_result)  
            ?  <MuiThemeProvider><Track tracks={this.props.params.search_result} /></MuiThemeProvider> 
              : null}
          </div>
          
        </div>

    );
  }
}