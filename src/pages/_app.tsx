// pages/_app.tsx

import '../styles/global.css';

import type { AppProps } from 'next/app';

import ErrorBoundary from '@/error/errorBoundary';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ErrorBoundary fallback={<div>Something went wrong.</div>}>
    <Component {...pageProps} />
  </ErrorBoundary>
);

export default MyApp;
