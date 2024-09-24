import './assets/base.css'

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
      try { delete reactivableStoreData[key] } catch {  }
      return true
    } else {
      localStorage.setItem(key, JSON.stringify(value))
      reactivableStoreData[key] = value
      return true
    }
  },
  get(target, key) {
    if (typeof key == 'symbol') return reactivableStoreData[key]
  // try {
    const v = localStorage.getItem(key)
    return v === null ? v : JSON.parse(v)
  // } catch (e) {
  //   console.error(e)
  //   return reactivableStoreData[key]
  // }
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