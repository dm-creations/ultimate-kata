// router.js 
import Vue from "vue"
import VueRouter from "vue-router"
import lesson001 from "./components/lesson001.vue"
import lesson002 from "./views/lesson002.vue"

Vue.use(VueRouter)

export default new VueRouter({
    mode: "history",
    routes: [
        {
            path: "/",
            name: "lesson001",
            component: lesson001
        },
        {
            path: "/lesson-2",
            name: "lesson002",
            component: lesson002
        }
    ]
})