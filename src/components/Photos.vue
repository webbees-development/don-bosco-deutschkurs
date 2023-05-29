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
          v-show="$useWebp === true" 
          src="../assets/images/index/photos-1.webp" 
          alt="Willkommensposter in verschiedenen Sprachen" 
        />
        <g-image
          v-show="$useWebp === false" 
          src="../assets/images/index/photos-1.jpg" 
          alt="Willkommensposter in verschiedenen Sprachen" 
        />
      </div>
      <div class="image">
        <g-image
          v-show="$useWebp === true" 
          src="../assets/images/index/photos-2.webp"
          alt="Jemand bekommt ein Armband angelegt" 
        />
        <g-image
          v-show="$useWebp === false" 
          src="../assets/images/index/photos-2.jpg"
          alt="Jemand bekommt ein Armband angelegt" 
        />
      </div>
      <div class="image">
        <g-image
          v-show="$useWebp === true" 
          src="../assets/images/index/photos-4.webp"
          alt="Ein Bild vom Deutschkurs wie die Schüler:innen am Tisch sitzen mit ihrer Lehrerin" 
        />
        <g-image
          v-show="$useWebp === false" 
          src="../assets/images/index/photos-4.jpg"
          alt="Ein Bild vom Deutschkurs wie die Schüler:innen am Tisch sitzen mit ihrer Lehrerin" 
        />
      </div>
      <div class="image">
        <g-image
          v-show="$useWebp === true" 
          src="../assets/images/index/photos-9.webp"
          alt="Eine Freiwillige schaut einem Lernenden über die Schulter" 
        />
        <g-image
          v-show="$useWebp === false" 
          src="../assets/images/index/photos-9.jpg"
          alt="Eine Freiwillige schaut einem Lernenden über die Schulter" 
        />
      </div>
      <div class="image">
        <g-image
          v-show="$useWebp === true" 
          src="../assets/images/index/photos-3.webp"
          alt="Freiwillige posieren auf einer Treppe" 
        />
        <g-image
          v-show="$useWebp === false" 
          src="../assets/images/index/photos-3.jpg"
          alt="Freiwillige posieren auf einer Treppe" 
        />
      </div>
      <div class="image">
        <g-image
          v-show="$useWebp === true" 
          src="../assets/images/index/photos-8.jpg"
          alt="Eine Freiwillige sitzt mit 3 Schülern zusammen auf der Couch" 
        />
        <g-image
          v-show="$useWebp === false" 
          src="../assets/images/index/photos-8.jpg"
          alt="Eine Freiwillige sitzt mit 3 Schülern zusammen auf der Couch" 
        />
      </div>
      <div class="image">
        <g-image
          v-show="$useWebp === true" 
          src="../assets/images/index/photos-5.jpg"
          alt="Gruppenfoto vom Faschingsfest" 
        />
        <g-image
          v-show="$useWebp === false" 
          src="../assets/images/index/photos-5.jpg"
          alt="Gruppenfoto vom Faschingsfest" 
        />
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
    .image:nth-of-type(even),
    .image:nth-of-type(odd) {
      grid-column: span 1;
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
    padding-top: 2.5rem;
    padding-bottom: 3rem;

    .image:nth-child(n) {
      img {
        aspect-ratio: 1.4;
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


.image:nth-child(1),
.image:nth-child(7) {
  grid-column: span 7;
  img {
    aspect-ratio: 9/2;
  }
}
.image:nth-child(2),
.image:nth-child(6)  {
  grid-column: span 5;
  img {
    aspect-ratio: 1.4;
  }
}
.image:nth-child(3),
.image:nth-child(4),
.image:nth-child(5) {
  grid-column: span 4;
  img {
    aspect-ratio: 1;
  }
}

</style>