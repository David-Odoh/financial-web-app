import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';

import nextI18NextConfig from './next-i18next.config.mjs';

i18n
    .use(Backend)
    .use(initReactI18next) 
    .init({
        ...nextI18NextConfig,
        react: {
            useSuspense: false, 
        },
        lng: 'en',
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
        },
        backend: {
            loadPath: `/api/locales/{{lng}}/{{ns}}`
        },
        // debug: true,
    }).then(() => {
      console.log('i18n initialized with languages:', i18n.languages);
    });

export default i18n;
