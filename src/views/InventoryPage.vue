<template>
  <div class="py-4 container-fluid" >                
    <div class="row ">
      <div class="col-lg-4 col-md-8 col-12">
        <div class="card">
          <div class="card-body p-3">
            <div class="row">
              <div class="col-8">
                  <div class="numbers">
                      <p class="text-sm-mb-0 text-uppercase font-weight-bolder">Total Products</p>
                      <h5 class="font-weight-bolder">90</h5>
                  </div>
              </div>  
              <div class="col-4 text-end">
                  <div class="icon icon-shape bg-gradient-warning shadow-primary text-center border-radius-lg">
                      <i class="far fa-envelope text-lg opacity-10" aria-hidden="true"></i>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>  
      <div class="col-lg-4 col-md-8 col-12">
        <div class="card">
          <div class="card-body p-3">
            <div class="row">
              <div class="col-8">
                  <div class="numbers">
                      <p class="text-sm-mb-0 text-uppercase font-weight-bolder">Total Stock</p>
                      <h5 class="font-weight-bolder">90</h5>
                  </div>
              </div>  
              <div class="col-4 text-end">
                  <div class="icon icon-shape bg-gradient-warning shadow-primary text-center border-radius-lg">
                      <i class="far fa-envelope text-lg opacity-10" aria-hidden="true"></i>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>  
      <div class="col-lg-4 col-md-8 col-12">
        <div class="card">
          <div class="card-body p-3">
            <div class="row">
              <div class="col-8">
                  <div class="numbers">
                      <p class="text-sm-mb-0 text-uppercase font-weight-bolder">Expired Stock</p>
                      <h5 class="font-weight-bolder">10</h5>
                  </div>
              </div>  
              <div class="col-4 text-end">
                  <div class="icon icon-shape bg-gradient-warning shadow-primary text-center border-radius-lg">
                      <i class="far fa-envelope text-lg opacity-10" aria-hidden="true"></i>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>  
    </div>
    
    <div class="row mt-2">
        <div class=" col-lg-4 col-md-8 col-12">
            <div class="card">
              <div class="card-body p-3">
                <div class="row">
                  <div class="col-8">
                    <div class="numbers">
                      <p class="text-sm-mb-0 text-uppercase font-weight-bolder">Incoming Stock</p>
                      <h6 class="font-weight-bolder">200</h6>
                    </div>
                  </div>
                  <div class="col-4 text-end">
                    <div class="icon icon-shape bg-gradient-warning shadow-primary text-center border-radius-lg">
                      <i class="ni ni-money-coins text-lg opacity-10" aria-hidden="true"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
        <div class=" col-lg-4 col-md-8 col-12">
            <div class="card">
              <div class="card-body p-3">
                <div class="row">
                  <div class="col-8">
                    <div class="numbers">
                      <p class="text-sm-mb-0 text-uppercase font-weight-bolder">Beta</p>
                      <h6 class="font-weight-bolder">0</h6>
                    </div>
                  </div>
                  <div class="col-4 text-end">
                    <div class="icon icon-shape bg-gradient-warning shadow-primary text-center border-radius-lg">
                      <i class="ni ni-money-coins text-lg opacity-10" aria-hidden="true"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
        <div class=" col-lg-4 col-md-8 col-12">
            <div class="card">
              <div class="card-body p-3">
                <div class="row">
                  <div class="col-8">
                    <div class="numbers">
                      <p class="text-sm-mb-0 text-uppercase font-weight-bolder">Beta</p>
                      <h6 class="font-weight-bolder">0</h6>
                    </div>
                  </div>
                  <div class="col-4 text-end">
                    <div class="icon icon-shape bg-gradient-warning shadow-primary text-center border-radius-lg">
                      <i class="ni ni-money-coins text-lg opacity-10" aria-hidden="true"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </div>
    <div class="row mt-4 ms-2 me-2">
       <div class="card ">
      <table class="table  table-striped table-responsive-md mt-3 align-items-center" id="table1">
         <thead>
            <tr>
               <!-- <th>No</th> -->
               <th>Seller</th>
               <th>Tipe Barcode</th>
               <th>Qty SKU</th>
               <th>Qty Stock</th>
            </tr>
         </thead>
         <tbody>
            <tr v-for="data in datas" :key="data.id">
               <!-- <td class="hidden">{{data.id}}</td> -->
               <td class="w-30">
                <div class="px-2 py-1 d-flex align-items-center">
                   <div class="icon icon-shape bg-gradient-warning shadow-primary text-center border-radius-lg">
                      <i class="fal fa-store text-lg opacity-10" aria-hidden="true"></i>
                  </div>
                  <div class="ms-4">
                    <p class="mb-0 text-lg font-weight-bold">{{data.seller}}</p>
                    <a href="#" class="mb-0 text-sm">{{data.telepon}}</a>
                  </div>
                </div>

               </td>
               <td><div class="ps-3">{{data.barcode}}</div></td>
               <td><div class="ps-4">{{data.SKU}}</div></td>
               <td><div class="ps-4">{{data.stock}}</div></td>
            </tr>
         </tbody>
      </table>
    </div>
    </div>
</div>
</template>


<script>
import Inventorydummy from "../components/data-dummy/Inventory-Dummy.json";
import $ from "jquery";
export default{
    name: 'InventoryPage',
    components: {},
    data(){
        return{
            datas:Inventorydummy,
        }
    },
    mounted(){
       $('#table1').dataTable({
         "responsive": false,"lengthChange": false, 	
"ordering": false,
         
     });  
    }
}

</script>

<style scoped>
  .row{
    margin:0;
    padding: 0;
  }
  /* .row1{
    padding-bottom: 30px;
  } */
  .col-sm-4 .border .tes{
    padding-left: 0;
    text-align: left;
    
  }
  .card{
    border-radius: 15px;
  }
</style>