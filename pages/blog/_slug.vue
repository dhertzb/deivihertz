<template>
  <div class="post__wrapper">
    <section class="container post__content_wrapper">
      <nuxt-content :document="post" />
    </section>
  </div>
</template>
<script>
export default {
  async asyncData({ $content, params }) {
    const post = await $content('posts', params.slug).fetch()
    return { post }
  }
}
</script>
<style scoped lang="scss">
.post__wrapper {
  background-color: white;
  .post__header {
    text-align: center;
    align-items: center;
    justify-content: center;
    height: 400px;
    flex-direction: column;
    display: flex;
    background: #fff2bf;
    h1 {
      font-size: calc(25px + 2vw) !important;
      color: #f14668;
    }
  }
  .post__thumbnail {
    display: flex;
    justify-content: center;
    padding: 0px 40px;
    img {
      border-radius: 10px;
      transform: translateY(-100px);
    }
  }
  .post__content_wrapper {
    max-width: 60%;
    .post__content {
      transform: translateY(-70px);
      font-family: Montserrat;
      font-size: 20px;
    }
  }
}
</style>