<template>
  <nav class="flex flex-wrap items-center justify-between p-6 bg-gray-900">
    <div class="container sm:px-4 sm:mx-auto">
      <div class="block sm:hidden">
        <!-- eslint-disable-next-line max-len -->
        <button @click="toggle" class="hamburger-menu">
          <svg class="w-6 h-6 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
          </svg>
        </button>
      </div>
      <!-- eslint-disable-next-line max-len -->
      <div class="flex-grow w-full sm:flex sm:items-center sm:w-auto">
        <div class="text-sm sm:flex-grow">
          <router-link class="menu-item" to="/">Home</router-link>
        </div>
        <div>
          <router-link class="menu-item" to="/dashboards">Dashboards</router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import store from '@/store';

export default {
  name: 'NavBar',
  data() {
    return {
      open: false,
      loggedIn: false,
    };
  },
  computed: {
    isAuthenticated() {
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      this.loggedIn = store.getters.isLoggedIn;

      return store.getters.isLoggedIn;
    },
  },
  methods: {
    toggle() {
      this.open = !this.open;
    },
    logout() {
      this.loggedIn = false;
      this.$store.dispatch('clearCourseStore');
      store.dispatch('logout');
    },
  },
};
</script>

<style scoped>
.menu-item {
  @apply sm:inline-block sm:mt-0 block mt-4 mr-4 text-white text-xl text-center
       hover:text-green font-bold transition-all duration-200;
}
.router-link-active {
  @apply text-green underline;
}
.hamburger-menu {
  @apply flex items-center px-3 py-2 transition-all duration-200;
  fill: white;
}
</style>
