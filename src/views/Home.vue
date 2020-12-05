<template>
  <div class="home-wrapper">
    <div class="home-column first-column">
      <div class="home-text-content">
        <div>
          <span class="home-title">Oi, meu nome é Deividy Hertz</span>
          <span class="home-subtitle">
            Aqui você vai conhecer um pouco sobre minha jornada e meus
            interesses como desenvolvedor front-end.
          </span>
        </div>
      </div>
    </div>
    <div class="home-column second-column">
      <div class="home-main-bg">
        <img class="computer-img" src="../assets/compter.gif" />
        <div class="plant">
          <div class="leaf">
            <div>
              <div class="leaf"></div>
              <div class="branch"></div>
            </div>
          </div>
        </div>
        <div class="alt-plant">
          <div class="leaf">
            <div>
              <div class="branch">
                <div class="leaf">
                  <div class="alt-branch"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="tree">
          <div class="big-branch"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
.home-wrapper {
  align-items: center;
  justify-content: center;
  flex-direction: column;
  display: flex;
  height: 100vh;
  .home-column.first-column {
    margin-bottom: 22px;
  }
  .home-text-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    float: right;
    > div {
      text-align: center;
    }
  }
  .home-title {
    font-size: 20px;
    font-family: Nunito Bold;
    color: #ea3c5e;
    text-align: center;
    display: inline-block;
    width: 90%;
  }
  .home-subtitle {
    margin-top: 0.5vw;
    display: inline-block;
    text-align: center;
    font-size: 15px;
    margin: 0 30px;
    color: #987955;
    font-family: Montserrat;
  }
  .home-main-bg {
    height: auto;
    width: 300px;
    height: 320px;
    background-image: url("../assets/bes.png");
    position: relative;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    .computer-img {
      width: 68px;
      position: absolute;
      left: 62px;
      top: 16px;
      filter: sepia(1);
    }
    @keyframes wind {
      0% {
        transform: rotate(0deg);
      }
      50% {
        transform: rotate(20deg);
      }
      100% {
        transform: rotate(0deg);
      }
    }
    @keyframes windd {
      0% {
        transform: rotateX(0deg);
      }
      30% {
        transform: rotateX(10deg);
      }
      50% {
        transform: rotateX(0deg);
      }
      70% {
        transform: rotateX(-10deg);
      }
      100% {
        transform: rotateX(0deg);
      }
    }
  }
}
@media (min-width: 425px) and (max-width: 767px) {
  .home-title {
    font-size: 26px !important;
  }
  .home-subtitle {
    font-size: 18px !important;
  }
  .home-subtitle {
    width: 70%;
  }
}
@media (min-width: 768px) and (max-width: 1023px) {
  .home-title {
    font-size: 28px;
  }
  .home-subtitle {
    width: 70%;
  }
}
@media (min-width: 768px) {
  .home-wrapper {
    flex-direction: row !important;
    align-items: center !important;
    height: 100vh !important;
    .home-column.first-column {
      margin-top: 0px;
      margin-bottom: 0px;
    }
    .home-text-content > div {
      padding-left: 100px;
      text-align: left;
    }
    .home-title {
      width: 100%;
      text-align: left;
      font-size: 5vw !important;
    }
    .home-subtitle {
      width: 80%;
      text-align: left !important;
      margin: 0 !important;
      font-size: 1.7vw !important;
    }
  }
}
@media (min-width: 1024px) {
  .home-main-bg {
    width: calc(420px + 12vw) !important;
    height: calc(380px + 10vw) !important;
    overflow: hidden;
    .computer-img {
      width: calc(100px + 2vw) !important;
      left: calc(140px + 0vw) !important;
      top: -13px !important;
    }
  }
  .plant {
    position: relative;
    right: 90px;
  }
  .alt-plant {
    position: absolute;
    left: 100px;
    top: 140px;
    transform: scale(-0.7, 0.7);
  }
  .alt-branch {
    background-color: #90be6d;
    width: 5px;
    height: 50px;
    border-radius: 8px;
    position: absolute;
    transform-origin: top;
    right: 0;
    &:before {
      content: "";
      position: absolute;
      height: 20px;
      border-radius: 5px;
      border-top-left-radius: 70px;
      border-bottom-right-radius: 70px;
      width: 20px;
      top: 9px;
      background-color: #90be6d;
      transform: rotateZ(45deg);
      left: 3px;
    }
  }
  .branch {
    background-color: #90be6d;
    width: 5px;
    height: 50px;
    border-radius: 8px;
    position: absolute;
    transform-origin: top;
    right: 0;
  }
  .branch::after {
    content: "";
    width: 20px;
    position: absolute;
    height: 4.5px;
    top: 20px;
    border-radius: 5px;
    background-color: #90be6d;
    transform: rotateZ(45deg);
  }

  .leaf {
    background-color: #90be6d;
    width: 30px;
    height: 30px;
    border-top-left-radius: 70px;
    border-bottom-right-radius: 70px;
    position: absolute;
    top: 28px;
    transform-origin: top;
    right: 0px;
    animation: wind 3s infinite ease;
  }
  .big-branch {
    background-image: url("../assets/leafs.png");
    background-size: contain;
    background-repeat: no-repeat;
    width: 109px;
    height: 102px;
    position: absolute;
    left: 44px;
    bottom: 26px;
    transform-origin: bottom;
    -webkit-animation: wind 5s infinite linear;
    animation: wind 5s infinite ease;
  }
}
</style>
