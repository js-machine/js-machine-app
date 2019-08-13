import React from 'react';
import '../styles/authorizationBar.css';

import { AuthorizationBarProps } from 'scenes/authorization/models/authorizationBar';

export const AuthorizationBar: React.FC<AuthorizationBarProps> = (props: AuthorizationBarProps) => {
    return (
        <>
            <div className="authorization-bar">
                <div className={`authorization-bar__wrapper ${props.barStyle}`}>
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
};
