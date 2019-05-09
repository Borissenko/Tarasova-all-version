import Vuex from 'vuex'

export default () => new Vuex.Store({
  state: {
    biography: {
      basicName: 'biography',
      title: 'Биография',
      picture: '/imgs/biography@2x.jpg',
      component: {
        text: null
      }
    },
    repertoire: {
      basicName: 'repertoire',
      title: 'Репертуар',
      picture: '/imgs/repertuar@2x.jpg',
      component: {
        pages: [
          {
            typePg: 'solo',
            title: 'Фортепиано соло'
          },
          {
            typePg: 'orchestra',
            title: 'Фортепиано с оркестром',
          },
          {
            typePg: 'chamber',
            title: 'Камерный репертуар',
          }
        ],
        activePg: 'solo',
        repertoireAll: null
      }
    },
    concerts: {
      basicName: 'concerts',
      title: 'Концерты',
      picture: '/imgs/concerts@2x.jpg',
      component: {
        pages: [
          {
            typePg: 'season2018-2019',
            title: 'Сезон 2018-2019'
          },
          {
            typePg: 'archive',
            title: 'Архив',
          }
        ],
        activePg: 'season2018-2019',
        concertEventsAll: null,
        concertsArchive: null
      }
    },
    photoalbum: {
      basicName: 'photoalbum',
      title: 'Фотоальбом',
      picture: '/imgs/photoalbom@2x.jpg',
      component: {
        photoGroups: null
      }
    },
    media: {
      basicName: 'media',
      title: 'Медиа',
      picture: '/imgs/media@2x.jpg',
      component: {
        videos: null
      }
    },
    projects: {
      basicName: 'projects',
      title: 'Проекты',
      picture: '/imgs/projects@2x.jpg',
      component: {
        events: null
      }
    },
    press: {
      basicName: 'press',
      title: 'Пресса',
      picture: '/imgs/holl.jpg',
      component: {
        pages: [
          {
            typePg: 'commentPressArchiv',
            title: 'Отзывы и комментарии'
          },
          {
            typePg: 'interviews',
            title: 'Интервью',
          }
        ],
        activePg: 'commentPressArchiv',
        commentPressArchiv: null,
        interviews: null
      }
    },
    news: {
      basicName: 'news',
      title: 'Новости',
      picture: '/imgs/news@2x.jpg',
      component: {
        news: null
      }
    },
    guestbook: {
      basicName: 'guestbook',
      title: 'Гостевая книга',
      picture: '/imgs/background_guestbook.jpg',
      component: {
        guestbookList: null
      }
    },
    contacts: {
      basicName: 'contacts',
      title: 'Контакты',
      picture: '/imgs/ETarasova.jpg',
      component: {
        contactsText: null
      }
    }
  },
  mutations: {},
  actions: {},
  getters: {}
})

// I use asyncData (with Apollo) only for fetching big text files

