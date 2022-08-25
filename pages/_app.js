import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import EmptyLayout from "../components/layout/empty";
import { persistor, store } from "../redux/store";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const Layout = Component.Layout ?? EmptyLayout;

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </PersistGate>
    </Provider>
  );
}

export default MyApp;
