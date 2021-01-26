<template>
  <div>
    <header class="blog__header">
      <h1>Blog</h1>
      <span
        >Artigos sobre programação e outros gostosos assuntos que me
        interessam.</span
      >
    </header>
    <section class="blog__body">
      <div class="blog-wrapper">
        <post-preview v-for="post in posts" :key="post.id" :post="post" />
      </div>
    </section>
    <the-footer />
  </div>
</template>
<script>
import PostPreview from "../components/PostPreview";
import TheFooter from "../components/Footer";
export default {
  components: {
    PostPreview,
    TheFooter
  },
  data() {
    return {
      posts: []
    };
  },
  created() {
    this.$prismic.client
      .query(this.$prismic.Predicates.at("document.type", "post"), {
        fetch: ["post.title", "post.thumbnail", "post.description"]
      })
      .then(res => {
        this.posts = res.results;
      })
      .catch(err => console.log(err));
  }
};
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
    font-family: "Nunito Bold";
    font-size: calc(25px + 5vw) !important;
    color: #f14668;
  }
  span {
    width: 80%;
    color: #a06363;
    font-family: Montserrat;
  }
}
.blog__body {
  background: white;
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
