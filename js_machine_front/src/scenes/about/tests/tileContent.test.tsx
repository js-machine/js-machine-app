import React from 'react';
import { TileContent } from '../components/tileContent';
import { Tile } from '../models/tile';
import { shallow } from 'enzyme';

describe('TileContent component is ready', () => {
    const props: Tile[] = [
        {
          id: 0,
          title: 'История',
          description:
            'Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах.',
        },
        {
          id: 1,
          title: 'Достижения',
          description:
            'Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах.',
        },
    ];

    it('tileElement component is ready', () => {
        const component = shallow(<TileContent arrTiles= {props}/>);

        const tileElement = component.find('TileElement');

        expect(tileElement).toHaveLength(2);
    });
});
