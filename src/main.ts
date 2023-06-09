import 'bootstrap/dist/css/bootstrap.css'
import './assets/main.css'

import { createApp, createSSRApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import example from './plugins/example/example'

import useCustomPlugin from "./plugins/builded/example-2.mjs";

//TODO: Node SSR és Vue plugin létrehozás, Tsc Config
//const app = createApp(App)
const app = createSSRApp(App);

app.use(createPinia())
app.use(router)

app.use(example());

app.use(useCustomPlugin());


//app.component();

app.mount('#app')






//const a: string = "ASd"
//
//console.log("Helló!", a);
