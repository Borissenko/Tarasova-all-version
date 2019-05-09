<template>
  <div class="margin-external" >    <!--v-click-outside="close"  глючит-->

    <div v-if="!mean" v-for="(pr, i) of projects" :key='i' class="project-list mb-3 press-item blue px18 bold">
      <a @click="showMore(pr)" class="">{{pr.title}}</a>
    </div>

    <div v-else class="project-list" @click="close">
      <div class="d-flex justify-content-between align-items-center">
        <div class="title-project-detail blue px18 bold" v-html="more.title"></div>
        <i class="btn-project-detail light-blue px10">< Back</i>
      </div>

      <div class="text-project-detail" v-html="more.text"></div>
    </div>
  </div>
</template>

<script>
  import clickOutside from '@/directives/click-outside'
  import {GET_PROJECTS_PAGE} from "@/assets/queries";

  export default {
    async asyncData(context) {
      let client = context.app.apolloProvider.defaultClient;
      const {data} = await client.query({
        query: GET_PROJECTS_PAGE,
        variables: {
          basicName: "projects"
        }
      })
      return {
        projects: data.getPage.component.events,
        loading: true
      }
    },
    data() {
      return {
        mean: false,
        more: {}
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
      clickOutside,
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

  .text-project-detail {
    margin-top: 20px;
  }

</style>
