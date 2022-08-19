<template>
  <aside 
      class="my-3 overflow-auto border-0 sidenav navbar navbar-vertical navbar-expand-xs border-radius-xl bg-gradient-dark "
      data-color="dark"
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
    id="sidenav-main" >

    <div class="sidenav-header">
       <i
        class="top-0 p-3 cursor-pointer fas fa-times text-secondary opacity-5 position-absolute end-0 d-none d-xl-none"
        aria-hidden="true"
        id="iconSidenav"
      ></i>
       <router-link class="m-0 navbar-brand" to="/dashboard">
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
        <span class="ms-2 font-weight-bold mt-4 text-white ">Race Fullfilment</span>
        
      </router-link>
            <!-- <a
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
            </a> -->
    </div>
    <!-- <hr class="horizontal dark mt-0"> -->
    <div class="collapse navbar-collapse w-auto h-auto h-100" id="sidenav-collapse-main">
      <ul class="navbar-nav">
        <li class="nav-item my-1">
          <sidenav-item
            url="/dashboard"
            :class="getRoute() === 'dashboard' ? 'active' : ''"
            :navText="'Dashboard'"
          >
            <template v-slot:icon>
              <i class="fas fa-th" style="color:#f8f9fa;height: 32px;width:32px;padding:0"></i>
            </template>
          </sidenav-item>
        </li>
        <li class="nav-item mt-3">
          <h6 class="ps-4 ms-2 text-uppercase text-xs font-weight-bolder opacity-6 text-white"><b>STOCK</b></h6>
        </li>
        <li class="nav-item">
          <sidenav-item
            url="/inventory"
            :class="getRoute() === 'inventory' ? 'active' : ''"
            :navText="'inventory'"
          >
            <template v-slot:icon>
               <i
                class="fas fa-dolly-flatbed" style="color:#f8f9fa;height: 32px;width:32px;padding:0"
              ></i>
            </template>
          </sidenav-item>
        </li>
        <li class="nav-item">
          <sidenav-item
            url="/produk/add"
            :class="getRoute() === 'Products' ? 'active' : ''"
            :navText="'Products'"
          >
            <template v-slot:icon>
              <i
                class="fas fa-boxes" style="color:#f8f9fa;height: 32px;width:32px;padding:0"
              ></i>
            </template>
          </sidenav-item>
        </li>
        <li class="nav-item mt-3">
          <h6 class="ps-4 ms-2 text-uppercase text-xs font-weight-bolder opacity-6 text-white"><b>SHIPMENT</b></h6>
        </li>
         <li class="nav-item">
          <sidenav-item
            url="/inbound"
            :class="getRoute() === 'Inbound' ? 'active' : ''"
            :navText="'Inbound'"
          >
            <template v-slot:icon>
              <i
                class="fal fa-arrow-alt-to-bottom" style="color:#f8f9fa;height: 32px;width:32px;padding:0"
              ></i>
            </template>
          </sidenav-item>
        </li>
        <li class="nav-item">
          <sidenav-item
            url="/outbound"
            :class="getRoute() === 'Outbound' ? 'active' : ''"
            :navText="'Outbound'"
          >
            <template v-slot:icon>
             <i class="fal fa-arrow-alt-from-bottom" style="color:#f8f9fa;height: 32px;width:32px;padding:0"
             ></i>
            </template>
          </sidenav-item>
        </li>
        <li class="nav-item">
          <sidenav-item
            url="/tracking"
            :class="getRoute() === 'Tracking' ? 'active' : ''"
            :navText="'Tracking'"
          >
            <template v-slot:icon>
            <i class="fas fa-crosshairs" style="color:#f8f9fa;height: 32px;width:32px;padding:0"
            ></i>
            </template>
          </sidenav-item>
        </li>
        <li class="nav-item">
          <sidenav-item
            url="/orders"
            :class="getRoute() === 'Orders' ? 'active' : ''"
            :navText="'Orders'"
          >
            <template v-slot:icon>
             <i class="fas fa-history" style="color:#f8f9fa;height: 32px;width:32px;padding:0"
             ></i>
            </template>
          </sidenav-item>
        </li>
        <li class="nav-item mt-3">
          <h6 class="ps-4 ms-2 text-uppercase text-xs font-weight-bolder opacity-6 text-white"><b>SETTINGS</b> </h6>
        </li>
        <li class="nav-item">
          <sidenav-item
            url="/integrations"
            :class="getRoute() === 'Integrations' ? 'active' : ''"
            :navText="'Integrations'"
          >
            <template v-slot:icon>
             <i class="fas fa-file-code" style="color:#f8f9fa;height: 32px;width:32px;padding:0"
             ></i>
            </template>
          </sidenav-item>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script>
  import SidenavItem from "../examples/Sidenav/SidenavItem.vue";
  import logo from "../assets/images/newlogo.png";
  // import logoWhite from "@/assets/img/logo-ct.png";

    export default {
    name: "SideBar",
    components: {
      SidenavItem
    },
    data() {
      return {
        logo,
        // logoWhite
      };
    },
     methods: {
    getRoute() {
      const routeArr = this.$route.path.split("/");
      return routeArr[1];
    }
  },
    props: ["custom_class", "layout"]
  };
</script>