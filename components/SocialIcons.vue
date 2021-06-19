<template>
  <ul class="social-icons-row">
    <a
      class="p-2 fa-lg"
      href="https://www.facebook.com/benjaminlooi97"
      aria-label="Benjamin Looi's Facebook"
    >
      <font-awesome-icon
        :icon="['fab', 'facebook-square']"
        class="facebook-icon"
      />
    </a>

    <a
      class="p-2 fa-lg"
      href="https://www.instagram.com/benjaminlooi/"
      aria-label="Benjamin Looi's Instagram"
    >
      <font-awesome-icon :icon="['fab', 'instagram']" class="instagram-icon" />
    </a>

    <a
      class="p-2 fa-lg"
      href="https://github.com/Benjaminlooi"
      aria-label="Benjamin Looi's Github"
    >
      <font-awesome-icon :icon="['fab', 'github']" class="github-icon" />
    </a>

    <a
      class="p-2 fa-lg"
      href="https://twitter.com/benjaminlooi_"
      aria-label="Benjamin Looi's Twitter"
    >
      <font-awesome-icon :icon="['fab', 'twitter']" class="twitter-icon" />
    </a>

    <a
      class="p-2 fa-lg"
      href="https://www.linkedin.com/in/benjaminlooi/"
      aria-label="Benjamin Looi's Linked-in"
    >
      <font-awesome-icon :icon="['fab', 'linkedin-in']" class="linkedin-icon" />
    </a>
  </ul>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.social-icons-row {
  display: flex;
  align-items: center;
}

.facebook-icon {
  color: #2196f3;

  &:hover {
    color: rgb(20 114 172);
  }
}

.instagram-icon {
  color: #607d8b;

  &:hover {
    color: #2f3e45;
  }
}

.github-icon {
  color: #673ab7;

  &:hover {
    color: #4f2b8d;
  }
}

.twitter-icon {
  color: #1da1f2;

  &:hover {
    color: #1878b2;
  }
}

.linkedin-icon {
  color: #0e76a8;

  &:hover {
    color: #08435f;
  }
}
</style>
