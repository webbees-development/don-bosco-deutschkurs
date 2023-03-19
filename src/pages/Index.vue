<template>
  <Layout>
    <Hero />
    <AboutUs/>
    <Appointment />
    <Participate />
    <Blog />
    <Photos />
    <Testimonial />
    <Ending />
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

<script>
import Hero from '../components/Hero.vue';
import AboutUs from '../components/AboutUs.vue';
import Appointment from  '../components/Appointment.vue';
import Participate from  '../components/Participate.vue';
import Blog from '../components/Blog.vue';
import Photos from '../components/Photos.vue';
import Testimonial from '../components/Testimonial.vue';
import Ending from '../components/Ending.vue';

export default {
  metaInfo() {
    const siteUrl = this.$static.metadata.siteUrl;
    const pageTitle = 'Startseite' +  ' | ' + this.$static.metadata.siteName;
    const pageDescription = "Deutschkurse für Flüchtlinge. Finden Sie Informationen über das Engagement der Salesianer Don Boscos für Flüchtlinge in Wien.";
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
  components:{
    Hero,
    AboutUs,
    Appointment,
    Participate,
    Blog,
    Photos,
    Testimonial,
    Ending
  }
}
</script>
