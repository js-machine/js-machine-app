import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { useStores } from '../stores';
import { makeStyles } from '@material-ui/core';
import { BackgroundImage } from './BackgroundImage';
import { Event } from '@js-machine-app/models';

const useStyles = makeStyles(theme => ({
	root: {
		position: 'absolute',
		top: 0,
		left: 0,
		height: '100vh',
		width: '100%',
	},
	backgroundDark: {
		position: 'absolute',
		height: '100%',
		width: '100%',
		backgroundColor: "rgba(0, 0, 0, 0.6)",
	}
}));

let isTopImageVisible: boolean = true;
let bottomImageUrl: string | undefined;
let topImageUrl: string | undefined;

export const SmoothBackground = observer(() => {
	const classes = useStyles();
	const { uiStore } = useStores();

	const nextImage = uiStore.backgroundState?.nextImageUrl;

	//	prepare next image to load
	if(isTopImageVisible) {
		bottomImageUrl = nextImage;
	} else {
		topImageUrl = nextImage;
	};

	//	show next image after loaded smootly
	useEffect(() => {
		const topImage: HTMLImageElement | null = document.querySelector('.topImage');
		const bottomImage: HTMLImageElement | null = document.querySelector('.bottomImage');
		if(topImage && bottomImage) {
			bottomImage.onload = () => {
				topImage.style.opacity = '0';
				isTopImageVisible = false;
			}
			topImage.onload = () => {
				topImage.style.opacity = '1';
				isTopImageVisible = true;
			}
		}
	});

	return (
		<div className={classes.root}>
			<BackgroundImage url={bottomImageUrl} imageClass='bottomImage'/>
			<BackgroundImage url={topImageUrl} imageClass='topImage'/>
			<div className={classes.backgroundDark}></div>
		</div>
	)
});