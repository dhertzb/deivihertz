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
              <div>
               <ul>
                 <li>ois</li>
               </ul>
              </div>
            </b-row>
            <b-row>
              <span class="resume__title">Habilidades</span>
            </b-row>
            <b-row>
              <span class="resume__title">Experiência</span>
              <span class="resume__subtitle">
              </span>
            </b-row>
            <b-row>
              <span class="resume__title">Projetos</span>
              <span class="resume__subtitle">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus mauris nunc, iaculis et scelerisque sed, condimentum
                id leo. Duis nec nisi nibh. Integer in augue ut massa tincidunt
                commodo quis blandit ligula. Sed at arcu in erat maximus
                suscipit. Cras in fermentum risus. Suspendisse at risus nec
                felis posuere lobortis. Integer non sem at mi tempus viverra eu
                ac ligula. Vestibulum in fermentum enim. Morbi ut condimentum
                sapien. Suspendisse massa tellus, pharetra in quam vel,
                sollicitudin elementum metus. Aliquam nec velit dui. Nullam
                bibendum orci ut faucibus convallis. Integer quis maximus massa,
                at venenatis tellus. Nulla imperdiet lobortis diam, non congue
                eros blandit commodo.
              </span>
            </b-row>
            <b-row>
              <span class="resume__title">Escolaridade</span>
              <span class="resume__subtitle">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus mauris nunc, iaculis et scelerisque sed, condimentum
                id leo. Duis nec nisi nibh. Integer in augue ut massa tincidunt
                commodo quis blandit ligula. Sed at arcu in erat maximus
                suscipit. Cras in fermentum risus. Suspendisse at risus nec
                felis posuere lobortis. Integer non sem at mi tempus viverra eu
                ac ligula. Vestibulum in fermentum enim. Morbi ut condimentum
                sapien. Suspendisse massa tellus, pharetra in quam vel,
                sollicitudin elementum metus. Aliquam nec velit dui. Nullam
                bibendum orci ut faucibus convallis. Integer quis maximus massa,
                at venenatis tellus. Nulla imperdiet lobortis diam, non congue
                eros blandit commodo.
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
.resume__picture img {
  width: 200px;
  border-radius: 50%;
}
.resume__picture {
  text-align: center;
  margin-top: 20px;
}
.resume__title {
  color: white;
  padding: 20px 0px;
  font-family: "Press Start 2P", cursive;
}
h2.resume__title {
  font-size: 18px;
  padding-bottom: 10px;
  border-bottom: 5px solid #dc3545;
}
span.resume__title::before {
  content: "";
  position: absolute;
  background: #dc3545;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  top: 25px;
  left: -20px;
}
span.resume__title {
  font-size: 14px;
  coition: relative;
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
  font-weight: bold;
  font-family: "Quicksand";
  font-size: 20px;
}
.resume__subtitle a {
  color: white;
}
.resume__block {
  margin-top: 25px;
}
.resume__main {
  padding: 20px 0;
}
@media (min-width: 768px) {
  .resume__subtitle {
    font-size: 16px;
    text-align: left;
  }
  aside .resume__subtitle {
    font-size: 20px;
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
