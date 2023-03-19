<template>
  <Layout :texture_background="true">
    <section class="photos">
      <h2>Freude erleben und teilen:</h2>
      <p>
        Unsere Fotogalerie ist bunt und voller Leben. <br />Schau’ dich gerne
        um:
      </p>
      <div class="photos-container">
        <figure v-for="(photo, index) in photos" :key="index">
          <div class="photo-card">
            <g-image :src="photo.pathLong" />
          </div>
        </figure>
      </div>
    </section>
  </Layout>
</template>

<static-query>
  query {
    metadata {
      siteName
      siteDescription
      siteUrl
    }
    customImage(id : "site-logo") {
      src
    }
  }
</static-query>

<script>
export default {
  data() {
    return {
      photos: [],
    };
  },
  mounted() {
    this.importAll(
      require.context(
        "../assets/images/image-gallery",
        true,
        /\.(png|jpg|svg)$/
      )
    );
  },
  methods: {
    importAll(r) {
      r.keys().forEach((key) =>
        this.photos.push({ pathLong: r(key), pathShort: key })
      );
    },
  },
  metaInfo() {
    const siteUrl = this.$static.metadata.siteUrl;
    const pageTitle = 'Foto Gallerie | Freude erleben und teilen' +  ' | ' + this.$static.metadata.siteName;
    const pageDescription = "";
    const pageUrl = `${siteUrl}${this.$route.path}`;
    const image = this.$static.customImage ? this.$static.customImage.src : undefined;
    const imagePath = image ? `${siteUrl}${image.src}` : ''
    return {
      title: pageTitle.split('|')[0].trim(),
      meta: [
        { key: 'description', name: 'description', content: pageDescription },
        { key: 'og:url', property: 'og:url', content: pageUrl },
        {
          key: 'og:title',
          property: 'og:title',
          content: pageTitle
        },
        {
          key: 'og:type',
          property: 'og:type',
          content: 'website'
        },
        {
          key: 'og:description',
          property: 'og:description',
          content: pageDescription
        },
        {
          key: 'og:image',
          property: 'og:image',
          content: imagePath
        },
        {
          key: 'og:image:width',
          property: 'og:image:width',
          content: image ? image.size.width : ''
        },
        {
          key: 'og:image:height',
          property: 'og:image:height',
          content: image ? image.size.height : ''
        },
        {
          key: 'twitter:description',
          name: 'twitter:description',
          content: pageDescription
        },
        {
          key: 'twitter:card',
          name: 'twitter:card',
          content: image ? 'summary_large_image' : 'summary'
        },
        {
          key: 'twitter:image',
          property: 'twitter:image',
          content: imagePath
        },
        {
          key: 'twitter:title',
          property: 'twitter:title',
          content: pageTitle
        }
      ],
      script: [
        {
          type: 'application/ld+json',
          json: {
            '@context': 'http://schema.org',
            '@type': 'Website',
            description: pageDescription,
            headline: pageTitle,
            image: imagePath
          }
        }
      ],
    }
  },
};
</script>

<style lang="scss" scoped>
@import "~/assets/styles/global.scss";
.photos {
  text-align: center;
  padding-inline: var(--padding-global-inline);
  padding-block: 4rem 2em;
  br {
    display: none;
  }
  @media (max-width: 474px) {
    br {
      display: block;
    }
  }
}
.photos-container {
  padding-block: 4rem 6rem;
  @media (max-width: 720px) {
    padding-block: 2rem 3rem;
  }
  @media (max-width: 488px) {
    padding-block: 3rem 3rem;
  }
}
.photo-card {
  background-image: url("../assets/images/index/rahmen2.png");
  background-repeat: no-repeat;
  background-size: 100%;
  width: 25rem;
  max-width: 100%;
  @media (max-width: 1079px) {
    width: 20rem;
  }
  @media (max-width: 879px) {
    width: 16rem;
  }
  @media (max-width: 720px) {
    width: 20rem;
  }
  @media (max-width: 488px) {
    width: 28rem;
  }
}
.photo-card > img {
  aspect-ratio: 1.3;
  object-fit: cover;
  padding: 6.5% 4.1% 13% 4.5%; 
  width: 100%;
}
figure {
  position: relative;
  display: inline-block;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  margin: 1rem;
  max-width: 40rem;
  min-width: 0;
  transition: transform 150ms ease-in;

  &:hover {
    transform: scale(1.5) rotate(0);
    z-index: 100;
  }

  @media (max-width: 488px) {
    transform: rotate(12deg);
  }
}

figure:nth-last-of-type(even) {
  transform: rotate(12deg);
  transition: transform 150ms ease-in;

  &:hover {
    transform: scale(1.5) rotate(0);
    z-index: 100;
  }

  @media (max-width: 720px) {
    transform: rotate(0);
  }
}
</style>