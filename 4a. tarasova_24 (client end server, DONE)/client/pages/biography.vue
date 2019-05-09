<template>
  <div>
    <div v-if="loading" class="margin-external" v-html="biography">
    </div>
    <div v-else class="margin-external px18">
      Loading...
    </div>
  </div>
</template>

<script>
  import {GET_BIOGRAPHY_PAGE} from '@/assets/queries'

  export default {
    async asyncData(context) {
      let client = context.app.apolloProvider.defaultClient
      const {data} = await client.query({
        query: GET_BIOGRAPHY_PAGE,
        variables: {
          basicName: "biography"
        }
      })
      return {
        biography: data.getPage.component.text,
        loading: true
      }
    },
    data () {
      return {
        loading: false
      }
    }
  }
</script>

<style scoped>

</style>
