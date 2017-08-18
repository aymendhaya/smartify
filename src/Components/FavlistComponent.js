import React , { Component } from 'react';
import Drawer from 'material-ui/Drawer';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import { connect } from 'react-redux';
import Track from './TrackComponent';
import { cancelFav } from '../Redux/Actions/TrackActions';


const style = {
  margin: 0,
  top: 'auto',
  right: '2%',
  bottom: '2%',
  left: 'auto',
  position: 'fixed',
};


class Favlist extends Component {

  constructor(props) {
    super(props);

    this.state = {openFavlist: false };

  }

  handleToggle = () => this.setState({openFavlist: !this.state.openFavlist});

  render() {

    return (
      <div>
          <Drawer open={this.state.openFavlist} width="30%">

          <Track tracks={this.props.manageFav} isinFavlist={true}/>

        </Drawer>

        <FloatingActionButton style={style} onTouchTap={this.handleToggle.bind(this)}><ActionFavorite /></FloatingActionButton>

      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  manageFav: state.manageFav,
});

const mapDispatchToProps = {cancelFav};

const FavlistContainer = connect(mapStateToProps, mapDispatchToProps)(Favlist);

export default FavlistContainer;