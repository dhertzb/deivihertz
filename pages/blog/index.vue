<template>
  <div>
    <header class="blog__header">
      <h1>Blog</h1>
    </header>
    <section class="blog__body">
      <div class="blog-wrapper">
        <post-preview v-for="post in posts" :key="post.id" :post="post" />
      </div>
    </section>
  </div>
</template>
<script>
import PostPreview from "@/components/PostPreview";
export default {
  components: {
    PostPreview,
  },
  data() {
    return {
      posts: []
    };
  },
  async asyncData({ $content, params }) {
    const posts = await $content('posts')
      .only(['title', 'description', 'img', 'slug', 'author'])
      .sortBy('createdAt', 'asc')
      .fetch()

    return {
      posts
    }
  }
}
</script>
<style lang="scss">
.blog__header {
  text-align: center;
  align-items: center;
  justify-content: center;
  height: 400px;
  flex-direction: column;
  display: flex;
  background: #fff2bf;
  h1 {
    font-family: "Press Start 2P", cursive;
    text-shadow: 6px 0.5vw 0px #a2dbb0;
    font-size: calc(22px + 5vw) !important;
    color: #6c67ae;
  }
  span {
    width: 80%;
    color: #a06363;
    font-family: Montserrat;
  }
}
.blog__body {
  position: relative;
  top: -110px;
}
@media (min-width: 768px) {
  .blog__header {
    span {
      width: 35%;
      font-size: 20px;
    }
    h1 {
      font-size: calc(20px + 3vw) !important;
    }
  }
}
</style>
