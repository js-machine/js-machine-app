import React from 'react';
import { AuthorizationSignIn } from '../components/authorizationSignIn';
import { shallow } from 'enzyme';
import { SocialAuth } from '../components/socialAuth';
import { SignInFrom } from '../components/signInFrom';

describe('AuthorizationSignIn component is ready', () => {
    const props = {
        signInStyle: 'sign-in__wrapper',
    };

    it('socialAuth component is ready', () => {
        const component = shallow(<AuthorizationSignIn {...props} />);

        const socialAuth = component.find(SocialAuth);

        expect(socialAuth).toHaveLength(1);
    });

    it('signInFrom component is ready', () => {
        const component = shallow(<AuthorizationSignIn {...props} />);

        const signInFrom = component.find(SignInFrom);

        expect(signInFrom).toHaveLength(1);
    });
});
