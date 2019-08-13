import React from 'react';
import { About } from '../about';
import { shallow } from 'enzyme';

describe('About component is ready', () => {
    it('tileContent component is ready', () => {
        const component = shallow(<About/>);

        const tileContent = component.find('TileContent');

        expect(tileContent).toHaveLength(1);
    });
});
