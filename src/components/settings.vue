<script>

export default {
}

</script>

<template>
  <section class="window">
    <!-- <div class="title-bar">
      <div class="title-bar-text">Settings</div>
    </div> -->
    <div class="window-body">
      <label class="col">
        <span>Words (one per line)</span>
        <textarea v-model="Store.spelling_wordlist" style="height: 400px;" />
      </label>
    </div>
  </section>
</template>

<style scoped lang="scss">

</style>
