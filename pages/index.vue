<template>
  <div>
    <div class="container-12">
      <ul class="social-icons-row mb-3">
        <a class="p-2 fa-lg" href="https://www.facebook.com/benjaminlooi97">
          <font-awesome-icon
            :icon="['fab', 'facebook-square']"
            style="color: #2196f3"
          />
        </a>
        <a class="p-2 fa-lg" href="https://www.instagram.com/benjaminlooi/">
          <font-awesome-icon
            :icon="['fab', 'instagram']"
            style="color: #607d8b"
          />
        </a>
        <a class="p-2 fa-lg" href="https://github.com/Benjaminlooi">
          <font-awesome-icon :icon="['fab', 'github']" style="color: #673ab7" />
        </a>
        <a class="p-2 fa-lg" href="https://www.codewars.com/users/Benjaminlooi">
          <img
            class="codewars-tag"
            src="https://www.codewars.com/users/Benjaminlooi/badges/micro"
            alt=""
          />
        </a>
      </ul>
      <h1 class="main-hero">
        <span>Benjamin<br />Looi</span>
      </h1>
      <h3 class="main-caption">I make <strong>Websites</strong></h3>
      <p class="main-description">Son of Odin & Jesus</p>
    </div>

    <div class="image-wrapper">
      <img
        class="chinese-caligraphy-brush"
        src="~/assets/img/caligraphy-brush.png"
        alt="Brush"
      />
      <img
        class="chinese-caligraphy"
        src="~/assets/img/ben_mandarin_name.png"
        alt="Benjamin Looi Name"
      />
      <div class="main-image-wrapper">
        <img
          class="main-image"
          src="~/assets/img/horses_painting.jpg"
          alt="Horse Painting"
        />
      </div>
    </div>

    <img
      src="~/assets/img/this-is-ben.png"
      style="display: none"
      alt="Benjamin Looi"
    />
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Playfair+Display:400,700,900&display=swap');

.social-icons-row {
  display: flex;
  align-items: center;
}

.container-12 {
  max-width: 1200px;
  margin: 90px auto 0px;
}

.codewars-tag {
  vertical-align: inherit;
}

.main-hero {
  font-family: 'Playfair Display', serif;
  font-weight: 700;
  font-size: 100px;
  letter-spacing: 1px;
  line-height: 100px;
  margin-bottom: 16px;
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
  line-height: 36px;
  margin: 16px 0px 32px;
  letter-spacing: 0px;
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
  top: -395px;
  left: calc((100vw - 1200px) / 2 + 716px);
  transform: rotate(20deg);
}

.chinese-caligraphy {
  position: absolute;
  width: 120px;
  top: -297px;
  right: calc((100vw - 1200px) / 2);
}

.this-is-ben {
  height: 80vh;
  bottom: 0vh;
  position: sticky;
  float: right;
  z-index: 9999;
}

@media (max-width: 1200px) {
  .container-12 {
    width: auto;
    padding: 0px 32px;
  }

  .main-hero {
    font-size: 64px;
    letter-spacing: -1.6px;
    line-height: 64px;
  }

  .main-description {
    width: auto;
  }

  .image-wrapper {
    padding-left: 32px;
  }

  .main-image {
    min-width: 700px;
  }

  .chinese-caligraphy {
    right: 32px;
    width: 96px;
    top: -237px;
  }

  .chinese-caligraphy-brush {
    right: 64px;
    left: unset;
  }
}

@media (max-width: 600px) {
  .chinese-caligraphy {
    right: 12px;
    width: 60px;
    top: -145px;
  }

  .chinese-caligraphy-brush {
    right: 16px;
    width: 265px;
  }
}
</style>
