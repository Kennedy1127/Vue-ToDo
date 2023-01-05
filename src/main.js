import { createApp } from 'vue';
import { createPinia } from 'pinia';
import VueLazyload from 'vue-lazyload';

import App from './App.vue';
import router from './router';

import '@/style.css';

const app = createApp(App);

app.use(VueLazyload);
app.use(createPinia());
app.use(router);

app.mount('#app');
