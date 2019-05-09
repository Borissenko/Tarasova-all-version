<template>
  <div>
    <div v-if="loading" class="margin-external" v-html="contactsText">
    </div>
    <div v-else class="margin-external px18">
      Loading...
    </div>
  </div>
</template>

<script>
  import {GET_CONTACTS_PAGE} from "@/assets/queries";

  export default {
    async asyncData(context) {
      let client = context.app.apolloProvider.defaultClient
      const {data} = await client.query({
        query: GET_CONTACTS_PAGE,
        variables: {
          basicName: "contacts"
        }
      })
      return {
        contactsText: data.getPage.component.contactsText,
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
