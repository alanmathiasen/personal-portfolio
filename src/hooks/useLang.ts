import { useRouter } from 'next/router';

const useLang = () => {
  const { locale, locales, defaultLocale } = useRouter();
  const t = locale ?? defaultLocale!;
  return { t, locale, defaultLocale, locales };
};
export default useLang;
