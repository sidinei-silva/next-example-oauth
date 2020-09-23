/* eslint-disable react/jsx-props-no-spreading */
import { useSession } from 'next-auth/client';
import { useRouter } from 'next/router';
import React from 'react';

const withAuth = Component => {
  return () => {
    const [session, loading] = useSession();
    const router = useRouter();

    React.useEffect(() => {
      if (!session && !loading) {
        router.push('/login');
      }
    }, [loading]);

    return (
      <>
        {loading && <h1>Loading...</h1>}
        {session && <Component session={session} />}
      </>
    );
  };
};

export default withAuth;
