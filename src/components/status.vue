<script>

export default {
  methods: {
    wordlistFilter(status) {
      return Object.entries(app.Store.test_state_word_status)
        .filter(tup => tup[1] == status)
        .map(tup => tup[0])
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
            <ul>
              <li v-for="word in list_perfect" :key="word" v-text="word" />
            </ul>
          </div>
          <div class="col status-bar-field" style="flex-grow: 1;">
            <h3>Corrected</h3>
            <ul>
              <li v-for="word in list_corrected" :key="word" v-text="word" />
            </ul>
          </div>
          <div class="col status-bar-field" style="flex-grow: 1;">
            <h3>Incorrect</h3>
            <ul>
              <li v-for="word in list_incorrect" :key="word" v-text="word" />
            </ul>
          </div>
        </div>
        <!-- <div class="row">
          <button>Remove perfect words from list (TODO)</button>
        </div> -->
      </div>
    <!-- </div> -->
  </section>
</template>
