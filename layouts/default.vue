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
      <!-- <TopBanner /> -->
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

    console.log(
      `\n\u2880\u2874\u2811\u2844\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u28C0\u28C0\u28E4\u28E4\u28E4\u28C0\u2840\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\r\n\u2838\u2847\u2800\u283F\u2840\u2800\u2800\u2800\u28C0\u2874\u28BF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28F7\u28E6\u2840\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\r\n\u2800\u2800\u2800\u2800\u2811\u2884\u28E0\u283E\u2801\u28C0\u28C4\u2848\u2819\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28C6\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\r\n\u2800\u2800\u2800\u2800\u2880\u2840\u2801\u2800\u2800\u2808\u2819\u281B\u2802\u2808\u28FF\u28FF\u28FF\u28FF\u28FF\u283F\u287F\u28BF\u28C6\u2800\u2800\u2800\u2800\u2800\u2800\u2800\r\n\u2800\u2800\u2800\u2880\u287E\u28C1\u28C0\u2800\u2834\u2802\u2819\u28D7\u2840\u2800\u28BB\u28FF\u28FF\u282D\u28A4\u28F4\u28E6\u28E4\u28F9\u2800\u2800\u2800\u2880\u28B4\u28F6\u28C6\r\n\u2800\u2800\u2880\u28FE\u28FF\u28FF\u28FF\u28F7\u28EE\u28FD\u28FE\u28FF\u28E5\u28F4\u28FF\u28FF\u287F\u2882\u2814\u289A\u287F\u28BF\u28FF\u28E6\u28F4\u28FE\u2801\u2838\u28FC\u287F\r\n\u2800\u2880\u285E\u2801\u2819\u283B\u283F\u281F\u2809\u2800\u281B\u28B9\u28FF\u28FF\u28FF\u28FF\u28FF\u28CC\u28A4\u28FC\u28FF\u28FE\u28FF\u285F\u2809\u2800\u2800\u2800\u2800\u2800\r\n\u2800\u28FE\u28F7\u28F6\u2807\u2800\u2800\u28E4\u28C4\u28C0\u2840\u2808\u283B\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u2847\u2800\u2800\u2800\u2800\u2800\u2800\r\n\u2800\u2809\u2808\u2809\u2800\u2800\u28A6\u2848\u28BB\u28FF\u28FF\u28FF\u28F6\u28F6\u28F6\u28F6\u28E4\u28FD\u2879\u28FF\u28FF\u28FF\u28FF\u2847\u2800\u2800\u2800\u2800\u2800\u2800\r\n\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2809\u2832\u28FD\u287B\u28BF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28F7\u28DC\u28FF\u28FF\u28FF\u2847\u2800\u2800\u2800\u2800\u2800\u2800\r\n\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u28B8\u28FF\u28FF\u28F7\u28F6\u28EE\u28ED\u28FD\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u2800\u2800\u2800\u2800\u2800\u2800\u2800\r\n\u2800\u2800\u2800\u2800\u2800\u2800\u28C0\u28C0\u28C8\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u2807\u2800\u2800\u2800\u2800\u2800\u2800\u2800\r\n\u2800\u2800\u2800\u2800\u2800\u2800\u28BF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u2803\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\r\n\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2839\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u28FF\u287F\u281F\u2801\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\r\n\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2800\u2809\u281B\u283B\u283F\u283F\u283F\u283F\u281B\u2809`
    )
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
