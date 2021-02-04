import Vue from "vue";
import VueRouter from "vue-router";
//Views
import Home from "../views/Home";
import Blog from "../views/Blog.vue";
import Post from "../views/Post.vue";
import Resume from "../views/Resume";
import Projects from "../views/Projects";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/blog",
    name: "Blog",
    component: Blog
  },
  {
    path: "/post/:postId",
    name: "Post",
    component: Post
  },
  {
    path: "portfolio",
    name: "Portfolio",
    component: Blog
  },
  {
    path: "/resume",
    name: "Resume",
    component: Resume
  },
  {
    path: "/projects",
    name: "Projects",
    component: Projects
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
