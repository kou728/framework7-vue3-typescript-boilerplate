// Import Vue
import { createApp } from 'vue';

// Import store
import store from "./store";

// Import Framework7
import Framework7 from 'framework7/lite-bundle';

// Import Framework7-Vue Plugin
import Framework7Vue, { registerComponents } from 'framework7-vue/bundle';

// Import Framework7 Styles
import 'framework7/framework7-bundle.css';

// Import Icons and App Custom Styles
import './css/icons.css';
import './css/app.css';

// Import App Component
import App from './app.vue';

// Init Framework7-Vue Plugin
Framework7.use(Framework7Vue);

// Init App
const app = createApp(App);

// Register Framework7 Vue Components
registerComponents(app);

// Register plugins
app.use(store);

// Mount the App
app.mount('#app');