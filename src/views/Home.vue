<template>

    <h1 class="page-title">Dit is de front end applicatie voor portfolio 4</h1>

</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HomeView',
  methods: {
    viewCourses() {
      this.$router.push({ name: 'Course' });
    },
  },
});
</script>

<style lang="scss">
.page-title {
  @apply text-xl;
}
</style>
