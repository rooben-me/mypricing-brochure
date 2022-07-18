import { MantineProvider } from "@mantine/core";
import "../styles/globals.css";

export default function App(props) {
  const { Component, pageProps } = props;

  // mantine was not working in production but was working fine in dev , add the key attribute to get the styles working

  return (
    <>
      <MantineProvider emotionOptions={{ key: "mantine" }}>
        <Component {...pageProps} />
      </MantineProvider>
    </>
  );
}
