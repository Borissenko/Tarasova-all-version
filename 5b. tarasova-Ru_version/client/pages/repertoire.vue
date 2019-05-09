<template>
  <div class="margin-external">
    <ul class="nav">    <!--nav-tabs добавит отчерк снизу-->
      <li v-for="(page, index) in pages" :key="index" :class="isActivePg(page) ? 'active' : '' "
          class="nav-tabs-style">
        <a @click="goTo(page)">{{page.title}}</a>
      </li>
    </ul>

    <div class="list" v-for="(composition, index) of repPg" :key="100 + index">
      <div class="blue px18 bold">{{composition.composer}}</div>
      <div class="dark px12 bold" v-html="composition.compositionTitle"></div>
      <div class="blue px12" v-html="composition.compositionDescription"></div>
    </div>

  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import {GET_REPERTOIRE_PAGE} from "@/assets/queries";

  export default {
    computed: {
      ...mapState ({
        pages: st => st.repertoire.component.pages,
        activePg: st => st.repertoire.component.activePg
      })
    },
    async asyncData(context) {
      let client = context.app.apolloProvider.defaultClient;
      const {data} = await client.query({
        query: GET_REPERTOIRE_PAGE,
        variables: {
          basicName: "repertoire"
        }
      })
      return {
        repAll: data.getPage.component.repertoireAll,
        loading: true
      }
    },
    data() {
      return {
        currentActivePg: '',
        repPg: []
      }
    },
    methods: {
      goTo(page) {
        this.currentActivePg = page.typePg
        this.repPg = this.repAll.filter(item => item.type == page.typePg)
      },
      isActivePg(page) {
        return this.currentActivePg === page.typePg
      }
    },
    created() {
      this.currentActivePg = this.activePg
      this.repPg = this.repAll.filter(item => item.type == 'solo')
    }
  }
</script>

<style scoped>
  .list {
    margin-top: 30px;
  }

  .nav-tabs-style {
    font-family: NotoSerif, Roboto, Arial, sans-serif;
    font-size: 16px;
    padding-right: 30px;
    line-height: 1.38;
    text-align: left;
    color: #00081a; /*цвет неактивной вкладки*/
    cursor: pointer;
  }

  .active {
    color: #0060ba /*цвет активной вкладки. Последовательность декларации классов имеет значение!!!*/
  }

  .nav-tabs-style:hover {
    color: #009cff;
  }

</style>
