import React, { memo, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { useStores } from '../stores';
import { makeStyles } from '@material-ui/core';
import { BackgroundImage } from './BackgroundImage';

const useStyles = makeStyles(theme => ({
	root: {
		height: '100vh',
		width: '100%',
	}
}));

export const SmoothBackground = observer(() => {
	const { uiStore } = useStores();
	const [isFirstVisible, setIsFirstVisible] = useState(true);


	return (
		<div>
			<BackgroundImage url={uiStore.backgroundState?.prevImageUrl}/>
			<BackgroundImage url={uiStore.backgroundState?.nextImageUrl}/>
		</div>
	)
});