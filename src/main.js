import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './views/HomePage.vue';
import FormPage from './views/FormPage.vue';
import GoogleSignInPlugin from 'vue3-google-signin';
import { CLIENT_ID } from './variables/constants';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: HomePage },
    { path: '/form', component: FormPage },
  ],
});
const app = createApp(App);

app.use(GoogleSignInPlugin, {
  clientId: CLIENT_ID,
});

app.use(router);

app.mount('#app');
