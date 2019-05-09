<template>
  <div class="margin-external">
    <ul class="nav">    <!-- если добавить nav-tabs, то появится отчерк снизу закладок-->
      <li v-for="(page, index) in pages" :key="index" :class="isActivePg(page) ? 'active' : '' "
          class="nav-tabs-style">
        <a @click="goTo(page)">{{page.title}}</a>
      </li>
    </ul>

    <div v-if="!isConcertsArchive" class="list" v-for="(event, index) of eventsEtPg" :key="100 + index">
      <div class="blue px18 bold">{{event.data}}</div>
      <div class="dark px12 bold m-were">{{event.where}}</div>
      <div class="blue px12">{{event.participants}}</div>
      <div class="dark px12 bold m-program">Программа: {{event.program}}</div>
    </div>
    <div  v-else v-html="concertsArchive"></div>

  </div>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    computed: {
      ...mapState({
        pages: st => st.concerts.component.pages,
        activePg: st => st.concerts.component.activePg,
        concertEventsAll: st => st.concerts.component.concertEventsAll,
        concertsArchive: st => st.concerts.component.concertsArchive
      })
    },
    data() {
      return {
        currentActivePg: '',
        eventsEtPg: [],
        isConcertsArchive: false
      }
    },
    methods: {
      goTo(page) {
        if (page.typePg === 'archive') {
          this.isConcertsArchive = true
        } else {
          this.isConcertsArchive = false
          this.eventsEtPg = this.concertEventsAll.filter(item => item.type == page.typePg)
        }
        this.currentActivePg = page.typePg
      },
      isActivePg(page) {
        return this.currentActivePg === page.typePg
      }
    },
    created() {
      this.currentActivePg = this.activePg
      this.eventsEtPg = this.concertEventsAll.filter(item => item.type == this.activePg)
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
    color: #00081a; /*цвет неактивной вкладки 009cff*/
    cursor: pointer;
  }

  .active {
    color: #0060ba  /*цвет активной вкладки 00081a. Последовательность декларации классов имеет значение!!!*/
  }

  .nav-tabs-style:hover {
    color: #009cff;  /* 0060ba*/
  }

  .list {
    margin-top: 35px;
  }
  .m-were{
    margin-top: 6px;
  }
  .m-program{
    margin-top: 11px;
  }
</style>
