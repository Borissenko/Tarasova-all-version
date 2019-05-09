import Vuex from 'vuex'

export default () => new Vuex.Store({
  state: {
    biography: {
      basicName: 'biography',
      title: 'Biography',
      picture: '/imgs/biography@2x.jpg',
      component: {
        text: null
      }
    },
    repertoire: {
      basicName: 'repertoire',
      title: 'Repertoire',
      picture: '/imgs/repertuar@2x.jpg',
      component: {
        pages: [
          {
            typePg: 'solo',
            title: 'Piano solo'
          },
          {
            typePg: 'orchestra',
            title: 'Piano with orchestra',
          },
          {
            typePg: 'chamber',
            title: 'Chamber repertoire',
          }
        ],
        activePg: 'solo',
        repertoireAll: null
      }
    },
    concerts: {
      basicName: 'concerts',
      title: 'Concerts',
      picture: '/imgs/concerts@2x.jpg',
      component: {
        pages: [
          {
            typePg: 'season2018-2019',
            title: 'Season 2018-2019'
          },
          {
            typePg: 'archive',
            title: 'Archive',
          }
        ],
        activePg: 'season2018-2019',
        concertEventsAll: null,
        concertsArchive: null
      }
    },
    photoalbum: {
      basicName: 'photoalbum',
      title: 'Photo album',
      picture: '/imgs/photoalbom@2x.jpg',
      component: {
        photoGroups: null
      }
    },
    media: {
      basicName: 'media',
      title: 'Media',
      picture: '/imgs/media@2x.jpg',
      component: {
        videos: null
      }
    },
    projects: {
      basicName: 'projects',
      title: 'Projects',
      picture: '/imgs/projects@2x.jpg',
      component: {
        events: null
      }
    },
    press: {
      basicName: 'press',
      title: 'Press',
      picture: '/imgs/holl.jpg',
      component: {
        pages: [
          {
            typePg: 'commentPressArchiv',
            title: 'Feedback and Comments'
          },
          {
            typePg: 'interviews',
            title: 'Interviews',
          }
        ],
        activePg: 'commentPressArchiv',
        commentPressArchiv: null,
        interviews: null
      }
    },
    news: {
      basicName: 'news',
      title: 'News',
      picture: '/imgs/news@2x.jpg',
      component: {
        news: null
      }
    },
    guestbook: {
      basicName: 'guestbook',
      title: 'Guest book',
      picture: '/imgs/background_guestbook.jpg',
      component: {
        guestbookList: null
      }
    },
    contacts: {
      basicName: 'contacts',
      title: 'Contacts',
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

