<template>
  <div>
    <ul class="d-flex flex-column margin-external">
      <li v-for="(photoGroup, index) of photoGroups" :key="index" class="d-flex flex-row flex-wrap photo-row">
        <div class="d-flex photo-row-photo" @click="selectPhotoGroup(photoGroup)">
          <div class='tableimg' :style="{backgroundImage: 'url('+photoGroup.photos[0]+')'}"></div>
        </div>
        <div class="d-flex flex-wrap blue px18 bold photo-row-gpoupname">{{photoGroup.name}}</div>
      </li>
    </ul>

    <div v-if="mean">
      <div class="carousel-basa" v-show="isPhotoUp" @click="escPhotoGroup()" @keyup.escape="escPhotoGroup()">

        <div class="carousel">
          <Slider :autoplay=false
                  animation="fade"
                  width="80vw"
                  height="90vh"
          >
            <SliderItem
                    v-for="(ph, index) in photoGroupUp"
                    :key="index"
                    class='tableimg'
                    :style="{backgroundImage: 'url('+ph+')'}"
            >
              <p class="counter">
                Photo {{ index + 1 }} of {{photoGroupLength}}
              </p>
            </SliderItem>
          </Slider>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import {Slider, SliderItem} from "vue-easy-slider";
  import {GET_PHOTOALBUM_PAGE} from "@/assets/queries";

  export default {
    components: {
      Slider,
      SliderItem
    },
    async asyncData(context) {
      let client = context.app.apolloProvider.defaultClient
      const {data} = await client.query({
        query: GET_PHOTOALBUM_PAGE,
        variables: {
          basicName: "photoalbum"
        }
      })
      return {
        photoGroups: data.getPage.component.photoGroups,
        loading: true
      }
    },
    data() {
      return {
        list: [],
        sliderIndex: 2,
        photoGroupUp: [],
        isPhotoUp: false,
        photoGroupLength: null,
        mean: false
      }
    },
    methods: {
      selectPhotoGroup(photoGroup) {
        this.photoGroupUp = photoGroup.photos
        this.photoGroupLength = photoGroup.photos.length
        this.isPhotoUp = !this.isPhotoUp
      },
      escPhotoGroup() {
        this.isPhotoUp = !this.isPhotoUp
        this.photoGroupUp = []
      }
    },
    mounted() {
      this.mean = true
    }
  }
</script>

<style scoped>
  .photo-row {
    width: 100%;
    height: max-content; /* = ! */
    margin-bottom: 16px;
  }

  .photo-row-photo {
    width: 45.5%;
    height: 208px; /* = !! */
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    cursor: pointer;
    transition: all .3s ease;      /*-заявлен генерально*/
    overflow: hidden;
  }

  .photo-row-gpoupname {
    width: 54.5%; /*не auto! Иначе фото будут разной ширины.*/
    padding-left: 16px;
    padding-right: 16px;
    margin-top: 13px;
  }

  .tableimg {
    width: 100%;
    height: 100%;
    background-size: contain;
    background-position: center center;
    background-repeat: no-repeat;
  }

  .photo-row-photo:hover {
    box-shadow: 1px 0 10px 2px rgba(0, 0, 0, 0.29);
  }


  /*to 1 column*/
  @media (max-width: 500px) {
    .photo-row-photo {
      width: 99%;
      height: 208px;
    }

    .photo-row-gpoupname {
      width: 99%;
      padding-left: 16px;
      padding-right: 16px;
      margin-top: 13px;
    }
  }

  .carousel-basa {
    position: fixed;
    left: 0px;
    top: 0px;
    width: 100vw;
    height: 100vh;
    background-color: rgba(199, 199, 199, 0.85);
  }

  .carousel {
    width: 100vw;
    height: 90vh;
    position: absolute;
    top: 5vh;
    left: 10vw;
  }

  .counter {
    position: absolute;
    top: 83vh;
    font-size: 1rem;
    text-align: left;
    color: white;
    text-shadow: 1px 1px 2px #00081a;
    padding-left: 10%;
  }

</style>


