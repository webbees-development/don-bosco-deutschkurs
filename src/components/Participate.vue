<template>
  <section class="participate">
    <h2>
      Komm’ einfach mal vorbei.<br />
      So geht’s:
    </h2>
    <div class="participate-container">
      <figure>
        <div class="image-container">
          <div class="image">
            <g-image
              v-show="$useWebp === true"
              src="../assets/images/index/mithelfen-img1.webp"
              alt="Frauen und Männer posieren mit ihrem Schuh am Ohr als würden sie jemanden anrufen"
            />
            <g-image
              v-show="$useWebp === false"
              src="../assets/images/index/mithelfen-img1.jpg"
              alt="Frauen und Männer posieren mit ihrem Schuh am Ohr als würden sie jemanden anrufen"
            />
          </div>
        </div>
        <figcaption>
          <h3>1. Probetermin vereinbaren</h3>
          <p>
            Klicke auf den Button
            <a :href="$static.metadata.calendly_url"
              >„Probetermin vereinbaren“</a
            >
            und such’ dir einen Abend aus, an dem du dir 2 Stunden Zeit nimmst.
          </p>
        </figcaption>
      </figure>
      <figure>
        <div class="image-container">
          <div class="image">
            <g-image
              v-show="$useWebp === true"
              src="../assets/images/index/mithelfen-img2.webp"
              alt="Eine Freiwillige hilft den Schülern bei ihren Aufgaben am Tisch"
            />
            <g-image
              v-show="$useWebp === false"
              src="../assets/images/index/mithelfen-img2.jpg"
              alt="Eine Freiwillige hilft den Schülern bei ihren Aufgaben am Tisch"
            />
          </div>
        </div>
        <figcaption>
          <h3>2. Sei bei einem Kurs dabei</h3>
          <p>
            Du kommst an dem Tag, den du dir ausgesucht hast, und bist einmal
            live dabei, wenn wir einen Deutschkurs für Flüchtlinge veranstalten.
          </p>
        </figcaption>
      </figure>
      <figure>
        <div class="image-container">
          <div class="image">
            <g-image
              v-show="$useWebp === true"
              src="../assets/images/index/mithelfen-img3.webp"
              alt="Lachender Mann auf einer Feier mit lachenden Menschen im Hintergrund"
            />
            <g-image
              v-show="$useWebp === false"
              src="../assets/images/index/mithelfen-img3.jpg"
              alt="Lachender Mann auf einer Feier mit lachenden Menschen im Hintergrund"
            />
          </div>
        </div>
        <figcaption>
          <h3>3. Erlebe die Freude vor Ort</h3>
          <p>
            Die Freude, selbstlos etwas Gutes zu tun, kann man gar nicht in
            Worte fassen. Auch du wirst das nach diesen 2 Stunden fühlen.<br />
            Komm’ vorbei!
          </p>
        </figcaption>
      </figure>
    </div>
    <a class="btn" :href="$static.metadata.calendly_url"
      >Probetermin vereinbaren</a
    >
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
figure {
  max-width: 40rem;
  min-width: 0;
}

figure:nth-child(2) {
  padding-left: 4rem;
  padding-right: 4rem;

  img {
    object-position: 0 10%;
  }
}
figure:nth-child(3) {
  img {
    object-position: 0 10%;
  }
}
figcaption {
  margin-top: 2rem;
}
figcaption p {
  max-width: 28ch;
  line-height: 1.6;
  margin-left: auto;
  margin-right: auto;
  padding-top: 0.75rem;

  br {
    display: none;
  }
}
a {
  text-decoration: underline;
  text-underline-offset: 0.3rem;
  color: var(--clr-primary);
  white-space: nowrap;
}
.participate {
  text-align: center;
  padding-left: 11.25rem;
  padding-right: 11.25rem;
  padding-top: 9rem;
  padding-bottom: 9rem;

  @media (max-width: $first-break) {
    padding-left: var(--padding-global-inline);
    padding-right: var(--padding-global-inline);
  }
}
.participate-container {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 2.5rem;
  padding-bottom: 5rem;
}
.image-container {
  background-image: url("../assets/images/index/rahmen2.png");
  background-repeat: no-repeat;
  background-size: 100%;
  width: 27.5rem;
  max-width: 100%;
}
.image {
  padding-bottom: 78%; /* Padding hack ratio */
  position: relative;
  overflow: hidden;
}
.image > img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  padding: 6.4% 4% 13% 4.5%;
}
@media (max-width: $tablet-break) {
  .participate-container {
    flex-direction: column;
    align-items: center;
    padding-top: 4rem;
    padding-bottom: 5rem;

    a {
      white-space: normal;
    }

    figure {
      display: flex;
      align-items: center;
      text-align: justify;
      max-width: 65rem;
      width: 100%;
      min-width: 0;
    }

    figure:nth-child(2) {
      padding-left: 0;
      padding-right: 0;
      flex-direction: row-reverse;
      padding-top: 9vw;
      padding-bottom: 9vw;
    }

    figcaption p {
      br {
        display: none;
      }
    }

    /* flex play */
    @media (min-width: 626px) {
      figure:nth-child(odd) {
        justify-content: left;
        .image-container {
          margin-right: 5vw;
        }
      }
      figure:nth-child(even) {
        justify-content: right;
        .image-container {
          margin-left: 5vw;
        }
      }
    }
    figcaption {
      margin-top: 1rem;
    }
    figcaption h3 {
      flex-shrink: 1;
    }
    figcaption p {
      max-width: 30ch;
    }
    h3 {
      min-width: 15ch;
    }
  }
}
@media (max-width: 1066px) {
  a {
    white-space: normal;
  }
  figcaption p {
    br {
      display: block;
    }
  }
}
@media (max-width: 625px) {
  .participate-container {
    figure {
      text-align: center;
      flex-direction: column;

      & > * {
        margin-left: 0;
        margin-right: 0;
      }
    }
    figure:nth-child(2) {
      flex-direction: column;
    }
    .image-container {
      margin-bottom: 2rem;
      width: 30rem;
      max-width: 50rem;
    }
  }
}
@media (min-width: 450px) {
  h2 br {
    display: none;
  }
}
</style>
