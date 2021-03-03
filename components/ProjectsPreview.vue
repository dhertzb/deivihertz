<template>
  <div class="c-project-card mb-2">
    <div class="c-project-card__header">
      <img :src="image" />
      <span class="c-project-card__title">{{ title }}</span>
    </div>
    <div class="c-project-card__body">
      <span class="c-project-card__description">{{ description }}</span>
      <b-button class="c-project-button" variant="primary">Visualizar</b-button>
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
    }
  }
};
</script>
<style scoped>
.c-project-card {
  border: 5px solid #e82e8b;
  border-radius: 10px;
  background: #e5ffff;
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
  padding: 20px;
  font-weight: bold;
  font-family: "Quicksand";
}
.c-project-button {
  margin: 10px;
  border: #e82e8b 5px solid;
  color: #e82e8b;
}
.c-project-button:::hover {
  background-color: #e82e8b;
}
</style>
