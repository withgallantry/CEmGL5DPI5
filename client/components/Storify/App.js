import React from 'react';
import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import {grey400, darkBlack, lightBlack} from 'material-ui/styles/colors';
import {getUsers} from '../../lib/storifyUsers';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const renderUserItem = (user, index, onclick) => {
  return ( <ListItem
    key={index}
    leftAvatar={<Avatar src={user.avatar}/>}
    primaryText={`${user.username}`}
    onClick={onclick.bind(this, user.permalink)}
    secondaryText={
      <p>
        <span style={{color: darkBlack}}>{user.stats.stories} stories</span> | {user.paid_plan} | {user.permalink}
      </p>
    }
    secondaryTextLines={2}
  />);
};

const renderUserGroup = (userGroup, onclick) => {
  return userGroup.content.users.map((user, index) => {
    return renderUserItem(user, index, onclick);
  })
};


export class Storify extends React.Component {

  constructor(props) {
    super(props);
    this.state = {users: []};
  }

  componentWillMount() {
    const promises = [];
    promises.push(getUsers(0), getUsers(1), getUsers(2));

    Promise.all(promises).then(vals => {

      const users = [].concat.apply([], vals);
      this.setState({users});
    });

  }

  openLink(url) {
    window.open(url, '_blank');
  }

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <List>
            {this.state.users.map((userGroup) => renderUserGroup(userGroup, this.openLink))}
          </List>
        </div>
      </MuiThemeProvider>
    );
  }
}
