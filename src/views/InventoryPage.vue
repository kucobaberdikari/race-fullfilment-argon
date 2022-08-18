<template>
  <div class="py-4 container-fluid">                
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
        <div class="card-header my-0 py-0 px-0 bg-white ">
          <div class="row mx-0 ">
            <div class="d-flex justify-content-md-start col-6 col-md-6">
            <b-button id="show-modaladd" @click="$bvModal.show('bv-modal-add')" class="btn bg-gradient-success ms-3">Add Seller</b-button>
            </div>
          <div class="d-flex justify-content-md-end col-6 col-md-6 mb-3">
            <div class="input-group w-50 pe-1">
                  <input type="text" class="form-control border-1" placeholder="   search..." v-model="filter" />
              </div>
          </div>
          </div>
        </div>
        <div class="card-body">
          <div class="table-responsive">
            <table class="table  table-striped table-responsive-md mt-3 align-items-center" id="table1">
              <thead>
                  <tr>
                    <th>No</th>
                    <th @click="sort('seller')">Seller</th>
                    <th >Tipe Barcode</th>
                    <th @click="sort('SKU')">Qty SKU</th>
                    <th @click="sort('stock')">Qty Stock</th>
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
                    <b-button id="show-modaledit" @click="ModalEdit(data)" class="btn bg-gradient-success me-2" >Edit Seller</b-button>
                    <button class="btn btn-danger " @click="deleteseller(data.id)">Delete</button>
                    </td>
                  </tr>
              </tbody>
            </table>
          </div>
        </div>
        <!-- <div class="card-footer px-0 py-0">
         <div class="row mx-0 ">
            <div class="d-flex justify-content-md-start col-9 col-md-9 pb-0 pt-3">
           <P>PAGE :  &nbsp;</P> {{currentPage}} &nbsp;&nbsp;&nbsp;
           <P>SORT :  &nbsp;</P> {{currentSort}}  &nbsp;&nbsp;&nbsp;
           <P>DIR  :  &nbsp;</P> {{currentSortDir}}
            </div>
          <div class="d-flex justify-content-md-end col-3 col-md-3 py-0 mb-2 mx-0">
            <div class="row pb-3 my-0">
              <div class="col-sm-6"><button class="btn bg-gradient-info" @click="prevPage">Previous</button></div>
              <div class="col-sm-6"><button class="btn bg-gradient-info" @click="nextPage">Next</button></div>
            </div>
          </div>
          </div>
        </div> -->
      </div>
    </div>
    <b-modal id="bv-modal-add" size="lg" hide-backdrop hide-footer >
    <template #modal-title>
     Add Seller
    </template>
    <div class="d-block justify-items-start ms-1 px-0">
      <form v-on:submit.prevent="submitform">
      <!-- <span for="ID" class="col-md-9 text-dark ms-3 "><b>ID</b></span> -->
      <input type="hidden" name="id" v-model="form.id" class="form-control form-control-default invalid">
        <div class="form-group mb-1" >
          <span for="seller" class="col-md-9 text-dark ms-3 "><b>Seller</b></span>
          <div class="col-md-12">
            <input type="text" name="seller" id="seller" class="form-control form-control-default invalid" v-model="form.seller">
          </div>
        </div>
        <div class="form-group mb-1" >
          <span for="seller" class="col-md-9 text-dark ms-3"><b>Telepon</b></span>
          <div class="col-md-12">
            <input type="text" name="seller" id="seller" class="form-control form-control-default invalid" v-model="form.telepon">
          </div>
        </div>
        <div class="form-group mb-1">
          <span for="barcode" class="col-md-9 text-dark ms-3"><b>Barcode</b></span>
          <div class="col-md-12">
            <input type="text" name="barcode" id="barcode" class="form-control form-control-default invalid" v-model="form.barcode">
          </div>
        </div>
        <div class="form-group mb-1">
          <span for="sku" class="col-md-9 text-dark ms-3"><b>SKU</b></span>
          <div class="col-md-12">
            <input type="text" name="sku" id="sku" class="form-control form-control-default invalid" v-model="form.SKU">
          </div>
        </div>
        <div class="form-group mb-1">
          <span for="stock" class="col-md-4 text-dark ms-3"><b>Stock</b></span>
          <div class="col-md-12">
            <input type="text" name="stock" id="seller.stock" class="form-control form-control-default invalid" v-model="form.stock">
          </div>
        </div>
      </form>
    </div>
   <div class="modal-footer mt-1 align-items-end border-0 py-1">
    <button class="btn bg-gradient-success" type="submit" @click="submitform">Create</button>
     <b-button class="mt-3" block @click="$bvModal.hide('bv-modal-add')">Close Me</b-button>
   </div>
    </b-modal>

    <b-modal ref="modaledit" id="modaledit" size="lg" hide-backdrop hide-footer >
      <template #modal-title>Edit Data Seller</template>
      <div class="d-block justify-items-start ms-1 px-0">
       <form  method="post" v-on:submit.prevent="editform">
          <input type="hidden" name="id" v-model="form.id">
          <div class="form-group mb-1" >
            <span for="seller" class="col-md-9 text-dark ms-3"><b>Seller</b></span>
            <div class="col-md-12">
              <input type="text" name="seller" id="seller.id" class="form-control form-control-default invalid" v-model="form.seller">
            </div>
          </div>
          <div class="form-group mb-1" >
            <span for="seller" class="col-md-9 text-dark ms-3"><b>Telepon</b></span>
            <div class="col-md-12">
              <input type="text" name="seller" id="seller.telepon" class="form-control form-control-default invalid" v-model="form.telepon">
            </div>
          </div>
          <div class="form-group mb-1">
            <span for="barcode" class="col-md-9 text-dark ms-3"><b>Barcode</b></span>
            <div class="col-md-12">
              <input type="text" name="barcode" id="seller.barcode" class="form-control form-control-default invalid" v-model="form.barcode">
            </div>
          </div>
          <div class="form-group mb-1">
            <span for="sku" class="col-md-9 text-dark ms-3"><b>SKU</b></span>
            <div class="col-md-12">
              <input type="text" name="sku" id="seller.SKU" class="form-control form-control-default invalid" v-model="form.SKU">
            </div>
          </div>
          <div class="form-group mb-1">
            <span for="stock" class="col-md-4 text-dark ms-3"><b>Stock</b></span>
            <div class="col-md-12">
              <input type="text" name="seller.stock" id="stock" class="form-control form-control-default invalid" v-model="form.stock">
            </div>
          </div>
       </form>
      </div>
      <!-- <div class="modal-footer mt-1 align-items-end border-0 py-1 "> -->
       <div class="modal-footer mt-1 align-items-end border-0 py-1">
         <button class="btn bg-gradient-success w-25 me-1" @click="editform(form.id)">Update</button>
        <b-button class="mt-3 ms-1 w-25" block @click="$bvModal.hide('modaledit')">Close Me</b-button>
       </div>
      <!-- </div> -->
    </b-modal>
