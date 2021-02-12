<template>
  <section class="projects">
    <b-container>
      <b-row>
        <b-col class="text-center">
          <h1 class="projects__title">Projetos</h1>
        </b-col>
      </b-row>
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
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras interdum feugiat ex vel volutpat. Sed at aliquet odio. In orci libero, placerat luctus justo id, hendrerit maximus ante",
          image: require("../assets/clientarLogo.svg")
        },
        {
          title: "deivihertz",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras interdum feugiat ex vel volutpat. Sed at aliquet odio. In orci libero, placerat luctus justo id, hendrerit maximus ante",
          image: require("../assets/logo.svg")
        }
      ]
    };
  }
};
</script>
<style scoped>
.projects {
  padding-top: 150px;
}
.projects__title {
  font-family: "Press Start 2P", cursive;
}
.projects__preview {
  padding-top: 40px;
  display: grid;
  grid-template-columns: 100%;
  grid-gap: 10px;
}
@media (min-width: 768px) {
  .projects__preview {
      grid-template-columns: 33% 33% 33%;
  }
}
</style>
