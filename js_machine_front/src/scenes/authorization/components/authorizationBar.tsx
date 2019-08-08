import React, { memo } from 'react';
import '../styles/authorizationBar.css';

import { IAuthorizationBarProps } from 'scenes/authorization/models/IAuthorizationBar';

export const AuthorizationBar: React.FC<IAuthorizationBarProps> = memo((props: IAuthorizationBarProps) => {
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
});
