<template>
     <div class="g-sidenav-show g-sidenav-pinned" id="DashboardLayout">
     <div v-show="this.$store.state.layout === 'landing'" class="landing-bg h-100 position-fixed w-100"></div>
  <!-- <NavBar /> -->
    <SideBar 
     :custom_class="this.$store.state.mcolor"
    :class="[
      this.$store.state.isTransparent,
      this.$store.state.isRTL ? 'fixed-end' : 'fixed-start'
    ]"
    v-if="this.$store.state.showSidenav"
    />
    <main class="main-content positiion-relative max-height-vh-100 h-100 border-radius-lg">
       
      <NavBar
       :class="[navClasses]"
      :textWhite="
        this.$store.state.isAbsolute ? 'text-white opacity-8' : 'text-white'
      "
      :minNav="navbarMinimize"
      v-if="this.$store.state.showNavbar"/>
        <!-- Route VIew -->
      <router-view />
        <!-- Footer Page -->
      <app-footer v-show="this.$store.state.showFooter" />
        <!-- Config Page -->
     
    </main>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";
import SideBar from "@/components/SideBar";
// import Configurator from "@/examples/ConfiguratoR.vue"
import AppFooter from "@/examples/Footer.vue";
import { mapMutations } from "vuex";
export default{
  name : 'App',
  components: {NavBar,
  SideBar,
  AppFooter},
  methods: {
    ...mapMutations(["navbarMinimize"])
  },
  computed: {
    navClasses() {
      return {
        "position-sticky bg-white left-auto top-2 z-index-sticky":
          this.$store.state.isNavFixed && !this.$store.state.darkMode,
        "position-sticky bg-default left-auto top-2 z-index-sticky":
          this.$store.state.isNavFixed && this.$store.state.darkMode,
        "position-absolute px-4 mx-0 w-100 z-index-2": this.$store.state
          .isAbsolute,
        "px-0 mx-4": !this.$store.state.isAbsolute
      };
    }
  },
  beforeMount() {
    this.$store.state.isTransparent = "bg-white";
  }
}
</script>

<style>

</style>