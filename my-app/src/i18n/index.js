import { createI18n } from 'vue-i18n';
import zh from './zh';
import en from './en';

const messages = {
  zh, en
}
const language = localStorage.getItem('language');

const i18n = createI18n({
  locale: language || (navigator.language || 'en').toLocaleLowerCase().split('_')[0] || 'en',
  fallbackLocale: 'zh',
  globalInjection: true,
  legacy: false,
  messages,
})

export default i18n;