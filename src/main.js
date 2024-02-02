import { createApp } from 'vue';
import { createPinia } from 'pinia';
import axios from 'axios';
import VueAxios from 'vue-axios';

import App from './App.vue';
import router from './router';
import { setupVeeValidate } from './veeValidateConfigure';

const app = createApp(App);
setupVeeValidate(app);
app.use(VueAxios, axios);
app.use(createPinia());
app.use(router);

app.mount('#app');
