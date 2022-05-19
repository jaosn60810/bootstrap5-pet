<template>
  <Header></Header>

  <main class="backgroundImage">
    <ServiceSection></ServiceSection>
    <RecentWork></RecentWork>
    <AdoptionSection></AdoptionSection>
  </main>

  <FixedBtn></FixedBtn>
</template>

<script>
import Header from '@/components/HomePage/Header.vue';
import ServiceSection from '@/components/HomePage/ServiceSection.vue';
import RecentWork from '@/components/HomePage/RecentWork.vue';
import AdoptionSection from '@/components/HomePage/AdoptionSection.vue';
import FixedBtn from '@/components/HomePage/FixedBtn.vue';

export default {
  components: {
    Header,
    ServiceSection,
    RecentWork,
    AdoptionSection,
    FixedBtn,
  },
};
</script>

<style lang="scss" scoped></style>
