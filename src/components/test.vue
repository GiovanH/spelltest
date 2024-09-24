<script>

import Card from '@/components/card.vue'

export default {
  // data() {
  //   return {
  //     wordlist: undefined,
  //     wordlist_default: ""
  //   }
  // },
  // created() {
  //   this.wordlist = {...this.wordlist_default, ...(this.Store.wordlist || {})}
  // },
  components: {
    Card
  },
  computed: {
    wordlist() {
      if (!this.Store.spelling_wordlist) return []
      return this.Store.spelling_wordlist
        .split('\n')
        .filter(Boolean)
    }
  }
}

</script>

<template>
  <section>
    <div v-for="word in wordlist" :key="word">
      <Card :word="word" />
    </div>
  </section>
</template>

<style scoped lang="scss">

</style>
