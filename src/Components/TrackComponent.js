import React, { Component } from 'react';
import { Table, TableBody, TableRow, TableRowColumn, } from 'material-ui/Table';
import Checkbox from 'material-ui/Checkbox';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionDislike from 'material-ui/svg-icons/navigation/cancel';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import { connect } from 'react-redux';
import { addFav, cancelFav } from '../Redux/Actions/TrackActions';

class Track extends Component {

  constructor(props, dispatch) {
    super(props);

    this.state = { openFavlist: false};

  }

  handleToggle = () => this.setState({ openFavlist: !this.state.openFavlist });

  handleTouchTap = (obj) => {

    let localStore = obj;
    let isLiked = (this.props.manageFav).find(obj => JSON.stringify(obj) === JSON.stringify(localStore))

    isLiked ? this.props.cancelFav(localStore) : this.props.addFav(localStore);

  };

  render() {

    return (<div>

      <Table onRowSelection={this.handleRowSelection} >
        <TableBody displayRowCheckbox={
          false
        } >

          {
            this.props.tracks ? (this.props.tracks).map((data, key) => {
              return (<TableRow key={
                key
              } >
                <TableRowColumn>
                  <Checkbox 
                   checked={(this.props.manageFav).find(obj => JSON.stringify(obj) === JSON.stringify(data)) ? true : false}
                    onCheck={() => this.handleTouchTap(data)}
                    label={data.artists[0].name + ' - ' + data.name}
                    checkedIcon={ !this.props.isinFavlist ? <ActionFavorite/> : <ActionDislike/>  }
                    uncheckedIcon={ !this.props.isinFavlist ? <ActionFavoriteBorder/> : <ActionDislike/>  }

                  /> </TableRowColumn> </TableRow>)
            }) : null
          }

        </TableBody> </Table>

    </div>

    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  manageFav: state.manageFav,
});

const mapDispatchToProps = { addFav, cancelFav };

const TrackContainer = connect(mapStateToProps, mapDispatchToProps)(Track);

export default TrackContainer;