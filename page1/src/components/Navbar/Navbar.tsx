import { memo, useState } from 'react';
import type { FC } from 'react';
import { Login } from './login';
import { SignUp } from './signup';
import resets from '../_resets.module.css';
import classes from './Navbar.module.css';
import { useNavigate } from 'react-router-dom';

interface Props {
  className?: string;
}

export const Navbar: FC<Props> = memo(function Navbar(props = {}) {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const navigate = useNavigate();

  const handleSignUpClick = () => {
    navigate("/login");
  };
  const handleLoginClick = () => {
    navigate("/login");
  };
  const handleHomeClick = () => {
    navigate("/");
  };
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.rectangle}></div>
      <button className={classes.signup_button} onClick={handleSignUpClick}>
        <div className={classes.bG}></div>
        <div className={classes.buttonLabel}>Sign up</div>
      </button>
      <button className={classes.login_button} onClick={handleLoginClick}>
        <div className={classes.bG2}></div>
        <div className={classes.buttonLabel2}>Login</div>
      </button>
      <button className={classes.contact_button}>
        <div className={classes.bG3}></div>
        <div className={classes.buttonLabel3}>Contact</div>
      </button>
      <button className={classes.home} onClick={handleHomeClick}>
        <div className={classes.bG4}></div>
        <div className={classes.buttonLabel4}>Home</div>
      </button>
      <button className={classes.about}>
        <div className={classes.bG5}></div>
        <div className={classes.buttonLabel5}>About</div>
      </button>
      <div className={classes.logoLandie}>
        <div className={classes.landie}>Home Page</div>
      </div>
      {showLogin && <Login onClose={() => setShowLogin(false)} />}
      {showSignUp && <SignUp onClose={() => setShowSignUp(false)} />}
    </div>
  );
});
