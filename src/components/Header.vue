<template>
  <header>
    <div class="position-relative">
      <img
        src="@/assets/img/home.png"
        alt="home image"
        class="img-fluid d-none d-lg-block w-100"
      />
      <img
        src="@/assets/img/home_mobile.png "
        alt="home image"
        class="img-fluid d-lg-none w-100"
      />
      <h1 class="d-none">撿到寶</h1>
      <h2
        class="fw-bold display-3 fontKalam colorBitter textShadow position-absolute top-50 start-50 translate-middle mb-0 d-none d-lg-block"
      >
        Full of fur. Full of love
      </h2>
    </div>

    <router-link
      to="/Services"
      class="fixed-bottom fixedBottomBtn me-8 d-none d-lg-block"
    >
      <div
        class="fixedBottomBtn__img"
        data-bs-toggle="tooltip"
        data-bs-placement="top"
        title="客製我的毛孩圖"
      ></div>
    </router-link>
  </header>
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
