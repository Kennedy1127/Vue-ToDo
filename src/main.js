import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

import '@/style.css';

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core';

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

/* import specific icons */
import {
  faXmark,
  faPlus,
  faCheck,
  faTriangleExclamation,
} from '@fortawesome/free-solid-svg-icons';

/* add icons to the library */
library.add(faXmark, faPlus, faCheck, faTriangleExclamation);

import { auth } from '@/firebase/config';
import { onAuthStateChanged } from 'firebase/auth';

let app;

onAuthStateChanged(auth, (user) => {
  console.log(user);
  if (!app) {
    app = createApp(App)
      .component('font-awesome-icon', FontAwesomeIcon)
      .use(createPinia())
      .use(router)
      .mount('#app');
  }
});
