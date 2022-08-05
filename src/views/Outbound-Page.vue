<template>
  <div class="py-4 container-fluid" >
      <div class="row mx-2">
         <div class="col-lg-2 col-md-6 col-12 ">
           <div class="card shadow-lg position-sticky h-auto mb-2">
            <ul class="nav flex-column bg-hite border-radius-lg p-1 ">
              <li class="nav-item d-flex justify-content-between align-items-center mt-1">
                <a href="#" class="nav-link text-body active">
                  <div class=" icon-xl h-100 w-100 d-flex align-items-center">
                    <i class="fas fa-briefcase m-2 mt-2 " ></i>
                     <div class="ms-2">
                    <p class="mb-0 h5 font-weight-bold">
                      Master
                    </p>
                  </div>
                  </div>
                </a>
              </li>
              <li class="nav-item d-flex justify-content-between align-items-center ">
                <a href="#" class="nav-link text-body active">
                  <div class="px-2 py-1 d-flex align-items-center">
                    <img src="../assets/images/shopee.deffdfa.png" alt="" height="35px" width="35px">
                     <div class="ms-3">
                    <p class="mb-0 h5 font-weight-bold">
                      Shopee
                    </p>
                  </div>
                  </div>
                </a>
              </li>
              <li class="nav-item d-flex justify-content-between align-items-center ">
                <a href="#" class="nav-link text-body ">
                  <div class="px-2 py-1 d-flex align-items-center">
                    <img src="../assets/images/tokopedia.a880bd9.png" alt="" height="35px" width="35px" >
                     <div class="ms-3">
                    <p class="mb-0 h5 font-weight-bold">
                      Tokopedia
                    </p>
                  </div>
                  </div>
                 
                </a>
              </li>
              <li class="nav-item d-flex justify-content-between align-items-center ">
                <a href="#" class="nav-link text-body">
                  <div class="px-2 py-1 d-flex align-items-center">
                    <img src="../assets/images/lazada.6daa1e7.png" alt="" height="35px" width="35px">
                    <div class="ms-3">
                      <p class="mb-0 h5 font-weight-bold">
                        Lazada
                      </p>
                    </div>
                  </div>

                </a>
              </li>
              <li class="nav-item d-flex justify-content-between align-items-center ">
                <a href="#" class="nav-link text-body">
                  <div class="d-flex px-2 py-2">
                    <img src="../assets/images/blibli.70a677a.png" alt="" height="35px" width="35px">
                    <div class="ms-3">
                      <p class="mb-0 h5 font-weight-bold">
                        Blibli
                      </p>
                    </div>
                  </div>
                  
                </a>
              </li>
              <li class="nav-item d-flex justify-content-between align-items-center ">
                <a href="#" class="nav-link text-body">
                  <div class="px-2 py-1 d-flex align-items-center">
                    <img src="../assets/images/jdid.2d4a285.jpg" alt="" height="35px" width="35px">
                    <div class="ms-3">
                      <p class="mb-0 h5 font-weight-bold">
                        JD.ID
                      </p>
                    </div>
                  </div>
                
                </a>
              </li>
              <li class="nav-item d-flex justify-content-between align-items-center ">
                <a href="#" class="nav-link text-body">
                  <div class="px-2 py-1 d-flex align-items-center">
                    <img src="../assets/images/bukalapak.deaba19.png" alt="" height="35px" width="35px">
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
         <div class="col-lg-10 col-md-6 col-12">
            <div class="card shadow-sm card-body h-75">
               <div class="table-responsive">
                  <table class="table table-bordered table-striped table-responsive-xl mb-0 w-auto" id="table1">
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
                           <tr v-for="data in datas" :key="data.id" id="table1">
                              <td>{{data.id}}</td>
                              <td>{{data.kd_inbound}}</td>
                              <td>{{data.costumer}}</td>
                              <td>{{data.alamat}}</td>
                              <td ><p class=" bg-info dta-dmy">{{data.status}}</p></td>
                              <td>{{data.kurir}}</td>
                              <td>{{data.exported}}</td>
                              <td>{{data.order_date}}</td>
                              <td>{{data.created}}</td>
                           </tr>
                        </tbody>
                     </table>
               </div> 
            </div>
         </div>
        
      </div>
</div>
</template>


<script>
import Outbonddummy from "../components/data-dummy/Outbond-Dummy.json";
import $ from "jquery";
export default{
    name: 'OutboundPage',
    components: {}, 
    mounted(){
       $('#table1').dataTable({
         "responsive": false,"lengthChange": false,
     });
    },  
    data(){
      return{
         datas:Outbonddummy
      }
    }
}
</script>

<style>
.dta-dmy{
   border-radius: 5px;
}
</style>