<template>
  <section class="pb-6 pb-lg-11">
    <div class="d-flex justify-content-center mb-3 mb-lg-6">
      <img src="@/assets/img/title01.png" alt="近期作品" />
    </div>

    <div class="container mb-4 mb-lg-6">
      <ul class="row row-cols-2 row-cols-lg-4 g-3 g-lg-4 list-unstyled">
        <li class="col">
          <div class="position-relative gradientOvertop">
            <router-link href="#" class="d-block" to="/design-works">
              <img
                src="@/assets/img/dog05.png"
                alt="dog"
                class="img-fluid rounded-11"
              />
            </router-link>
            <div
              class="position-absolute bottom-0 start-0 ms-5 mb-5 gradientOvertop__text"
            >
              <p class="text-white fontKalam mb-2">designer</p>
              <p class="text-white fw-bold fontKalam h4">Meili</p>
            </div>
          </div>
        </li>

        <li class="col">
          <div class="position-relative gradientOvertop">
            <router-link href="#" class="d-block" to="/design-works">
              <img
                src="@/assets/img/dog07.png"
                alt="dog"
                class="img-fluid rounded-11"
              />
            </router-link>
            <div
              class="position-absolute bottom-0 start-0 ms-5 mb-5 gradientOvertop__text"
            >
              <p class="text-white fontKalam mb-2">designer</p>
              <p class="text-white fw-bold fontKalam h4">Meili</p>
            </div>
          </div>
        </li>

        <li class="col">
          <div class="position-relative gradientOvertop">
            <router-link href="#" class="d-block" to="/design-works">
              <img
                src="@/assets/img/dog06.png"
                alt="dog"
                class="img-fluid rounded-11"
              />
            </router-link>
            <div
              class="position-absolute bottom-0 start-0 ms-5 mb-5 gradientOvertop__text"
            >
              <p class="text-white fontKalam mb-2">designer</p>
              <p class="text-white fw-bold fontKalam h4">Meili</p>
            </div>
          </div>
        </li>

        <li class="col">
          <div class="position-relative gradientOvertop">
            <router-link href="#" class="d-block" to="/design-works">
              <img
                src="@/assets/img/Michael.png"
                alt="dog"
                class="img-fluid rounded-11"
              />
            </router-link>
            <div
              class="position-absolute bottom-0 start-0 ms-5 mb-5 gradientOvertop__text"
            >
              <p class="text-white fontKalam mb-2">designer</p>
              <p class="text-white fw-bold fontKalam h4">Meili</p>
            </div>
          </div>
        </li>
      </ul>
    </div>

    <div class="d-flex justify-content-center">
      <router-link
        class="btn btn-outline-primary text-dark fs-5 border-dark hoverBorderPrimary py-2 px-7 rounded-pill me-4"
        to="/design-works"
        >查看更多作品</router-link
      >
      <router-link
        class="btn btn-primary py-2 px-7 fs-5 rounded-pill d-none d-lg-block"
        to="/order"
        >客製毛孩似顏繪</router-link
      >
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
