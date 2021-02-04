<template>
  <section class="projects">
    <b-container>
      <el-row>
        <el-col class="text-center">
          <h1 class="projects__title">Projetos</h1>
        </el-col>
      </el-row>
      <section class="projects__preview">
        <project-preview v-for="(project,index) in projects" :key="index" />
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
      projects: [1, 2]
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
.projects__preview{
  padding-top: 40px;
  display: grid;
  grid-template-columns: 33% 33% 33%;
}
</style>
