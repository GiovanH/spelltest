<script>

export default {
  methods: {
    sortWordlist() {
      let wordlist = this.Store.spelling_wordlist
        .split('\n')
        .filter(Boolean)

      wordlist.sort()

      this.Store.spelling_wordlist = wordlist.join('\n')
    }
  }
}

</script>

<template>
  <section style="max-width: 650px;">
    <!-- <div class="title-bar">
      <div class="title-bar-text">Settings</div>
    </div> -->
    <div class="window-body">
      <div class="row">
        <fieldset class="col">
          <label class="col">
            <b>Words (one per line)</b>
          </label>
            <textarea v-model="Store.spelling_wordlist" style="height: 400px;" />
          <button @click="sortWordlist">Sort</button>
        </fieldset>

        <fieldset class="col rev-col" style="flex: 1 1;">
          <b>Preferences</b>
          <div class="field-row">
            <input type="checkbox" v-model="Store.setting_count_hint_as_wrong" id="schaw" tabindex="-1">
            <label for="schaw">
              Don't allow words to be counted as "perfect" if a hint was given
            </label>
          </div>
        </fieldset>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
button { margin-top: 1em; }
fieldset.col {
  // justify-content: flex-end;
  > * {
    margin-bottom: 1em;
  }
  // display: flex;

  // align-items: flex-end;
  // flex-direction: row;
}
</style>
