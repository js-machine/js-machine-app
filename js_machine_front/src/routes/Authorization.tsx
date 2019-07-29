import React, { memo } from 'react';
import Background from '../images/events.jpg';
import { AuthorizationHOC } from 'components/authorization/AuthorizationHOC';
import { AuthorizationSignIn } from 'components/authorization/AuthorizationSignIn';
import { AuthorizationSignUp } from 'components/authorization/AuthorizationSignUp';
import { AuthorizationBar } from 'components/authorization/AuthorizationBar';

import 'styles/authorization.css';

const sectionStyle = {
    height: '100vh',
    backgroundImage: `url(${Background})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
};

interface Props {
    changeFlag: () => void;
    signInStyle: string;
    signUpStyle: string;
    barStyle: string;
    barTitle: string;
    barBtn: string;
}

export const Authorization: React.FC<Props> = memo((props: Props) => {
    const { signInStyle, signUpStyle, ...authBarProps} = props;

    return (
        <div style={sectionStyle}>
            <div className="body">
                <div className="authorization">
                    <AuthorizationSignIn signInStyle={signInStyle}/>
                    <AuthorizationBar {...authBarProps}/>
                    <AuthorizationSignUp signUpStyle={signUpStyle}/>
                </div>
            </div>
        </div>
    );
});

export default AuthorizationHOC(Authorization);
