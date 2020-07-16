import React, { memo, KeyboardEvent, MouseEvent } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import BookIcon from '@material-ui/icons/Book';
import EventIcon from '@material-ui/icons/Event';
import PeopleIcon from '@material-ui/icons/People';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import NoteAddIcon from '@material-ui/icons/NoteAdd';

const useStyles = makeStyles(theme => ({
  icon: {
    paddingLeft: theme.spacing(1),
    [theme.breakpoints.down('xs')]: {
      paddingLeft: 0,
    },
  },
  text: {
    whiteSpace: 'nowrap',
  },
}));

interface Props {
  onClick?: (event: KeyboardEvent | MouseEvent) => void;
}

const routes = [
  { name: 'New Digest', icon: <NoteAddIcon />, to: '/new-digest' },
  { name: 'Digests', icon: <BookIcon />, to: '/digests' },
  { name: 'Events', icon: <EventIcon />, to: '/events' },
];

export const SideList = memo(({ onClick }: Props) => {
  const classes = useStyles();

  return (
    <div onClick={onClick}>
      <List>
        {routes.map(route => (
          <ListItem button key={route.name} component={Link} to={route.to}>
            <ListItemIcon className={classes.icon}>{route.icon}</ListItemIcon>
            <ListItemText className={classes.text} primary={route.name} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['Users'].map((text, index) => (
          <ListItem button key={text} component={Link} to="/users">
            <ListItemIcon className={classes.icon}>
              {index % 2 === 0 ? <PeopleIcon /> : <EventIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );
});
