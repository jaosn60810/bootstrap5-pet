<template>
  <Navbar></Navbar>
  <router-view></router-view>
  <ContactSection></ContactSection>
</template>

<script>
import Navbar from './components/Navbar.vue';
import ContactSection from '@/components/ContactSection.vue';

export default {
  components: {
    Navbar,
    ContactSection,
  },
};
</script>

<style lang="scss">
@import './assets/all.scss';
</style>
