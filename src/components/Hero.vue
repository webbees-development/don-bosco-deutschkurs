<template>
  <section class="hero" id="hero">
    <figure class="image-container">
      <div class="image">
        <g-image
          v-show="$useWebp === true"
          src="../assets/images/index/photos-27.webp"
          alt="Kursteilnehmer Don Boscos"
        />
        <g-image
          v-show="$useWebp === false"
          src="../assets/images/index/photos-27.jpg"
          alt="Kursteilnehmer Don Boscos"
        />
      </div>
      <figcaption>
        <blockquote>
          Der Deutschkurs hat mein Leben verändert und mir eine Perspektive
          eröffnet.
        </blockquote>
        <p class="author">Rami, 2015 vor dem Krieg in Syrien geflüchtet.</p>
      </figcaption>
    </figure>
    <div class="content">
      <h1>Du willst dich in Wien <br />für Flüchtlinge einsetzen?</h1>
      <p>
        Nimm dir 2 Stunden Zeit, teile deine Sprache Deutsch und bereichere
        damit (d)ein Leben.
      </p>
      <p>
        Komm zu einem unserer Deutschkurse <br />für Flüchtlinge aus
        verschiedenen Ländern.
      </p>
      <a class="btn" :href="$static.metadata.calendly_url"
        >Probetermin vereinbaren</a
      >
    </div>
    <div class="background-languages">
      <span class="welcome">
        Willkommen.<br />
        اهلا وسهلا <br />
        Ласкаво просимо<br />
        Willkommen.<br />
        اهلا وسهلا <br />
        Ласкаво просимо<br />
        Willkommen.<br />
        اهلا وسهلا <br />
        Ласкаво просимо<br />
        Willkommen.<br />
        اهلا وسهلا <br />
        Ласкаво просимо<br />
        Willkommen.<br />
        اهلا وسهلا <br />
        Ласкаво просимо<br />
      </span>
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

<script lang="js">
export default {
  mounted() {
    window.onload = this.addBackgroundLanguages;
  },
  methods: {
    addBackgroundLanguages() {
      const welcomeContainer = document.querySelector(".background-languages");
      const welcomeSpan = document.querySelector(".welcome");
      for (let i = 1; i < 11; i++) {
        const newNode = welcomeSpan.cloneNode(true);
        newNode.style.left = `-${3 * i}rem`;
        welcomeContainer.appendChild(newNode);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/styles/global.scss";
.hero {
  --clr-fig-caption: #707070;
  --clr-languages-bg: #d4c5b581;
  --clr-languages-font: #ffffff74;
  overflow: hidden;
}
blockquote {
  color: var(--clr-fig-caption);
  font-family: var(--ff-primary);
  font-size: var(--fs-300);
  font-style: italic;
  line-height: 1.13;
  margin-bottom: 0.75rem;
}
blockquote::before {
  content: "„";
}
blockquote::after {
  content: "“";
  position: absolute;
}
a {
  margin-top: 2.5rem;
}
figcaption {
  text-align: center;
  max-width: 100%;
  padding-top: 1rem;
  padding-left: min(5vw, 5.5rem);
  padding-right: min(5vw, 5.5rem);

  @media (max-width: $first-break) {
    padding-left: 2.5vw;
    padding-right: 2.5vw;
  }
}
p.author {
  color: var(--clr-fig-caption);
  font-family: var(--ff-primary);
  font-size: var(--fs-100);
  line-height: 1.2;
}
.background-languages {
  position: absolute;
  inset: 0 75% 0 -1rem;
  padding-top: 0.75rem;
  background-color: var(--clr-languages-bg);
  color: var(--clr-languages-font);
  font-family: var(--ff-secondary);
  font-size: var(--fs-600);
  font-weight: bold;
  line-height: 1.4;
}
.content {
  margin-bottom: 1rem;
  margin-left: min(9vw, 10rem);
}
.content p,
a {
  margin-left: 2.5rem;
}
.content p:nth-of-type(1) {
  margin-top: 1.75rem;
  max-width: 28ch;
}
.content p:nth-of-type(2) {
  margin-top: 1.125rem;
  max-width: 34ch;
}
.hero {
  background-image: url("../assets/images/index/hintergrund.jpg");
  display: flex;
  padding-top: 6rem;
  padding-bottom: 6rem;
  align-items: center;
  position: relative;
  padding-left: var(--padding-global-inline);
  padding-right: var(--padding-global-inline);
}
.hero::after {
  content: "";
  position: absolute;
  bottom: 0;
  right: min(9%, 10.5rem);
  width: min(12%, 13.5rem);
  aspect-ratio: 0.96;
  background-image: url("../assets/images/index/herz.svg");
  background-repeat: no-repeat;
  background-size: cover;
  @media (max-width: $first-break) {
    right: 4%;
  }
}
.image-container,
.content {
  z-index: 1;
}
.image-container {
  display: flex;
  flex-direction: column;
  background-color: var(--clr-neutral);
  padding-top: 2.5rem;
  padding-bottom: 7rem;
  padding-left: 1rem;
  padding-right: 1rem;
  max-width: min(35vw, 39.5rem);
}
.image {
  position: relative;
  background-image: url("../assets/images/index/rahmen.png");
  background-repeat: no-repeat;
  background-size: 100%;
  width: 100%;
}
.image > img {
  width: 100%;
  padding: 13% 11.9% 22.3% 11.4%;
  aspect-ratio: 1.2;
  object-fit: cover;
}
@media (max-width: $tablet-break) {
  a {
    margin-top: 3rem;
    margin-left: auto;
    margin-right: auto;
  }
  figcaption {
    padding-top: 0;
    padding-left: 0;
  }
  .background-languages {
    padding-top: 0;
    right: 0;
    bottom: 80%;
    font-size: 25px;
    white-space: nowrap;
    overflow: hidden;

    span {
      position: relative;
      display: block;
    }

    br {
      display: none;
    }
  }
  .content {
    margin-left: 0;
    text-align: center;
    margin-top: 8%;
    margin-bottom: 10%;
  }
  .content p {
    margin-left: auto;
    margin-right: auto;
  }
  .hero {
    flex-direction: column;
  }
  .hero::after {
    right: min(12%, 14.5rem);
    width: min(40%, 27rem);
    opacity: 0.25;
  }
  .image-container {
    flex-direction: row;
    align-items: center;
    max-width: 90%;
    padding: 1rem;
  }
  .image {
    width: 80%;
  }
  .image img {
    padding-bottom: 20%;
  }
}
@media (max-width: $mobile-break) {
  figcaption {
    text-align: center;
    padding-left: 3rem;
    padding-right: 3rem;
  }
  .background-languages {
    display: none;
  }
  .content {
    margin-top: 4rem;
  }
  .hero {
    padding-top: 2rem;
  }
  .hero::after {
    right: min(9%, 10.5rem);
    width: min(60%, 23.5rem);
    opacity: 0.3;
  }
  .image-container {
    max-width: 100%;
    padding: 0;
    padding-bottom: 2rem;
    flex-direction: column;
    justify-content: center;
  }
  .image {
    width: 100%;
  }
}
</style>
