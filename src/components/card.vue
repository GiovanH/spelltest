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
      answer: '',
      answer_speaking: false,
      ever_wrong: false,
      show: false
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
      utterance.addEventListener('start', () => {this.answer_speaking = true})
      utterance.addEventListener('end', () => {this.answer_speaking = false})
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
      synth.cancel()
      this.answer_speaking = false

      synth.speak(this.utterance)
    },
    speakAnswer() {
      synth.speak(this.utteranceAnswer)
    }
  },
  watch: {
    'entry'(to) {
      if (this.is_attempt && this.word != this.entry) {
        this.ever_wrong = true
      }
    }
  }
}

</script>

<template>
  <fieldset class="card">
    <!-- <div class="title-bar">
      <div class="title-bar-text"></div>
    </div> -->
    <div class="window-body col">
      <div class="row">
        <div class="col">
          <input type="text" @focus="speak" @keydown.alt.p="speakAnswer" @keydown.alt.h="(show = !show)" v-model="entry">
          <input type="text" :value="(show ? word : '')" disabled tabindex="-1" v-if="show">

          <div class="row" style="align-items: center;">
            <button @click="speakAnswer" :disabled="answer_speaking" tabindex="-1" style="
        margin: 8px;
        margin-left: 0;
    ">S<u>p</u>ell</button>
          <!-- </div>
          <div class="row"> -->
            <div class="field-row">
              <input type="checkbox" v-model="show" :id="word" tabindex="-1">
              <label :for="word">
                S<u>h</u>ow
              </label>
            </div>
          </div>
        </div>

        <img src="@/assets/check-0.png" v-if="word == entry" class='check' />
        <img src="@/assets/restrict-1.png" v-else-if="is_attempt" class='check' />
        <div v-else class='check' />

        <img src="@/assets/restrict-0.png" v-if="ever_wrong" class='check' />
      </div>
    </div>
  </fieldset>
</template>

<style scoped lang="scss">
fieldset.card {
  min-width: 320px;
  margin: 4px;
}

input[type=text] {
  font-size: 32px;
  width: 225px;
}

img.check {
  margin: auto 8px;
}
div.check {
  width: 32px;
  height: 32px;
}
</style>
