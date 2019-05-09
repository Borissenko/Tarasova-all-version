import Vuex from 'vuex'

import {biography} from './biography_text'
import {repertoireAll} from './repertoireAll'
import {concertsArchive} from './concertsArchive'
import {concertEventsAll} from './concertEventsAll'
import {videos} from './videos'
import {project_MF_110_letie} from './project_MF_110_letie'
import {project_KM_ESvetlanov} from './project_KM_ESvetlanov'
import {project_MMP_Russian_evening} from './project_MMP_Russian_evening'
import {project_Mus_grany} from './project_Mus_grany'
import {project_Experimentum} from './project_Experimentum'
import {project_MMP_Opus_Universum} from './project_MMP_Opus_Universum'
import {guestbookList} from './guestbookList'
import {contactsText} from './contactsText'
import {news} from './news'
import {commentPressArchiv} from './commentPressArchiv'
import {interviews} from './interviews'

export default () => new Vuex.Store({
  state: {
    biography: {
      basicName: 'biography',
      title: 'Биография',
      picture: '/imgs/biography@2x.jpg',
      component: {
        text: biography
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
        repertoireAll
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
        concertEventsAll,
        concertsArchive
      }
    },
    photoalbum: {
      basicName: 'photoalbum',
      title: 'Фотоальбом',
      picture: '/imgs/photoalbom@2x.jpg',
      component: {
        photoGroups: [
          {
            name: 'СЦЕНА',
            photos: [
              'http://elenatarasova.ru/wp-content/uploads/2012/12/01.jpg',
              'http://elenatarasova.ru/wp-content/uploads/2012/12/02.jpg',
              'http://elenatarasova.ru/wp-content/uploads/2012/12/03.jpg',
              'http://elenatarasova.ru/wp-content/uploads/2012/12/04.jpg',
              'http://elenatarasova.ru/wp-content/uploads/2012/12/05.jpg',
              'http://elenatarasova.ru/wp-content/uploads/2012/12/0774.jpg'
            ]
          },
          {
            name: 'СТУДИЯ',
            photos: [
              'http://elenatarasova.ru/wp-content/uploads/2014/02/Elena-Tarasova_10_web.jpg',
              'http://elenatarasova.ru/wp-content/uploads/2014/02/Elena-Tarasova_12_web.jpg',
              'http://elenatarasova.ru/wp-content/uploads/2014/01/Elena-Tarasova_15.jpg',
              'http://elenatarasova.ru/wp-content/uploads/2014/02/Elena-Tarasova_2-_web.jpg'
            ]
          },
          {
            name: 'ЖИЗНЬ',
            photos: [
              'http://elenatarasova.ru/wp-content/uploads/2012/12/012.jpg',
              'http://elenatarasova.ru/wp-content/uploads/2012/12/132.jpg',
              'http://elenatarasova.ru/wp-content/uploads/2012/12/061.jpg'
            ]
          },
          {
            name: 'ДЕТСТВО',
            photos: [
              'http://elenatarasova.ru/wp-content/uploads/2012/12/033-150x150.jpg',
              'http://elenatarasova.ru/wp-content/uploads/2012/12/023-150x150.jpg',
              'http://elenatarasova.ru/wp-content/uploads/2012/12/043-150x150.jpg',
              'http://elenatarasova.ru/wp-content/uploads/2012/12/013-150x150.jpg'

            ]
          },
          {
            name: 'МОСКОВСКАЯ КОНСЕРВАТОРИЯ',
            photos: [
              "http://elenatarasova.ru/wp-content/uploads/2012/12/015.jpg",
              'http://elenatarasova.ru/wp-content/uploads/2012/12/0111.jpg',
              'http://elenatarasova.ru/wp-content/uploads/2012/12/024.jpg',
              'http://elenatarasova.ru/wp-content/uploads/2012/12/151.jpg'
            ]
          },
          {
            name: '"К 120-летию Ф.ПУЛЕНКА"',
            photos: [
              'http://elenatarasova.ru/wp-content/uploads/2012/12/134.jpg',
              'http://elenatarasova.ru/wp-content/uploads/2012/12/201.jpg',
              'http://elenatarasova.ru/wp-content/uploads/2012/12/87.jpg',
              'http://elenatarasova.ru/wp-content/uploads/2012/12/79.jpg'
            ]
          },
          {
            name: '"Е.СВЕТЛАНОВ - КОМПОЗИТОР"',
            photos: [
              'http://elenatarasova.ru/wp-content/uploads/2012/12/064.jpg',
              'http://elenatarasova.ru/wp-content/uploads/2012/12/105.jpg',
              'http://elenatarasova.ru/wp-content/uploads/2012/12/125.jpg',
              'http://elenatarasova.ru/wp-content/uploads/2012/12/115.jpg'
            ]
          },
          {
            name: '"РУССКИЕ ВЕЧЕРА"',
            photos: [
              'http://elenatarasova.ru/wp-content/uploads/2012/12/361.jpg',
              'http://elenatarasova.ru/wp-content/uploads/2012/12/501.jpg',
              'http://elenatarasova.ru/wp-content/uploads/2012/12/561.jpg',
              'http://elenatarasova.ru/wp-content/uploads/2012/12/581.jpg'
            ]
          },
          {
            name: '"В ПОИСКАХ КРАСОТЫ. EXPERIMENTUM"',
            photos: [
              'http://elenatarasova.ru/wp-content/uploads/2014/09/IMG_8606.jpg',
              'http://elenatarasova.ru/wp-content/uploads/2014/09/IMG_8797.jpg',
              'http://elenatarasova.ru/wp-content/uploads/2014/09/IMG_9042.jpg',
              'http://elenatarasova.ru/wp-content/uploads/2014/09/IMG_8552.jpg'
            ]
          }
        ]
      }
    },
    media: {
      basicName: 'media',
      title: 'Медиа',
      picture: '/imgs/media@2x.jpg',
      component: {
        videos
      }
    },
    projects: {
      basicName: 'projects',
      title: 'Проекты',
      picture: '/imgs/projects@2x.jpg',
      component: {
        events: [
          {
            title: 'Молодежный фестиваль «К 110-летию со дня рождения Франсиса Пуленка»',
            text: project_MF_110_letie
          },
          {
            title: 'Концерт – монография «Евгений Светланов — композитор»',
            text: project_KM_ESvetlanov
          },
          {
            title: 'Молодежный музыкальный проект «Русские вечера»',
            text: project_MMP_Russian_evening
          },
          {
            title: '«Музыкальные грани» /Equinox/',
            text: project_Mus_grany
          },
          {
            title: '«В поисках Красоты. Experimentum»',
            text: project_Experimentum
          },
          {
            title: 'Международный музыкальный проект «Opus Universum»',
            text: project_MMP_Opus_Universum
          }
        ]
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
        commentPressArchiv,
        interviews
      }
    },
    news: {
      basicName: 'news',
      title: 'Новости',
      picture: '/imgs/news@2x.jpg',
      component: {
        news
      }
    },
    guestbook: {
      basicName: 'guestbook',
      title: 'Гостевая книга',
      picture: 'http://elenatarasova.ru/wp-content/themes/elena/images/background_guestbook.jpg',
      component: {
        guestbookList
      }
    },
    contacts: {
      basicName: 'contacts',
      title: 'Контакты',
      picture: '/imgs/ETarasova.jpg',
      component: {
        contactsText
      }
    }
  },
  mutations: {
    addStatement: (state, form) => {
      const statementHtml = `  
   <li class="comment even thread-even depth-1" id="form.publishedAt">  
      <div class="comment-author vcard"> 
         <cite class="fn">${form.name} (${form.email})</cite><span class="says"> :</span>  
      </div>       
      <p><i>${form.statement}</i></p>
      <p>${form.publishedAt}</p>
     <hr> 
   </li>
   <!-- #comment-## -->        
        `
      state.guestbook.component.guestbookList = statementHtml.concat(state.guestbook.component.guestbookList)
    }
  },
  actions: {
    getAllStatement () {},
    addStatementTo ({commit}, pl) {
      let client = this.app.apolloProvider.defaultClient
      client.mutate({
        mutation: gql`
          mutation ($name: String!, $email: String, $statement:String) {
            addStatement (name: $name, email: $email, statement: $statement) {
              name
              statement
            }
          }
        `,
        variables () {
          return {
            pl
            // name: pl.name,
            // email: pl.email,
            // statement: pl.statement
          }
        }
      })
    }
  },
  getters: {}
})



