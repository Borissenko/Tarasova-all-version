import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _79573774 = () => import('../pages/biography.vue' /* webpackChunkName: "pages/biography" */).then(m => m.default || m)
const _cf6e51c8 = () => import('../pages/concerts.vue' /* webpackChunkName: "pages/concerts" */).then(m => m.default || m)
const _905bec3c = () => import('../pages/contacts.vue' /* webpackChunkName: "pages/contacts" */).then(m => m.default || m)
const _f126457c = () => import('../pages/guestbook.vue' /* webpackChunkName: "pages/guestbook" */).then(m => m.default || m)
const _87f03936 = () => import('../pages/media.vue' /* webpackChunkName: "pages/media" */).then(m => m.default || m)
const _0ab3c7e2 = () => import('../pages/news.vue' /* webpackChunkName: "pages/news" */).then(m => m.default || m)
const _20efdb68 = () => import('../pages/photoalbum.vue' /* webpackChunkName: "pages/photoalbum" */).then(m => m.default || m)
const _0638d044 = () => import('../pages/press.vue' /* webpackChunkName: "pages/press" */).then(m => m.default || m)
const _b8b152ee = () => import('../pages/projects.vue' /* webpackChunkName: "pages/projects" */).then(m => m.default || m)
const _8f53a3f4 = () => import('../pages/repertoire.vue' /* webpackChunkName: "pages/repertoire" */).then(m => m.default || m)
const _0c517553 = () => import('../pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)



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
			component: _79573774,
			name: "biography"
		},
		{
			path: "/concerts",
			component: _cf6e51c8,
			name: "concerts"
		},
		{
			path: "/contacts",
			component: _905bec3c,
			name: "contacts"
		},
		{
			path: "/guestbook",
			component: _f126457c,
			name: "guestbook"
		},
		{
			path: "/media",
			component: _87f03936,
			name: "media"
		},
		{
			path: "/news",
			component: _0ab3c7e2,
			name: "news"
		},
		{
			path: "/photoalbum",
			component: _20efdb68,
			name: "photoalbum"
		},
		{
			path: "/press",
			component: _0638d044,
			name: "press"
		},
		{
			path: "/projects",
			component: _b8b152ee,
			name: "projects"
		},
		{
			path: "/repertoire",
			component: _8f53a3f4,
			name: "repertoire"
		},
		{
			path: "/",
			component: _0c517553,
			name: "index"
		}
    ],
    
    
    fallback: false
  })
}
