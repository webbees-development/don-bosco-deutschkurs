<template>
  <section id="blog" class="blog">
    <h2>Erfolgsgeschichten & Worte der Dankbarkeit</h2>
    <GenericSlider>
      <PostPreview
        v-for="{ node } in $static.posts.edges"
        :key="node.id"
        class="slide generic-slide"
        :link="`/beitrag/${node.id}/`"
        :image="node.featured_image"
        :title="node.title"
        :excerpt="node.excerpt"
        :white_border="true"
      />
    </GenericSlider>
    <g-link class="btn" to="/blog/">zu allen Beiträgen</g-link>
  </section>
</template>

<static-query>
  query {
    posts: allPost(perPage: 6, filter: { published: { eq: true } }) {
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
</static-query>

<script>
import GenericSlider from './GenericSlider.vue';
import PostPreview from './PostPreview.vue';
export default{
  components:{
    GenericSlider,
    PostPreview
  },
}
</script>

<style lang="scss" scoped>
@import "~/assets/styles/global.scss";

h2 {
  // padding-block-end: 3.125rem;
  padding-bottom: 3.125rem;
}
.blog { 
  text-align: center;

  background-image: url("../assets/images/index/hintergrund.jpg");
  background-image: url("../assets/images/index/hintergrund.webp");
  // padding-block: 9rem;
  padding-top: 9rem;
  padding-bottom: 9rem;
  // padding-inline: min(11vw, 15rem);
  padding-left: min(11vw, 15rem);
  padding-right: min(11vw, 15rem);
  // padding-inline: min(9vw, 11rem);

  --carousel-btn-spacing: -5.5rem;
  --carousel-btn-upper-spacing: 16%;
  --carousel-btn-color: var(--clr-primary);

  @media (max-width: 1750px) {
    --carousel-btn-spacing: -4.5rem;
    --carousel-btn-upper-spacing: 14%;
  }
  @media (max-width: 1500px) {
    //--carousel-btn-spacing: -3rem;
    --carousel-btn-upper-spacing: 20%;
  }

}
.btn {
  // margin-block-start: 5rem;
  margin-top: 5rem;
}
</style>