import "../styles/globals.css";
import "the-new-css-reset/css/reset.css";
import type { AppProps } from "next/app";

//Redux
import { Provider } from "react-redux";
import { store } from "../modules/redux/store";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
