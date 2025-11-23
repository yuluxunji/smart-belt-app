import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpApi from 'i18next-http-backend';

i18n
  .use(HttpApi)
  .use(initReactI18next)
  .init({
    lng: 'en', // 默认语言设置为中文
    fallbackLng: 'zh',
    ns: ['translation'],
    defaultNS: 'translation',
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },
    interpolation: {
      escapeValue: false,
    },

    react: {
      transSupportBasicHtmlNodes: true, // 允许 <br/>, <i>, <strong>
      transKeepBasicHtmlNodesFor: ['br', 'strong', 'i'], // 指定哪些是简单HTML节点
      // (虽然我们用的是<0>，但开启这些选项能确保Trans组件的解析器被正确激活)
    }

    
  });

export default i18n;
