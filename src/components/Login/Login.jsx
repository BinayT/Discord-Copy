import React from 'react';
import { Button } from '@material-ui/core';

import './Login.css';

function Login() {
  const signIn = () => {};

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
