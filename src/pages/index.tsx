import { signOut, useSession, Session } from 'next-auth/client';
import Head from 'next/head';
import React from 'react';

import styles from '../styles/Home.module.css';
import withAuth from '../utils/withAuth';

interface HomeProps {
  session?: Session;
}

const Home: React.FC<HomeProps> = ({ session }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        {session && (
          <>
            <p className={styles.description}>
              Signed in as{' '}
              <code className={styles.code}>{session.user.email}</code>
            </p>
            <button
              type="button"
              onClick={() => {
                signOut();
              }}
            >
              Sign out
            </button>
          </>
        )}
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
};

export default withAuth(Home);
