<template>
  <div>
    <div class="d-flex flex-column">
      <div class="d-flex flex-row flex-wrap align-items-center media-top">
        <div>
          <img class="card-img-top media-top-1" src="/imgs/cd@3x.jpg" alt="CD-disc">
        </div>
        <div class="media-top-2">
          <h5 class="white px12 bold marg-b-8del">ОБРЕТЕНИЕ ВРЕМЕНИ</h5>
          <div class="white px12">
            И.С.Бах - Ф.Бузони
            <br>Ф.Шуберт - Ф.Лист
            <br>Ф.Лист
          </div>
          <p class="white px8 m-ET">Елена Тарасова, 2012.</p>
        </div>
        <div class="d-flex flex-column align-self-end justify-self-end
        align-items-end justify-content-end flex-fill media-top-3">
          <div class="white px12 bold txt-media-top-3 my-2">Где купить:</div>
          <div>
            <button class="btn-media-top-3">Outhere Music</button>
            <button class="btn-media-top-3">iTunes</button>
            <button class="btn-media-top-3">Amazon</button>
          </div>
        </div>
      </div>

      <div class="d-flex flex-column video-00">
        <div v-for="(video, index) of videos" :key="index" class="d-flex flex-row video-row">

            <div class="d-flex video-left">
              <div class="embed-responsive embed-responsive-4by3">
                <iframe width="288" height="216"
                        :src="video.src"
                        frameborder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen>
                </iframe>
              </div>
            </div>

            <div class="d-flex flex-column video-text">
              <div class="title-video-text blue px18 bold video-text-1">{{video.title}}</div>
              <div class="data-video-text dark px10 video-text-2">{{video.data}}</div>
            </div>

        </div>
      </div>

    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    computed: {
      ...mapState({
        videos: st => st.media.component.videos
      })
    }
  }
</script>

<style scoped>
  .media-top {
    padding-left: 6.5%;
    min-height: 120px;
    background-color: #334c80;
  }

  .media-top-1 {
    width: 100px;
    height: 100px;
  }

  .media-top-2 {
    width: 168px;
    height: 85px;
    margin-left: 2.9%;
  }

  .media-top-2 > p {
    margin-bottom: 10px;
    padding: 0;
  }

  .marg-b-8del {
    margin-bottom: 2px !important;
  }
  .m-ET {
    margin-top: 6px;
  }


  .txt-media-top-3 {
    padding-right: 10px;
  }

  .btn-media-top-3 {
    border-radius: 20px;
    background-color: #009cff;
    font-family: NotoSerif, Roboto, Arial, sans-serif;
    font-size: 12px;
    line-height: 1.33;
    text-align: left;
    color: #ffffff;
    padding-top: 4px;
    padding-bottom: 4px;
    padding-left: 13px;
    padding-right: 13px;
    margin-right: 10px;
    margin-bottom: 10px;
  }

  .btn-media-top-3:hover {
    background-color: #25d3ff;
    box-shadow: 1px 1px 2px 1px gainsboro;
    cursor: pointer;
  }

  .video-00 {
    padding-left: 6.05%;
    margin-top: 16px;
  }

  .video-row {
    width: 100%;
    height: max-content;
    margin-bottom: 16px;
  }

  .video-left {
    width: 45%;
    height: 216px;
  }

  .video-text {
    width: 55%;
    margin-left: 16px;
  }

  .video-text-1 {
    margin-top: 13px;
  }

  .video-text-2 {
    margin-top: 4px;
  }

</style>
