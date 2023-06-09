import { useState } from 'react';
import styles from './Login.module.css';

interface Props {
    onClose: () => void;
}

export function Login(props: Props) {
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
        // Perform login logic with username and password
        // ...
        props.onClose();
    };

    return (
        <div className={styles.container}>
          <h2>Login</h2>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div>
              <label htmlFor="username">Username:</label>
              <input type="text" id="username" value={username} onChange={handleUsernameChange} style={{backgroundColor:"#111b47",color:"white",padding:"10px",margin:"10px"}} />
            </div>
            <div>
              <label htmlFor="password">Password:</label>
              <input type="password" id="password" value={password} onChange={handlePasswordChange} style={{backgroundColor:"#111b47",color:"white", padding:"10px",margin:"10px"}} />
            </div>
            <button type="submit" className={styles.button}>Login</button>
          </form>
        </div>
      );
}
