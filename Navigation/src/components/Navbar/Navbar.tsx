import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './Navbar.module.css';

interface Props {
  className?: string;
}
/* @figmaId 119:3134 */
export const Navbar: FC<Props> = memo(function Navbar(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.rectangle}></div>
      <button className={classes.signup_button}>
        <div className={classes.bG}></div>
        <div className={classes.buttonLabel}>Sign up</div>
      </button>
      <button className={classes.login_button}>
        <div className={classes.bG2}></div>
        <div className={classes.buttonLabel2}>Login</div>
      </button>
      <button className={classes.contact_button}>
        <div className={classes.bG3}></div>
        <div className={classes.buttonLabel3}>Contact</div>
      </button>
      <div className={classes.home}>
        <div className={classes.bG4}></div>
        <div className={classes.buttonLabel4}>Home</div>
      </div>
      <div className={classes.about}>
        <div className={classes.bG5}></div>
        <div className={classes.buttonLabel5}>About</div>
      </div>
      <div className={classes.logoLandie}>
        <div className={classes.landie}>Home Page</div>
      </div>
    </div>
  );
});
