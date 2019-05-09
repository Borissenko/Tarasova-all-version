<template>
  <div class="margin-external">   <!--  v-click-outside="goTo(activePg)" упорно не срабатывает -->
    <ul class="nav mb-4">    <!-- если добавить nav-tabs, то появится отчерк снизу закладок-->
      <li v-for="(page, index) in pages" :key="index" :class="isActivePg(page) ? 'active' : '' "
          class="nav-tabs-style">
        <a @click.prevent="goTo(page.typePg)">{{page.title}}</a>
      </li>
    </ul>

    <div v-if="mean"
         v-for="(pressItem, index) of press" :key="100 + index"
         @click.prevent="showInterview(pressItem)"
    >
      <div class="press-item">
        <div class="blue px18 bold" v-html="pressItem.title"></div>
        <div class="blue px12" v-html="pressItem.description"></div>
        <div class="dark px12" v-html="pressItem.data"></div>
      </div>
    </div>
    <!--pressItem развернуто-->
    <div v-else class="press-item-full" @click.prevent="goTo(currentActivePg)">
      <div>
        <div class="blue px18 bold" v-html="prsItm.title"></div>
        <div class="blue px12" v-html="prsItm.description"></div>
        <div class="dark px12" v-html="prsItm.data"></div>
        <div class="mt-4" v-html="prsItm.text"></div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import clickOutside from '@/directives/click-outside'
  import {GET_PRESS_PAGE} from "@/assets/queries";

  export default {
    computed: {
      ...mapState({
        pages: st => st.press.component.pages,
        activePg: st => st.press.component.activePg
      })
    },
    async asyncData(context) {
      let client = context.app.apolloProvider.defaultClient
      const {data} = await client.query({
        query: GET_PRESS_PAGE,
        variables: {
          basicName: "press"
        }
      })
      return {
        pressComponents: data.getPage.component,
        loading: true
      }
    },
    data() {
      return {
        currentActivePg: '',
        press: [],
        prsItm: {},
        mean: true
      }
    },
    methods: {
      goTo(typePg) {
        this.currentActivePg = typePg
        this.press = this.pressComponents[typePg]
        this.mean = true
      },
      showInterview (pressItem) {
        this.prsItm = pressItem
        this.mean = false
      },
      isActivePg(page) {
        return this.currentActivePg === page.typePg
      }
    },
    directives: {
      clickOutside
    },
    created() {
      this.currentActivePg = this.activePg
      this.press = this.pressComponents[this.activePg]
    }
  }
</script>

<style scoped>
  .nav-tabs-style {
    font-family: NotoSerif, Roboto, Arial, sans-serif;
    font-size: 16px;
    padding-right: 30px;
    line-height: 1.38;
    text-align: left;
    color: #00081a;  /*цвет неактивной вкладки*/
    cursor: pointer;
  }

  .active {
    color: #0060ba  /*цвет активной вкладки. Последовательность декларации классов имеет значение!!!*/
  }

  .nav-tabs-style:hover {
    color: #009cff;
  }

  .press-item {
    cursor: pointer;
    margin-top: 10px;
    margin-left: -1.5vw;
    margin-right: -1.5vw;
    padding-left: 1.5vw;
    padding-top: 7px;
    padding-bottom: 7px;
  }

  .press-item-full {
    margin-top: 10px;
    margin-right: -1.5vw;
    padding-top: 7px;
  }

  .press-item:hover {
    background-color: rgba(142, 164, 236, 0.13);
  }
</style>
