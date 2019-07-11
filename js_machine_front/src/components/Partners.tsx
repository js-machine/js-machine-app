import React, { memo } from 'react';

const sectionStyle = {
  backgroundColor: 'grey',
};

export const Partners: React.FC = memo(() => {
  return (
    <div style={ sectionStyle }>
      <h1>Partners</h1>
      <div>
        <h3>Page!</h3>
      </div>
    </div>
  );
});
