import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../components/common/navigateButtonsParams.css";
import "../components/wallpaper/artigo.css";
import { Provider } from "react-redux";
import store from "../store/store";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default MyApp;
