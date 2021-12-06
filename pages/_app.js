import "../styles/globals.css";
import Layaut from "../components/Layaut";

function MyApp({ Component, pageProps }) {
  return (
    <Layaut>
      <Component {...pageProps} />
    </Layaut>
  );
}

export default MyApp;
