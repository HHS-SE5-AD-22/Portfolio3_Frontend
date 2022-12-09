<template>
  <div>
    <h1 class="mb-4">Home</h1>
  </div>
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
