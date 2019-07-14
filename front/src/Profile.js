import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import {Button} from '@material-ui/core';
import {Redirect} from 'react-router';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: {
        email: 'perry.theplatypus@wildcodeschool.fr',
        name: 'Perry',
        lastname: 'the platypus',
        signOut: false,
      },
    };
  }

  handleSignOut = () => {
    this.setState({signOut: true});
  };

  render() {
    if (this.state.signOut === true) {
      return <Redirect to='/signin' />;
    }
    return (
      <List>
        <ListItem>
          <ListItemText primary='Name' secondary={this.state.profile.name} />
        </ListItem>
        <ListItem>
          <ListItemText
            primary='Last name'
            secondary={this.state.profile.lastname}
          />
        </ListItem>
        <ListItem>
          <ListItemText primary='Email' secondary={this.state.profile.email} />
        </ListItem>
        <ListItem>
          <Button
            type='submit'
            variant='contained'
            color='primary'
            component='span'
            onClick={this.handleSignOut}>
            Sign Out
          </Button>
        </ListItem>
      </List>
    );
  }
}

export default Profile;
