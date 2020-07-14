import React, { useEffect } from 'react';
import { useStores } from '@js-machine-app/front/stores';

export function useBackgroundImage(imageSrc: string) {
	const { uiStore } = useStores();

	useEffect(() => {
		uiStore.setBackgroundImage(imageSrc);
	}, []);
}