import React, { memo } from 'react';
import '../styles/authorizationBar.css';
import '../styles/authorizationBarMedia.css';

import { AuthorizationBarProps } from 'scenes/authorization/models/authorizationBar';

export const AuthorizationBar: React.FC<AuthorizationBarProps> = memo((props: AuthorizationBarProps) => {
    return (
        <>
            <div className={`authorization-bar ${props.barStyle}`}>
                <div className={`authorization-bar__wrapper`}>
                    <div className="authorization-bar__title">
                        {props.barTitle}
                    </div>
                    <div>
                        <button className="authorization-bar__btn" onClick={props.changeLoginOptions}>{props.barBtn}</button>
                    </div>
                </div>
            </div>
        </>
    );
});
