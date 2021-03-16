<template>
  <div class="resume__wrapper">
    <b-container>
      <section class="resume">
        <aside>
          <div class="resume__picture">
            <img src="@/assets/images/me.jpg" />
          </div>
          <div class="resume__aside">
            <div class="mt-4 ml-md-2">
              <span class="resume__subtitle"
                ><font-awesome-icon class="mr-2" icon="id-card" />Deividy Hertz
                Bonetti</span
              >
              <span class="resume__subtitle"
                ><font-awesome-icon class="mr-2" icon="calendar" />22 anos</span
              >
              <span class="resume__subtitle"
                ><font-awesome-icon class="mr-2" icon="phone" /> (49)
                98851-0740</span
              >
              <span class="resume__subtitle"
                ><font-awesome-icon
                  class="mr-2"
                  icon="envelope"
                />dhertzb@gmail.com</span
              >
              <span class="resume__subtitle"
                ><font-awesome-icon class="mr-2" :icon="['fab', 'github']" /><a
                  href="https://github.com/dhertzb"
                  >github.com/dhertzb</a
                ></span
              >
              <span class="resume__subtitle"
                ><font-awesome-icon class="mr-2" icon="file-pdf" />Baixar em
                pdf.</span
              >
            </div>
          </div>
        </aside>
        <section class="resume__main">
          <b-container>
            <b-row class="justify-content-center">
              <h2 class="resume__title">Currículo</h2>
            </b-row>
            <b-row>
              <span class="resume__title">Objetivo</span>
              <span class="resume__subtitle">
                Construir sistemas escaláveis e robustos, satisfatórios tanto na
                experiência do usuário quanto visualmente, seguindo uma
                arquitetura limpa e o padrão que melhor se encaixar ao projeto.
              </span>
            </b-row>
            <b-row>
              <span class="resume__title">Competências</span>
               <ul class="resume__list">
                <li>Arquitetura e implementação de sistema com mais de 1000 clientes</li>
                <li>Entrega de código de ótima qualidade seguindo as boas práticas da linguagem.</li>
                <li>Conhecimento de UX/UI.</li>
                <li>Noção de componetização seguindo design systems.</li>
                <li>Padronização de código seguindo metodologias definidas no mercado.</li>
                <li>Organização de carga de trabalho remotamente.</li>
                <li>Trabalhar ao lado do back end no planejamento de novas funcionalidades.</li>
               </ul>
            </b-row>
            <b-row>
              <span class="resume__title">Habilidades</span>
              <ul class="resume__list">
                <li>Extensivo conhecimento de Vue.js.</li>
                <li>Componetização escalável e performática.</li>
                <li>Testes unitários usando jest.</li>
                <li>Gestão de branch e pull requests.</li>
                <li>Documentação de componentes.</li>
                <li>Arquitetura de API RESTFUL.</li>
                <li>Desenvolvimento utilizando funcionalidades modernas do Javacript.</li>
                <li>Prototipagem utilizando o figma.</li>
               </ul>
            </b-row>
            <b-row>
              <span class="resume__title">Experiência</span>
              <span class="resume__subtitle">
                <div class="resume__timeline">
                  <h4>Ecomp</h4>
                </div>
                <div class="resume__timeline">
                  <h4>Festar</h4>
                </div>
                <div class="resume__timeline">
                  <h4>Clientar</h4>
                </div>
              </span>
            </b-row>
          </b-container>
        </section>
      </section>
    </b-container>
  </div>
</template>
<script>
import moment from "moment";
export default {
  data() {
    return {
      competencieList: []
    };
  },
  computed: {
    date() {
      return moment("20/05/1998", moment.ISO_8601)
        .locale("pt-br")
        .fromNow(true);
    }
  }
};
</script>
<style scoped>
.resume__wrapper {
  overflow: auto;
  margin-bottom: 100px;
  margin-top: 150px;
}
.resume {
  display: grid;
  grid-template-columns: 100%;
  background: #6c67ae;
  border-radius: 10px;
  border: 5px solid #6c67ae;
}
.resume aside {
  background: #6c8dda;
  padding: 15px;
  height: 100%;
}
aside .resume__subtitle, aside a{
  color: #681daf;
}
.resume__picture img {
  width: 200px;
  border-radius: 50%;
}
.resume__picture {
  text-align: center;
  margin-top: 20px;
}
.resume__title {
  text-shadow: 6px 3px 0px #e82e8b;
  color: white;
  padding: 20px 0px;
  font-family: "Press Start 2P", cursive;
}
.resume__list{
  display: block;
  color: white;
  list-style: inside;
  width: 100%;
}
h2.resume__title {
  display: block;
  font-size: 18px;
  padding-bottom: 10px;
  border-bottom: 5px solid #e82e8b;
}
span.resume__title::before {
  content: "";
  position: absolute;
  background: #e82e8b;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  top: 25px;
  left: -20px;
}
span.resume__title {
  font-size: 14px;
  position: relative;
  margin-left: 40px;
}
.resume__main .resume__subtitle {
  font-weight: 400;
  padding: 0px 30px;
  font-size: 16px;
}

.resume__subtitle {
  display: block;
  padding: 5px;
  color: white;
  width: 100%;
  font-weight: bold;
  font-size: 20px;
}
.resume__block {
  margin-top: 25px;
}
.resume__main {
  padding: 20px 0;
}
.resume__timeline{
  position: relative;
  display: block;
}
.resume__timeline::before{
  content:'';
  background: violet;
  height: 100%;
  width: 5px;
  left: -10px;
  position: absolute;
}
@media (min-width: 768px) {
  .resume__main  .resume__subtitle,  
  .resume__main  .resume__list  {
    font-size: 16.5px;
    text-align: left;
  }
  aside .resume__subtitle {
    font-size: 18px;
  }
  .resume {
    grid-template-columns: 300px auto;
  }
  .resume__picture img {
    width: 100%;
  }
  h2.resume__title {
    font-size: 38px;
  }
}
</style>
