import React, { memo } from 'react';
import 'styles/authorizationBar.css';

interface Props {
    changeFlag: () => void;
    barStyle: string;
    barTitle: string;
    barBtn: string;
}

export const AuthorizationBar: React.FC<Props> = memo((props: Props) => {
    return (
        <>
            <div className="authorization-bar">
                <div className={`authorization-bar__wrapper ${props.barStyle}`}>
                    <div className="authorization-bar__title">
                        {props.barTitle}
                    </div>
                    <div>
                        <button className="authorization-bar__btn" onClick={props.changeFlag}>{props.barBtn}</button>
                    </div>
                </div>
            </div>
        </>
    );
});
