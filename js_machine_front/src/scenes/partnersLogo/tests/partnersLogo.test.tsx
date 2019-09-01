import React from 'react';
import { PartnersLogo } from '../components/partnersLogo';
import { shallow } from 'enzyme';

describe('PartnersLogo component is ready', () => {
    it('partnersLogo component is ready', () => {
        const component = shallow(<PartnersLogo/>);

        const partnersLogo = component.find('div');

        expect(partnersLogo).toHaveLength(4);
    });
});
