import React from 'react';

import Switch from '@material-ui/core/Switch';
import { makeStyles } from '@material-ui/core/styles';

import { useSnowflakes } from './hooks/useSnowflakes';

export function Snowflakes() {

    const {isSnowing, handleSnowSwitch} = useSnowflakes();

    const MAIN_YELLOW = '#F2E14C';

    const useStyles = makeStyles( theme => ({
        snow: {
            position: 'fixed',
            height: '100%',
            width: '100%',
            zIndex: 1,
            pointerEvents: 'none',
        },
        snowSwitcher: {
            display: 'flex',
            color: 'white',
            position: 'absolute',
            zIndex: 1101,
            [theme.breakpoints.up('md')]: {
                top: '29px',
                left: '38px',
            },
            [theme.breakpoints.down('sm')]: {
                top: '18px',
                left: '24px',
            },
            [theme.breakpoints.down('xs')]: {
                top: '-2px',
                left: '-4px',
                flexDirection: 'row-reverse',
            },
        },
        snowSwitcherLabel: {
            fontSize: '0.9rem',
        },

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
    }));

    const classes = useStyles();

    return (
        <>
            <div className={classes.snowSwitcher}>
                <span className={classes.snowSwitcherLabel}>Happy New Year</span>
                <Switch
                    classes={{
                        colorSecondary: classes.colorSecondary, 
                        switchBase: classes.switchBase,
                        track: classes.track,
                        checked: classes.checked,
                    }}
                    size='small'
                    checked={isSnowing}
                    value={isSnowing}
                    onClick={handleSnowSwitch}>
                </Switch>
            </div>
            <canvas id='snow' className={classes.snow} width={window.innerWidth} height={window.innerHeight}></canvas>
        </>
    );
}