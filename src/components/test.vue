<script>

import Card from '@/components/card.vue'

export default {
  components: {
    Card
  },
  computed: {
    wordlist() {
      if (!this.Store.spelling_wordlist) return []
      let list = this.Store.spelling_wordlist
        .split('\n')
        .filter(Boolean)
      list.sort(() => Math.random()-0.5)
      return list
    }
  },
  data() {
    return {
      shuffled: []
    }
  },
  created() {
    // this.shuffled = [...this.wordlist]
    // this.shuffled.sort(() => Math.random())
  }
}

</script>

<template>
  <section>
    <div v-for="word in wordlist" :key="word">
      <Card :word="word.trim()" />
    </div>
  </section>
</template>

<style scoped lang="scss">
section {
  display: flex;
  max-width: 100%;
  flex-wrap: wrap;
}
</style>
