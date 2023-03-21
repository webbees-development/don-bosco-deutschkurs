<template>
  <section class="appointment">
    <div class="content">
      <h2>
        Tu anderen und<br />
        damit auch dir selbst etwas Gutes.
      </h2>
      <p>
        Nimm dir 2 Stunden Zeit, teile deine Sprache Deutsch und bereichere damit
        (d)ein Leben.
      </p>
      <a class="btn" :href="$static.metadata.calendly_url">Probetermin vereinbaren</a>
    </div>
    <div class="image">
      <g-image src="../assets/images/index/haende.jpg" alt="Menschen reichen sich ihre Hände im Kreis und zwei Hände formen in der Mitte des Kreises ein Herz" />
    </div>
  </section>
</template>

<static-query>
query {
  metadata {
    calendly_url
  }
}
</static-query>

<style lang="scss" scoped>
@import "~/assets/styles/global.scss";
.appointment {
  background-image: url("../assets/images/index/hintergrund.webp");
  display: flex;
  justify-content: flex-end;
  align-items: center;
  // padding-block: 3.75rem;
  padding-top: 3.75rem;
  padding-bottom: 3.75rem;
}
.content {
  // padding-inline-end: min(10.5vw, 12.5rem);
  padding-right: min(10.5vw, 12.5rem);

  @media (max-width: $first-break) {
    // padding-inline-end: 8vw;
    padding-right: 8vw;
  }
}
h2 {
  max-width: 16ch;
}
p,
a {
  // margin-inline-start: 2.5rem;
  margin-left: 2.5rem;
}
p {
  // margin-block: 3.25rem 2.5rem;
  margin-top: 3.25rem;
  margin-bottom: 2.5rem;
  max-width: 28ch;
}
.image {
  width: min(50vw, 61rem);

  img{
    height: 100%;
    object-fit: cover;

  @media (max-width: 1600px) {
    aspect-ratio: 1.2;
  }
  @media (max-width: 1400px) {
    aspect-ratio: 1.3;
  }
  }
}

@media (max-width: $tablet-break) {
  .appointment {
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    text-align: center;
    // padding-block: 7rem;
    padding-top: 7rem;
    padding-bottom: 7rem;
    // padding-inline: var(--padding-global-inline);
    padding-left: var(--padding-global-inline);
    padding-right: var(--padding-global-inline);
  }
  .content {
    padding: 0;
  }
  h2 {
    max-width: 20ch;
    // margin-inline: auto;
    margin-left: auto;
    margin-right: auto;
    br {
      display: none;
    }
  }
  p,
  a {
    // margin-inline-start: 0;
    margin-left: 0;
  }
  p {
    // margin-block: 2.8rem 2rem;
    margin-top: 2.8rem;
    margin-bottom: 2rem;
    max-width: 40ch;
  }
  .image {
    display: none;
  }
}
</style>