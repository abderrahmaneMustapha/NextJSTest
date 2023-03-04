import "../styles/globals.css";
import createEmotionCache from "../utils/createEmotionCache";
import { CacheProvider } from "@emotion/react";

const clientSideEmotionCache = createEmotionCache();

function App({
 Component,
 emotionCache = clientSideEmotionCache,
 pageProps,
}) {
 return (
   <CacheProvider value={emotionCache}>
       <Component {...pageProps} />
   </CacheProvider>
 );
}

export default App;