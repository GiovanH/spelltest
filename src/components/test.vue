<script>

import Card from '@/components/card.vue'

export default {
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
