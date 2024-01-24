import { createI18n } from 'vue-i18n'
import en from './en'
import zh from './zh'

export const i18n = createI18n({
    locale: 'en', //默认语言
    legacy: false, //解决报错的问题
    messages: {
        en: en,
        zh: zh
    }
})
