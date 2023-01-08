<template>
  <div class="page-content">
    <h2>Dashboards</h2>
    <tableau-viz id="tableauViz"></tableau-viz>


  </div>
</template>

<script>
import { TableauEventType } from '@/assets/js/tableau.embedding.3.2.0.min.js';

export default {
  name: 'TheDashboard',
  mounted() {
    this.initViz();
  },
  methods: {
    initViz() {
      let viz = document.getElementById("tableauViz");
      viz.width = 1200;
      viz.width = 800;
      viz.hideTabs = true;
      viz.hideToolbar = true;

      const onFirstInteractive = () => {
        let workbook = viz.getWorkbook();
        workbook.getActiveSheet();
      };

      viz.addEventListener(TableauEventType.FirstInteractive, onFirstInteractive);
      viz.src = "https://dub01.online.tableau.com/t/portfolio3/views/Geregistreerdevoertuigenelektrischenelektriciteitsprijzen/Geregistreerdevoertuigenelektrischenelektriciteitsprijzen";
    }
  }
}

</script>

<style lang="scss">

</style>
