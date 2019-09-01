import React from 'react';
import { Authorization, AuthorizationComponent } from '../authorization';
import { shallow } from 'enzyme';
import { AuthorizationBar } from '../components/authorizationBar';
import { AuthorizationSignUp } from '../components/authorizationSignUp';
import { AuthorizationSignIn } from '../components/authorizationSignIn';

describe('Authorization component is ready', () => {
    const props = {
        signInStyle: 'sign-in__wrapper',
        signUpStyle: 'reset_width',
        barStyle: 'authorization-bar__wrapper_sign-in',
        barTitle: '',
        barBtn: '',
        changeLoginOptions: () => { },
    };

    it('authorization component is ready', () => {
        const component = shallow(<Authorization {...props} />);

        const authorizationComponent = component.find(AuthorizationComponent);

        expect(authorizationComponent).toHaveLength(1);
    });

    it('signIn component is ready', () => {
        const component = shallow(<AuthorizationComponent {...props}/>);

        const signInComponent = component.find(AuthorizationSignIn);

        expect(signInComponent).toHaveLength(1);
    });

    it('signUp component is ready', () => {
        const component = shallow(<AuthorizationComponent {...props}/>);

        const signUpComponent = component.find(AuthorizationSignUp);

        expect(signUpComponent).toHaveLength(1);
    });

    it('authorizationBar component is ready', () => {
        const component = shallow(<AuthorizationComponent {...props}/>);

        const authorizationBar = component.find(AuthorizationBar);

        expect(authorizationBar).toHaveLength(1);
    });
});
