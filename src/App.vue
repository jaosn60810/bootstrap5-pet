<template>
  <Navbar></Navbar>
  <router-view></router-view>
  <ContactSection></ContactSection>
  <Footer></Footer>
</template>

<script>
import Navbar from './components/Navbar.vue';
import ContactSection from '@/components/ContactSection.vue';
import Footer from '@/components/Footer.vue';

export default {
  components: {
    Navbar,
    ContactSection,
    Footer,
  },
};
</script>

<style lang="scss">
@import './assets/all.scss';
</style>
