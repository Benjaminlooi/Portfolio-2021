<template>
  <div ref="root">
    <div ref="containerRef" class="container-12">
      <nuxt-img
        class="chinese-caligraphy-brush"
        src="/img/caligraphy-brush.png"
        alt="Brush"
      />

      <SocialIcons class="mb-3" />

      <h1 class="main-hero">Benjamin<br />Looi</h1>

      <h3 class="main-caption">I make <strong>Websites</strong></h3>

      <div class="main-description">
        <p>Son of Odin & Jesus</p>
        <p>
          Supreme leader of
          <a
            href="https://tanginabobo.benjaminlooi.dev/"
            class="underline text-blue-600"
            >Tangina Bobo Gang</a
          >
        </p>
        <p>And the future Prime Minister of Malaysia</p>
      </div>
    </div>

    <div class="image-wrapper">
      <nuxt-img
        class="chinese-caligraphy"
        src="/img/ben_mandarin_name.png"
        alt="Benjamin Looi Name"
      />
      <div class="main-image-wrapper">
        <nuxt-img
          class="main-image"
          src="/img/horses_painting-min.jpg"
          alt="Horse Painting"
        />
      </div>
    </div>

    <nuxt-img
      src="/img/this-is-ben.png"
      style="display: none; height: 0; width: 0"
      alt="Benjamin Looi"
    />
  </div>
</template>

<script>
import SocialIcons from '~/components/SocialIcons.vue'
export default {
  components: { SocialIcons },
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

<style lang="scss" scoped>
.container-12 {
  position: relative;
  max-width: 1200px;
  margin: 90px auto 0px;

  @media (max-width: 1200px) {
    width: auto;
    padding: 0px 32px;
  }
}

.main-hero {
  font-family: 'Playfair Display', serif;
  font-weight: 700;
  font-size: 100px;
  letter-spacing: 1px;
  line-height: 100px;
  margin-bottom: 16px;

  @media (max-width: 1200px) {
    font-size: 64px;
    /* letter-spacing: -1.6px; */
    line-height: 64px;
  }
}

.main-caption {
  font-size: 32px;
  letter-spacing: -0.6px;
  font-weight: 700;
  color: #adadad;
}

.main-caption strong {
  font-weight: 700;
  color: #6f6f6f;
}

.main-description {
  width: 480px;
  opacity: 0.5;
  font-size: 19px;
  margin: 16px 0px 32px;
  padding-right: 30px;

  @media (max-width: 1200px) {
    width: auto;
  }
}

.image-wrapper {
  position: relative;
  padding-left: calc((100vw - 1200px) / 2);
}

.main-image-wrapper {
  overflow: hidden;
}

.main-image {
  width: 100%;
}

.chinese-caligraphy-brush {
  position: absolute;
  top: -64px;
  left: calc((100vw - 1200px) / 2 + 716px);
  transform: rotate(20deg);
  height: auto;

  @media (max-width: 1200px) {
    right: 64px;
    left: unset;
  }

  @media (max-width: 600px) {
    right: -8px;
    width: 265px;
  }
}

.chinese-caligraphy {
  position: absolute;
  width: 120px;
  top: -297px;
  right: calc((100vw - 1200px) / 2);

  @media (max-width: 1200px) {
    right: 32px;
    width: 96px;
    top: -237px;
  }

  @media (max-width: 600px) {
    right: 12px;
    width: 60px;
    top: -145px;
  }
}

.this-is-ben {
  height: 80vh;
  bottom: 0vh;
  position: sticky;
  float: right;
  z-index: 9999;
}

@media (max-width: 1200px) {
  .image-wrapper {
    padding-left: 32px;
  }

  .main-image {
    min-width: 700px;
  }
}
</style>
