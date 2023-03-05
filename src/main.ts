import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import Home from './views/Home.vue';
import Form from './views/Form.vue';
import GoogleSignInPlugin from 'vue3-google-signin';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/form', component: Form },
  ],
});

const app = createApp(App);

app.use(GoogleSignInPlugin, {
  clientId:
    '776632151768-dt2qeel2mfdadh6caugakqu0kdqfcn65.apps.googleusercontent.com',
});
//CLIENT ID OBTAINED FROM GOOGLE API CONSOLE

app.use(router);

app.mount('#app');
