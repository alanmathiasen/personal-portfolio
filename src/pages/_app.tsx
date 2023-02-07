import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { IntlProvider } from 'react-intl';

import es from '../lang/es.json';
import en from '../lang/en.json';

import '@/styles/globals.css';

const messages = {
  es,
  en,
};

export default function App({ Component, pageProps }: AppProps) {
  const { locale, defaultLocale } = useRouter();
  const t = locale ?? defaultLocale!;

  return (
    <IntlProvider locale={t} messages={messages[t as keyof typeof messages]}>
      <Component {...pageProps} />
    </IntlProvider>
  );
}
