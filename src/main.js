import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'

import App from './App.vue'
import router from './router'

import en from './lang/en'
import zh from './lang/zh'

const i18n = createI18n({
    locale: localStorage.getItem('language') || 'en',
    messages: {
        en: en,
        zh: zh
    }
})

const app = createApp(App)

app.config.globalProperties.$theme_global = {
    theme: localStorage.getItem('theme')
}

app.use(i18n)
app.use(createPinia())
app.use(router)

if (localStorage.getItem('theme') === null) {
    localStorage.setItem('theme', 'auto')
}

app.mount('#app')
