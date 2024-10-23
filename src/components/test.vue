<script>

import Card from '@/components/card.vue'

export default {
  components: {
    Card
  },
  computed: {
  },
  methods: {
    resetAndShuffle() {
      this.wordlist=[]
      this.$nextTick(() => this.shuffle())

      this.Store.test_state = {
        wordlist: this.wordlist,
        word_status: {}
      };

    },
    shuffle() {
      if (!this.Store.spelling_wordlist) {
        this.wordlist = []
      } else {
        let list = this.Store.spelling_wordlist
          .split('\n')
          .filter(Boolean)
        list.sort(() => Math.random()-0.5)
        this.wordlist = list
      }
    },
    }
  },
  data() {
    return {
      wordlist: []
    }
  },
  created() {
    this.resetAndShuffle()
  }
}

</script>

<template>
  <section>
    <div class="status-bar">
      <p class="status-bar-field">
        <button @click="resetAndShuffle" tabindex="-1">Reset &amp; Shuffle</button>
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
        <Card :word="word.trim()" />
      <div class="testcard" v-for="word in wordlist" :key="word" v-else>
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
