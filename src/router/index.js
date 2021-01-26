import Vue from "vue";
import VueRouter from "vue-router";
//Views
import Home from "../views/Home.vue";
import Blog from "../views/Blog.vue";
import Post from "../views/Post.vue";

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
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
