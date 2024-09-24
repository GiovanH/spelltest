<script>

export default {
  // data() {
  //   return {
  //     wordlist: undefined,
  //     wordlist_default: ""
  //   }
  // },
  // created() {
  //   this.wordlist = {...this.wordlist_default, ...(this.Store.wordlist || {})}
  // },
}

</script>

<template>
  <section>
    <label>
      Words
      <textarea v-model="Store.spelling_wordlist" style="height: 140px;" />
    </label>
  </section>
</template>

<style scoped lang="scss">

</style>
