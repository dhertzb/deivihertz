<template>
  <div class="project">
    <header class="project__header">
      <h1>{{ project.title }}</h1>
    </header>
    <nuxt-content :document="project" />
  </div>
</template>
<script>
export default {
  async asyncData({ $content, params }) {
    const project = await $content('projects', params.slug).fetch()
    return { project }
  }
}
</script>
<style scoped lang="scss">
.project{
  padding: 150px 15% 0 15%;
}
.project__header{
  padding-bottom: 30px;
  text-align: center;
}
@media (min-width: 768px){
  .project{
    padding: 150px 30% 0 30%;
  }
}
</style>