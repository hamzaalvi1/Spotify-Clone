import "../styles/globals.scss";
import { SessionProvider } from "next-auth/react";
import { Provider } from "react-redux";
import store from "../features/store";
import Layout from "../components/Layout/Layout";
export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        <Layout>
        <Component {...pageProps} />
        </Layout>
      </Provider>
    </SessionProvider>
  );
}
