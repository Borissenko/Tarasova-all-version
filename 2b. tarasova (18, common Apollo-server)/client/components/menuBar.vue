<template>
  <div>
    <div class="d-flex flex-row flex-wrap justify-content-between menu"
         v-click-outside="languageMenuClose"
         v-handle-scroll=" languageMenuClose"
    >
      <div class="d-flex flex-row align-items-center" @click.prevent="showList">
        <div class="d-flex row align-items-center ml-1 menu-title">
          <div class="d-flex bar">&equiv;</div>        <!-- menu icon: &equiv; -->
          <div class="d-flex px16"> Меню</div>
        </div>
      </div>

      <div v-if="showLanguage" class="align-items-center px16 menu-title ln" @click="switchLanguage">Language</div>
      <div class="align-items-center" :class=chengeCSS()>
        <nuxt-link to="/" class="px16 menu-title">Русский</nuxt-link>
        <nuxt-link to="/biography" class="px16 menu-title">Inglish</nuxt-link>
        <nuxt-link to="/concerts" class="px16 menu-title">Francais</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
  import clickOutside from '@/directives/click-outside'
  import handleScroll from '@/directives/handle-scroll'

  export default {
    data() {
      return {
        showLanguage: true
      }
    },
    directives: {
      clickOutside,
      handleScroll
    },
    methods: {
      showList() {
        this.$emit('showList', true)
      },
      switchLanguage() {
        this.showLanguage = !this.showLanguage
      },
      chengeCSS() {
        return {
          'language-flex': this.showLanguage,
          'flex-column': !this.showLanguage,
          'd-flex': !this.showLanguage,
          'language-mt': !this.showLanguage
        }
      },
      languageMenuClose() {
        this.showLanguage = true
      }
    }

  }

</script>

<style>
  .menu {
    background-color: #00081a;
    /*background-color: transparent;*/
    width: 100%;
    min-height: 40px;
    padding-left: 16px;
    cursor: pointer;
    z-index: 1000;
  }

  .menu-title {
    padding-right: 30px;
    color: #ffffff;
  }

  .menu-title:hover {
    color: #009cff;
    cursor: pointer;
  }

  .bar {
    font-size: 30px;
    line-height: 0.6;
    margin-right: 6px;
    color: inherit;
    padding-bottom: 2px;
  }

  .elevation {
    margin-top: -40px;
  }

  .language-flex {
    display: flex;
  }

  .ln {
    display: none;
  }

  .language-mt {
    margin-top: 7px;
  }

  @media (max-width: 400px) {
    .language-flex {
      display: none;
    }

    .ln {
      display: flex;
    }
  }

</style>
