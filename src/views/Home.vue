<template>
  <Header></Header>

  <main class="backgroundImage">
    <ServiceSection></ServiceSection>
    <RecentWork></RecentWork>
  </main>
</template>

<script>
import Header from '@/components/Header.vue';
import ServiceSection from '@/components/ServiceSection.vue';
import RecentWork from '@/components/RecentWork.vue';

export default {
  components: {
    Header,
    ServiceSection,
    RecentWork,
  },
};
</script>

<style lang="scss" scoped></style>
