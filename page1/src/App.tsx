import { memo } from 'react';
import type { FC } from 'react';

import classes from './App.module.css';
import resets from './components/_resets.module.css';
import { Navbar } from './components/Navbar/Navbar';
import { LandingPage } from './components/LandingPage/LandingPage';
import { Footer } from './components/Footer/Footer';
import { Page2 } from './components/Page2/Page2';
import { Page3 } from './components/Page3/Page3';

interface Props {
  className?: string;
}
export const App: FC<Props> = memo(function App(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Navbar />
        <LandingPage />
        <Page2 />
        <Page3 />
        <Footer />
      </div>
    </div>
  );
});
