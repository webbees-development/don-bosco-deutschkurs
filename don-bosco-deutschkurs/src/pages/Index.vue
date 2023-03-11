<template>
  <Layout>
    <Hero />
    <AboutUs/>
    <Appointment />
    <Participate />
  </Layout>
</template>

<script>
import Hero from '../components/Hero.vue';
import AboutUs from '../components/AboutUs.vue';
import Appointment from  '../components/Appointment.vue';
import Participate from  '../components/Participate.vue';
export default {
  metaInfo: {
    title: "Don Bosco für Flüchtlinge",
  },
  components:{
    Hero,
    AboutUs,
    Appointment,
    Participate
  }
}
</script>
