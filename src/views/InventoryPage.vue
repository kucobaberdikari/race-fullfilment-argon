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
        <div class="card-header justify-items-start bg-white px-0 pb-2 pt-3">
           <b-button id="show-modaladd" @click="$bvModal.show('bv-modal-add')" class="btn bg-gradient-success ms-3">Add Seller</b-button>
        </div>
      <table class="table  table-striped table-responsive-md mt-3 align-items-center" id="table1">
         <thead>
            <tr>
               <th>No</th>
               <th>Seller</th>
               <th>Tipe Barcode</th>
               <th>Qty SKU</th>
               <th>Qty Stock</th>
               <th>Action</th>
            </tr>
         </thead> 
         <tbody>
            <tr v-for="(data,index) in Inventory_Dummy" :key="data.id">
               <td class="ps-2  ">{{index+1}}</td>
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
               <td>
                 <b-button id="show-modaledit" @click="$bvModal.show('bv-modal-edit')" class="btn bg-gradient-success me-2">Edit Seller</b-button>
                <button class="btn btn-danger ">Delete</button>
               </td>
            </tr>
         </tbody>
      </table>
    </div>
    </div>
    <b-modal id="bv-modal-add" hide-footer>
    <template #modal-title>
      Using <code>$bvModal</code> Methods
    </template>
    <div class="d-block text-center">
      <h3>Hello From This Modal!</h3>
    </div>
    <b-button class="mt-3" block @click="$bvModal.hide('bv-modal-add')">Close Me</b-button>
    </b-modal>
    <b-modal id="bv-modal-edit" size="lg" hide-backdrop hide-footer>
    <template #modal-title>Edit Data Seller</template>
    <div class="d-block justify-items-start ms-4">
      <div class="form-group">
        <p for="seller" class="col-md-9 text-dark">seller</p>
        <div class="col-md-12">
          <input type="text" name="seller" id="seller" class="form-controll">
        </div>
      </div>
      <div class="form-group">
        <p for="barcode" class="col-md-9 text-dark">barcode</p>
        <div class="col-md-12">
          <input type="text" name="barcode" id="barcode" class="form-controll">
        </div>
      </div>
      <div class="form-group">
        <p for="sku" class="col-md-9 text-dark">sku</p>
        <div class="col-md-12">
          <input type="text" name="sku" id="sku" class="form-controll">
        </div>
      </div>
      <div class="form-group">
        <p for="stock" class="col-md-4 text-dark">stock</p>
        <div class="col-md-12">
          <input type="text" name="stock" id="stock" class="form-controll">
        </div>
      </div>
    </div>
    
    
    </b-modal>
</div>

</template>


<script>
// import Inventorydummy from "../components/data-dummy/Inventory-Dummy.json";
import "jquery/dist/jquery.min.js";
import $ from "jquery";
import axios from 'axios'
export default{
    name: 'InventoryPage',
    components: {},
    data(){
        return{
          // datas:Inventorydummy,
            Inventory_Dummy:[],
        }
    },
    mounted(){
        $('#table1').dataTable({
          "responsive": false,"lengthChange": false, 	
  "ordering": false,
          
      });  
     this.load()
    },
    methods:{
       load(){
        axios.get('http://localhost:3000/Inventory_Dummy').then(res => {
        this.Inventory_Dummy = res.data //respon dari rest api dimasukan ke users
      }).catch ((err) => {
        console.log(err);
                $('#table1').dataTable({
          "responsive": false,"lengthChange": false, 	
  "ordering": false,
          
      });
      })
    }
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