<template>
  <Layout :texture_background="true">
    <section v-if="$page.post.published">
      <div class="image-container">
        <g-image class="featured-image" :src="$page.post.featured_image.src" :alt="$page.post.featured_image.alt" />
      </div>
      <article>
        <div class="content">
          <h1>{{ $page.post.title }}</h1>
          <div class="article-content" v-html="$page.post.content"></div>
          <g-link class="back-to-blog" to="/blog">< zurück zu Beiträgen</g-link>
        </div>
        <div class="share-buttons">
          <FacebookShareButton :url="$route ? $static.metadata.siteUrl + $route.path : $static.metadata.siteUrl"></FacebookShareButton>
          <!-- Instagram -->

          <TwitterShareButton :url="$route ? $static.metadata.siteUrl + $route.path : $static.metadata.siteUrl"></TwitterShareButton>
          <PinterestShareButton :url="$route ? $static.metadata.siteUrl + $route.path : $static.metadata.siteUrl"></PinterestShareButton>
          <EmailShareButton :url="$route ? $static.metadata.siteUrl + $route.path : $static.metadata.siteUrl"></EmailShareButton>
        </div>
      </article>
    </section>
    <section v-else>
      <div>
        <h1>Dieser Beitrag wurde noch nicht freigegeben.</h1>
      </div>
    </section>
  </Layout>
</template>

<page-query>
  query Post ($id: ID!) {
    post: post (id: $id) {
      id
      title
      description
      date (format: "DD.MM.YYYY")
      content
      gallery_images {
        src
        alt
      }
      featured_image {
        src
        alt
      }
      published
    }
    metadata {
      siteUrl
    }
  }
  </page-query>

<script>
import SEO from '../mixins/SEO.vue';
import EmailShareButton from '../components/share_buttons/EmailShareButton.vue'
import FacebookShareButton from '../components/share_buttons/FacebookShareButton.vue'
import PinterestShareButton from '../components/share_buttons/PinterestShareButton.vue'
import TwitterShareButton from '../components/share_buttons/TwitterShareButton.vue'

export default {
  components: {
    EmailShareButton,
    FacebookShareButton,
    PinterestShareButton,
    TwitterShareButton
  },
  mixins: [SEO],
}
</script>

<style lang="scss" scoped>
@import "~/assets/styles/global.scss";

article {
  background-image: url("../assets/images/index/hintergrund.png");
  background-repeat: repeat;
  transform: translateY(-9rem);
  margin-inline: auto;
  max-width: 59rem;
  padding: 1.5rem;
  position: relative;

  @media (min-width: $mobile-break) and (max-width: $tablet-break) {
    width: 80%;
  }

  @media (max-width: $mobile-break) {
    margin-inline: 2rem;
  }
}

.back-to-blog {
  color: var(--clr-primary);
  display: block;
  font-family: var(--ff-primary);
  font-size: var(--fs-400);
  font-style: italic;
  line-height: 1.8;
  margin-block-start: 3rem;

  @media (max-width: 1300px) {
    line-height: 1.6;
  }

  &:hover {
    text-decoration: underline;
  }
}

.content {
  background-color: white;
  padding: 4rem;

  h1 {
    margin-block-end: 6rem;
    text-align: center;
  }  
}

.featured-image {
  width: 100%;
}

.image-container {
  margin-block-start: 6rem;
  margin-inline: auto;
  max-width: 1200px;

  @media (max-width: 1296px) {
    margin-inline: 6rem;
  }

  @media (max-width: $tablet-break) {
    margin-block-start: 0;
    margin-inline: 0;
  }
}

.share-buttons {
  position: absolute;
  right: -5rem;
  top: 11rem;

  & > * {
    display: block;
  }

  & > * + * {
    margin-block-start: 0.5rem;
  }

  @media (max-width: $tablet-break) {
    right: -4rem;
  }

  @media (max-width: $mobile-break) {
    right: 2rem;
    top: 2rem;

    & > * {
      display: inline-block;
      vertical-align: baseline;
    }

    & > * + * {
      margin-block-start: 0;
      margin-inline-start: 0.5rem;
    }
  }
}
</style>

<style lang="scss">
.article-content {
  & > * + * {
    margin-block-start: 1em;
  }

  a {
    text-decoration: underline;
  }
  
  img {
    width: 100%;
  }

  ol, ul {
    margin-inline-start: 1rem;

    color: var(--clr-text);
    font-family: var(--ff-primary);
    font-size: var(--fs-400);
    font-style: italic;
    line-height: 1.8;

    @media (max-width: 1300px) {
      line-height: 1.6;
    }
  }

  ol {
    list-style-type: decimal;
  }

  ul {
    list-style-type: disc;
  }
}
</style>