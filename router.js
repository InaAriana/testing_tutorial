import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _c0fdb866 = () => import('..\\pages\\index.vue' /* webpackChunkName: "pages\\index" */).then(m => m.default || m)
const _452f4462 = () => import('..\\pages\\projects.vue' /* webpackChunkName: "pages\\projects" */).then(m => m.default || m)
const _95d0094a = () => import('..\\pages\\contact.vue' /* webpackChunkName: "pages\\contact" */).then(m => m.default || m)
const _7fc94908 = () => import('..\\pages\\about.vue' /* webpackChunkName: "pages\\about" */).then(m => m.default || m)



const scrollBehavior = (to, from, savedPosition) => {
  // SavedPosition is only available for popstate navigations.
  if (savedPosition) {
    return savedPosition
  } else {
    let position = {}
    // If no children detected
    if (to.matched.length < 2) {
      // Scroll to the top of the page
      position = { x: 0, y: 0 }
    }
    else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
      // If one of the children has scrollToTop option set to true
      position = { x: 0, y: 0 }
    }
    // If link has anchor, scroll to anchor by returning the selector
    if (to.hash) {
      position = { selector: to.hash }
    }
    return position
  }
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
			path: "/",
			component: _c0fdb866,
			name: "index"
		},
		{
			path: "/projects",
			component: _452f4462,
			name: "projects"
		},
		{
			path: "/contact",
			component: _95d0094a,
			name: "contact"
		},
		{
			path: "/about",
			component: _7fc94908,
			name: "about"
		}
    ],
    fallback: false
  })
}
