import React from 'react';
import { NavBar } from '../navBar';
import { shallow } from 'enzyme';

describe('NavBar component is ready', () => {
    it('navLink components is ready', () => {
        const component = shallow(<NavBar/>);

        const tileContent = component.find('NavLink');

        expect(tileContent).toHaveLength(6);
    });
});
