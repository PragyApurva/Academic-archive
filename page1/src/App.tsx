import { memo } from 'react';
import type { FC } from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import { Routes ,Route } from 'react-router-dom';
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
    <Router>
      <div className={`${resets.clapyResets} ${classes.root}`}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <Navbar />
          <Routes>
            <Route path="/" element={<LandingPage/>} />
            <Route path="/page2" element={<Page2/>} />
            <Route path="/page3" element={<Page3/>} />
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
});
