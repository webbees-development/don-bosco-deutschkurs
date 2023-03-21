<template>
  <Layout>
    <section>
      <h1>Fehler 404</h1>
      <p>Hupsi. Das war wohl nix.<br>Hier ein Kätzchen zur Aufmunterung:</p>
      <g-image src="../assets/images/404/404.png" alt="Kätzchen spielt mit Wollball" />
      <g-link class="btn" to="/">← Startseite</g-link>
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
    customImage(id : "site-logo") {
      src
    }
  }
</static-query>

<script>
export default {
  metaInfo() {
    const siteUrl = this.$static.metadata.siteUrl;
    const pageTitle = 'Seite nicht gefunden' +  ' | ' + this.$static.metadata.siteName;
    const pageDescription = "";
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
}
</script>

<style lang="scss" scoped>
@import "~/assets/styles/global.scss";

section{
  text-align: center;
  padding: 5rem min(16vw, 17.5rem);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
p{
padding-block: 2rem
}

.btn {
  margin-block-start: 2em;
}
</style>