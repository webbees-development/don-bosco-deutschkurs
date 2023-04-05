// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import "~/assets/styles/global.scss";

import DefaultLayout from '~/layouts/Default.vue'
import InfiniteLoading from 'vue-infinite-loading'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  // Use the Ininite Loading package
  Vue.use(InfiniteLoading)

  head.link.push({
    rel: 'preload',
    fetchpriority: "high",
    as: "image",
    href: "./assets/images/index/hintergrund.jpg",
    type: "image/jpg",
  })
}
