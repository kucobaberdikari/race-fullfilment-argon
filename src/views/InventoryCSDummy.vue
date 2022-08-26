<template>
   <div class="py-4 container-fluid">
      <div class="card">
         <div class="table-responsive">
            <table class="table table-striped  align-items-center">
               <thead>
                  <tr>
                     <!-- <th class="text-center w-5">No</th> -->
                     <th class="text-center">Product</th>
                     <th class="text-center w-30">SKU</th>
                     <th class="text-center">Data Seller</th>
                     <th class="text-center">Data Warehouse</th>
                     <th class="text-center">Expired Date</th>
                     <th class="text-center">Action</th>
                  </tr>
               </thead>
               <tbody>
                  <tr class="height-cs" v-for="(data) in barangcs" :key="data.ProductId">
                     <!-- <td class="text-center w-5">{{index+1}}</td> -->
                     <td class="text-center "><img v-bind:src="data.image" alt="imageproduct" class="max-height-70"></td>
                     <td class="text-center w-30 ms-6">
                       <div class="px-2 py-1 align-items-center">
                        <div class="ms-4">
                          <p class="mb-0 text-lg font-weight-bold">{{data.name}}</p>
                          <!-- <a href="#" class="mb-0 text-sm"></a> / -->
                          <a href="#" class="mb-0 text-sm">{{data.skuCode}}</a>
                        </div>
                      </div>
                     </td>
                     <td class="text-center ">data.data_stock_seller</td>
                     <td class="ps-7 ms-4">
                        <div class="b575-number-input number-input ">
                        <button onclick="this.parentNode.querySelector('input[type=number]').stepDown()" class="minus"></button>
                        <input class="quantity" min="0" name="quantity" value="0" type="number" >
                        <button onclick="this.parentNode.querySelector('input[type=number]').stepUp()" class="plus"></button>
                        </div>
                     </td>
                     <td class="text-center">data.tgl_expired</td>
                     <td class="text-center">
                        <b-button id="show-modaledit" @click="ModalEdit(data)" class="btn bg-gradient-success me-2" >Edit Seller</b-button>
                        <button class="btn btn-danger " @click="alertDelete(data.id)">Delete!</button>
                     </td>
                  </tr>
               </tbody>
            </table>
         </div>
      </div>

         <b-modal ref="modaledit" id="modaledit" size="lg" hide-backdrop hide-footer >
      <template #modal-title>Edit Data Barang</template>
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
import axios from 'axios'
// import {  useRoute } from 'vue-router'
export default {
      name: 'InventoryCsDummy',

      data () {
         return {
            barangcs:[]
         }
      },

      created(){
         this.getBarang();
      },

      methods:{
         getBarang(){
            axios.get(`http://192.168.137.159:2021/product/csProduct?id_cs=1&page=1&limit=12`)
               .then((res) => {
                  this.barangcs = res.data.data;
               })
               .catch((error) =>{
                  console.log(error)
               })
            },
               ModalEdit(data){
            this.$refs['modaledit'].show();
            this.form = data;
         },
      //    getBarang(){
      //       axios.get(`http://localhost:2020/dashboard/customer/barang/${this.$route.params.id}`)
      //          .then((res) => {
      //             this.barangcs = res.data.data[0].barangs;
      //          })
      //          .catch((error) =>{
      //             console.log(error)
      //          })
      // }
   }
}
</script>

<style scoped>
.number-input input[type="number"] {
-webkit-appearance: textfield;
-moz-appearance: textfield;
appearance: textfield;
}

.number-input input[type=number]::-webkit-inner-spin-button,
.number-input input[type=number]::-webkit-outer-spin-button {
-webkit-appearance: none;
}

.number-input {
  display: flex;
  justify-content: space-around;
  align-items: left;
}

.number-input button {
-webkit-appearance: none;
background-color: transparent;
border: none;
align-items: center;
justify-content: center;
cursor: pointer;
margin:17px 0;
/* padding-top:10px; */
position: relative;
}

.number-input button:before,
.number-input button:after {
display: inline-block;
position: absolute;
content: '';
height: 2px;
transform: translate(-50%, -50%);
}

.number-input button.plus:after {
transform: translate(-50%, -50%) rotate(90deg);
}

.number-input input[type=number] {
text-align: center;
}

.number-input.number-input {
border: 1px solid #ddd;
width: 9rem;
border-radius: .50rem;
}

.number-input.number-input button {
width: 2rem;
height: .7rem;
}

.number-input.number-input button.minus {
padding-left: 10px;
}

.number-input.number-input button:before,
.number-input.number-input button:after {
width: .9rem;
background-color: #495057;
}

.number-input.number-input input[type=number] {
max-width: 3rem;
padding: .5rem;
border: 1px solid #ddd;
border-width: 0 1px;
font-size: 1rem;
height: 3rem;
color: #495057;
}

@media not all and (min-resolution:.001dpcm) {
@supports (-webkit-appearance: none) and (stroke-color:transparent) {

.number-input.b575-number-input.safari_only button:before,
.number-input.b575-number-input.safari_only button:after {
margin-top: -.2rem;
}
}
}
.height-cs{
   height: 90px;
}
.max-height-70{
   max-height: 70px;
}
</style>