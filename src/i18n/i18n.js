import React from 'react';
import i18n from "i18next";
import {initReactI18next} from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import langEn from './en.json';
import langKr from './kr.json';

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            en: { translation: langEn },
            kr: { translation: langKr },
        },
        fallbackLng: 'kr',
        debug: true,
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;