</div>

</template>

<script>
// import Inventorydummy from "../components/data-dummy/Inventory-Dummy.json";
import "jquery/dist/jquery.min.js";
// import $ from "jquery";
import axios from 'axios'
export default{
    name: 'InventoryPage',
    components: {},
    data(){
        return{
          // datas:Inventorydummy,
            Inventory_Dummy:[],
            dataseller:null,
            form:{
              id:'',
              seller:'',
              telepon:'',
              barcode:'',
              SKU:'',
              stock:'',
              },
            // currentSort:'seller',
            // currentSortDir:'asc',
            // pageSize:3,
            // currentPage:1,
            // filter:''
        }
    },
    // mounted(){
    //     $('#table1').dataTable({
    //       "responsive": false,"lengthChange": false, 	
    //     "ordering": false,
          
    //   });  
    //  this.load()
    // },
    created() {
      this.load();
    },

    methods:{
       load(){
        axios.get('http://localhost:3000/Inventory_Dummy').then(res => {
        this.Inventory_Dummy = res.data 
      }).catch ((err) => {
        console.log(err);
      })
    }, 
    submitform(){
      axios.post('http://localhost:3000/Inventory_Dummy',this.form)
      .then((res) => {
        this.form = res.data;
         window.location.reload()
      })
       .catch(function(error){
        console.log(error.response)
      })
    },
    editform(id){
      axios.put(`http://localhost:3000/Inventory_Dummy/${id}`,this.form)
      .then(response => {
        this.form = response.data;
       console.log(response);
       window.location.reload()
      })
      .catch(err =>{console.log(err);})
    },
    ModalEdit(data){
      this.$refs['modaledit'].show();
      this.form = data;
    },
    deleteseller(id){
      axios.delete(`http://localhost:3000/Inventory_Dummy/${id}`)
      .then(response => {
        this.seller = response.data;
       window.location.reload()
      })
      .catch(function(error){
        console.log(error.response)
      })
    },
    // sort:function(s) {
    //   //if s == current sort, reverse
    //   if(s === this.currentSort) {
    //     this.currentSortDir = this.currentSortDir==='asc'?'desc':'asc';
    //   }
    //   this.currentSort = s;
    // },
    // nextPage:function() {
    //   if((this.currentPage*this.pageSize) < this.Inventory_Dummy.length) this.currentPage++;
    // },
    // prevPage:function() {
    //   if(this.currentPage > 1) this.currentPage--;
    // }

    },
  // computed:{
  //   sortedCats:function() {
  //     return this.Inventory_Dummy.sort((a,b) => {
  //       let modifier = 1;
  //       if(this.currentSortDir === 'desc') modifier = -1;
  //       if(a[this.currentSort] < b[this.currentSort]) return -1 * modifier;
  //       if(a[this.currentSort] > b[this.currentSort]) return 1 * modifier;
  //       return 0;
  //     }).filter((row, index) => {
  //       let start = (this.currentPage-1)*this.pageSize;
  //       let end = this.currentPage*this.pageSize;
  //       if(index >= start && index < end) return true;
  //     });
  //   }
  // }
}
</script>

