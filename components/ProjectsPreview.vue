<template>
  <div class="c-project-card mb-2">
    <div class="c-project-card__header">
      <img :src="image" />
      <span class="c-project-card__title">{{ title }}</span>
    </div>
    <div class="c-project-card__body">
      <span class="c-project-card__description">{{ description }}</span>
      <b-button @click="goTo()" class="c-project-button" variant="primary">
        Ver detalhes</b-button>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      required: true,
      type: String
    },
    description: {
      required: true,
      type: String
    },
    image: {
      required: true,
      type: String
    },
    slug:{
      required:true,
      type: String
    }
  },
  methods:{
    goTo(){
      this.$router.push(`/projects/${this.slug}`)
    }
  }
};
</script>
<style scoped>
.c-project-card {
  border: 5px solid #e82e8b;
  border-radius: 10px;
  height: 450px;
  background: #e5ffff;
  box-shadow: 0px 8px 1px -3px #8db299;
}
.c-project-card__title {
  font-family: "Press Start 2P", cursive;
  color: white;
  font-size: 22px;
}

.c-project-card img {
  height: 70px;
  width: 100px;
}
.c-project-card__header {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 200px;
  margin: 10px;
  background: #e82e8b;
  border-radius: 10px;
}
.c-project-card__body {
  text-align: center;
}
.c-project-card__description {
  display: block;
  font-family: 'UbuntuMono';
  font-size: 18px;
  height: 150px;
  padding: 20px;
  font-weight: bold;
}
.c-project-button {
  border: #e82e8b 5px solid;
  color: #e82e8b;
  font-weight: bold;
  font-size: 14px;
  font-family: "Press Start 2P", cursive;
  background: white;
}
.c-project-button:::hover {
  background-color: #e82e8b;
}
</style>
