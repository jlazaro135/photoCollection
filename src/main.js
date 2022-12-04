import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import { OhVueIcon, addIcons } from "oh-vue-icons";
import { BiHeart, MdCollectionsOutlined, HiHome, BiHeartFill, OiLocation} from "oh-vue-icons/icons";

addIcons(BiHeart, MdCollectionsOutlined, HiHome, BiHeartFill, OiLocation);

import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component("v-icon", OhVueIcon);

app.mount('#app')
