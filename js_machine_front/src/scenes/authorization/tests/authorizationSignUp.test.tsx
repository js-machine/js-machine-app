import React from 'react';
import { AuthorizationSignUp } from '../components/authorizationSignUp';
import { shallow } from 'enzyme';

describe('AuthorizationSignUp', () => {
    const props = {
        signUpStyle: 'reset_width',
    };

    it('socialAuth component is ready', () => {
        const component = shallow(<AuthorizationSignUp {...props}/>);

        const socialAuth = component.find('SocialAuth');

        expect(socialAuth).toHaveLength(1);
    });

    it('signUpForm component is ready', () => {
        const component = shallow(<AuthorizationSignUp {...props}/>);

        const signUpForm = component.find('SignUpForm');

        expect(signUpForm).toHaveLength(1);
    });
});
