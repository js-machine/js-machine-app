import React, { memo } from 'react';

const sectionStyle = {
  backgroundColor: 'grey',
};

export const Events: React.FC = memo(() => {
  return (
    <div style={ sectionStyle }>
      <h1>Events</h1>
      <div>
        <h3>Page!</h3>
      </div>
    </div>
  );
});
