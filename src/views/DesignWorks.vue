<template>
  <div class="d-flex justify-content-center mb-3 mb-lg-6">
    <img src="@/assets/img/title01.png" alt="近期作品" />
    <h1 class="d-none">近期作品</h1>
  </div>

  <div class="container mb-7 mb-lg-11">
    <div class="row flex-column flex-lg-row">
      <div class="col-lg-3 text-center text-lg-start">
        <h2 class="h4 fontKalam mb-3 mb-lg-4">Designer</h2>

        <ul
          class="nav flex-row flex-lg-column flex-nowrap justify-content-between w-75 mx-auto mx-lg-0 mb-5"
        >
          <li class="nav-item mb-lg-3">
            <a
              class="nav-link customNavLink customNavLink--active fs-5 fontKalam"
              href="javascript:;"
              >All</a
            >
          </li>
          <li class="nav-item mb-lg-3">
            <a class="nav-link customNavLink fs-5 fontKalam" href="javascript:;"
              >Meili</a
            >
          </li>
          <li class="nav-item mb-lg-3">
            <a class="nav-link customNavLink fs-5 fontKalam" href="javascript:;"
              >Zoe</a
            >
          </li>
          <li class="nav-item mb-lg-3">
            <a class="nav-link customNavLink fs-5 fontKalam" href="javascript:;"
              >Michael</a
            >
          </li>
          <li class="nav-item mb-lg-3">
            <a class="nav-link customNavLink fs-5 fontKalam" href="javascript:;"
              >Birdy</a
            >
          </li>
        </ul>
      </div>

      <div class="col-lg-9">
        <ul class="row row-cols-2 row-cols-lg-3 g-3 g-lg-4 list-unstyled">
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
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
