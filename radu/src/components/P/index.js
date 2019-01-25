import React from 'react';

import './index.scss';
export default props => (
  <p {...props} className={`${props.className || ''} Paragraph`} />
);
