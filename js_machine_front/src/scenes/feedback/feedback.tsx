import React, { memo } from 'react';
import styled from 'styled-components';

const FeedbackFrame = styled.div`
  position: absolute;
  top: 20%;
  left: 20%;
`;

export const Feedback: React.FC = memo(() => {
  return (
    <FeedbackFrame>
      <iframe sandbox="allow-scripts allow-same-origin" allowFullScreen allowTransparency
              frameBorder="0"
              width="600"
              height="600" src="https://www.mentimeter.com/embed/a442fb5f1554d84460040c2c6543d906/869a1944629b" />
    </FeedbackFrame>
  );
});
