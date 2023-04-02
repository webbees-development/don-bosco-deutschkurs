<template>
  <!-- make some kind of separation between texture header and texture sections-->
  <header :class="[ texture_background ? 'texture-background' : '']">
    <div class="container">
      <div class="logo">
        <g-link to="/">
          <g-image
            immediate
            src="../assets/images/logo/logo.png"
            alt="Don Bosco für Flüchtlinge Logo"
          />
        </g-link>
      </div>
      <div class="stop-war">
        <span>Please stop war in</span>
        <div class="flags">
          <g-image
            v-for="(flag, index) in flags"
            :key="index"
            class="flag"
            data-visible="false"
            :src="flag.node.image.src"
            :alt="flag.node.image.alt"
            immediate
          />
        </div>
      </div>
    </div>

    <button
      @click="toggleMobileNavigation"
      class="mobile-nav-toggle"
      aria-controls="primary-navigation"
      aria-expanded="false"
    >
      <span class="sr-only">Menu</span>
    </button>

    <nav id="primary-navigation" data-visible="false">
      <ul v-if="$route.path === '/'">
        <li><a href="#about-us">Über uns</a></li>
        <li><a href="#blog">Blog</a></li>
        <li><a href="#photos">Fotos</a></li>
        <li><a href="#contact">Kontakt</a></li>
      </ul>
      <ul v-else>
        <li><g-link to="/"><span class="hide-tablet">← zurück zur </span>Startseite</g-link></li>
      </ul>
      <g-link class="btn" to="/spenden/"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M244 84L255.1 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 0 232.4 0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84C243.1 84 244 84.01 244 84L244 84zM255.1 163.9L210.1 117.1C188.4 96.28 157.6 86.4 127.3 91.44C81.55 99.07 48 138.7 48 185.1V190.9C48 219.1 59.71 246.1 80.34 265.3L256 429.3L431.7 265.3C452.3 246.1 464 219.1 464 190.9V185.1C464 138.7 430.4 99.07 384.7 91.44C354.4 86.4 323.6 96.28 301.9 117.1L255.1 163.9z"/></svg>Spenden</g-link>
    </nav>
  </header>
</template>

<static-query>
query {
  allFlag {
    edges {
      node {
        image{
          src
          alt
        }
      }
    }
  }
}
</static-query>

