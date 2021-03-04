<template>
<div class="container">
  <div class="post__card">
      <div class="post__preview">
        <img class="post__image"  :src="require(`~/assets/images/${post.img}`)" />
        <div>
          <h2 class="post__title">{{post.title}}</h2>
          <p>{{post.description}}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import moment from "moment"

export default {
  props: {
    post: {
      required: true,
      type: Object
    }
  },
  methods: {
    redirectToPost(id) {
      this.$router.push({
        name: "Post",
        params: {
          postId: id
        }
      });
    }
  },
  computed: {
    date() {
      return moment(this.post.first_publication_date, moment.ISO_8601)
        .locale("pt-br")
        .fromNow(true);
    }
  }
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
  .post__title{
    font-family: $font-primary;
  }
  @media (min-width: 768px){
    .post__card{
      margin: 20px;
      padding: 10px;

    }
    .post__preview{
      grid-template-columns: 50% 50%;
      grid-gap: 30px;
    }
    .post__image{
      max-height: 300px;
    }
  }
</style>