import React, { Component } from 'react';
import { Table, TableBody, TableRow, TableRowColumn, } from 'material-ui/Table';
import Checkbox from 'material-ui/Checkbox';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import Snackbar from 'material-ui/Snackbar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import {blue500} from 'material-ui/styles/colors';
// import { createStore }          from 'redux'

const style = {
    margin: 0,
    top: 'auto',
    right: 20,
    bottom: 20,
    left: 'auto',
    position: 'fixed',
};

class Track extends Component {

  constructor(props) {
    super(props);

    this.state = {
     
     
      autoHideDuration: 2500,
      message: 'LIKED',
      open: false,
      likedSong: '',
      likedSongs: [],
      openFavlist: false,

    };

  }
  handleToggle = () => this.setState({openFavlist: !this.state.openFavlist});

  handleTouchTap = (obj) => {

    let likedSongs = (this.state.likedSongs.slice())

    this.setState({ message: likedSongs.indexOf(obj) < 0 ? 'LIKED' : 'DISLIKED', })

    likedSongs.indexOf(obj) < 0 ? likedSongs.push(obj) : likedSongs.splice(likedSongs.indexOf(obj), 1);

    this.setState({ likedSong: obj.name + ' - ' + obj.artists[0].name, });
    this.setState({ likedSongs: likedSongs, });
    this.setState({ open: true, });
    // console.log(this.state.likedSongs);

  };

  handleActionTouchTap = () => {
       this.handleToggle()  
    this.setState({
      open: false,
    });
    
  
    console.log(this.state.likedSongs);
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
                    <Checkbox onCheck={() => this.handleTouchTap(data)} label={data.artists[0].name+' - '+ data.name} checkedIcon={<ActionFavorite />} uncheckedIcon={<ActionFavoriteBorder />} />
                  {/* this.handleTouchTap(data.name, data.id, data.artists[0].name) */}
                  </TableRowColumn>
                </TableRow>)
            }) : null}


          </TableBody>
        </Table>

        <Snackbar
          style={{width: 700}}
          open={this.state.open}
          message={this.state.likedSong}
          action={this.state.message}
          autoHideDuration={this.state.autoHideDuration}
          onActionTouchTap={this.handleActionTouchTap}
          onRequestClose={this.handleRequestClose}
        />

        <Drawer open={this.state.openFavlist} width="30%">

        {(this.state.likedSongs).map((data, key) =>  
        
        {return <MenuItem key={key} leftIcon={<ActionFavorite />}>{data.name+ ' - ' + data.artists[0].name}</MenuItem>})}

        </Drawer>

       <FloatingActionButton style={style} onTouchTap={this.handleToggle.bind(this)}><ActionFavorite color={blue500} /></FloatingActionButton>


      </div>

    );
  }
}

export default Track;