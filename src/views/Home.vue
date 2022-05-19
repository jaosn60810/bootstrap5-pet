<template>
  <Header></Header>

  <main class="backgroundImage">
    <ServiceSection></ServiceSection>
    <RecentWork></RecentWork>
    <AdoptionSection></AdoptionSection>
  </main>
</template>

<script>
import Header from '@/components/Header.vue';
import ServiceSection from '@/components/ServiceSection.vue';
import RecentWork from '@/components/RecentWork.vue';
import AdoptionSection from '@/components/AdoptionSection.vue';

export default {
  components: {
    Header,
    ServiceSection,
    RecentWork,
    AdoptionSection,
  },
};
</script>

<style lang="scss" scoped></style>
