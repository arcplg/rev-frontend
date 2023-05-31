import type { RouterConfig } from '@nuxt/schema'
// https://router.vuejs.org/api/interfaces/routeroptions.html
export default <RouterConfig>{
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      sessionStorage.setItem('positionY', String(savedPosition.top))
    } else {
      sessionStorage.setItem('positionY', '0')
    }
    // return { left: 0, top: 0 }
  },
}
