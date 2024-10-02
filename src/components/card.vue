<script>

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
    },
    utteranceAnswer() {
      const exploded = this.word.split('').join(' ')
      return new SpeechSynthesisUtterance(`${this.word}. ${exploded}, ${this.word}.`)
    }
  },
  methods: {
    speak() {
      synth.speak(this.utterance)
    },
    speakAnswer() {
      synth.speak(this.utteranceAnswer)
    }
  }
}

</script>

<template>
  <div class="window" style="margin: 16px; width: 250px">
    <div class="title-bar">
      <div class="title-bar-text"><span v-text="word" /></div>
    </div>
    <div class="window-body">
      <input type="text" @focus="speak" @keydown.enter="speakAnswer" v-model="entry">
    </div>
    <div class="window-body">
      <img src="@/assets/check-0.png" v-if="word == entry" />
      <img src="@/assets/restrict-1.png" v-else />
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>
