import { createApp } from 'vue';
import App from './App.vue';
import './styles/app.css'; // Here
import router from './router'

createApp(App).use(router).mount('#app');