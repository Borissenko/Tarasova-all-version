<template>
  <div class="margin-external" v-html="contactsText">
  </div>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    computed: {
      ...mapState ({
        contactsText: (state) => state.contacts.component.contactsText
      })
    }
  }
</script>

<style scoped>

</style>
