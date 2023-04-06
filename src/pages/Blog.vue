<template>
  <Layout>
    <section class="featured-post-section">
      <h1>Erfolgsgeschichten & Worte der Dankbarkeit</h1>
      <g-link v-if="loadedPosts.length > 0" class="featured-post-preview" :to="`/beitrag/${loadedPosts[0].node.id}`">
        <div>
          <h3>{{ loadedPosts[0].node.title }}</h3>
          <hr>
          <p class="excerpt">{{ loadedPosts[0].node.excerpt }}</p>
          <p class="read-more">weiterlesen ></p>
        </div>
        <div>
          <g-image
            v-show="$useWebp === true" 
            :class="['post-image', white_border ? 'white-border': '']"
            :src="loadedPosts[0].node.featured_image.src.webp"
            :alt="loadedPosts[0].node.featured_image.alt" 
          />
          <g-image
            v-show="$useWebp === false" 
            :class="['post-image', white_border ? 'white-border': '']"
            :src="loadedPosts[0].node.featured_image.src.source"
            :alt="loadedPosts[0].node.featured_image.alt" 
          />
        </div>
      </g-link>
    </section>
    <section class="post-previews">
      <div class="post-container">
        <PostPreview
          v-for="{ node } in loadedPosts.slice(1)"
          :key="node.id"
          :link="`/beitrag/${node.id}/`"
          :image="node.featured_image"
          :title="node.title"
          :excerpt="node.excerpt"
        />
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
    posts: allPost(perPage: 10, page: $page, filter: { published: { eq: true } }) @paginate {
      pageInfo {
        totalPages
        currentPage
      }
      edges {
        node {
          id
          title
          featured_image {
            src {
              webp
              source
            }
            alt
          }
          excerpt
        }
      }
    } 
  }
</page-query>

<script>
import PostPreview from '../components/PostPreview.vue';

export default {
  components: {
    PostPreview
  },
  data() {
    return {
      loadedPosts: [],
      currentPage: 1,
    }
  },
  created() {
    this.loadedPosts.push(...this.$page.posts.edges);
  },
  methods: {
    async infiniteHandler($state) {
      if (this.currentPage + 1 > this.$page.posts.pageInfo.totalPages) {
        $state.complete();
      } else {
        const { data } = await this.$fetch(`/blog/${this.currentPage + 1}`)
        if (data.posts.edges.length) {
          this.currentPage = data.posts.pageInfo.currentPage;
          this.loadedPosts.push(...data.posts.edges);
          $state.loaded();
        } else {
          $state.complete();
        }
      }
    }
  },
  metaInfo() {
    const siteUrl = this.$static.metadata.siteUrl;
    const pageTitle = 'Erfolgsgeschichten & Worte der Dankbarkeit' +  ' | ' + this.$static.metadata.siteName;
    const pageDescription = "Lesen Sie unsere Beiträge zu Erfolgsgeschichten & Worte der Dankbarkeit. Erfahren Sie mehr über unsere Deutschkurse für Flüchtlinge in Wien.";
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
}
</script>

<style lang="scss" scoped>
@import "~/assets/styles/global.scss";

.featured-post-preview {
  align-items: center;
  display: grid;
  grid-template-columns: 1fr 1fr;
  // padding-block-start: 5rem;
  padding-top: 5rem;

  div:first-of-type {
    // padding-inline-end: 8.5rem;
    padding-right: 8.5rem;
  }

  h3 {
    display: -webkit-box;
    // margin-block-start: 1em;
    margin-top: 1em;
    overflow: hidden;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;  
    word-wrap: break-word;
  }

  hr {
    border-color: var(--clr-primary);
    border-style: solid;
    border-width: 2.5px;
    // margin-block-start: 0.5rem;
    margin-top: 0.5rem;
    // margin-block-end: 2rem;
    margin-bottom: 2rem;
    width: 100px;
  }

  img {
    aspect-ratio: 1.5;
    background-color: white;
    border: 22px solid transparent;
    object-fit: cover;
    transition: transform 1000ms ease;
    width: 100%;

    &:hover {
      transform: scale(1.1);
    }
  }

  p.excerpt {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .read-more {
    display: block;
    color: var(--clr-primary);
    // margin-block-start: 2rem;
    margin-top: 2rem;

    &:hover {
      text-decoration: underline;
    }
  }

  .read-more {
    font-family: var(--ff-primary);
    font-size: var(--fs-400);
    font-style: italic;
    line-height: 1.8;

    @media (max-width: 1300px) {
      line-height: 1.6;
    }
  }

  @media (max-width: $tablet-break) {
    grid-template-columns: 1fr;

    div:first-of-type {
      grid-row-start: 2;
      grid-row-end: 3;
      padding-right: 0;
      text-align: center;
    }

    h3 {
      // margin-block-start: 4rem;
      margin-top: 4rem;
    }

    hr {
      // margin-inline: auto;
      margin-left: auto;
      margin-right: auto;
    }

    p {
      // margin-inline: auto;
      margin-left: auto;
      margin-right: auto;
      max-width: 60ch;
    }
  }

  &:focus-visible {
    outline: none;
    
    .post-image {
      transform: scale(1.15);
    }

    .read-more {
      text-decoration: underline;
    }
  }
}

.featured-post-section {
  background-image: url("../assets/images/index/hintergrund.jpg");
  background-image: url("../assets/images/index/hintergrund.webp");
  // padding-block-start: 6rem;
  padding-top: 6rem;
  // padding-block-end: 9rem;
  padding-bottom: 9rem;
  position: relative;
  // padding-inline: var(--padding-global-inline);
  padding-left: var(--padding-global-inline);
  padding-right: var(--padding-global-inline);

  h1 {
    text-align: center;
  }
}

.post-container {
  display: grid;
  column-gap: 3rem;
  row-gap: 6rem;
  grid-template-columns: repeat(3, 1fr);

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
}

.post-previews {
  // padding-block: 9rem;
  padding-top: 9rem;
  padding-bottom: 9rem;
  // padding-inline: var(--padding-global-inline);
  padding-left: var(--padding-global-inline);
  padding-right: var(--padding-global-inline);
}
</style>