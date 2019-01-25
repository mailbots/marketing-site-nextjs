import React from 'react';

export default ({ children, as, ...props }) => {
  const Cmp = as || 'h2';
  return (
    <Cmp {...props} className={`HeadingText ${props.className || ''}`}>
      {children}
    </Cmp>
  );
};
