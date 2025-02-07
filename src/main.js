import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter,createWebHistory } from 'vue-router'
import Inicio from './views/Inicio.vue'
import Tareas from './views/Tareas.vue'
import AddTarea from './views/AddTarea.vue'
import { createPinia } from 'pinia'
const routes=[

    {path:'/',component:Inicio},
    {path:'/tareas',component:Tareas,
        children:[
            {path:'/tareas/addTarea',component:AddTarea}
        ]
    }
   
]
const router=createRouter({
    history:createWebHistory(),
    routes,
})
const app = createApp(App);
app.use(createPinia());
app.use(router);
app.mount('#app');

//createApp(App).mount('#app')
