<template>
  <aside class="sidenav bg-gradient-dark navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-4 " id="sidenav-main">
    <div class="sidenav-header">
      <i class="fas fa-times p-3 cursor-pointer text-secondary opacity-5 position-absolute end-0 top-0 d-none d-xl-none" aria-hidden="true" id="iconSidenav"></i>
      <a class="navbar-brand m-0" href="/" >
        <img src="../assets/images/newlogo.png" class="navbar-brand-img h-100" alt="main_logo">
        <span class="ms-1 font-weight-bold text-white"><b>Race Fullfilment</b></span>
      </a>
    </div>
    <hr class="horizontal dark mt-0">
    <div class="collapse navbar-collapse  w-auto " id="sidenav-collapse-main">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link " href="/">
            <div class="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
              <i class="fas fa-th-large text-primary text-lg opacity-10"></i>
            </div>
            <span class="nav-link-text ms-1 mb-0 h5">Dashboard</span>
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
            <span class="nav-link-text ms-1mb-0  h5">Inventory</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link " href="/produk/add">
            <div class="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
              <i class="ni ni-credit-card text-success text-lg opacity-10"></i>
            </div>
            <span class="nav-link-text ms-1 mb-0 h5">Products</span>
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
            <span class="nav-link-text ms-1 mb-0 h5">Inbound</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link " href="/outbound">
            <div class="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
              <i class="ni ni-world-2 text-danger text-lg opacity-10"></i>
            </div>
            <span class="nav-link-text ms-1 mb-0 h5">Outbound</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link " href="/tracking">
            <div class="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
              <i class="ni ni-world-2 text-danger text-lg opacity-10"></i>
            </div>
            <span class="nav-link-text ms-1 mb-0 h5">Tracking</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link " href="/orders">
            <div class="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
              <i class="ni ni-world-2 text-danger text-lg opacity-10"></i>
            </div>
            <span class="nav-link-text ms-1 mb-0 h5">Orders</span>
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
            <span class="nav-link-text ms-1 mb-0 h5">Integrations</span>
          </a>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script>
  // import SidenavList from "./SidenavList.vue";
  // import logo from "@/assets/img/logo-ct-dark.png";
  // import logoWhite from "@/assets/img/logo-ct.png";

    export default {
    name: "SideBar",
    components: {
      // SidenavList
    },
    data() {
      return {
        // logo,
        // logoWhite
      };
    },
   
  };
</script>