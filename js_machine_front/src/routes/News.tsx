import React, { memo } from 'react';

const sectionStyle = {
  backgroundColor: 'grey',
};

export const News: React.FC = memo(() => {
  return (
    <div style={ sectionStyle }>
      <h1>News</h1>
      <div>
        <h3>Page!</h3>
      </div>
    </div>
  );
});
