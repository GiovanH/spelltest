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

    <div class="window" style="margin: 16px; width: 250px" v-if="wordlist.length < 1">
      <div class="title-bar">
        <div class="title-bar-text">bad</div>
      </div>
      <div class="window-body col">
        <div class="row">
          <img src="@/assets/restrict-1.png" style="margin: auto;" />
        </div>
        <div class="row">
          <p>You don't have any cards! Define words (one on each line) in the settings tab.</p>
        </div>
      </div>
    </div>
    <div v-for="word in wordlist" :key="word" v-else>
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
