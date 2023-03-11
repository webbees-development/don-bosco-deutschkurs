<template>
  <section id="blog" class="blog">
    <h2>Erfolgsgeschichten & Worte der Dankbarkeit</h2>

  </section>
</template>

<style lang="scss" scoped>
@import "~/assets/styles/global.scss";
h2 {
  padding-block-end: 3.125rem;
}
.blog {
  background-image: url("../assets/images/index/hintergrund.png");
  padding-block: 9rem;
  padding-inline: 15.8rem;
  @media (max-width: 1250px) {
    padding-inline: var(--padding-global-inline);
  }
  text-align: center;
}
</style>