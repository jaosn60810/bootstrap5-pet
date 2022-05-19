<template>
  <section class="border-top border-primary border-3 py-7">
    <div class="container">
      <div class="row row-cols-1 row-cols-lg-2 gx-0 gx-lg-7 gy-7 gy-lg-0">
        <div class="col">
          <div
            class="d-flex flex-column flex-lg-row align-items-center justify-content-lg-end"
          >
            <img
              src="../assets/img/link01.png"
              alt="加入奴才團隊"
              class="img-fluid w-50 w-lg-auto me-0 me-lg-4"
            />

            <div class="text-center text-lg-start">
              <h3 class="h4 mb-1">加入奴才團隊</h3>
              <h4 class="h6 mb-3">我也會畫畫，希望能盡一份心力！</h4>

              <router-link
                class="btn btn-outline-primary text-dark fs-5 border-dark hoverBorderPrimary py-2 px-7 rounded-pill"
                to="/order"
                >聯絡我們</router-link
              >
            </div>
          </div>
        </div>

        <div class="col">
          <div
            class="d-flex flex-column flex-lg-row align-items-center justify-content-lg-start"
          >
            <img
              src="../assets/img/link02.png"
              alt="加入奴才團隊"
              class="img-fluid w-50 w-lg-auto me-0 me-lg-4"
            />

            <div class="text-center text-lg-start">
              <h3 class="h4 mb-1">加入奴才團隊</h3>
              <h4 class="h6 mb-3">我也會畫畫，希望能盡一份心力！</h4>

              <router-link
                class="btn btn-outline-primary text-dark fs-5 border-dark hoverBorderPrimary py-2 px-7 rounded-pill"
                to="/order"
                >領養專區</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
