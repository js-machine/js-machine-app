import React from 'react';
import { Main } from '../main';
import { shallow } from 'enzyme';
import { RecentEvents } from '../components/RecentEvents';
import { SocialLinks } from '../components/SocialLinks';

jest.mock('notistack', () => {
  return {
    useSnackbar: () => {
      return {
        enqueueSnackbar: () => {
        },
      };
    },
  };
});

describe('Main component is ready', () => {
  // it('recentEvents component is ready', () => {
  //   const component = shallow(<Main />);
  //
  //   const recentEvents = component.find(RecentEvents);
  //
  //   expect(recentEvents).toHaveLength(1);
  // });

  it('socialLinks component is ready', () => {
    // const component = shallow(<Main />);
    //
    // const socialLinks = component.find(SocialLinks);
    //
    // expect(socialLinks).toHaveLength(1);
  });
});
