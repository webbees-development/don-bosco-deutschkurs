<template>
  <Layout :texture_background="true">
    <section class="photos">
      <h2>Freude erleben und teilen:</h2>
      <p>
        Unsere Fotogalerie ist bunt und voller Leben. <br />Schau’ dich gerne
        um:
      </p>
      <div class="photos-container">
        <figure v-for="(photo, index) in loadedPhotos" :key="index">
          <div class="photo-card">
            <g-image v-if="photo.node.src" :src="photo.node.src" :alt="photo.node.alt" />
          </div>
        </figure>
      </div>
      <ClientOnly>
        <infinite-loading @infinite="infiniteHandler" spinner="spiral">
          <div slot="no-more">
          </div>
          <div slot="no-results">
          </div>
        </infinite-loading>
      </ClientOnly>
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

<page-query>
  query ($page: Int) {
    images: allGalleryImage(perPage: 9, page: $page) @paginate {
      pageInfo {
        totalPages
        currentPage
      }
      edges {
        node {
          src
          alt
        }
      }
    } 
  }
</page-query>

<script>
export default {
  data() {
    return {
      loadedPhotos: [],
      currentPage: 1,
    }
  },
  created() {
    this.loadedPhotos.push(...this.$page.images.edges);
  },
  methods: {
    async infiniteHandler($state) {
      if (this.currentPage + 1 > this.$page.images.pageInfo.totalPages) {
        $state.complete();
      } else {
        const { data } = await this.$fetch(`/photos/${this.currentPage + 1}`);
        if (data.images.edges.length) {
          this.currentPage = data.images.pageInfo.currentPage;
          this.loadedPhotos.push(...data.images.edges);
          $state.loaded();
        } else {
          $state.complete();
        }
      }
    }
  },
  metaInfo() {
    const siteUrl = this.$static.metadata.siteUrl;
    const pageTitle = 'Foto Gallerie | Freude erleben und teilen' +  ' | ' + this.$static.metadata.siteName;
    const pageDescription = "Erkunden Sie unsere Gallerie. Deutschkurse für Flüchtlinge in Wien.";
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
  // padding-inline: var(--padding-global-inline);
  padding-left: var(--padding-global-inline);
  padding-right: var(--padding-global-inline);
  // padding-block: 4rem 2em;
  padding-top: 4rem;
  padding-bottom: 2em;

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
  // padding-block: 4rem 6rem;
  padding-top: 4rem;
  padding-bottom: 6rem;

  @media (max-width: 720px) {
    // padding-block: 2rem 3rem;
    padding-top: 2rem;
    padding-bottom: 3rem;
  }
  @media (max-width: 488px) {
    // padding-block: 3rem 3rem;
    padding-top: 3rem;
    padding-bottom: 3rem;
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