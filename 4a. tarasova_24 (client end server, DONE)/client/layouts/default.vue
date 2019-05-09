<template>
  <div>
    <menu-list v-show="showList" @shutList="switchMenu"/>

    <div v-show="!showList" class="fon">
      <menu-bar @showList="switchMenu"/>

      <div v-if="currentPg === 'index'" class="index-to-top">
        <nuxt/>
      </div>

      <div v-else class="d-flex flex-row flex-wrap page-base">
        <div class="d-flex left0">
          <img class="img-fluid left-top" :src="stateAll[currentPg].picture" alt="Elena Tarasova">
        </div>
        <div class="d-flex flex-column right0">
          <div class="right-top">{{stateAll[currentPg].title}}</div>
          <div class="right-down ">
            <nuxt/>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import menuBar from '@/components/menuBar.vue'
  import menuList from '@/components/menuList.vue'

  export default {
    components: {
      menuBar,
      menuList
    },
    data() {
      return {
        showList: false
      }
    },
    computed: {
      ...mapState({
        stateAll: (state) => state
      }),
      currentPg() {
        return this.$route.name
      }
    },
    methods: {
      switchMenu(bool) {
        this.showList = bool
      }
    }
  }
</script>

<style scoped>
  .fon {
    background-color: #00081a;
    height: 100vh;
  }

  .index-to-top {
    margin-top: -40px;
  }

  .page-base {
    background-color: #00081a;
    padding-bottom: 95px;
  }

  .left0 {
    width: 43.1%;
    height: 100%;
    /*position: fixed;*/
    /*background-size: cover;*/
  }

  .left-top {
    width: 100%;
    height: 100%;
  }

  .right0 {
    width: 56.9%;
    height: auto;
  }

  .right-top {
    width: 100%;
    height: 118px;
    font-family: ITFDevanagari, Arial, sans-serif;
    font-size: 40px;
    line-height: 1.5;
    text-align: left;
    color: #ffffff;
    padding-left: 24px;
    padding-top: 45px;
  }

  .right-down {
    width: 101.1%;
    height: auto;
    padding-bottom: 40px;
    margin-left: -3.3%;
    background-image: url("/imgs/text-fon@2x.png");
    background-color: #ffffff;
  }

  /*переходим в 1 колонку*/
  @media (max-width: 720px) {
    .left0 {
      width: 94%;
      margin-right: 6%;
    }

    .right0 {
      width: 90%;
      margin-left: 10%;
      margin-right: 0;
    }

    .right-down {
      width: 100%;
      margin-left: 0;
    }
  }

  @media (min-width: 344px) and (max-width: 500px) {
    .right-top {
      height: 70px;
      font-size: 24px;
      line-height: 1.5;
      padding-left: 24px;
      padding-top: 26px;
    }

    .px30 {
      font-size: 20px;
    }
  }

  @media (max-width: 344px) {
    .right-top {
      height: 50px;
      font-size: 18px;
      line-height: 1.5;
      padding-left: 24px;
      padding-top: 18px;
    }

    .px30 {
      font-size: 18px;
    }
  }

</style>
