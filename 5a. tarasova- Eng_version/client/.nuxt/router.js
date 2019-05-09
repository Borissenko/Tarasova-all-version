import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _25edfb75 = () => import('../pages/biography.vue' /* webpackChunkName: "pages/biography" */).then(m => m.default || m)
const _19b90efb = () => import('../pages/concerts.vue' /* webpackChunkName: "pages/concerts" */).then(m => m.default || m)
const _394241c1 = () => import('../pages/contacts.vue' /* webpackChunkName: "pages/contacts" */).then(m => m.default || m)
const _3403a143 = () => import('../pages/guestbook.vue' /* webpackChunkName: "pages/guestbook" */).then(m => m.default || m)
const _1cdacfe6 = () => import('../pages/media.vue' /* webpackChunkName: "pages/media" */).then(m => m.default || m)
const _78fe717e = () => import('../pages/news.vue' /* webpackChunkName: "pages/news" */).then(m => m.default || m)
const _546c632a = () => import('../pages/photoalbum.vue' /* webpackChunkName: "pages/photoalbum" */).then(m => m.default || m)
const _670bbcc5 = () => import('../pages/press.vue' /* webpackChunkName: "pages/press" */).then(m => m.default || m)
const _25178e68 = () => import('../pages/projects.vue' /* webpackChunkName: "pages/projects" */).then(m => m.default || m)
const _c2d02bb6 = () => import('../pages/repertoire.vue' /* webpackChunkName: "pages/repertoire" */).then(m => m.default || m)
const _6d2461d4 = () => import('../pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)



if (process.client) {
  window.history.scrollRestoration = 'manual'
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected
  if (to.matched.length < 2) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise(resolve => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}


export function createRouter () {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
		{
			path: "/biography",
			component: _25edfb75,
			name: "biography"
		},
		{
			path: "/concerts",
			component: _19b90efb,
			name: "concerts"
		},
		{
			path: "/contacts",
			component: _394241c1,
			name: "contacts"
		},
		{
			path: "/guestbook",
			component: _3403a143,
			name: "guestbook"
		},
		{
			path: "/media",
			component: _1cdacfe6,
			name: "media"
		},
		{
			path: "/news",
			component: _78fe717e,
			name: "news"
		},
		{
			path: "/photoalbum",
			component: _546c632a,
			name: "photoalbum"
		},
		{
			path: "/press",
			component: _670bbcc5,
			name: "press"
		},
		{
			path: "/projects",
			component: _25178e68,
			name: "projects"
		},
		{
			path: "/repertoire",
			component: _c2d02bb6,
			name: "repertoire"
		},
		{
			path: "/",
			component: _6d2461d4,
			name: "index"
		}
    ],
    
    
    fallback: false
  })
}
