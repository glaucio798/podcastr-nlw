import { Header } from "../components/Header/Index";
import { Player } from "../components/Player/Index";

import "../styles/global.scss";
import styles from "../styles/app.module.scss";
import { PlayerContextProvider } from "../context/PlayerContext";

function MyApp({ Component, pageProps }) {
  return (
    <PlayerContextProvider>
      <div className={styles.wrapper}>
        <main>
          <Header></Header>
          <Component {...pageProps} />
        </main>
        <Player></Player>
      </div>
    </PlayerContextProvider>
  );
}

export default MyApp;
