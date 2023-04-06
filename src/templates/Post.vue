<template>
  <Layout :texture_background="true">
    <section v-if="$page.post.published">
      <div class="image-container">
        <g-image
          v-show="$useWebp === true" 
          class="featured-image"
          :src="$page.post.featured_image.src.webp"
          :alt="$page.post.featured_image.alt" 
        />
        <g-image
          v-show="$useWebp === false" 
          class="featured-image"
          :src="$page.post.featured_image.src.source"
          :alt="$page.post.featured_image.alt" 
        />
      </div>
      <article>
        <div class="content">
          <h3>{{ $page.post.title }}</h3>
          <div class="article-content" v-html="$page.post.content"></div>
          <g-link class="back-to-blog" to="/blog/">← zurück zu Beiträgen</g-link>
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
      featured_image {
        src {
          webp
          source
        }
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
// Responsiveness
@media (max-width: 1904px) {
  article {
    // margin-inline-end: calc(3rem + var(--padding-global-inline));
    margin-right: calc(3rem + var(--padding-global-inline));
  }
  .image-container {
    // padding-inline-start: calc(3rem + var(--padding-global-inline));
    padding-left: calc(3rem + var(--padding-global-inline));
  }
}

@media (max-width: 1872px) {
  article {
    // margin-inline-end: calc(2rem + var(--padding-global-inline));
    margin-right: calc(2rem + var(--padding-global-inline));
  }
  .image-container {
    // padding-inline-start: calc(2rem + var(--padding-global-inline));
    padding-left: calc(2rem + var(--padding-global-inline));
  }
}

@media (max-width: 1840px) {
  article {
    // margin-inline-end: calc(1rem + var(--padding-global-inline));
    margin-right: calc(1rem + var(--padding-global-inline));
  }
  .image-container {
    // padding-inline-start: calc(1rem + var(--padding-global-inline));
    padding-left: calc(1rem + var(--padding-global-inline));
  }
}

@media (max-width: 1808px) {
  article {
    // margin-inline-end: var(--padding-global-inline);
    margin-right: var(--padding-global-inline);
  }
  .image-container {
    // padding-inline-start: var(--padding-global-inline);
    padding-left: var(--padding-global-inline);
  }
}

@media (max-width: 1700px) {
  article {
    // margin-inline-end: calc(3.5rem + var(--padding-global-inline));
    margin-right: calc(3.5rem + var(--padding-global-inline));
  }
  .image-container {
    // padding-inline-start: calc(3.5rem + var(--padding-global-inline));
    padding-left: calc(3.5rem + var(--padding-global-inline));
  }
}

@media (max-width: 1684px) {
  article {
    // margin-inline-end: calc(3rem + var(--padding-global-inline));
    margin-right: calc(3rem + var(--padding-global-inline));
  }
  .image-container {
    // padding-inline-start: calc(3rem + var(--padding-global-inline));
    padding-left: calc(3rem + var(--padding-global-inline));
  }
}

@media (max-width: 1652px) {
  article {
    // margin-inline-end: calc(2rem + var(--padding-global-inline));
    margin-right: calc(2rem + var(--padding-global-inline));
  }
  .image-container {
    // padding-inline-start: calc(2rem + var(--padding-global-inline));
    padding-left: calc(2rem + var(--padding-global-inline));
  }
}

@media (max-width: 1620px) {
  article {
    // margin-inline-end: calc(1rem + var(--padding-global-inline));
    margin-right: calc(1rem + var(--padding-global-inline));
  }
  .image-container {
    // padding-inline-start: calc(1rem + var(--padding-global-inline));
    padding-left: calc(1rem + var(--padding-global-inline));
  }
}

@media (max-width: 1588px) {
  article {
    // margin-inline-end: var(--padding-global-inline);
    margin-right: var(--padding-global-inline);
  }
  .image-container {
    // padding-inline-start: var(--padding-global-inline);
    padding-left: var(--padding-global-inline);
  }
}
</style>

<style lang="scss" scoped>
@import "~/assets/styles/global.scss";

article {
  background-image: url("../assets/images/index/hintergrund.jpg");
  background-image: url("../assets/images/index/hintergrund.webp");
  background-repeat: repeat;
  // margin-block-end: 15rem;
  margin-bottom: 15rem;
  // margin-block-start: 9rem;
  margin-top: 9rem;
  // margin-inline-end: calc(3.5rem + var(--padding-global-inline));
  margin-right: calc(3.5rem + var(--padding-global-inline));
  // margin-inline-start: auto;
  margin-left: auto;
  max-width: 59rem;
  padding: 1.5rem;
  position: relative;
  transform: translateY(6rem);

  @media (max-width: 1100px) {
    // margin-block-end: 21rem;
    margin-bottom: 21rem;
    transform: translateY(12rem);
  }

  @media (max-width: $tablet-break) {
    // margin-block-start: var(--padding-global-inline);
    margin-top: var(--padding-global-inline);
    // margin-block-end: calc(30vw + 13rem);
    margin-bottom: calc(30vw + 13rem);
    // margin-inline-end: auto;
    margin-right: auto;
    // margin-inline-start: auto;
    margin-left: auto;
    transform: translateY(30vw);
  }

  @media (min-width: $mobile-break) and (max-width: $tablet-break) {
    width: 70%;
  }

  @media (max-width: 700px) {
    // margin-block-end: calc(50vw + 13rem);
    margin-bottom: calc(50vw + 13rem);
    transform: translateY(50vw);
  }

  @media (max-width: $mobile-break) {
    // margin-inline: 2rem;
    margin-left: 2rem;
    margin-right: 2rem;
  }
}

section {
  max-width: 1920px;
  position: relative;
}

.back-to-blog {
  color: var(--clr-primary);
  display: block;
  font-family: var(--ff-primary);
  font-size: var(--fs-400);
  font-style: italic;
  line-height: 1.8;
  // margin-block-start: 3rem;
  margin-top: 3rem;

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

  h3 {
    // margin-block-end: 4rem;
    margin-bottom: 4rem;
    text-align: center;
  }  
}

.featured-image {
  aspect-ratio: 16 / 10;
  object-fit: cover;
  width: 100%;
}

.image-container {
  box-sizing: content-box;
  width: 31.25%;
  // padding-inline-start: calc(3.5rem + var(--padding-global-inline));
  padding-left: calc(3.5rem + var(--padding-global-inline));
  position: absolute;
  z-index: 0;

  @media (max-width: $tablet-break) {
    width: 50%;
    transform: translateX(calc(50vw - 50%));
    // padding-inline-start: 0;
    padding-left: 0;
  }

  @media (max-width: 700px) {
    // margin-block-start: -4rem;
    margin-top: -4rem;
    width: 100%;
  }
}

.share-buttons {
  position: absolute;
  left: -3.5rem;
  top: 18.5rem;

  & > * {
    display: block;
  }

  & > * + * {
    // margin-block-start: 0.5rem;
    margin-top: 0.5rem;
  }

  @media (max-width: $tablet-break) {
    right: -4rem;
  }

  @media (max-width: $mobile-break) {
    left: 2.2rem;
    top: 2.2rem;

    & > * {
      display: inline-block;
      vertical-align: baseline;
    }

    & > * + * {
      // margin-block-start: 0;
      margin-top: 0;
      // margin-inline-start: 0.5rem;
      margin-left: 0.5rem;
    }
  }
}
</style>

<!-- styles for content -->
<!-- add styles for other markdown elements -->
<style lang="scss">
.article-content {
  & > * + * {
    // margin-block-start: 1em;
    margin-top: 1em;
  }

  a {
    text-decoration: underline;
  }
  
  img {
    width: 100%;
  }

  ol, ul {
    // margin-inline-start: 1rem;
    margin-left: 1rem;

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

  strong {
    font-weight: 600;
  }

  ul {
    list-style-type: disc;
  }
}
</style>