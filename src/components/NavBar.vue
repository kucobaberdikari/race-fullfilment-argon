<template>
  <nav
    class="navbar navbar-main navbar-expand-md px-0 mx-4 shadow-sm border-radius-xl position-sticky bg-white left-auto top-2 z-index-sticky px-o mx-4 border-1"
    :class="
      this.$store.state.isRTL ? 'top-0 position-sticky z-index-sticky' : ''
    "
    v-bind="$attrs"
    id="navbarBlur"
    data-scroll="true"
  >
    <div class="px-3 py-1 container-fluid">
      <breadCrumbs :currentPage="currentRouteName" />

      <div
        class="mt-2 collapse navbar-collapse mt-sm-0 me-md-0 me-sm-4"
        :class="this.$store.state.isRTL ? 'px-0' : 'me-sm-4'"
        id="navbar"
      >
        <div
          class="pe-md-3 d-flex align-items-center"
          :class="this.$store.state.isRTL ? 'me-md-auto' : 'ms-md-auto'"
        >
          <!-- <div class="input-group">
            <span class="input-group-text text-body">
              <i class="fas fa-search" aria-hidden="true"></i>
            </span>
            <input
              type="text"
              class="form-control"
              :placeholder="
                this.$store.state.isRTL ? 'أكتب هنا...' : 'Type here...'
              "
            />
          </div> -->
          
        </div>
        <ul class="navbar-nav justify-content-end">
          <li class="nav-item d-xl-none ps-3 me-3 d-flex align-items-center">
            <a
              href="#"
              @click="toggleSidebar"
              class="p-0 nav-link text-dark"
              id="iconNavbarSidenav" 
              
            >
              <div class="sidenav-toggler-inner">
                <i class="sidenav-toggler-line bg-dark"></i>
                <i class="sidenav-toggler-line bg-dark"></i>
                <i class="sidenav-toggler-line bg-dark"></i>
              </div>
            </a>
          </li>
          <li
            class="nav-item dropdown d-flex align-items-center max-width-300 me-3"
            :class="this.$store.state.isRTL ? 'ps-2' : 'pe-2'"
          >
            <a
              href="#"
              class="p-0 nav-link text-dark"
              :class="[showMenu ? 'show' : '']"
              id="dropdownMenuButton"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              @click="showMenu = !showMenu"
            >
             <img src="../assets/images/bruce-mars.jpg" alt="user-icon" width="35px" class="img-fluid img-thumbnail rounded-circle">
             <span class="font-weight-bold text-dark">ID NUR</span>
            </a>
            <ul
              class="px-2 py-2 dropdown-menu dropdown-menu-end me-sm-n4"
              :class="showMenu ? 'show' : ''"
              aria-labelledby="dropdownMenuButton"
            >
              <li class="mb-2">
                <a class="dropdown-item border-radius-md" href="/signin">
                      <h6 class="mb-0 ">
                        <i class="fad fa-sign-out me-1"></i>
                       Log Out
                      </h6>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
import BreadCrumbs from "../examples/BreadCrumbs.vue";
import { mapMutations, mapActions } from "vuex";
//  import $ from "jquery";

export default {
  name: "NavBar",
  data() {
    return {
      showMenu: false
    };
  },
  props: ["minNav", "textWhite"],
  created() {
    this.minNav;
  },
  methods: {
    ...mapMutations(["navbarMinimize"]),
    ...mapActions(["toggleSidebarColor"]),

    toggleSidebar() {
      this.toggleSidebarColor("bg-white");
      this.navbarMinimize();
    }
  },
  components: {
    BreadCrumbs
  },
  computed: {
    currentRouteName() {
      return this.$route.name;
    }
  },
  mutations:{
      navbarMinimize(state) {
      const sidenav_show = document.querySelector(".g-sidenav-show");

      if (sidenav_show.classList.contains("g-sidenav-hidden")) {
        sidenav_show.classList.remove("g-sidenav-hidden");
        sidenav_show.classList.add("g-sidenav-pinned");
        state.isPinned = true;
      } else {
        sidenav_show.classList.add("g-sidenav-hidden");
        sidenav_show.classList.remove("g-sidenav-pinned");
        state.isPinned = false;
      }
    },
  }

};
</script>
<style scoped>
.img-thumbnail{
  padding:0;
  margin-right: 0.25rem;
}
</style>
