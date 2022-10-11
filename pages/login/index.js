import { getProviders, signIn, useSession } from "next-auth/react";
import styles from "./Login.module.scss";
import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";

function Login({ providers }) {
  const { data: session } = useSession();
  return (
    <div className={styles.login}>
      <Head>
        <title>Login - Spotify</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Image
        src="https://rb.gy/y9mwtb"
        height={250}
        width={600}
        objectFit="contain"
        alt="spotify-logo"
      />
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button onClick={() => signIn(provider.id,{ callbackUrl: '/' })}>
            Sign in with {provider.name}
          </button>
        </div>
      ))}
    </div>
  );
}

export default Login;

export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}
