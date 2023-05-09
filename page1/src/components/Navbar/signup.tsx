import { useState } from 'react';
import styles from './Signup.module.css';

interface Props {
  onClose: () => void;
}

export function SignUp(props: Props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Perform signup logic with username and password
    // ...
    props.onClose();
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form className={styles['form-container']} onSubmit={handleSubmit}>
        <div className={styles['form-group']}>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" value={username} onChange={handleUsernameChange} />
        </div>
        <div className={styles['form-group']}>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" value={password} onChange={handlePasswordChange} />
        </div>
        <button className={styles['submit-button']} type="submit">Sign Up</button>
      </form>
    </div>
  );
}
