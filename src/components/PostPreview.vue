<template>
  <transition name="fade" appear>
    <g-link :to="link" class="preview">
      <figure>
        <div class="image-container">
          <g-image
            v-show="$useWebp === true"
            :class="['post-image', white_border ? 'white-border' : '']"
            :src="image.src.webp"
            :alt="image.alt"
          />
          <g-image
            v-show="$useWebp === false"
            :class="['post-image', white_border ? 'white-border' : '']"
            :src="image.src.source"
            :alt="image.alt"
          />
        </div>
        <figcaption>
          <h3>{{ title }}</h3>
          <p class="excerpt">{{ excerpt }}...</p>
          <p class="read-more">weiterlesen ></p>
        </figcaption>
      </figure>
    </g-link>
  </transition>
</template>

<script>
export default {
  // computed: {
  //   isServer() {
  //     return process.isServer;
  //   }
  // },
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
    white_border: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~/assets/styles/global.scss";

h3 {
  display: -webkit-box;
  margin-top: 2rem;
  overflow: hidden;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  word-wrap: break-word;

  @media (min-width: $mobile-break) {
    height: 2.8em;
  }
}

figcaption {
  max-width: min(80%, 50ch);
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 1500px) {
    max-width: min(80%, 60ch);
  }
  @media (max-width: 800px) {
    max-width: min(80%, 90ch);
  }
}

.image-container {
  position: relative;
  padding-top: 75%;
}
.post-image {
  background-image: url("../assets/images/index/hintergrund.jpg");
  border: 1.5rem solid transparent;
  transition: transform 1000ms ease;

  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;

  &:hover {
    transform: scale(1.1);
  }
}

p.excerpt {
  display: -webkit-box;
  margin-top: 0.5rem;
  margin-bottom: 1rem;
  overflow: hidden;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  word-wrap: break-word;
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

.white-border {
  background: white;
}
</style>
