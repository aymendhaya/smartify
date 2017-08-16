import React, { Component } from 'react';
import { Table, TableBody, TableRow, TableRowColumn, } from 'material-ui/Table';
import Checkbox from 'material-ui/Checkbox';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import Snackbar from 'material-ui/Snackbar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import FloatingActionButton from 'material-ui/FloatingActionButton';

import { connect } from 'react-redux';
import { addFav, cancelFav } from '../redux';

const style = {
  margin: 0,
  top: 'auto',
  right: '2%',
  bottom: '2%',
  left: 'auto',
  position: 'fixed',
};

class Track extends Component {

  constructor(props, dispatch) {
    super(props);

    this.state = {

      autoHideDuration: 2500,
      message: 'LIKED',
      open: false,
      likedSong: '',
      openFavlist: false,

    };

  }
  handleToggle = () => this.setState({ openFavlist: !this.state.openFavlist });

  handleTouchTap = (obj) => {

    let localStore = {
      trackID: obj.id,
      trackName: obj.name + ' - ' + obj.artists[0].name
    }

    let isLiked = (this.props.manageFav).find(obj => JSON.stringify(obj) === JSON.stringify(localStore))

    this.setState({ message: !isLiked ? 'LIKED' : 'DISLIKED', });

    isLiked ? this.props.cancelFav(localStore) : this.props.addFav(localStore);

    this.setState({ likedSong: obj.name + ' - ' + obj.artists[0].name, });
    this.setState({ open: true, });

  };

  handleActionTouchTap = () => {
    this.handleToggle()
    this.setState({
      open: false,
    });

  };

  handleRequestClose = () => {
    this.setState({
      open: false,
    });

  };

  render() {

    return (
      <div>

        <Table onRowSelection={this.handleRowSelection} >

          <TableBody displayRowCheckbox={false}>

            {this.props.tracks ? (this.props.tracks).map((data, key) => {
              return (
                <TableRow key={key}>
                  <TableRowColumn>
                    <Checkbox onCheck={() => this.handleTouchTap(data)} label={data.artists[0].name + ' - ' + data.name} checkedIcon={<ActionFavorite />} uncheckedIcon={<ActionFavoriteBorder />} />
                    {/* this.handleTouchTap(data.name, data.id, data.artists[0].name) */}
                  </TableRowColumn>
                </TableRow>)
            }) : null}


          </TableBody>
        </Table>

        <Snackbar
          // style={{width: 700}}
          open={this.state.open}
          message={this.state.likedSong}
          action={this.state.message}
          autoHideDuration={this.state.autoHideDuration}
          onActionTouchTap={this.handleActionTouchTap}
          onRequestClose={this.handleRequestClose}
        />

        <Drawer open={this.state.openFavlist} width="50%">

          {(this.props.manageFav).map((data, key) =>

          { return <MenuItem key={key} leftIcon={<ActionFavorite />}>{data.trackName}</MenuItem> })}

        </Drawer>

        <FloatingActionButton style={style} onTouchTap={this.handleToggle.bind(this)}><ActionFavorite /></FloatingActionButton>

      </div>

    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  manageFav: state.manageFav,
});

const mapDispatchToProps = { addFav, cancelFav, };

const TrackContainer = connect(mapStateToProps, mapDispatchToProps)(Track);

export default TrackContainer;