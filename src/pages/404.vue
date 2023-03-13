<template>
  <Layout>
    <section>
      <h1>Fehler 404</h1>
      <p>Hupsi. Das war wohl nix.<br>Hier ein Kätzchen zur Aufmunterung:</p>
      <g-image src="../assets/images/404/404.png" />
      <g-link class="btn" to="/">← Startseite</g-link>
    </section>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Seite nicht gefunden',
    description: '',
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