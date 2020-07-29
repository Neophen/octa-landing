import { createApp } from 'vue'
import App from './App.vue';
import './index.css'
import router from "./router";
import * as sharedComponents from "./components/shared";
import * as blockComponents from "./components/blocks";


const app = createApp(App).use(router);

for (const name in sharedComponents) {
  const component = sharedComponents[name];
  app.component(component.name, component);
}
for (const name in blockComponents) {
  const component = blockComponents[name];
  app.component(component.name, component);
}

app.mount('#app')
