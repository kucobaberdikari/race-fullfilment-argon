<template>
 <div>
    <gmap-map
        :zoom="14"    
        :center="center"
        style="width:100%;  height: 450px;"
      >
      <gmap-marker
        :key="index"
        v-for="(m, index) in locationMarkers"
        :position="m.position"
        @click="center=m.position"
      ></gmap-marker>
    </gmap-map>
    <div class="pb-0 card-header mb-0 ps-3 bg-white border-white">
      <h5><b>Warehouse</b></h5>
      <div class="row">
        <div class="container border-radius-lg">
          <div class="row">
            <div class="col-py-3 ps-0 w-25 ">
              <div class="d-flex mb-2 ms-2">
                <div class="border-radius-sm text-cnter me-2 d-flex align-items-center justify-content-center">
                  <i class="fas fa-map-marker-alt "></i>
                </div>
                <p class="text-xs t-1 mb-0 font-weight-bold">Bekasi</p>
              </div>
              <h4 class="font-weight-bolder ms-2">1000</h4>
              <div class="progress" style="height:9px">
                <div class="progress-bar bg-gradient-info" role="progressbar" aria-valuenow="75" aria-valuemin="0" style="width:75%;height:9px"></div>
              </div>
            </div>
            <div class="col-py-3 ps-0 w-25 ">
               <div class="d-flex mb-2">
                <div class="border-radius-sm text-cnter me-2 d-flex align-items-center justify-content-center">
                  <i class="fas fa-map-marker-alt "></i>
                </div>
                <p class="text-xs t-1 mb-0 font-weight-bold">bandung</p>
              </div>
              <h4 class="font-weight-bolder">500</h4>
              <div class="progress" style="height:9px">
                <div class="progress-bar bg-gradient-info" role="progressbar" aria-valuenow="75" aria-valuemin="0" style="width:60%;height:9px"></div>
              </div>
            </div>
            <div class="col-py-3 ps-0 w-25 ">
               <div class="d-flex mb-2">
                <div class="border-radius-sm text-cnter me-2 d-flex align-items-center justify-content-center">
                  <i class="fas fa-map-marker-alt "></i>
                </div>
                <p class="text-xs t-1 mb-0 font-weight-bold">Tanggerang</p>
              </div>
              <h4 class="font-weight-bolder">1200</h4>
              <div class="progress" style="height:9px">
                <div class="progress-bar bg-gradient-info" role="progressbar" aria-valuenow="75" aria-valuemin="0" style="width:76%;height:9px"></div>
              </div>
            </div>
            <div class="col-py-3 ps-0 w-25 ">
               <div class="d-flex mb-2">
                <div class="border-radius-sm text-cnter me-2 d-flex align-items-center justify-content-center">
                  <i class="fas fa-map-marker-alt "></i>
                </div>
                <p class="text-xs t-1 mb-0 font-weight-bold">Surabaya</p>
              </div>
              <h4 class="font-weight-bolder">2000</h4>
              <div class="progress" style="height:9px">
                <div class="progress-bar bg-gradient-info" role="progressbar" aria-valuenow="75" aria-valuemin="0" style="width:90%;height:9px"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
 
<script>
export default {
  name: "AddGoogleMap",
  data() {
    return {
      center: { 
        lat:106.87047346999188,
        lng:-6.321545743792041
      },
      locationMarkers: [],
      locPlaces: [],
      existingPlace: null
    };
  },
 
  mounted() {
    this.locateGeoLocation();
  },
methods: {
    initMarker(loc) {
      this.existingPlace = loc;
    },
    addLocationMarker() {
      if (this.existingPlace) {
        const marker = {
          lat: this.existingPlace.geometry.location.lat(),
          lng: this.existingPlace.geometry.location.lng()
        };
        this.locationMarkers.push({ position: marker });
        this.locPlaces.push(this.existingPlace);
        this.center = marker;
        this.existingPlace = null;
      }
    },
    locateGeoLocation: function() {
      navigator.geolocation.getCurrentPosition(res => {
        this.center = {
          lat: res.coords.latitude,
          lng: res.coords.longitude
        };
      });
    }
  }
};
</script>