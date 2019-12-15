import React, { useEffect, useState } from 'react';

import './styles/snowflakes.css';
import './styles/snowflakesMedia.css';
import { Snowflake } from './models/Snowflake';

import Switch from '@material-ui/core/Switch';
import { makeStyles } from '@material-ui/core/styles';

export function Snowflakes() {

    const [isSnowing, setSnowing] = useState<boolean>(true);
    const requestId = React.useRef(0);

    useEffect(() => {
        startSnowflakes();
    });

    const getCanvasElementById = (id: string): HTMLCanvasElement => {
        const canvas = document.getElementById(id);
    
        if (!(canvas instanceof HTMLCanvasElement)) {
            throw new Error(`The element of id "${id}" is not a HTMLCanvasElement. Make sure a <canvas id="${id}""> element is present in the document.`);
        }
    
        return canvas;
    };

    const getCanvasRenderingContext2D = (canvas: HTMLCanvasElement): CanvasRenderingContext2D => {
        const context = canvas.getContext('2d');
    
        if (!(context instanceof CanvasRenderingContext2D)) {
            throw new Error('This browser does not support 2-dimensional canvas rendering contexts.');
        }
    
        return context;
    };

    function startSnowflakes() {

        const canvas: HTMLCanvasElement = getCanvasElementById('snow');
        const ctx: CanvasRenderingContext2D = getCanvasRenderingContext2D(canvas);

        if (!isSnowing) {
            window.cancelAnimationFrame(requestId.current);
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            return;
        }

        const flakesAmoung = getFlakesAmoungByWindowSize();
        const flakes: Snowflake[] = createSnowflakes(flakesAmoung);

        window.addEventListener("resize", function () {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        });

        snowStep();

        function getFlakesAmoungByWindowSize() {
            const width = window.innerWidth;
            if (width < 500) {
                return (60);
            } else if (width < 750) {
                return (80);
            } else if (width < 1000) {
                return (100);
            } else if (width < 1200) {
                return (120);
            } else if (width < 1600) {
                return (160);
            } else {
                return (180);
            }
        }

        function snowStep() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            for (let i = 0; i < flakes.length; i++) {
                const flake: Snowflake = flakes[i];

                flake.speedX *= .98;
                flake.speedX += Math.cos(flake.step += .05) * flake.stepSize;

                flake.y += flake.speedY;
                flake.x += flake.speedX;

                if (flake.y >= canvas.height || flake.y <= 0) {
                    reset(flake);
                }

                if (flake.x >= canvas.width || flake.x <= 0) {
                    reset(flake);
                }

                ctx.beginPath();
                ctx.fillStyle = "rgba(255,255,255," + flake.opacity + ")";
                ctx.arc(flake.x, flake.y, flake.size, 0, Math.PI * 2);
                ctx.fill();
            }
            requestId.current = requestAnimationFrame(snowStep);
        };

        function reset(flake: Snowflake) {
            flake.x = Math.floor(Math.random() * canvas.width);
            flake.y = 0;
            flake.size = (Math.random() * 3) + 2;
            flake.speedY = (Math.random() * 1) + 0.5;
            flake.speedX = 0;
            flake.opacity = (Math.random() * 0.5) + 0.3;
        }

        function createSnowflakes(flakeCount: number): Snowflake[] {
            const flakes: Snowflake[] = [];
            for (let i = 0; i < flakeCount; i++) {
                const x = Math.floor(Math.random() * canvas.width),
                    y = Math.floor(Math.random() * canvas.height),
                    size = (Math.random() * 3) + 2,
                    speedY = (Math.random() * 1) + 0.5,
                    opacity = (Math.random() * 0.5) + 0.3;

                flakes.push({
                    speedY: speedY,
                    speedX: 0,
                    x: x,
                    y: y,
                    size: size,
                    stepSize: (Math.random()) / 30,
                    step: 0,
                    opacity: opacity,
                });
            }
            return flakes;
        };
    }

    const useStyles = makeStyles({
        colorSecondary: {
            '&$checked': {
                color: '#f2e14c',
            },
        },
        switchBase: {
            color: 'white',
            '&$checked': {
                color: 'white',
                '& + $track': {
                    backgroundColor: '#f2e14c',
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
                    onClick={() => setSnowing(!isSnowing)}>
                </Switch>
            </div>
            <canvas id="snow" width={window.innerWidth} height={window.innerHeight}></canvas>
        </>
    );
}