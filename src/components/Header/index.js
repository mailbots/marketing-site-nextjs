import React from 'react';

import './index.scss';
import logo from './Logo.png';
import blueDot from './Path.svg';

export default () => {
  return (
    <div className="Header">
      <img src={logo} style={{ height: 24, width: 126 }} />

      <img
        src={blueDot}
        style={{ zIndex: -1, position: 'absolute', right: 0, top: 0 }}
      />
      <div style={{ flex: 1 }} />
      <a href="" style={{ color: 'white' }}>
        Contact
      </a>

      <a href="" className="Header-signin">
        Sign In
      </a>
    </div>
  );
};
