<template>
  <div id="app">
     <div v-show="this.$store.state.layout === 'landing'" class="landing-bg h-100 position-fixed w-100"></div>
  <!-- <NavBar /> -->
    <SideBar 
    />
    <main class="main-content positiion-relative max-height-vh-100 h-100 border-radius-lg">
       
      <NavBar/>
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
export default{
  name : 'App',
  components: {NavBar,SideBar,AppFooter},
  methods: {
    // ...mapMutations(["toggleConfigurator", "navbarMinimize"])
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
    this.$store.state.isTransparent = "bg-transparent";
  }
}
</script>

<style>

</style>
