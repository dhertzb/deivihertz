<template>
<div class="resume__wrapper">
  <b-container>
    <section class="resume">
      <aside>
        <div class="resume__picture">
          <img  src="../assets/Eu.jpg" />
        </div>
        <div class="resume__block">
          <span class="resume__text">Deividy Hertz Bonetti</span>
          <span class="resume__text">22 anos</span>
          <span class="resume__text">(49) 98851-0740</span>
          <span class="resume__text">dhertzb@gmail.com</span>
          <span class="resume__text"><a href="https://github.com/dhertzb">github.com/dhertz</a></span>
        </div>
      </aside>
      <section class="resume__main">
        <b-container>
          <b-row>
            <h2>Currículo</h2>
          </b-row>
          <b-row>
            <span class="resume__text">Objetivo</span>
          </b-row>
          <b-row>
            <span class="resume__text">Experiencia</span>
          </b-row>
            <b-row>
            <span class="resume__text">Projetos</span>
            </b-row>
          <b-row>
            <span class="resume__text">Escolaridade</span>
          </b-row>
        </b-container>
      </section>
    </section>
  </b-container>
</div>
</template>
<script>
export default {
  components: {}
};
</script>
<style scoped>
.resume__wrapper{
  overflow: auto;
  min-height: 100vh;
}
.resume {  
  display: grid;
  grid-template-columns: 100%;
  background: #004085;
  border-radius: 10px;
  margin-top: 140px;
  border:5px solid #004085;
}
.resume aside {
  background: #6c8dda;
  padding:15px;
  height: 100%;
}
.resume__picture img{
  width: 200px;
  border-radius: 50%;
}
.resume__picture {
  text-align: center;  
  margin-top: 20px;
}
.resume__text{
  text-align: center;
  display: block;
  padding: 5px;
  color: white;
  font-family: "Press Start 2P", cursive;
  font-size: clamp(10px, 12px, 14px);
}
.resume__text a{
  color: white;
}
.resume__block{
  margin-top: 25px;
}
.resume__main{

}
@media (min-width:768px) {
  .resume__text{
    font-size: 12px;
    text-align: left;
  }
  .resume{
     grid-template-columns: 300px auto;
  }
  .resume__picture img {
    width: 100%;
  }
}
</style>
