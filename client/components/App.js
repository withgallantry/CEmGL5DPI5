import React from 'react';
import T from 'prop-types';
import {Link, IndexLink} from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

/**
 * NOTE: As of 2015-11-09 react-transform does not support a functional
 * component as the base compoenent that's passed to ReactDOM.render, so we
 * still use createClass here.
 */
export class App extends React.Component {
  static propTypes = {
    children: T.node,
  };

  constructor(props) {
    super(props);
    const today = new Date();
    const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
    this.state = {time};
  }

  render() {
    return (
      <div>
        <h1 style={{marginLeft: '20px'}}>Last 300 Active storify users from {this.state.time}</h1>
        <MuiThemeProvider>
          {this.props.children}
        </MuiThemeProvider>
      </div>
    );
  }
}
