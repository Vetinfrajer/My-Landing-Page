import { createApp } from 'vue'
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css';
import { BootstrapVueNext } from 'bootstrap-vue-next'

const app = createApp(App)
app.use(BootstrapVueNext)

app.mount('#app')
