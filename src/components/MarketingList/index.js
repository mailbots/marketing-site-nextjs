import React, { useState } from 'react';

import './index.scss';

const renderItem = ({ icon, title, children }) => {
  return (
    <div key={title} className="MarketingList-Item">
      <div className="MarketingList-Item-icon">{icon}</div>

      <div>
        <div className="MarketingList-Item-title">{title}</div>
        <div className="MarketingList-Item-description">{children}</div>
      </div>
    </div>
  );
};

export default ({ items, ...props }) => (
  <div {...props} className={`${props.className || ''} MarketingList`}>
    {items.map(renderItem)}
  </div>
);
