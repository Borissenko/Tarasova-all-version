<template>
  <div class="bg-menu">
    <div class="bg-menu-dark" @click="shutList">

      <div class="d-flex flex-column">
        <div> <!--верхняя полоска c крестиком-->
          <div class="krest">&times;</div>     <!-- Крестик: &times; -->
        </div>

        <div> <!--список меню-->
          <ul class="nav flex-column list-menu">
            <li v-for="(topic, index) of stateAll" :key="index" class="nav-item">
              <nuxt-link :to="`/${topic.basicName}`" class="nav-link px30Menu active">
                {{topic.title}}
              </nuxt-link>
            </li>
          </ul>
          <div class="soc-icon">
            <a href="https://www.facebook.com/elenatarasova.ru/" target="_blank">
              <i class="fab fa-facebook-square fa-inverse fa-lg"></i>
            </a>
            <a href=" https://www.youtube.com/embed/8kf4_cRS7vg" target="_blank">
              <i class="fab fa-youtube fa-inverse fa-lg"></i>
            </a>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    computed: {
      ...mapState({
        stateAll: (state) => state
      })
    },
    methods: {
      shutList() {
        this.$emit('shutList', false)
      }
    }
  }
</script>

<style scoped>
  .bg-menu {
    width: 100vw;
    height: 100vh;
    background-image: url("/imgs/menu@2x.jpg");
    background-position: center bottom;
  }

  .bg-menu-dark {
    background-color: #000000;
    opacity: 0.5;
    width: 100vw;
    height: 100vh;
  }

  .krest {
    width: 90px;
    font-size: 39px;
    line-height: 0.9;
    color: #ffffff;
    padding-left: 17px;
    margin: 0;
    padding-top: 0;
  }

  .list-menu {
    width: 230px;
    min-height: 440px; /*544px;*/
    margin-left: 50px;
    margin-top: 18px;
  }

  .soc-icon {
    margin-left: 50px;
    margin-top: 44px;
    padding-left: 16px;
    letter-spacing: 10px;
  }

  .px30Menu:hover, .krest:hover, .fa-facebook-square:hover, .fa-youtube:hover {
    color: #009cff;
    cursor: pointer;
  }

  @media (max-width: 344px) {
    .px30Menu {
      font-size: 20px;
      line-height: 1.0;
    }

    .list-menu {
      width: 190px;
      min-height: 400px;
      margin-left: 7vw;
    }

    .soc-icon {
      margin-top: 4px;
      margin-left: 7vw;
    }
  }
</style>
