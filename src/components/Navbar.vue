<template>
  <nav
    class="navbar navbar-expand-lg navbar-light bg-white py-3 py-lg-4 border-bottom border-primary border-3 border-lg-0"
  >
    <div class="container">
      <a class="navbar-brand" href="#">
        <img src="../assets/img/logo.png" height="40" alt="撿到寶" />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto align-items-center">
          <li class="nav-item">
            <router-link class="nav-link" to="/">首頁</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/services">服務介紹</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/design-works"
              >設計作品</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/adoption-area"
              >領養專區</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              class="btn btn-primary py-2 px-7 rounded-pill"
              to="/order"
              >毛孩似顏繪</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
