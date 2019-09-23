import styled from 'styled-components';
import PacmanLoader from 'react-spinners/PacmanLoader';
import React from 'react';

import { LoaderProps } from './models/loaderProps';
import { COLORS } from '../../constants/colors';

const LoaderContainer = styled.div`
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%)  translateX(-50%);
`;

export const Loader = (props: LoaderProps) => {
  return (
    <LoaderContainer>
      <PacmanLoader
        sizeUnit={'px'}
        size={80}
        color={COLORS.MAIN_YELLOW}
        loading={props.isLoading}
      />
    </LoaderContainer>
  );
};
