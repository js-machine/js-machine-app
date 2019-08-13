import React from 'react';
import { Partners } from '../partners';
import { shallow } from 'enzyme';

describe('Partners component is ready', () => {
    it('partnersLogo component is ready', () => {

        const component = shallow(<Partners/>);

        const partnersLogo = component.find('PartnersLogo');

        expect(partnersLogo).toHaveLength(1);

    });
});
