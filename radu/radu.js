import React, { useState } from 'react';

import 'normalize.css/normalize.css';

import Head from 'next/head';

import Header from '../src/components/Header';
import HeroSection from '../src/components/HeroSection';
import HowBotsWork from '../src/components/HowBotsWork';
import BotExamples from '../src/components/BotExamples';
import BuildMailBots from '../src/components/BuildMailBots';
import './index.scss';

export default () => (
  <div className="App">
    <Head>
      <title>MailBots</title>
    </Head>
    <Header />
    <HeroSection />

    <HowBotsWork />
    <BotExamples />
    <BuildMailBots />
  </div>
);
