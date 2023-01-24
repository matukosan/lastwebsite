import "../styles/globals.css";

import { type AppType } from "next/app";
import { NextUIProvider } from '@nextui-org/react';

import dynamic from 'next/dynamic'

const CrispWithNoSSR = dynamic(
  () => import('../components/crisp'),
  { ssr: false }
)


const MyApp: AppType<any> = ({
  Component,
  pageProps: {...pageProps },
}) => {
  return (
    <>
      <CrispWithNoSSR />
      <NextUIProvider>
        <Component {...pageProps} />
      </NextUIProvider>
    </>
  );
};

export default MyApp;
