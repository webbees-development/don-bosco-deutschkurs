<template>
  <transition name="fade" appear>
    <g-link :to="link" class="preview">
      <figure>
        <g-image immediate class="post-image" :src="image.src" :alt="image.alt"></g-image>
      </figure>
      <h3>{{ title }}</h3>
      <p>{{ excerpt }}...</p>
      <a class="read-more">weiterlesen ></a>
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
</style>