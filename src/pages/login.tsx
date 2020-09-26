import { signIn } from 'next-auth/client';
import React from 'react';

// import { Container } from './styles';

const Login: React.FC = () => {
  return (
    <>
      <h1>Login</h1>
      <button
        type="button"
        onClick={() => {
          signIn('github', { callbackUrl: 'http://localhost:3000/' });
        }}
      >
        Sign in with Github
      </button>
    </>
  );
};

export default Login;
