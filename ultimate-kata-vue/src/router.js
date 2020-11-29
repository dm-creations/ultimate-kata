// router.js 
import Vue from "vue"
import VueRouter from "vue-router"
import welcome from "./components/welcome.vue"
import lesson001 from "./components/lesson001.vue"
import lesson002 from "./views/lesson002.vue"
import lesson003 from "./views/lesson003.vue"
import lesson004 from "./views/lesson004.vue"
import lesson005 from "./views/lesson005.vue"
import lesson006 from "./views/lesson006.vue"
import lesson007 from "./views/lesson007.vue"
import lesson008 from "./views/lesson008.vue"
import lesson009 from "./views/lesson009.vue"
import lesson010 from "./views/lesson010.vue"
import lesson021 from "./views/lesson021.vue"
import lesson021b from "./views/lesson021b.vue"
import lesson021c from "./views/lesson021c.vue"
import lesson021d from "./views/lesson021d.vue"


Vue.use(VueRouter)

export default new VueRouter({
    mode: "history",
    routes: [
        {
            path: "/",
            name: "welcome",
            component: welcome
        },
        {
            path: "/lesson001",
            name: "lesson001",
            component: lesson001
        },
        {
            path: "/lesson-2",
            name: "lesson002",
            component: lesson002
        },
        {
            path: "/lesson-3",
            name: "lesson003",
            component: lesson003
        },
        {
            path: "/lesson-4",
            name: "lesson004",
            component: lesson004
        },
        {
            path: "/lesson-5",
            name: "lesson005",
            component: lesson005
        },
        {
            path: "/lesson-6",
            name: "lesson006",
            component: lesson006
        },
        {
            path: "/lesson-7",
            name: "lesson007",
            component: lesson007
        },
        {
            path: "/lesson-8",
            name: "lesson008",
            component: lesson008
        },
        {
            path: "/lesson-9",
            name: "lesson009",
            component: lesson009
        },
        {
            path: "/lesson-10",
            name: "lesson010",
            component: lesson010
        },
        {
            path: "/lesson-21",
            name: "lesson021",
            component: lesson021
        },
        {
            path: "/lesson-21b",
            name: "lesson021b",
            component: lesson021b
        },
        {
            path: "/lesson-21c",
            name: "lesson021c",
            component: lesson021c
        },
        {
            path: "/lesson-21d",
            name: "lesson021d",
            component: lesson021d
        }
    ]
})