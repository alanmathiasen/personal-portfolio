import { useRouter } from 'next/router';

const useLang = () => {
  const { locale, defaultLocale } = useRouter();
  const t = locale ?? defaultLocale!;
  return { t };
};
export default useLang;
