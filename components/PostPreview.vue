<template>
<div class="container">
  <div class="post__card">
      <div class="post__preview">
        <img class="post__image"  :src="require(`~/assets/images/${post.img}`)" />
        <div class="post__text">
          <h2 class="post__title">{{post.title}}</h2>
          <p>{{post.description}}</p>
          <b-button @click="redirectToPost">Ver artigo</b-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  props: {
    post: {
      required: true,
      type: Object
    }
  },
  methods: {
    redirectToPost() {
      this.$router.push(`/blog/${this.post.slug}`)
    }
  },
};
</script>
<style lang="scss" scoped>
  .post__card{
    border: 5px solid #6c67ae;
    background-color: white;
    border-radius: 10px;
  }
  .post__preview{
    display: grid;
    margin: 10px;
    grid-template-columns: 100%;
  }
  .post__image{
    width: 100%;
    object-fit: cover;
    border-radius: 15px;
  }
    .post__text{
      padding: 20px;
    }
.post__title{
    font-family: 'OpenSans';
  }
  @media (min-width: 768px){
    .post__card{
      margin: 20px;
      padding: 10px;
    }

    .post__preview{
      grid-template-columns: 50% 50%;
    }
    .post__image{
      max-height: 300px;
    }
  }
</style>