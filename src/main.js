// import './assets/base.css'

import * as Vue from 'vue'

import App from './App.vue'

import Logger from 'js-logger'
Logger.useDefaults()

const app = Vue.createApp(App)

const reactivableStoreData = {}
const reactivableStore = new Proxy(reactivableStoreData, {
  set(target, key, value) {
    if (value === undefined) {
      localStorage.removeItem(key)
      try { delete reactivableStoreData[key] } catch { ; }
      return true
    } else {
      localStorage.setItem(key, JSON.stringify(value))
      reactivableStoreData[key] = value
      return true
    }
  },
  get(target, key) {
    if (typeof key == 'symbol') return reactivableStoreData[key]

    // Load from localstore if not cached
    if (reactivableStoreData[key] === undefined) {
      const v = localStorage.getItem(key)
      reactivableStoreData[key] = (v === null ? v : JSON.parse(v))
    }

    return reactivableStoreData[key]
  }
})

app.mixin({
  // plugins: [ AsyncComputed ],
  data() {
    return {
      Store: reactivableStore,
    }
  },
  methods: {
  },
  computed: {
    $logger() {
      return Logger.get(this.$options.name)
    }
  }
})

app.mount('#app')
window.vm = app