import React from 'react';
import { Button } from '@material-ui/core';

import './Login.css';
import { auth, provider } from '../../firebase';

function Login() {
  const signIn = () => {
    auth.signInWithPopup(provider).catch((err) => alert(err.message));
  };

  return (
    <div className='login'>
      <div className='login__logo'>
        <img src='/discord.png' alt='Discord logo' />
      </div>
      <Button onClick={signIn}>Sign In</Button>
    </div>
  );
}

export default Login;
