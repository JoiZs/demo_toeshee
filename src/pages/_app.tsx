import "../styles/globals.css";
import type { AppProps } from "next/app";
import dynamic from "next/dynamic";
import Loading from "../components/loading";

const Website = dynamic(() => import("../components/website"), {
  ssr: false,
  loading: () => <Loading />,
});

const DarkCtx = dynamic(() => import("../context/darkCtx"), {
  ssr: false,
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <DarkCtx>
      <Website component={<Component {...pageProps} />}></Website>
    </DarkCtx>
  );
}

export default MyApp;
