<template>
    <div class="sidebar" data-color="purple" data-image="assets/img/sidebar-5.jpg">
      <div class="sidebar-wrapper">
            <div class="logo">
                <a href="http://www.creative-tim.com" class="simple-text">
                    Quan ly ky tuc xa
                </a>
            </div>

            <ul class="nav">
                <li class="active">
                    <nuxt-link to="/">
                        <i class="pe-7s-graph"></i>
                        <span class="menu-title">Dashboard</span>
                    </nuxt-link>
                </li>
                <li>
                    <nuxt-link to="/users">
                        <i class="pe-7s-user"></i>
                        <span class="menu-title">Quan ly</span>
                    </nuxt-link>
                </li>
                <li>
                    <nuxt-link to="/khachs">
                        <i class="pe-7s-user"></i>
                        <p>Khach</p>
                    </nuxt-link>
                </li>
                <li>
                    <nuxt-link to="/phongs">
                        <i class="pe-7s-note2"></i>
                        <p>Phong</p>
                    </nuxt-link>
                </li>
                <li>
                    <nuxt-link to="/taisans">
                        <i class="pe-7s-news-paper"></i>
                        <p>Tai san</p>
                    </nuxt-link>
                </li>
                <li>
                    <nuxt-link to="/diennuocs">
                        <i class="pe-7s-science"></i>
                        <p>Dien nuoc</p>
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
