<template>
	<div class="post__wrapper"> 
		<header class="post__header">
      <h1>{{post.data.title[0].text}}</h1>
    </header>
    <section class="container post__content_wrapper">
        <div>
          <div class="post__thumbnail">
            <prismic-image :field="post.data.thumbnail"/>
          </div>
          <prismic-rich-text class="post__content" :field="post.data.content"/>     
        </div>
    </section>
	</div>
</template>
<script>
	export default{
    data(){
      return{
        post: null
      }
    },
    created(){
        this.$prismic.client.getByID(this.$route.params.postId)
      .then(res => {
        this.post = res
      })
      .catch(err => console.log(err))
    }
	}
</script>
<style scoped lang="scss">
  .post__wrapper{
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
    .post__thumbnail{
      display: flex;
      justify-content: center;
      padding:0px 40px;
      img{
        border-radius: 10px;
        transform: translateY(-100px);
      }
    }
    .post__content_wrapper{
      max-width: 60%;
      .post__content{
        transform: translateY(-70px);
        font-family: Montserrat;
        font-size: 20px;
      }
    }
  }
</style>