import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "./components/Views/Home";

import Login from "./components/Views/Login";
import ToDoList from "./components/Views/ToDoList";
import Settings from "./components/Views/Settings";

Vue.use(VueRouter);

// Router lädt die Elemente in den Contentbereich von App
const routes = [
    {path: '/home', component: Home},
    {path: '/login', component: Login},
    {path: '/todo', component: ToDoList},
    {path: '/settings', component: Settings}
];


const router = new VueRouter({
    mode: 'history',
    routes
})

export default router;

