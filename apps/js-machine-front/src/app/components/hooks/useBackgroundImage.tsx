import { useEffect } from 'react';
import { useStores } from '@js-machine-app/front/stores';

export function useBackgroundImage(imageSrc: string, isDark = true) {
	const { uiStore } = useStores();

	useEffect(() => {
		uiStore.setBackgroundImage(imageSrc, isDark);
	}, [uiStore, imageSrc, isDark]);
}