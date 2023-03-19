<template>
  <Layout>
    <section>
      <h1>Impressum</h1>
      <h2>Inhaber der Webseite</h2>
      <div class="grid">
        <div>
          <h3>Adresse</h3>
        </div>
        <div>
          <p><strong>Don Bosco für Flüchtlinge</strong></p>
          <p>Hagenmüllergasse 31</p>
          <p>1030 Wien</p>
          <p>donbosco.deutschkurs@gmail.at</p>
          <a href="https://fluechtlinge.donbosco.at/">https://fluechtlinge.donbosco.at/</a>
        </div>
      </div>
      <div class="grid">
        <div>
          <h3>Webdesgin</h3>
        </div>
        <div>
          <p>Elisabeth Isabella Haberschrick</p>
          <p>Studio ELISABELLA</p>
          <p>Webdesign | Storytelling | Creative Conversations for your Marketing</p>
          <p>office@elisabella.at</p>
          <a href="https://www.elisabella.at/">https://www.elisabella.at/</a>
        </div>
      </div>
      <div class="grid">
        <div>
          <h3>Programmierung</h3>
        </div>
        <div>
          <p>WebBees</p>
          <p>office@webbees.at</p>
          <a href="https://webbees.at/">https://webbees.at/</a>
        </div>
      </div>
    </section>

    <section>
      <h2>Urheberrecht</h2>
      <p>Der Inhalt dieser Webseite, Text und Bilder, ist urheberrechtlich geschützt. Bilder, Texte und sonstige Inhalte der Webseite, dürfen nur mit schriftlicher Genehmigung verwendet werden.</p>
      <p>© <span id="year"></span> Don Bosco für Flüchtlinge</p>
      <p>Bilder auf der Website stammen entweder von eigenen Fotografien oder und externen Quellen bereitgestellt.</p>

      <h2>Haftungsausschluss</h2>
      <p>Alle Angaben auf dieser Webseite erfolgen ohne Gewähr, jede Haftung dafür ist ausgeschlossen. Schreibfehler und Irrtümer vorbehalten.</p>
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
    const pageTitle = 'Impressum' + ' | ' + this.$static.metadata.siteName;
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

a {
  color: var(--clr-text);
  font-family: var(--ff-primary);
  font-size: var(--fs-400);
  font-style: italic;
  line-height: 1.8;
  text-decoration: underline;

  @media (max-width: 1300px) {
    line-height: 1.6;
  }
}

h1 {
  @media (max-width: 400px) {
    font-size: 14vw;
  }
}
h2 {
  margin-block-end: 1em;
  margin-block-start: 2em;
}

section {
  text-align: center;
  margin-block-end: 6rem;
  padding-inline: var(--padding-global-inline);;
  & > h3 {
    margin-block-start: 2em;
  }
  & > p {
    margin-inline: auto;
    max-width: 65ch;
  }
  & > p + p {
    margin-block-start: 1em;
  }
}
.grid {
  --column-spacing: 2rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  & > *:first-child {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-inline-end: var(--column-spacing);
    text-align: right;
  }
  & > *:last-child {
    border-left: solid 2px black;
    padding-block: 1rem;
    padding-inline-start: var(--column-spacing);
    text-align: left;
  }
  @media (max-width: $mobile-break) {
    grid-template-columns: 1fr 2fr;
  }
  @media (max-width: 450px) {
    grid-template-columns: 1fr;
    & > *:first-child {
      padding-inline-start: var(--column-spacing);
      text-align: left;
    }
  }
}
.grid + .grid {
  margin-block-start: 2rem;
}
</style>