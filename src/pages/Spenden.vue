<template>
  <Layout :texture_background="true">
    <section class="donation">
      <h1>Spenden</h1>
      <p>Die Initiative „Don Bosco für Flüchtlinge“ bietet kostenlose Deutschkurse für Geflüchtete an. Die Fähigkeit, Deutsch zu sprechen, ist für Flüchtlinge von entscheidender Bedeutung, um ihre Integration in Österreich zu fördern und ihre Chancen auf Arbeit und Bildung zu verbessern. „Don Bosco für Flüchtlinge“ baut auf dem Engagement von Freiwilligen auf, jedoch fallen Ausgaben an, beispielsweise für Lern- und Schreibmaterialien.</p>
      <p>Vielen Dank für Ihre Unterstützung!</p>
      <hr>
      <div class="bank">
        <p>IBAN: AT26 6000 0000 0133 5664</p>
        <p>BIC: OPSKATWW</p>
        <p>Verwendungszweck "Don Bosco für Flüchtlinge"</p>
      </div>
    </section>
  </Layout>
</template>

<static-query>
  query {
    metadata {
      siteName
      siteDescription
      siteUrl
    }
  }
  </static-query>

<script>
export default {
  data() {
    return {
      showIcons: false,
    }
  },
  metaInfo() {
    const siteUrl = this.$static.metadata.siteUrl;
    const pageTitle = 'Spenden' + ' | ' + this.$static.metadata.siteName;
    const pageDescription = "";
    const pageUrl = siteUrl;
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
}
</script>

<style lang="scss" scoped>
@import "~/assets/styles/global.scss";

h1 {
  margin-block-end: 1em;
}

hr {
  border-color: var(--clr-primary);
  border-style: solid;
  border-width: 2.5px;
  margin-block-start: 3rem;
  margin-block-end: 3rem;
  margin-inline: auto;
  width: 100px;
}

p + p {
  margin-block-start: 1em;
}

.bank p + p {
  margin-block-start: 0.25em;
}

.donation {
  background-image: url("../assets/images/index/hintergrund.png");
  margin-block: 6rem 9rem;
  margin-inline: auto;
  max-width: 800px;
  padding: 5rem 3.5rem; 
  text-align: center;

  @media (max-width: 864px) {
    margin-inline: 2rem;
  }
}
</style>