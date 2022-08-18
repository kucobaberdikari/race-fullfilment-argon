<template>
  <div class="py-2 container-fluid ps-3" >
      <div class="row mx-2 pe-1 mt-2">
         <div class="col-lg-2 ">
           <div class="card mx-n3 shadow-lg position-sticky h-auto justify-content-center">
            <ul class="nav flex-column bg-white border-radius-lg p-1 ">
              <li class="nav-item d-flex justify-content-between align-items-center mt-2">
                <a href="#" class="nav-link text-body active ps-2">
                  <div class=" icon-lg h-100 w-100 d-flex align-items-center">
                    <i class="fas fa-briefcase fa-2xl mt-2 " ></i>
                     <div class="ms-3">
                      <p class="mb-0 h5 font-weight-bold">
                        Master
                      </p>
                  </div>
                  </div>
                </a>
              </li>
              <li class="nav-item d-flex justify-content-between align-items-center ">
                <a href="#" class="nav-link active text-body ps-1">
                  <div class="px-1 py-1 d-flex align-items-center">
                    <img src="../assets/images/shopee.deffdfa.png" alt="" height="25px" width="25px">
                     <div class="ms-3">
                      <p class="mb-0 h5 font-weight-bold">
                        Shopee
                      </p>
                  </div>
                  </div>
                </a>
              </li>
              <li class="nav-item d-flex justify-content-between align-items-center ">
                <a href="#" class="nav-link text-body ps-1">
                  <div class="px-1 py-1 d-flex align-items-center">
                    <img src="../assets/images/tokopedia.a880bd9.png" alt="" height="25px" width="25px" >
                     <div class="ms-3">
                    <p class="mb-0 h5 font-weight-bold">
                      Tokopedia
                    </p>
                  </div>
                  </div>
                 
                </a>
              </li>
              <li class="nav-item d-flex justify-content-between align-items-center ">
                <a href="#" class="nav-link text-body ps-1">
                  <div class="px-1 py-1 d-flex align-items-center">
                    <img src="../assets/images/lazada.6daa1e7.png" alt="" height="25px" width="25px">
                    <div class="ms-3">
                      <p class="mb-0 h5 font-weight-bold">
                        Lazada
                      </p>
                    </div>
                  </div>

                </a>
              </li>
              <li class="nav-item d-flex justify-content-between align-items-center ">
                <a href="#" class="nav-link text-body ps-1">
                  <div class="px-1 py-1 d-flex align-items-center">
                    <img src="../assets/images/blibli.70a677a.png" alt="" height="25px" width="25px">
                    <div class="ms-3">
                      <p class="mb-0 h5 font-weight-bold">
                        Blibli
                      </p>
                    </div>
                  </div>
                  
                </a>
              </li>
              <li class="nav-item d-flex justify-content-between align-items-center ">
                <a href="#" class="nav-link text-body ps-1">
                  <div class="px-1 py-1 d-flex align-items-center">
                    <img src="../assets/images/jdid.2d4a285.jpg" alt="" height="25px" width="25px">
                    <div class="ms-3">
                      <p class="mb-0 h5 font-weight-bold">
                        JD.ID
                      </p>
                    </div>
                  </div>
                
                </a>
              </li>
              <li class="nav-item d-flex justify-content-between align-items-center ">
                <a href="#" class="nav-link text-body ps-1">
                  <div class="px-1 py-1 d-flex align-items-center">
                    <img src="../assets/images/bukalapak.deaba19.png" alt="" height="25px" width="25px">
                     <div class="ms-3">
                        <p class="mb-0 h5 font-weight-bold">
                          Bukalapak
                        </p>
                      </div>
                  </div>
                 
                </a>
              </li>
            </ul>
            <div class="card position-sticky top-1 border mt-4 rounded-3">
               <div class="card-body d-flex flx-column justify-content-center text-center">
                  <a href="javascriot:;" class="text-decoration-none">
                     <i class="fa fa-plus text-secondary text-sm mb-1"></i>
                     <h6 class="text-secondary">input Order</h6>
                  </a>
               </div>
            </div>
          </div>
         </div>
         <div class="col-lg-10  ">
            <div class="card shadow-sm max-height-500 ms-3 rounded-2">
              <div class="card-header pb-1 float-end bg-white border-0">
                  <div class="input-group w-25 pe-1 float-end">
                    <!-- <i class="far fa-search text-dark"></i> -->
                    <input type="text" class="form-control border-1" placeholder="   search..."  />
                  </div>
              </div>
              <!-- <div class="card-body"> -->
                <div class="table-responsive max-height-500 mt-2">
                  <table class="table  mb-0 w-auto align-items-center" id="table1">
                            <thead>
                              <tr >
                                  <th>No</th>
                                  <th>Invoice</th>
                                  <th>Customer</th>
                                  <th>Addres</th>
                                  <th>Status</th>
                                  <th>Courier</th>
                                  <th>Exported</th>
                                  <th>Order Date</th>
                                  <th>Created Date</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr v-for="data in Outbound_Dummy" :key="data.id" id="table1">
                                  <td class="justify-content-center ps-4">{{data.id}}</td>
                                  <td class="justify-content-center">{{data.kd_inbound}}</td>
                                  <td class="justify-content-center">{{data.costumer}}</td>
                                  <td class="justify-content-center">{{data.alamat}}</td>
                                  <td class="justify-content-center ps-3"><p class="badge bg-gradient-info rounded-1">{{data.status}}</p></td>
                                  <td class="justify-content-center ps-4">{{data.kurir}}</td>
                                  <td class="justify-content-center ps-4">{{data.exported}}</td>
                                  <td class="justify-content-center ps-4">{{data.order_date}}</td>
                                  <td class="justify-content-center ps-4">{{data.created}}</td>
                              </tr>
                            </tbody>
                  </table>
                </div> 
              <!-- </div> -->
            </div>
         </div>
      </div>
</div>
</template>


<script>
// import Outbonddummy from "../components/data-dummy/Outbond-Dummy.json";
// import $ from "jquery";
import axios from "axios";
export default{
    name: 'OutboundPage',
    components: {}, 
    data(){
      return{
         Outbound_Dummy:[]
      }
    },
    mounted(){
    //    $('#table1').dataTable({
    //      "responsive": false,"lengthChange": false,"ordering":false,
    //       columnDefs: [
    //   {
    //       className: 'dt-head-center dt-body-center'
    //   }]
    //  });
      this.load()
    },  
    methods: {
      load(){
        axios.get('http://localhost:3000/Outbound_Dummy').then(res => {
        this.Outbound_Dummy = res.data //respon dari rest api dimasukan ke users
      }).catch ((err) => {
        console.log(err);
      })
    }
    }
}
</script>

<style>
.dta-dmy{
   border-radius: 5px;
}
</style>