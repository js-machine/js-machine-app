import React from 'react';
import { About } from '../about';
import { shallow } from 'enzyme';
import { TileContent } from '../components/tileContent';

describe('About component is ready', () => {
    it('tileContent component is ready', () => {
        const component = shallow(<About/>);

        const tileContent = component.find(TileContent);

        expect(tileContent).toHaveLength(1);
    });
});
