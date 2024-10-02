<script>

import {Tabs, Tab} from 'vue3-tabs-component';

import Settings from './components/settings.vue'
import Test from './components/test.vue'

import '98.css'

export default {
  components: {
    Tabs, Tab,
    Settings, Test
  }
}

</script>

<template>
  <main class="window">
    <div class="window-body">
      <tabs role="tab" :options="{ storageKey: 'tabs-main', useUrlFragment: true }" >
        <tab name="Settings" role="tab">
          <Settings />
        </tab>
        <tab name="Cards">
          <Test />
        </tab>
      </tabs>
    </div>
  </main>
</template>

<style>

ul[role=tablist] {
  position: relative;
  margin: 0 0 -2px 0;
  text-indent: 0;
  list-style-type: none;
  display: flex;
  padding-left: 3px;
}

ul[role=tablist] > li {
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  box-shadow: inset -1px 0 #0a0a0a,inset 1px 1px #dfdfdf,inset -2px 0 grey,inset 2px 2px #fff;
  z-index: 1;
  background-color: silver;
  line-height: 1;
}

ul[role=tablist] > li.is-active {
  padding-bottom: 2px;
  margin-top: -2px;
  background-color: silver;
  position: relative;
  z-index: 8;
  margin-left: -3px;
}

ul[role=tablist] > li > a {
  display: block;
  color: #222;
  margin: 6px;
  text-decoration: none;
}
ul[role=tablist] > li.is-active > a:focus {
  outline: none;
}
ul[role=tablist] > li > a:focus {
  outline: 1px dotted #222;
}

</style>
