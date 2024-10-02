<script>

const synth = window.speechSynthesis

export default {
  props: [
    'word',
  ],
  data() {
    return {
      synth: synth,
      entry: '',
      answerSpeaking: false
    }
  },
  computed: {
    utterance() {
      const utterance = new SpeechSynthesisUtterance(this.word)
      utterance.addEventListener('start', () => {this.speaking = true})
      utterance.addEventListener('end', () => {this.speaking = false})
      return utterance
    },
    utteranceAnswer() {
      const exploded = this.word.split('').join(', ')
      const utterance = new SpeechSynthesisUtterance(`${exploded}, ${this.word}.`)
      // utterance.rate = 0.5
      utterance.addEventListener('start', () => {this.answerSpeaking = true})
      utterance.addEventListener('end', () => {this.answerSpeaking = false})
      return utterance
    },
    is_attempt() {
      if (this.entry.length < this.word.length - 2) return false
      if (this.entry.slice(-1) != this.word.slice(-1)) return false
      return true
    },
    // speaking() {
    //   // Must be focused
    //   console.log(this)
    //   if (!this.$el?.hasChildNodes(document.activeElement)) return false

    //   return synth.speaking
    // }
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
      <div class="title-bar-text"></div>
    </div>
    <div class="window-body col">
      <div class="row">
        <input type="text" @focus="speak" @keydown.alt.p="speakAnswer" v-model="entry">
        <img src="@/assets/check-0.png" v-if="word == entry" class='check' />
        <img src="@/assets/restrict-1.png" v-else-if="is_attempt" class='check' />
        <div v-else class='check' />
      </div>
      <div class="row">
        <button @click="speakAnswer" :disabled="answerSpeaking" tabindex="-1">S<u>p</u>ell</button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
img.check {
  margin: auto;
}
div.check {
  width: 32px;
  height: 32px;
}
</style>
