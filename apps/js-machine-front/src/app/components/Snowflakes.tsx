import React from 'react';

import './styles/snowflakes.css';
import './styles/snowflakesMedia.css';

import Switch from '@material-ui/core/Switch';
import { makeStyles } from '@material-ui/core/styles';

import { useSnowflakes } from './hooks/useSnowflakes';

export function Snowflakes() {

    const {isSnowing, handleSnowSwitch} = useSnowflakes();

    const MAIN_YELLOW = '#F2E14C';

    const useStyles = makeStyles({
        colorSecondary: {
            '&$checked': {
                color: MAIN_YELLOW,
            },
        },
        switchBase: {
            color: 'white',
            '&$checked': {
                color: 'white',
                '& + $track': {
                    backgroundColor: MAIN_YELLOW,
                    opacity: 1,
                },
                "&:hover": {
                    backgroundColor: '#f2e14c4d',
                },
            },
        },
        track: {},
        checked: {},
    });

    const classes = useStyles();

    return (
        <>
            <div className='snow-switcher'>
                <span className='snow-switcher__label'>Happy New Year</span>
                <Switch
                    classes={classes}
                    size='small'
                    checked={isSnowing}
                    value={isSnowing}
                    onClick={handleSnowSwitch}>
                </Switch>
            </div>
            <canvas id="snow" width={window.innerWidth} height={window.innerHeight}></canvas>
        </>
    );
}