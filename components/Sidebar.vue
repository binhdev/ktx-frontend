<template>
    <div class="sidebar" data-color="purple" data-image="assets/img/sidebar-5.jpg">
      <div class="sidebar-wrapper">
            <div class="logo">
                <a href="http://www.creative-tim.com" class="simple-text">
                    Quan ly ky tuc xa
                </a>
            </div>

            <ul class="nav">
                <li>
                    <nuxt-link to="/">
                        <i class="pe-7s-graph"></i>
                        <p>Dashboard</p>
                    </nuxt-link>
                </li>
                <li>
                    <nuxt-link to="/users">
                        <i class="pe-7s-user"></i>
                        <p>Nhân sự quản lý</p>
                    </nuxt-link>
                </li>
                <li>
                    <nuxt-link to="/loaikhachs">
                        <i class="pe-7s-user"></i>
                        <p>Loại khách</p>
                    </nuxt-link>
                </li>
                <li>
                    <nuxt-link to="/khachs">
                        <i class="pe-7s-user"></i>
                        <p>Quản lý khách</p>
                    </nuxt-link>
                </li>
                <li>
                    <nuxt-link to="/phongs">
                        <i class="pe-7s-note2"></i>
                        <p>Quản lý phòng</p>
                    </nuxt-link>
                </li>
                <li>
                    <nuxt-link to="/taisans">
                        <i class="pe-7s-news-paper"></i>
                        <p>Quản lý tài sản</p>
                    </nuxt-link>
                </li>
                <li>
                    <nuxt-link to="/diennuocs">
                        <i class="pe-7s-science"></i>
                        <p>Quản lý điện nước</p>
                    </nuxt-link>
                </li>
                <li>
                    <a href="maps.html">
                        <i class="pe-7s-map-marker"></i>
                        <p>Maps</p>
                    </a>
                </li>
                <li>
                    <a href="notifications.html">
                        <i class="pe-7s-bell"></i>
                        <p>Notifications</p>
                    </a>
                </li>
                <li class="active-pro">
                    <a href="upgrade.html">
                        <i class="pe-7s-rocket"></i>
                        <p>Upgrade to PRO</p>
                    </a>
                </li>
            </ul>
      </div>
    </div>
</template>

<script>

export default {
  data() {
    return {
    }
  },
  created() {
  },
  computed: {
  }
}
</script>

<style>
a.nuxt-link-exact-active {
  background: #f66;
}
</style>
