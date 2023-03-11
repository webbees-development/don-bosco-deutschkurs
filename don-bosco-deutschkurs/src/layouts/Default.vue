<template>
  <div class="layout">
    <Header />
    <main>
      <slot />
    </main>
  </div>
</template>

<script>
import Header from '../components/Header.vue';

export default {
  components: {
    Header,
  },
};
</script>

<style>
.layout {
  width: 100%;
}
</style>
