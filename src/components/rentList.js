import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Checkbox from '@material-ui/core/Checkbox';
import Avatar from '@material-ui/core/Avatar';
import Button from "@material-ui/core/Button";

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: '90%',
    backgroundColor: theme.palette.background.paper,
  },
});

class CheckboxListSecondary extends React.Component {
  state = {
    checked: [1],
  };

  handleToggle = value => () => {
    const { checked } = this.state;
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    this.setState({
      checked: newChecked,
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <div>

      <List dense className={classes.root}>
                <ListItem key={0} button>
            <ListItemAvatar>
              <Avatar
                alt={`Avatar n°${0 + 1}`}
                src={`/static/images/avatar/${0 + 1}.jpg`}
                />
            </ListItemAvatar>
            <ListItemText primary={`Line item ${0 + 1}`} />
            <ListItemText primary={`description ${0 + 1}`} />
            <ListItemText primary={`description ${0 + 1}`} />
            <ListItemSecondaryAction>
              <Checkbox
                onChange={this.handleToggle(0)}
                checked={this.state.checked.indexOf(0) !== -1}
                />
            </ListItemSecondaryAction>
          </ListItem>
        {[1, 2, 3, 4].map(value => (
          <ListItem key={value} button>
            <ListItemAvatar>
              <Avatar
                alt={`Avatar n°${value + 1}`}
                src={`/static/images/avatar/${value + 1}.jpg`}
                />
            </ListItemAvatar>
            <ListItemText primary={`Line item ${value + 1}`} />
            <ListItemText primary={`Line item ${value + 1}`} />
            <ListItemText primary={`Line item ${value + 1}`} />
            <ListItemSecondaryAction>
              <Checkbox
                onChange={this.handleToggle(value)}
                checked={this.state.checked.indexOf(value) !== -1}
                />
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>


<Button
variant="contained"
color="primary"
onClick={() => this.props.history.push('/dashboard/orderconfirm')}
>
Book Them
</Button>
      
</div>
    );
  }
}

CheckboxListSecondary.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CheckboxListSecondary);
