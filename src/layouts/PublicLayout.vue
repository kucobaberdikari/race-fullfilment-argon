<template>
     <div class="g-sidenav-hidden" id="PublicLayout">
     <div v-show="this.$store.state.layout === 'landing'" class="landing-bg h-100 position-fixed w-100"></div>
    <main class="main-content position-relative max-height-vh-100 h-100 border-radius-lg">
       
      <!-- <NavbarMain
       :class="[navClasses]"
      :textWhite="
        this.$store.state.isAbsolute ? 'text-white opacity-8' : 'text-white'
      "
      :minNav="navbarMinimize"
      v-if="this.$store.state.showNavbar"/> -->
        <!-- Route VIew -->
      <router-view />
        <!-- Footer Page -->
      <app-footer />
    </main>
  </div>
</template>

<script>
// import NavbarMain from "@/examples/PageLayout/NavbarMain";
import AppFooter from "@/examples/Footer.vue";
import { mapMutations } from "vuex";
export default{
  name : 'App',
  components: {
    // NavbarMain,
    AppFooter
    },
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