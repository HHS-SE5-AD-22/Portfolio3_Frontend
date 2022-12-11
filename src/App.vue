<template>
  <nav-bar/>
  <router-view class="container p-4 mx-auto"/>
  <ToastWrapper ref="toastWrapper"></ToastWrapper>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import { nl } from 'yup-locales';
import * as yup from 'yup';
import ToastWrapper from '@/components/text/ToastWrapper.vue';

yup.setLocale(nl);

export default {
  name: 'App',
  components: {
    ToastWrapper,
    NavBar,
  },
};
</script>
