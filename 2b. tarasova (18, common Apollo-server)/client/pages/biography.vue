<template>
  <div class="margin-external" v-html="biography">
  </div>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    computed: {
      ...mapState ({
        biography: (state) => state.biography.component.text
      })
    }
  }
</script>

<style scoped>

</style>
