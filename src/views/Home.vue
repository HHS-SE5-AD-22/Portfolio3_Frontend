<template>
  <div class="page-content">
    <h1 class="page-content__title">Front end applicatie portfolio 3</h1>
      <p class="page-content__paragraph">
        Welkom bij de webapplicatie voor portfolio 3. Deze applicatie heeft als doeleind middels verschillende dashboards relevante analyses te tonen met betrekking tot ons onderwerp.
        Op deze pagina is algemene informatie te vinden over onder andere: Ons voorstel, voor wie is deze informatie nuttig, welke technologieën
        worden gebruikt om deze informatie op te kunnen halen.
      </P>
    <h3 class="page-content__header-3">Ons voorstel</h3>
      <p class="page-content__paragraph">
        Ons voorstel is om uit te zoeken of fluctuerende energie- en/of brandstofprijzen invloed hebben op het aantal geregistreerde op fossiele brandstof- of elektrische voertuigen in Nederland.
        Klimaatverandering is een zeer belangrijk onderwerp dat dagelijks vooraan in het nieuws is. De algemene gedachte in onze groep is dat er steeds meer elektrisch aangedreven voertuigen verkocht worden.
        Als brandstofprijzen stijgen ‘zou je denken’ dat er meer elektrische voertuigen worden verkocht. Want hoe (in verhouding) minder voertuigen op klassieke fossiele brandstoffen er verkocht worden, hoe beter dat voor het klimaat is.
        Met ons onderzoek willen wij inzichtelijk maken óf dit ook daadwerkelijk het geval is! Want als blijkt dat zelfs wanneer brandstof- en energieprijzen stijgen er geen aantoonbaar verschil waarneembaar is,
        dan brengt ons onderzoek een groter probleem aan het licht.
      </p>
    <h3 class="page-content__header-3">Voor wie is deze informatie nuttig?</h3>
      <p class="page-content__paragraph">
        In ons geval is het geen fictief probleem, maar een serieuze interesse in het onderwerp: Welke richting gaat de autoverkoop op in deze tijd waarin het verbeteren van het klimaat een van de belangrijkste
        onderwerpen voor een leefbare toekomst is. Nederlanders zijn voor hun werk en privé afhankelijk van hun vervoermiddel. Er zijn meer geregistreerde voertuigen dan Nederlanders met een rijbewijs. Maar door aan
        te tonen of fluctuerende energie- en/of brandstofprijzen invloed hebben op het aantal geregistreerde voertuigen op fossiele brandstof- of elektrische voertuigen kan je een voorspelling maken of het wagenpark in
        Nederland (en waarschijnlijk daarbuiten ook) in korte of langere termijn verandert. Met andere woorden: Je maakt zichtbaar of autobezitters, zowel zakelijk als privé, zich iets aantrekken van hun portemonnee. Door hier inzicht
        in te geven zou je daar als externe partij (overheid/bedrijfsleven) beleid op kunnen maken. Wij zijn van plan de uitkomsten van ons onderzoek openbaar te maken via de socials.
      </p>
    <h3 class="page-content__header-3">Welke technologieën worden gebruikt om deze informatie op te halen?</h3>
      <p class="page-content__paragraph">
        To-do
      </p>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'HomeView',
  methods: {
  },
}
</script>

<style lang="scss">
.page-content__title {
  @apply text-4xl text-gray-900;
  display: flex;
  justify-content: center;
  margin-bottom: 5rem;
  margin-top: 1rem;
}

.page-content__paragraph {
  @apply text-base;
  margin-bottom: 2rem;
}

.page-content__header-3 {
  @apply text-2xl;
  margin-bottom: 2rem;
}
</style>
