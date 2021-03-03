<template>
  <div class="post__preview_card">
    <div class="container">
      <div class="post__preview">
        <h2>{{post.title}}</h2>
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
.post__preview_card {
  padding: 20px 0px;
  &:nth-child(2) {
    background: #fef7da;
  }
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    img {
      border-radius: 30px;
      width: 100%;
      max-width: 550px;
      height: auto;
      object-fit: cover;
    }

    .post__preview {
      width: 100%;
      padding: 20px 0px 0px 0px;
    }
    .post__preview_title {
      margin-top: 10px;
      color: #414141;
      font-family: "Press Start 2P", cursive;
      h2 {
        font-size: 22px;
      }
    }
    .post__preview_created_at {
      color: rgb(118, 118, 118);
      font-family: "Quicksand", sans-serif;
      margin-top: 10px;
      display: block;
    }
    .post__preview_button {
      margin: 10px 0px;
      border-color: #f14668 !important;
      color: #f14668 !important;
      &:hover,
      &:focus {
        background: #f14668 !important;
        color: white !important;
      }
    }
  }
}
@media (min-width: 768px) {
  .post__preview_card .container {
    flex-direction: row;
    justify-content: flex-start;
    padding: 20px;
    align-items: center;
    img {
      width: 50%;
    }
  }
  .post__preview {
    width: 80%;
    margin-left: 30px;
    padding: 20px !important;
  }
}
@media (min-width: 1024px) {
  .post__preview_description {
    font-size: 22px;
    font-family: "Quicksand", sans-serif;
  }
}
</style>
