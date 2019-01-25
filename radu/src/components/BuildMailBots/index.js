import React, { useState } from 'react';

import './index.scss';

import HeadingText from '../../components/HeadingText';
import MarketingList from '../../components/MarketingList';
import P from '../../components/P';

import emailIcon from './email-icon.png';
import pulseIcon from './pulse-icon.png';
import codeIcon from './code-icon.png';
import playIcon from './play-icon.png';

export default () => (
  <div className="BuildMailBots">
    <HeadingText>Build MailBots</HeadingText>
    <P className="BuildMailBots-description">
      The MailBots developer tools and source tools allow developers to create
      MailBots quickly and easily
    </P>

    <div className="BuildMailBots-3mins">
      <img src={playIcon} style={{ marginRight: 10 }} /> Create a MailBot in 3
      minutes
    </div>
    <MarketingList
      className="BuildMailBots-Items"
      items={[
        {
          icon: <img src={emailIcon} />,
          title: 'Email Commands',
          children: <span>Easily handle inbount email commands</span>
        },
        {
          icon: <img src={pulseIcon} />,
          title: 'Respond to Events',
          children: 'MailBots can act on various external events'
        },
        {
          icon: <img src={codeIcon} />,
          title: 'Handle Actions',
          children: 'Handle quick-responses Email Actions'
        }
      ]}
    />
  </div>
);
