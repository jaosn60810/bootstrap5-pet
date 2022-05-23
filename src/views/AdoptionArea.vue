<template>
  <section>
    <div class="d-flex justify-content-center mb-5 mb-lg-6">
      <img src="@/assets/img/title02.png" alt="領養專區" />
      <h1 class="d-none">領養專區</h1>
    </div>

    <div class="container mb-7 mb-lg-11">
      <ul
        class="row row-cols-1 row-cols-lg-3 justify-content-center gy-3 list-unstyled"
      >
        <li class="col">
          <div class="card rounded-10 overflow-hidden">
            <div class="position-relative mb-5">
              <img
                src="@/assets/img/dog01.png"
                class="opacity-100 hoverImgHide w-100"
                alt="華仔"
              />
              <img
                src="@/assets/img/dog01-hover-1.png"
                class="opacity-0 position-absolute top-0 start-0 end-0 hoverImgShow w-100"
                alt="華仔"
              />
            </div>

            <div class="card-body px-4 py-0">
              <h2 class="card-title fw-bold h6 mb-3">等家中-華仔</h2>
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
                src="@/assets/img/04.png"
                class="opacity-100 hoverImgHide w-100"
                alt="小呆"
              />
              <img
                src="@/assets/img/dog01-hover.png"
                class="opacity-0 position-absolute top-0 start-0 end-0 hoverImgShow w-100"
                alt="小呆"
              />
            </div>

            <div class="card-body px-4 py-0">
              <h2 class="card-title fw-bold h6 mb-3">等家中-小呆</h2>
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
                src="@/assets/img/08.png"
                class="opacity-100 hoverImgHide w-100"
                alt="Snow"
              />
              <img
                src="@/assets/img/dog01-hover-2.png"
                class="opacity-0 position-absolute top-0 start-0 end-0 hoverImgShow w-100"
                alt="Snow"
              />
            </div>

            <div class="card-body px-4 py-0">
              <h2 class="card-title fw-bold h6 mb-3">等家中-Snow</h2>
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

        <li class="col">
          <div class="card rounded-10 overflow-hidden">
            <div class="position-relative mb-5">
              <img
                src="@/assets/img/06.png"
                class="opacity-100 hoverImgHide w-100"
                alt="Sirius"
              />
              <img
                src="https://images.unsplash.com/photo-1580917959512-c929a13321b2?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687"
                class="opacity-0 position-absolute top-0 start-0 end-0 hoverImgShow h-100 w-100 object-fit-cover object-position-top"
                alt="Sirius"
              />
            </div>

            <div class="card-body px-4 py-0">
              <h2 class="card-title fw-bold h6 mb-3">等家中-Sirius</h2>
              <p class="card-text border-bottom pb-4">
                Sirius
                非常安靜，幾乎沒有事情能夠讓他吠叫。受到驚嚇時只會想趕快把自己藏起來...
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
                src="@/assets/img/07.png"
                class="opacity-100 hoverImgHide img-fluid w-100"
                alt="小花"
              />
              <img
                src="https://images.unsplash.com/photo-1610480842390-2fd7ffc80da4?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687"
                class="opacity-0 position-absolute top-0 start-0 end-0 hoverImgShow h-100 w-100 object-fit-cover"
                alt="小花"
              />
            </div>

            <div class="card-body px-4 py-0">
              <h2 class="card-title fw-bold h6 mb-3">等家中-小花</h2>
              <p class="card-text border-bottom pb-4">
                貪吃，胃口好，溫馴會撒嬌，可以抱可摸會呼嚕，喜歡看鳥...
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
                src="@/assets/img/05.png"
                class="opacity-100 hoverImgHide img-fluid w-100"
                alt="阿金"
              />
              <img
                src="https://images.unsplash.com/photo-1633722715463-d30f4f325e24?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687"
                class="opacity-0 position-absolute top-0 start-0 end-0 hoverImgShow h-100 w-100 object-fit-cover"
                alt="阿金"
              />
            </div>

            <div class="card-body px-4 py-0">
              <h2 class="card-title fw-bold h6 mb-3">等家中-阿金</h2>
              <p class="card-text border-bottom pb-4">
                非常好動、親人愛撒嬌的狗狗，看到熟人會很興奮，面對陌生人時則會先觀察一段時間...
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

    <nav class="mb-7 mb-lg-11">
      <ul class="pagination justify-content-center fontKalam fs-5">
        <li class="page-item">
          <a class="page-link" href="#" aria-label="Previous">
            <span aria-hidden="true">&lt;</span>
          </a>
        </li>
        <li class="page-item">
          <a class="page-link" href="javascript:;">1</a>
        </li>
        <li class="page-item active">
          <a class="page-link" href="javascript:;">2</a>
        </li>
        <li class="page-item">
          <a class="page-link" href="javascript:;">3</a>
        </li>
        <li class="page-item">
          <a class="page-link" href="javascript:;">4</a>
        </li>
        <li class="page-item">
          <a class="page-link" href="javascript:;">5</a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#" aria-label="Next">
            <span aria-hidden="true">&gt;</span>
          </a>
        </li>
      </ul>
    </nav>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
