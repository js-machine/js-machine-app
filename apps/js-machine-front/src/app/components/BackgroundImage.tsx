import React from 'react';
import { makeStyles } from '@material-ui/core';
import { observer } from 'mobx-react-lite';

const useStyles = makeStyles(theme => ({
	root: {
		position: 'absolute',
		top: 0,
		left: 0,
		zIndex: 0,
		height: '100%',
		width: '100%',
		transition: 'opacity 0.3s',
		opacity: 1
	},
	backgroundImage: {
		objectFit: 'cover',
		width: '100%',
		height: '100%',
	},
	backgroundDark: {
		position: 'absolute',
		height: '100%',
		width: '100%',
		backgroundColor: "rgba(0, 0, 0, 0.6)",
	}
}));

export const BackgroundImage = observer((props: { url: string | undefined}) => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<div className={classes.backgroundDark}></div>
			<img className={classes.backgroundImage} src={props.url}></img>
		</div>
	)
});