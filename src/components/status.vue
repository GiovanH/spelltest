
<template>
  <section style="max-width: 650px;">
    <!-- <div class="window" style="margin: 16px; display: inline-block; max-width: 650px;">
      <div class="title-bar">
        <div class="title-bar-text">Hello!</div>
      </div> -->
      <div class="window-body col">
        <div class="row status-bar" style="padding-bottom: 1em;">
          <div class="col status-bar-field" style="flex-grow: 1;">
            <h3>Perfect</h3>
            <ul v-if="list_perfect.length > 0">
              <li v-for="word in list_perfect" :key="word" v-text="word" :class="{removed: !Store.spelling_wordlist.includes(word)}" />
            </ul>
            <span v-else>None</span>
          </div>
          <div class="col status-bar-field" style="flex-grow: 1;">
            <h3>Corrected</h3>
            <ul v-if="list_corrected.length > 0">
              <li v-for="word in list_corrected" :key="word" v-text="word" />
            </ul>
            <span v-else>None</span>
          </div>
          <div class="col status-bar-field" style="flex-grow: 1;">
            <h3>Incorrect</h3>
            <ul v-if="list_incorrect.length > 0">
              <li v-for="word in list_incorrect" :key="word" v-text="word" />
            </ul>
            <span v-else>None</span>
          </div>
        </div>
        <div class="row">
          <button @click="removePerfectFromList">Remove perfect words from list (TODO)</button>
        </div>
        <span v-if="status_msg" v-text="status_msg" />
      </div>
    <!-- </div> -->
  </section>
</template>


<script>

export default {
  data() {
    return {
      status_msg: undefined
    }
  },
  methods: {
    wordlistFilter(status) {
      return Object.entries(this.Store.test_state_word_status)
        .filter(tup => tup[1] == status)
        .map(tup => tup[0])
    },
    removePerfectFromList() {
      let wordlist = this.Store.spelling_wordlist
        .split('\n')
        .filter(Boolean)

      const pre_count = wordlist.length

      wordlist = wordlist
        .filter(word => !(this.list_perfect.includes(word)))

      const post_count = wordlist.length

      this.Store.spelling_wordlist = wordlist.join('\n')
      this.status_msg = `Removed ${post_count - pre_count} words from list.`
    }
  },
  computed: {
    list_perfect(){
      return this.wordlistFilter('Perfect')
    },
    list_corrected(){
      return this.wordlistFilter('Corrected')
    },
    list_incorrect(){
      return this.wordlistFilter('Incorrect')
    },
  }
}

</script>


<style scoped lang="scss">
li.removed {
  text-decoration-line: line-through;
}
</style>
