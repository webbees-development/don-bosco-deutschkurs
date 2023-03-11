<template>
  <Layout>
    <Hero />
    <AboutUs/>
  </Layout>
</template>

<script>
import Hero from '../components/Hero.vue';
import AboutUs from '../components/AboutUs.vue';
export default {
  metaInfo: {
    title: "Don Bosco für Flüchtlinge",
  },
  components:{
    Hero,
    AboutUs
  }
}
</script>
