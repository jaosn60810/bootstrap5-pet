<template>
  <section class="py-6 py-lg-11">
    <div class="d-flex justify-content-center mb-3 mb-lg-4">
      <img src="@/assets/img/title02.png" alt="領養專區" />
    </div>

    <h2 class="text-center h6 mb-5 mb-lg-7">
      這裡是在還在等家的浪浪們，若您正巧在找個家人，不訪來認識一下唄
    </h2>

    <div class="container mb-5 mb-lg-7">
      <ul
        class="row row-cols-1 row-cols-lg-3 justify-content-center gy-3 list-unstyled"
      >
        <li class="col">
          <div class="card rounded-10 overflow-hidden">
            <div class="position-relative mb-5">
              <img
                src="../assets/img/dog01.png"
                class="opacity-100 hoverImgHide img-fluid w-100"
                alt="dog01"
              />
              <img
                src="../assets/img/dog01-hover-1.png"
                class="opacity-0 position-absolute top-0 start-0 end-0 hoverImgShow img-fluid w-100"
                alt="dog01-hover"
              />
            </div>

            <div class="card-body px-4 py-0">
              <h3 class="card-title fw-bold h6 mb-3">等家中-華仔</h3>
              <p class="card-text border-bottom pb-4">
                目前7個月大的華仔，是個愛笑的貪吃鬼，喜歡吃西瓜還有蓮霧，是一隻吃素的乖狗...
              </p>
            </div>

            <router-link
              href="#"
              class="text-dark text-decoration-none hoverTextPrimary fontKalam d-block py-3 text-center"
              to="/adoption-area"
              >More</router-link
            >
          </div>
        </li>

        <li class="col">
          <div class="card rounded-10 overflow-hidden">
            <div class="position-relative mb-5">
              <img
                src="../assets/img/04.png"
                class="opacity-100 hoverImgHide img-fluid w-100"
                alt="dog04"
              />
              <img
                src="../assets/img/dog01-hover.png"
                class="opacity-0 position-absolute top-0 start-0 end-0 hoverImgShow img-fluid w-100"
                alt="dog01-hover"
              />
            </div>

            <div class="card-body px-4 py-0">
              <h3 class="card-title fw-bold h6 mb-3">等家中-小呆</h3>
              <p class="card-text border-bottom pb-4">
                小呆有著圓圓的大眼睛，一歲的他來自台中，原本陪著一位老奶奶生活，上個月...
              </p>
            </div>

            <router-link
              href="#"
              class="text-dark text-decoration-none hoverTextPrimary fontKalam d-block py-3 text-center"
              to="/adoption-area"
              >More</router-link
            >
          </div>
        </li>

        <li class="col">
          <div class="card rounded-10 overflow-hidden">
            <div class="position-relative mb-5">
              <img
                src="../assets/img/08.png"
                class="opacity-100 hoverImgHide img-fluid w-100"
                alt="dog08"
              />
              <img
                src="../assets/img/dog01-hover-2.png"
                class="opacity-0 position-absolute top-0 start-0 end-0 hoverImgShow img-fluid w-100"
                alt="dog01-hover"
              />
            </div>

            <div class="card-body px-4 py-0">
              <h3 class="card-title fw-bold h6 mb-3">等家中-Snow</h3>
              <p class="card-text border-bottom pb-4">
                看起來很兇但特別怕打雷的Snow，很喜歡吃冰，冰冰的水也喜歡，如果摸他的額頭...
              </p>
            </div>

            <router-link
              href="#"
              class="text-dark text-decoration-none hoverTextPrimary fontKalam d-block py-3 text-center"
              to="/adoption-area"
              >More</router-link
            >
          </div>
        </li>
      </ul>
    </div>

    <div class="d-flex justify-content-center">
      <router-link
        class="btn btn-outline-primary text-dark fs-5 border-dark hoverBorderPrimary py-2 px-7 rounded-pill"
        to="/adoption-area"
        >看看更多浪浪</router-link
      >
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
