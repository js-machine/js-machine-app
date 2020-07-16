import React, { memo } from 'react';
import { makeStyles } from '@material-ui/core';
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
	root: {
		position: 'absolute',
		top: 0,
		left: 0,
		zIndex: 0,
		height: '100%',
		width: '100%',
	},
	backgroundImage: {
		objectFit: 'cover',
		width: '100%',
		height: '100%',
		transition: 'opacity 0.5s'
	}
}));

export const BackgroundImage = memo((props: {url: string | undefined, imageClass: string}) => {
	const classes = useStyles();
	
	return (
		<div className={classes.root}>
			<img className={clsx(classes.backgroundImage, props.imageClass)} src={props.url}></img>
		</div>
	)
});