<template>
  <aside 
      class="my-3 overflow-auto border-0 sidenav navbar navbar-vertical navbar-expand-xs border-radius-xl bg-gradient-dark "
      data-color="warning"
    :class="`${
      this.$store.state.isRTL
        ? 'me-3 rotate-caret fixed-end'
        : 'fixed-start ms-3'
    } 
    ${
      this.$store.state.layout === 'landing'
        ? 'bg-dark shadow-none'
        : ' '
    } ${this.$store.state.sidebarType}`"
    id="sidenav-main" role="menu">

    <div class="sidenav-header">
       <i
        class="top-0 p-3 cursor-pointer fas fa-times text-secondary opacity-5 position-absolute end-0 d-none d-xl-none"
        aria-hidden="true"
        id="iconSidenav"
      ></i>
       <router-link class="m-0 navbar-brand" to="/">
        <img
          :src="
            this.$store.state.darkMode ||
            this.$store.state.sidebarType === 'bg-default'
              ? logoWhite
              : logo
          "
          class="navbar-brand-img h-100"
          alt="main_logo"
        />
        <span class="ms-2 font-weight-bold me-2 text-white h6 "><b>Race Fullfilment</b></span>
        
      </router-link>
      <!-- <a class="navbar-brand m-0" href="/" >
        <img src="../assets/images/newlogo.png" class="navbar-brand-img h-100" alt="main_logo">
        <span class="ms-1 font-weight-bold text-white"><b>Race Fullfilment</b></span>
      </a> -->
    </div>
    <hr class="horizontal dark mt-0">
    <div class="collapse navbar-collapse w-auto h-auto h-100" id="sidenav-collapse-main">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link " href="/">
            <div class="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
              <i class="fas fa-th-large text-primary text-lg opacity-10"></i>
            </div>
            <span class="nav-link-text ms-1 mb-0 h5 text-white">Dashboard</span>
          </a>
        </li>
        <li class="nav-item mt-3">
          <h6 class="ps-4 ms-2 text-uppercase text-xs font-weight-bolder opacity-6 text-white"><b>STOCK</b></h6>
        </li>
        <li class="nav-item">
          <a class="nav-link " href="/inventory">
            <div class="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
              <i class="ni ni-calendar-grid-58 text-warning text-lg opacity-10"></i>
            </div>
            <span class="nav-link-text ms-1mb-0  h5 text-white">Inventory</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link " href="/produk/add">
            <div class="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
              <i class="ni ni-credit-card text-success text-lg opacity-10"></i>
            </div>
            <span class="nav-link-text ms-1 mb-0 h5 text-white">Products</span>
          </a>
        </li>
        <li class="nav-item mt-3">
          <h6 class="ps-4 ms-2 text-uppercase text-xs font-weight-bolder opacity-6 text-white"><b>SHIPMENT</b></h6>
        </li>
        <li class="nav-item">
          <a class="nav-link " href="/inbound">
            <div class="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
              <i class="ni ni-app text-info text-lg opacity-10"></i>
            </div>
            <span class="nav-link-text ms-1 mb-0 h5 text-white">Inbound</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link " href="/outbound">
            <div class="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
              <i class="ni ni-world-2 text-danger text-lg opacity-10"></i>
            </div>
            <span class="nav-link-text ms-1 mb-0 h5 text-white">Outbound</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link " href="/tracking">
            <div class="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
              <i class="ni ni-world-2 text-danger text-lg opacity-10"></i>
            </div>
            <span class="nav-link-text ms-1 mb-0 h5 text-white">Tracking</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link " href="/orders">
            <div class="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
              <i class="ni ni-world-2 text-danger text-lg opacity-10"></i>
            </div>
            <span class="nav-link-text ms-1 mb-0 h5 text-white">Orders</span>
          </a>
        </li>
        <li class="nav-item mt-3">
          <h6 class="ps-4 ms-2 text-uppercase text-xs font-weight-bolder opacity-6 text-white"><b>SETTINGS</b> </h6>
        </li>
        <li class="nav-item">
          <a class="nav-link " href="/integrations">
            <div class="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
              <i class="fas fa-file-code text-danger text-lg opacity-10"></i>
            </div>
            <span class="nav-link-text ms-1 mb-0 h5 text-white">Integrations</span>
          </a>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script>
  // import SidenavList from "./SidenavList.vue";
  import logo from "../assets/images/newlogo.png";
  // import logoWhite from "@/assets/img/logo-ct.png";

    export default {
    name: "SideBar",
    components: {
      // SidenavList
    },
    data() {
      return {
        logo,
        // logoWhite
      };
    },
    props: ["custom_class", "layout"]
  };
</script>