<template>
  <section class="projects">
    <b-row class="projects__header">
      <b-col class="text-center">
        <h1 class="projects__title">Projetos</h1>
      </b-col>
    </b-row>
    <b-container>
      <section class="projects__preview">
        <project-preview
          :image="project.image"
          :title="project.title"
          :description="project.description"
          v-for="(project, index) in projects"
          :key="index"
        />
      </section>
    </b-container>
  </section>
</template>
<script>
import ProjectPreview from "../components/ProjectPreview.vue";
export default {
  components: {
    ProjectPreview
  },
  data() {
    return {
      projects: [
        {
          title: "Clientar",
          description:
            "Estruturação do front end e implementação utilizando as boas práticas do mercado na construção de um sistema CRM.",
          image: require("../assets/clientarLogo.svg")
        },
        {
          title: "deivihertz",
          description:
            "Desenvolvimento de site pessoal com o intuito de servir de vitrine aos meus projetos e estudos.",
          image: require("../assets/logo2.svg")
        }
      ]
    };
  }
};
</script>
<style scoped>
.projects__header {
  background: #c3e6cb;
  padding: 150px 0px;
}
.projects__title {
  font-family: "Press Start 2P", cursive;
  color: white;
  font-size: clamp(18px, 26px, 32px);
}
.projects__preview {
  position: relative;
  top: -100px;
  display: grid;
  grid-template-columns: 100%;
  grid-gap: 10px;
}
@media (min-width: 768px) {
  .projects__preview {
    grid-template-columns: 33% 33% 33%;
  }
  .projects__title {
    font-size: 48px;
  }
}
</style>
