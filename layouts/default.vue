<template>
  <div>
    <div id="loader" ref="loader" :class="isLoaded && 'is-loaded'">
      <div ref="loaderContainer" class="loader-container">
        <div ref="loaderImageContainer" class="loader-image">
          <img
            ref="loaderImage"
            src="/img/ben_bighead.svg"
            alt="Benjamin Looi loading screen avatar"
          />
        </div>

        <div class="loader-name">
          <div class="loader-name-outline">
            <h3 ref="loaderNameOutline">BENJAMIN LOOI</h3>
          </div>
          <div class="loader-name-base">
            <h3 ref="loaderNameBase">BENJAMIN LOOI</h3>
            <p ref="loaderNameSub">FULLSTACK<br />DEVELOPER</p>
          </div>
        </div>
      </div>
    </div>

    <LocomotiveScroll
      ref="scroller"
      :getted-options="{
        smooth: true,
        direction: 'vertical',
        smartphone: {
          smooth: true,
          direction: 'vertical',
        },
        tablet: {
          smooth: true,
          direction: 'vertical',
        },
      }"
    >
      <Navbar />
      <Nuxt />
      <Footer />
    </LocomotiveScroll>
  </div>
</template>

<script>
import Footer from '~/components/Footer.vue'
import Navbar from '~/components/Navbar.vue'
export default {
  components: { Navbar, Footer },
  data: () => ({
    isLoaded: false,
    tl: null,
    loaderImageUpDownUpDownTl: null,
  }),
  mounted() {
    const loader = this.$refs.loader
    const loaderContainerRef = this.$refs.loaderContainer
    const loaderImageContainer = this.$refs.loaderImageContainer
    const loaderImage = this.$refs.loaderImage
    const loaderNameOutline = this.$refs.loaderNameOutline
    const loaderNameBase = this.$refs.loaderNameBase
    const loaderNameSub = this.$refs.loaderNameSub

    this.tl = this.$gsap.timeline()
    this.tl
      .to(loaderContainerRef, { opacity: 1, duration: 1 })
      .from(loaderImageContainer, { opacity: 0, y: 60, duration: 0.5 })
      .from([loaderNameOutline, loaderNameBase], {
        opacity: 0,
        y: 60,
        duration: 0.4,
      })
      .from(loaderNameSub, {
        autoAlpha: 0,
        y: -40,
        duration: 0.4,
        delay: '-0.4',
      })
      // .to(loader, { height: 0, opacity: 0, duration: 0.3, delay: 0 })
      .to(loader, { height: 0, opacity: 0, duration: 0.3, delay: 2.5 })
      // .to(loader, { height: 0, opacity: 0, duration: 0.3, delay: 10000 })
      .set(loader, { display: 'none' })

    this.loaderImageUpDownUpDownTl = this.$gsap.timeline({
      repeat: -1,
      yoyo: true,
    })
    this.loaderImageUpDownUpDownTl.to(loaderImage, {
      y: 20,
      duration: 1.5,
      ease: 'power1.inOut',
    })
  },
}
</script>

<style lang="scss" scoped>
#loader {
  opacity: 1;
  position: fixed;
  z-index: 100;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: #0e161f;

  &.is-loaded {
    height: 0;
    opacity: 0;
  }
}

.loader-container {
  opacity: 0;
  width: 100%;
  height: 100%;

  .loader-image {
    z-index: 5;
    top: 35%;
    position: relative;
    text-align: center;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
    width: auto;
    height: auto;

    img {
      display: inline;
      width: 100%;
      max-width: 400px;
      height: auto;
    }
  }

  h3 {
    font-family: 'Archivo', sans-serif;
    font-weight: 800;
    font-style: normal;
    font-size: 5vw;
    line-height: 10vw;
    text-align: center;
    position: absolute;
    top: 60%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);

    @media (max-width: 599px) {
      font-size: 10vw;
      top: 65%;
    }

    /* @include media('>phone', '<tablet') {
      font-size: 10vw;
    } */
  }

  .loader-name-base h3 {
    color: rgba(255, 255, 255, 0.9);
    background-clip: text;
    background-image: url('/img/noise.gif');
    z-index: 4;
  }

  .loader-name-outline h3 {
    color: transparent;
    -webkit-text-stroke: 1px #fff;
    z-index: 7;
  }

  p {
    font-family: 'Archivo', sans-serif;
    margin: 50px 0 0 17.5%;
    text-align: left;
    color: white;
    font-weight: normal;
    font-style: normal;
    font-size: 1vw;
    letter-spacing: 0.5px;
    z-index: 6;
    position: absolute;
    top: 60%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);

    @media (max-width: 599px) {
      font-size: 2.4vw;
      margin: 94px 0 0 24.6%;
    }
  }
}
</style>
