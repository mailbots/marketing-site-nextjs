import React, { useState } from 'react';

import './index.scss';

import HeadingText from '../../components/HeadingText';
import MarketingList from '../../components/MarketingList';
import P from '../../components/P';

import iphone from './iphone.png';
import toggleIcon from './toggle.png';
import tagIcon from './tag.png';
import checkIcon from './check.png';

export default () => (
  <div className="BotExamples">
    <div className="BotExamples-box1">
      <HeadingText>MailBot Examples</HeadingText>
      <P className="BotExamples-box1-text">
        MailBots send and receive plain email, so they work practically
        everywhere (iOS and Mac Mail shown below). The buttons actions work
        using mailto links (Action Emails).
      </P>
      <MarketingList
        className="BotExamples-Items"
        items={[
          {
            icon: <img src={toggleIcon} />,
            title: 'Automate CRMs',
            children: 'Close deals faster'
          },
          {
            icon: <img src={tagIcon} />,
            title: 'Manage tickets',
            children: 'Faster, more thoughtful responses'
          },
          {
            icon: <img src={checkIcon} />,
            title: "Complete To do's",
            children: 'FollowUpThen popularized the email'
          }
        ]}
      />
    </div>
    <div className="BotExamples-box2">
      <img src={iphone} />
    </div>
  </div>
);
