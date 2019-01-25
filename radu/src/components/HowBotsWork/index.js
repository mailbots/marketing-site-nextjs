import React, { useState } from 'react';
import './index.scss';

import step1Image from './step1.svg';
import step2Image from './step2.svg';
import HeadingText from '../HeadingText';

const step1 = (
  <div>
    contents for step 1 <img src={step1Image} />
  </div>
);

const step2 = (
  <div>
    contents for step 2 <img src={step2Image} />
  </div>
);

export default () => {
  const [activeStep, setActiveStep] = useState(0);

  const renderStep = (step, index) => {
    const active = activeStep === index;
    return (
      <div
        key={step.text}
        className={
          active
            ? 'HowBotsWork-step HowBotsWork-step--active'
            : 'HowBotsWork-step'
        }
      >
        <div
          className="HowBotsWork-step-number"
          onClick={() => setActiveStep(index)}
        >
          {index + 1}
        </div>
        <div className="HowBotsWork-step-text">{step.text}</div>
      </div>
    );
  };

  const steps = [
    {
      text: 'Meet A MailBot',
      children: step1
    },
    { text: 'Send your MailBot work', children: step2 },
    { text: 'MailBot gets stuff done' },
    { text: 'Manage MailBot tasks' }
  ];

  return (
    <div className="HowBotsWork">
      <HeadingText className="HowBotsWork-title">How MailBots Work</HeadingText>
      <div className="HowBotsWork-step-list" style={{ maxWidth: 600 }}>
        {steps.map(renderStep)}
      </div>
    </div>
  );
};
