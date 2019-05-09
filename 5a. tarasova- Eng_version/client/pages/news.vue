<template>
  <div class="margin-external">

    <div v-for="(pr, i) of news" :key='i' class="project-list press-item" @click="showMore(pr)" v-if="!mean">
      <div class="blue px18 bold" v-html="pr.title"></div>
      <div class="dark px12" v-html="pr.subtitle"></div>
      <!--<i class="blu px10 light-blue point">Читать далее</i>-->
    </div>

    <div class="project-list" v-if="mean" @click="close">

      <div class="d-flex justify-content-between align-items-center">
        <div class="d-flex flex-column title-project-detail">
          <div class=" blue px18 bold" v-html="more.title"></div>
          <div class="blue px12" v-html="more.subtitle"></div>
        </div>
        <div class="btn-project-detail light-blue px10">< Back</div>
      </div>

      <div class="text-project-detail dark px14" v-html="more.text"></div>
    </div>
  </div>
</template>

<script>
  import clickOutside from '@/directives/click-outside'
  import {GET_NEWS_PAGE} from "@/assets/queries";

  export default {
    async asyncData(context) {
      let client = context.app.apolloProvider.defaultClient
      const {data} = await client.query({
        query: GET_NEWS_PAGE,
        variables: {
          basicName: "news"
        }
      })
      return {
        news: data.getPage.component.news,
        loading: true
      }
    },
    data() {
      return {
        mean: false,
        more: {},
        loading: false
      }
    },
    methods: {
      showMore(pr) {
        this.mean = !this.mean
        this.more = pr
      },
      close() {
        this.mean = false
      }
    },
    directives: {
      clickOutside
    }
  }

</script>

<style scoped>

  .project-list {
    margin-right: 38px;
    padding-top: 7px;
    padding-bottom: 7px;
  }

  .press-item {
    cursor: pointer;
    transition: all .3s ease;
    margin-left: -1.5vw;
    margin-right: -1.5vw;
    padding-left: 1.5vw;
  }

  .press-item:hover {
    background-color: rgba(142, 164, 236, 0.13);
  }

  .title-project-detail {
    margin-bottom: 30px;
  }

  .btn-project-detail {
    margin-left: 70px;
    margin-right: 0px;
    min-width: 80px;
    text-align: right;
    transition: all .3s ease;
  }

  .btn-project-detail:hover {
    color: #006eb4;
    text-decoration: underline;
    cursor: pointer;
  }

</style>
