<script>

export default {
}

</script>

<template>
  <section class="window">
    <div class="title-bar">
      <div class="title-bar-text"><span v-text="word" /></div>
    </div>
    <div class="window-body">
      <label>
        Words
        <textarea v-model="Store.spelling_wordlist" style="height: 400px;" />
      </label>
    </div>
  </section>
</template>

<style scoped lang="scss">

</style>