<script>
export default {
  props: {
    texture_background: {
      type: Boolean,
      default: false,
    }
  },
  data() {
    return {
      flags: [],
      flag_interval: undefined,
    };
  },
  mounted() {
    this.initSectionObserver();
    clearInterval(this.flag_interval);
    this.changeFlag();
  },
  unmounted() {
    clearInterval(this.flag_interval);
    this.flag_interval = undefined;
  },
  created() {
    this.flags.push(...this.$static.allFlag.edges);
  },
  methods: {
    toggleMobileNavigation() {
      // toggle mobile navigation
      const primaryNav = document.querySelector("nav");
      const navToggle = document.querySelector(".mobile-nav-toggle");
      const visibility = primaryNav.getAttribute("data-visible");
      if (visibility === "false") {
        primaryNav.setAttribute("data-visible", "true");
        navToggle.setAttribute("aria-expanded", "true");
      } else if (visibility === "true") {
        primaryNav.setAttribute("data-visible", "false");
        navToggle.setAttribute("aria-expanded", "false");
      }
    },
    initSectionObserver() {
      // section Observer
      let currentSection = undefined;
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            currentSection = undefined;
            if (entry.isIntersecting) {
              currentSection = entry.target.getAttribute("id");
            }
          });
          document.querySelectorAll("nav#primary-navigation a").forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href").includes(currentSection)) {
              link.classList.add("active");
            }
          });
        },
        { threshold: 0.45 }
      );
      document
        .querySelectorAll("#about-us, #blog, #photos, #contact")
        .forEach((section) => {
          observer.observe(section);
        });
    },
    changeFlag() {
      // change image with timer
      if (this.flag_interval === undefined) {
        const images = document.getElementsByClassName("flag");
        let i = 0;
        images[i].dataset.visible = "true";

        function changeFlag() {
          images[i].dataset.visible = "false";
          if (i < images.length - 1) {
            i += 1
          } else {
            i = 0
          }
          images[i].dataset.visible = "true";
        }

        this.flag_interval = setInterval(changeFlag, 4000);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~/assets/styles/global.scss";
header,
.container,
.stop-war {
  display: flex;
  align-items: center;
}
header {
  color: var(--clr-primary);
  background: var(--clr-neutral);
  font-family: var(--ff-primary);
  font-size: var(--fs-nav);
  font-weight: bold;
  text-transform: uppercase;
  position: sticky;
  top: 0;
  z-index: 100;
  justify-content: space-between;
  // padding-block: 1.5rem;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  // padding-inline: var(--padding-global-inline);
  padding-left: var(--padding-global-inline);
  padding-right: var(--padding-global-inline);
}
nav {
  display: flex;
  gap: 4rem;
  align-items: center;
}
nav li a {
  position: relative;
  &::after {
    content: "";
    width: 0;
    height: 0.2rem;
    display: block;
    position: absolute;
    bottom: -5px;
    background: var(--clr-primary);
    transition: 250ms;
  }
  &:hover::after,
  &:focus-visible::after,
  &.active::after {
    width: 100%;
  }
  &:focus-visible {
    outline: none;
  }
}
ul {
  display: flex;
}
li + li {
  // margin-inline-start: min(1.8vw, 2.5rem);
  margin-left: min(1.8vw, 2.5rem);
}
.btn svg {
  display: inline-block;
  fill: white;
  // margin-inline-end: 0.5rem;
  margin-right: 0.5rem;
  vertical-align: top;
  width: 1.5rem;
}

.hide-tablet {
  @media (max-width: $tablet-break) {
    display: none;
  }
}

.logo {
  max-width: 7.5rem;
  // padding-inline-end: 1.5rem;
  padding-right: 1.5rem;
}

.stop-war {

  img {
    max-width: 6rem;

    @media (max-width: $mobile-break) {
      max-width: 3rem;
    }
  }

  span {
    // padding-inline: 1rem 2rem;
    padding-left: 1rem;
    padding-right: 2rem;

    @media (max-width: $mobile-break) {
      // padding-inline: 0.5rem;
      padding-left: 0.5rem;
      padding-right: 0.5rem;
      font-size: 1rem;
    }
  }

  .flags {
    position: relative;
  } 

  .flag {
    position: absolute;
    transform: translateY(-50%);
    transition: opacity 1000ms ease-in-out;

    &[data-visible="false"] {
      opacity: 0;
    }
    &[data-visible="true"] {
      opacity: 1;
    }
  }
}

.texture-background {
  background: url("../assets/images/index/hintergrund.jpg");
  background-repeat: repeat;
}
.mobile-nav-toggle {
  display: none;
  padding: 0;

  @media (max-width: $tablet-break) {
    --item-width: 2rem;
    display: block;
    position: absolute;
    top: calc(50% - var(--item-width) / 2);
    right: var(--padding-global-inline);
    z-index: 9999;
    background-color: transparent;
    background-image: url("../assets/images/icon/icon-hamburger.svg");
    background-repeat: no-repeat;
    width: var(--item-width);
    height: var(--item-width);
    border: none;
    aspect-ratio: 1;

    &[aria-expanded="true"] {
      background-image: url("../assets/images/icon/icon-close.svg");
    }
  }

  @media (max-width: $mobile-break) {
    --item-width: 2.5rem;
    top: 3rem;
  }
}

@media (max-width: $tablet-break) {
  nav {
    flex-direction: column;
    position: fixed;
    inset: 0 0 0 55%;
    z-index: 1000;
    background-color: rgba(255, 255, 255, 0.9);
    padding: min(30vh, 13rem) 2em;
    transform: translateX(100%);
    transition: transform 450ms ease-out;

    &[data-visible="true"] {
      transform: translateX(0%);
    }

    @supports (backdrop-filter: blur(1rem)) {
      background-color: rgba(255, 255, 255, 0.4);
      backdrop-filter: blur(2rem);
    }
  }

  ul {
    flex-direction: column;
  }
  
  li + li {
    // margin-inline-start: 0;
    margin-left: 0;
    // margin-block-start: max(4vh, 2rem);
    margin-top: max(4vh, 2rem);
  }
}

@media (max-width: $mobile-break) {
  nav {
    inset: 0 0 0 40%;
  }
}
</style>