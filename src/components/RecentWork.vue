<template>
  <div class="d-flex justify-content-center mb-3 mb-lg-6">
    <img src="@/assets/img/title01.png" alt="title01" />
  </div>

  <div class="container mb-4 mb-lg-6">
    <div class="row row-cols-2 row-cols-lg-4 g-3 g-lg-4">
      <div class="col">
        <div class="position-relative gradientOvertop">
          <a href="#" class="d-block">
            <img
              src="@/assets/img/dog05.png"
              alt="dog"
              class="img-fluid rounded-11"
            />
          </a>
          <div
            class="position-absolute bottom-0 start-0 ms-5 mb-5 gradientOvertop__text"
          >
            <p class="text-white fontKalam mb-2">designer</p>
            <p class="text-white fw-bold fontKalam h4">Meili</p>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="position-relative gradientOvertop">
          <a href="#" class="d-block">
            <img
              src="@/assets/img/dog07.png"
              alt="dog"
              class="img-fluid rounded-11"
            />
          </a>
          <div
            class="position-absolute bottom-0 start-0 ms-5 mb-5 gradientOvertop__text"
          >
            <p class="text-white fontKalam mb-2">designer</p>
            <p class="text-white fw-bold fontKalam h4">Meili</p>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="position-relative gradientOvertop">
          <a href="#" class="d-block">
            <img
              src="@/assets/img/dog06.png"
              alt="dog"
              class="img-fluid rounded-11"
            />
          </a>
          <div
            class="position-absolute bottom-0 start-0 ms-5 mb-5 gradientOvertop__text"
          >
            <p class="text-white fontKalam mb-2">designer</p>
            <p class="text-white fw-bold fontKalam h4">Meili</p>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="position-relative gradientOvertop">
          <a href="#" class="d-block">
            <img
              src="@/assets/img/Michael.png"
              alt="dog"
              class="img-fluid rounded-11"
            />
          </a>
          <div
            class="position-absolute bottom-0 start-0 ms-5 mb-5 gradientOvertop__text"
          >
            <p class="text-white fontKalam mb-2">designer</p>
            <p class="text-white fw-bold fontKalam h4">Meili</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="d-flex justify-content-center">
    <router-link
      class="btn btn-outline-dark py-2 px-5 rounded-pill me-4"
      to="/services"
      >查看更多作品</router-link
    >
    <router-link
      class="btn btn-primary py-2 px-5 rounded-pill d-none d-lg-block"
      to="/services"
      >客製毛孩似顏繪</router-link
    >
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
