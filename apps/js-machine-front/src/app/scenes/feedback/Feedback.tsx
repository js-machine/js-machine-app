import React, { memo } from 'react';
import './feedback.css';

export const Feedback: React.FC = memo(() => {
  return (
    <div className="feedback">
      <iframe
        title="feedback"
        sandbox="allow-scripts allow-same-origin"
        allowFullScreen
        allowTransparency
        frameBorder="0"
        width="600"
        height="600"
        src="https://www.mentimeter.com/embed/a442fb5f1554d84460040c2c6543d906/869a1944629b"
      />
    </div>
  );
});
