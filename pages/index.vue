<template>
  <div>
    <section class="hero">
      <b-container>
        <b-row class="hero__row">
          <b-col class="hero__col" md="6" order-md="2">
            <img class="hero__img" src="/images/computer.svg" />
          </b-col>
          <b-col md="6" order-md="1">
            <div class="hero__text">
              <h1 class="hero__title">Deivi<br />Hertz</h1>
              <span class="hero__subtitle">
                Desenvolvedor front end, vários tec tec no teclado.
              </span>
              <b-button
                class="hero__button"
                @click="$router.push({ name: 'Resume' })"
                >Conhecer</b-button
              >
            </div>
          </b-col>
        </b-row>
      </b-container>
    </section>
  </div>
</template>
<script>
export default {};
</script>
<style scoped lang="scss">
.hero {
  background: #e5ffff;
  height: 100vh;
}
.hero__img {
  width: 300px;
  z-index: 2;
}
.hero__row {
  padding-top: 75px;
  align-items: center;
}
.hero__text {
  text-align: center;
}
.hero__title {
  font-family: "Press Start 2P", cursive;
  color: #e82e8b;
  font-size: clamp(36px, 40vw, 48px);
}
.hero__subtitle {
  margin-top: 0.5vw;
  display: inline-block;
  font-size: clamp(14px, 2.5vw, 1.5rem);
  display: none;
  color: #9371b2;
  font-family: "Quicksand", sans-serif;
}
.hero__col {
  display: flex;
  justify-content: center;
}
.hero .hero__button {
  background: white;
  color: #6c67ae;
  font-size: 14px;
  border: 5px solid #6c67ae;
  font-family: "Press Start 2P", cursive;
}
@media (min-width: 768px) {
  .hero__img {
    width: 100%;
  }
  .hero__row {
    height: 100vh;
  }
  .hero .hero__title {
    margin: 0;
    font-size: calc(1em + 6vw);
  }
  .hero .hero__subtitle {
    margin: 0;
    display: inline-block;
  }
  .hero .hero__text {
    text-align: left;
  }
  .hero .hero__button {
    font-size: 14px;
    margin-top: 15px;
  }
}
</style>
