<template>
  <transition name="fade" appear>
    <g-link :to="link" class="preview">
      <figure>
        <g-image immediate :class="['post-image', white_border ? 'white-border': '']" :src="image.src" :alt="image.alt"></g-image>
        <figcaption>
          <h3>{{ title }}</h3>
          <p>{{ excerpt }}...</p>
          <g-link :to="link" class="read-more">weiterlesen ></g-link>
        </figcaption>
      </figure>
    </g-link>
  </transition>
</template>

<script>
export default {
  props: {
    excerpt: {
      type: String,
      required: true,
    },
    image: {
      type: Object,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    white_border:{
      type: Boolean,
      default: false,
    }
  }
}
</script>

<style lang="scss" scoped>
h3 {
  display: -webkit-box;
  height: 2.8em;
  margin-block-start: 2rem;
  overflow: hidden;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;  
  word-wrap: break-word;
}

figcaption{
  max-width: 50ch;
  margin-inline: auto;

  @media (max-width: 1500px) {
    max-width: 60ch;
  }
  @media (max-width: 800px) {
  max-width: 90ch;
  }
}

p {
  display: -webkit-box;
  margin-block-start: 0.5rem;
  margin-block-end: 1rem;
  overflow: hidden;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  word-wrap: break-word;
}

.post-image {
  aspect-ratio: 1.4;
  background-image: url("../assets/images/index/hintergrund.png");
  border: 22px solid transparent;
  object-fit: cover;
  transition: transform 1000ms ease;
  width: 100%;

  &:hover {
    transform: scale(1.1);
  }
}

.preview {
  text-align: center;

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

.read-more {
  color: var(--clr-primary);

  font-family: var(--ff-primary);
  font-size: var(--fs-400);
  font-style: italic;
  line-height: 1.8;

  @media (max-width: 1300px) {
    line-height: 1.6;
  }

  &:hover {
    text-decoration: underline;
  }
}

.white-border{
  background: white;
}
</style>