<template>
  <div class="flex flex-wrap">
    <div class="w-full">
      <h2 class="text-center text-3xl mt-5 mb-5">Dashboards</h2>
      <ul class="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row">
        <li class="-mb-px mr-2 last:mr-0 flex-auto text-center cursor-pointer">
          <a class="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal"
            v-on:click="toggleTabs(1)"
            v-bind:class="{'text-pink-600 bg-white': openTab !== 1, 'text-white bg-black': openTab === 1}">
            Descriptive
          </a>
        </li>
        <li class="-mb-px mr-2 last:mr-0 flex-auto text-center cursor-pointer">
          <a class="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal"
            v-on:click="toggleTabs(2)"
            v-bind:class="{ 'text-pink-600 bg-white': openTab !== 2, 'text-white bg-black': openTab === 2 }">
            Diagnostic
          </a>
        </li>
        <li class="-mb-px mr-2 last:mr-0 flex-auto text-center cursor-pointer">
          <a class="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal"
            v-on:click="toggleTabs(3)"
            v-bind:class="{ 'text-pink-600 bg-white': openTab !== 3, 'text-white bg-black': openTab === 3 }">
            Predictive
          </a>
        </li>
      </ul>
      <div v-bind:class="{ 'hidden': openTab === 0, 'block': openTab !== 0 }" class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
        <div class="px-4 py-5 flex-auto">
          <div class="tab-content tab-space">
            <div v-bind:class="{ 'hidden': openTab !== 1, 'block': openTab === 1 }">
              <tableau-viz id="tableauDescriptive"></tableau-viz>
            </div>
            <div v-bind:class="{ 'hidden': openTab !== 2, 'block': openTab === 2 }">
              <tableau-viz id="tableauDiagnostic"></tableau-viz>
            </div>
            <div v-bind:class="{ 'hidden': openTab !== 3, 'block': openTab === 3 }">
              <tableau-viz id="tableauPredictive"></tableau-viz>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { TableauEventType } from '@/assets/js/tableau.embedding.3.2.0.min.js';

export default {
  name: 'Dashboards',
  data() {
    return {
      openTab: 0
    }
  },
  methods: {
    toggleTabs: function (tabNumber) {
      this.openTab = tabNumber

      let viz;
      let src;

      switch (tabNumber) {
        case 1:
          viz = document.getElementById('tableauDescriptive');
          src = "https://dub01.online.tableau.com/t/hhsbigdata/views/DescriptiveDiagram/Staafdiagram";
          break;
        case 2:
          viz = document.getElementById('tableauDiagnostic');
          src = "https://dub01.online.tableau.com/t/hhsbigdata/views/Diagnostischestaafdiagram/Staafdiagram";
          break;
        case 3:
          viz = document.getElementById('tableauPredictive');
          src = "https://dub01.online.tableau.com/t/hhsbigdata/views/Geregistreerdevoertuigenelektrischenelektriciteitsprijzen/Geregistreerdevoertuigenelektrischenelektriciteitsprijzen";
          break;
      }

      viz.width = 1200;
      viz.width = 800;
      viz.hideTabs = true;
      viz.hideToolbar = true;

      const onFirstInteractive = () => {
        let workbook = viz.getWorkbook();
        workbook.getActiveSheet();
      };

      viz.addEventListener(TableauEventType.FirstInteractive, onFirstInteractive);
      viz.src = src;
    },
  }
}

</script>

<style lang="scss">

</style>
