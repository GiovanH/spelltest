<script>

'speechSynthesis' in window ? console.log("Web Speech API supported!") : console.log("Web Speech API not supported :-(")

const synth = window.speechSynthesis

export default {
  props: [
    'word',
  ],
  data() {
    return {
      entry: ''
    }
  },
  computed: {
    utterance() {
      return new SpeechSynthesisUtterance(this.word)
    }
  },
  methods: {
    speak() {
      // console.log('Speaking', this.utterance)
      synth.speak(this.utterance)
    }
  }
}

</script>

<template>
  <section>
    <span v-text="word" />
    <input @focus="speak" v-model="entry">
    <span v-text="word == entry" />
    <button @click="speak">Speak</button>
  </section>
</template>

<style scoped lang="scss">

</style>
