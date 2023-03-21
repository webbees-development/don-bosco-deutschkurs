<template>
  <section id="photos" class="photos">
    <h2>Freude erleben und teilen</h2>
    <p>
      Unsere Fotogalerie ist bunt und voller Leben.<br />
      Schau’ dich gerne um.
    </p>
    <div class="image-grid">
      <div class="image">
        <g-image
          src="../assets/images/index/photos-1.jpg"
          alt=""
        ></g-image>
      </div>
      <div class="image">
        <g-image
          src="../assets/images/index/photos-2.png"
          alt=""
        ></g-image>
      </div>
      <div class="image">
        <g-image
          src="../assets/images/index/photos-4.jpg"
          alt=""
        ></g-image>
      </div>
      <div class="image">
        <g-image
          src="../assets/images/index/photos-9.jpg"
          alt=""
        ></g-image>
      </div>
      <div class="image">
        <g-image
          src="../assets/images/index/photos-3.jpg"
          alt=""
        ></g-image>
      </div>
      <div class="image">
        <g-image
          src="../assets/images/index/photos-8.jpg"
          alt=""
        ></g-image>
      </div>
      <div class="image">
        <g-image
          src="../assets/images/index/photos-5.jpg"
          alt=""
        ></g-image>
      </div>
    </div>
    <g-link class="btn" to="/photos/">Zu allen Fotos</g-link>
  </section>
</template>

<style lang="scss" scoped>
@import "../assets/styles/global.scss";
.photos {
  text-align: center;
  padding: 9rem min(16vw, 17.5rem);
  br {
    display: none;
  }
  @media (max-width: $tablet-break) {
    // padding-inline: var(--padding-global-inline);
    padding-left: var(--padding-global-inline);
    padding-right: var(--padding-global-inline);
  }
  @media (max-width: $mobile-break) {
    br {
      display: block;
    }
  }
}
.photos h2 {
  padding-bottom: 0.5rem;
}
.image-grid {
  // padding-block: 3.5rem 6rem;
  padding-top: 3.5rem;
  padding-bottom: 6rem;
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(12, 1fr);

  @media (max-width: $tablet-break) {
    gap: 1rem;
  }

  @media (max-width: $mobile-break) {
    grid-template-columns: repeat(2, 1fr);
    .image:nth-of-type(even) {
      grid-column: 2/3;

      img {
        aspect-ratio: 1;
      }
    }

    .image:nth-of-type(odd) {
      grid-column: 1/2;

      img {
        aspect-ratio: 1;
      }
    }

    .image:last-child {
      display: none;
    }
  }

  @media (max-width: 400px) {
    display: block;
    // padding-block: 2.5rem 3rem;
    padding-top: 2.5rem;
    padding-bottom: 3rem;

    .image:nth-child(n) {
      img {
        aspect-ratio: 1.4;
        // padding-block-end: 2rem;
        padding-bottom: 2rem;
      }
    }
  }
}
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.image:nth-child(1) {
  grid-column: 1/8;
  img {
    aspect-ratio: 9/2;
  }
}
.image:nth-child(2) {
  grid-column: 8/13;
  img {
    aspect-ratio: 1.4;
  }
}
.image:nth-child(3) {
  grid-column: 1/5;
  img {
    aspect-ratio: 1;
  }
}
.image:nth-child(4) {
  grid-column: 5/9;
  img {
    aspect-ratio: 1;
  }
}
.image:nth-child(5) {
  grid-column: 9/13;
  img {
    aspect-ratio: 1;
  }
}
.image:nth-child(6) {
  grid-column: 1/6;
  img {
    aspect-ratio: 1.4;
  }
}
.image:nth-child(7) {
  grid-column: 6/13;
  img {
    aspect-ratio: 9/2;
  }
}
</style>