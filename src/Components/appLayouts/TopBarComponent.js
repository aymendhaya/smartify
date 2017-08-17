import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';


class TopBar extends Component {

  constructor(props) {
    super(props);

    this.state = {};

  }

  render() {

    return (
      <AppBar
    title="Smartify"
    iconClassNameRight="muidocs-icon-navigation-expand-more"
  />
    );
  }
}

export default TopBar
