<script>

import {Tabs, Tab} from 'vue3-tabs-component';

import Settings from './components/settings.vue'
import Test from './components/test.vue'

export default {
  components: {
    Tabs, Tab,
    Settings, Test
  }
}

</script>

<template>
  <main>
    <tabs :options="{ storageKey: 'tabs-main', useUrlFragment: true }">
      <tab name="Settings">
        <Settings />
      </tab>
      <tab name="Cards">
        <Test />
      </tab>
    </tabs>
  </main>
</template>

<style scoped lang="scss">

</style>
