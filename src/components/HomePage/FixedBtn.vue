<template>
  <router-link
    to="/order"
    class="fixed-bottom fixedBottomBtn me-8 d-none d-lg-block"
  >
    <div
      class="fixedBottomBtn__img"
      data-bs-toggle="tooltip"
      data-bs-placement="top"
      title="客製我的毛孩圖"
    ></div>
  </router-link>
</template>

<script>
import { Tooltip } from 'bootstrap';

export default {
  data() {
    return {
      tooltipList: null,
    };
  },
  mounted() {
    const tooltipTriggerList = document.querySelectorAll(
      '[data-bs-toggle="tooltip"]'
    );
    this.tooltipList = [...tooltipTriggerList].map(
      (tooltipTriggerEl) => new Tooltip(tooltipTriggerEl)
    );
  },
  unmounted() {
    this.tooltipList.forEach((item) => {
      item.dispose();
    });
  },
};
</script>

<style lang="scss" scoped></style>
