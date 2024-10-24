<script>

import Card from '@/components/card.vue'

import { useStorage } from '@vueuse/core'

export default {
  data() {
    return {
      wordlist: [],
      listDirty: false
    }
  },
  components: {
    Card
  },
  computed: {
  },
  watch: {
    'Store.spelling_wordlist'() {
      this.listDirty = true;
    }
  },
  methods: {
    resetAndLoadAndShuffle() {
      this.wordlist=[]

      this.$nextTick(() => {
        this.loadList()
        this.shuffle()
      })

    },
    loadList() {
      this.wordlist = this.Store.spelling_wordlist
        .split('\n')
        .filter(Boolean)

      this.Store.test_state_wordlist = this.wordlist;
      this.Store.test_state_word_status = {};

      this.listDirty = false
    },
    shuffle() {
      let list = this.wordlist
      list.sort(() => Math.random()-0.5)
      this.wordlist = list
    },
    cardUpdateCallback(card, status){
      this.Store.test_state_word_status[card.word] = status
    }
  },
  created() {
    this.resetAndLoadAndShuffle()
  }
}

</script>

<template>
  <section>
    <div class="status-bar">
      <p class="status-bar-field">
        <button @click="resetAndLoadAndShuffle" tabindex="-1">Reset &amp; Shuffle</button>
      </p>
    </div>

    <section class="test">
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
      <div class="testcard" v-for="word in wordlist" :key="word" v-else>
        <Card :word="word.trim()" @update="cardUpdateCallback" />
      </div>
    </section>
  </section>
</template>

<style scoped lang="scss">

.test {
  display: flex;
  max-width: 100%;
  flex-wrap: wrap;
}

.testcard {
  display: flex;
  max-width: 100%;
  flex-wrap: wrap;
  flex-grow: 1;
}
</style>
