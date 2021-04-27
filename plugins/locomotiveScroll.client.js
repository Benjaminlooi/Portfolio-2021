import LocomotiveScroll from 'locomotive-scroll'
import 'locomotive-scroll/dist/locomotive-scroll.css'
import Vue from 'vue'

const install = (Vue) => {
  Vue.prototype.LocomotiveScroll = LocomotiveScroll
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(install)
  if (install.installed) {
    install.installed = false
  }
}

Vue.use(install)
