<template>
  <div class="container mx-auto" ref="root">
    <img
      class="w-full"
      :src="require('~/assets/img/cv.jpg')"
      alt="Benjamin Looi's resume"
    />
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'BENJAMIN LOOI | WEB DEVELOPER | RESUME',
    }
  },
  mounted() {
    if (process.browser) {
      const ImagesLoaded = require('imagesloaded')

      const rootRef = this.$refs.root

      ImagesLoaded(rootRef, () => {
        this.$nuxt.$emit('update-locomotive')
      })
    }
  },
}
</script>

<style></style>
