<template>
  <section id="about-us" class="about-us">
    <g-image src="../assets/images/index/sprachen.png" alt="Zeichnung von mehreren Menschen verschiedener Herkunft, die Sie auf unterschiedlichen Sprachen begrüßen" />
    <div>
      <h2>
        Wir helfen Flüchtlingen in Wien, um Perspektiven zu eröffnen. Sei auch
        dabei!
      </h2>
      <p>
        „Don Bosco für Flüchtlinge“ wurde im Jahr 2015 als Initiative der
        <g-link to="https://www.donbosco.at/de/">Salesianer Don Boscos</g-link> gegründet und baut vor allem auf dem Engagement
        von Freiwilligen auf. Die Hauptaktivität sind Intensiv-Deutschkurse.
        Neben dem Spracherwerb, kommen auch Spiele, gegenseitiges Kennenlernen
        und Veranstaltungen wie ein interreligiöses Friedensgebet, Ausflüge und
        Feste nicht zu kurz. Was uns besonders freut? „Don Bosco für
        Flüchtlinge“ ist für viele ein zweites Zuhause geworden.
      </p>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import "../assets/styles/global.scss";
g-image {
  width: max(25vw, 51.6rem);
  @media (max-width: $tablet-break) {
    width: 40rem;
  }
  @media (max-width: $mobile-break) {
    width: 100%;
  }
}

a{
  color: var(--clr-primary);
  text-decoration: underline;
  text-underline-offset: 0.25rem;
}
.about-us {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 9rem min(16vw, 19.5rem);
  @media (max-width: $first-break) {
    padding-inline: var(--padding-global-inline);
  }
}
.about-us div {
  text-align: center;
  background-image: url("../assets/images/index/hintergrund.png");
  padding: 5.5rem 7.75rem;
  h2 {
    max-width: 30ch;
    margin-inline: auto;
  }
  @media (max-width: $tablet-break) {
    padding: 8vw 8vw;
  }
}
.about-us p {
  margin-block: 2.8rem 2rem;
  max-width: 70ch;
  margin-inline: auto;
}
</style>