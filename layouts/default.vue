<template>
  <div>
    <div id="loader" :class="isLoaded && 'is-loaded'" ref="loader">
      <div class="loader-container">
        <div class="loader-image" ref="loaderImage">
          <img class="fuwafuwa" src="~/assets/img/ben_bighead.svg" />
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

    <Nuxt />
  </div>
</template>

<script>
export default {
  data: () => ({
    isLoaded: false,
    tl: null,
  }),
  mounted() {
    const loader = this.$refs.loader
    // const loaderImage = this.$refs.loaderImage
    // const loaderNameOutline = this.$refs.loaderNameOutline
    // const loaderNameBase = this.$refs.loaderNameBase
    // const loaderNameSub = this.$refs.loaderNameSub

    this.tl = this.$gsap.timeline()
    this.tl
      // .to(loader, { opacity: 1, duration: 0.5 })
      // .from(loaderImage, { opacity: 0, y: 60, duration: 0.5 })
      // .from([loaderNameOutline, loaderNameBase], {
      //   opacity: 0,
      //   y: 60,
      //   duration: 0.4,
      // })
      // .from(loaderNameSub, {
      //   autoAlpha: 0,
      //   y: -40,
      //   duration: 0.4,
      //   delay: '-0.4',
      // })
      // .to(loader, { height: 0, opacity: 0, duration: 0.3, delay: 4 })
      .set(loader, { display: 'none' })
  },
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Archivo:wght@400;800&display=swap');

#loader {
  opacity: 0;
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
  }

  .loader-name-base h3 {
    color: rgba(255, 255, 255, 0.9);
    background-clip: text;
    background-image: url('~/assets/img/noise.gif');
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
  }
}
</style>
