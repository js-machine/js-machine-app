import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { useStores } from '../stores';
import { makeStyles } from '@material-ui/core';
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
	root: {
		position: 'absolute',
		top: 0,
		left: 0,
		zIndex: 0,
		height: '100vh',
		width: '100%',
	},
	backgroundImage: {
		position: 'absolute',
		objectFit: 'cover',
		width: '100%',
		height: '100%',
		transition: 'opacity 0.4s'
	},
	backgroundDark: {
		position: 'absolute',
		height: '100%',
		width: '100%',
		backgroundColor: "rgba(0, 0, 0, 0.6)",
		transition: 'opacity 0.5s'
	}
}));

export const SmoothBackground = observer(() => {
	const classes = useStyles();

	const { uiStore } = useStores();
	const nextImageUrl = uiStore.backgroundState?.imageUrl;
	const nextIsDark = uiStore.backgroundState?.isDark;

	//	prepare next image to preload
	const imageToPreload = new Image();

	//	show next image smootly after loaded
	useEffect(() => {
		if(nextImageUrl !== undefined) {
			const topImage: HTMLImageElement | null = document.querySelector('.topImage');
			const bottomImage: HTMLImageElement | null = document.querySelector('.bottomImage');
			if(topImage && bottomImage) {
				//	preload image
				imageToPreload.src = nextImageUrl;
				imageToPreload.onload = () => {
					if(topImage.style.opacity === '0') {
						topImage.src = imageToPreload.src;
						topImage.style.opacity = '1';
					} else {
						bottomImage.src = imageToPreload.src;
						topImage.style.opacity = '0';
					}
				}
			}
		}
	}, [nextImageUrl]);

	return (
		<div className={classes.root}>
			<img className={clsx(classes.backgroundImage, 'bottomImage')}></img>
			<img className={clsx(classes.backgroundImage, 'topImage')} style={{opacity: 0}}></img>
			<div className={classes.backgroundDark} style={{opacity: nextIsDark ? 1 : 0}}></div>
		</div>
	)
});