<template>
   <div class="py-4 container-fluid">
      <div class="card">
         <div class="table-responsive">
            <table class="table table-striped table-bordered  align-items-center">
               <thead>
                  <tr>
                     <th class="text-center">Product</th>
                     <th class="text-center">SKU</th>
                     <th class="text-center">Data Seller</th>
                     <th class="text-center">Data Warehouse</th>
                     <th class="text-center">Expired Date</th>
                     <th class="text-center">Action</th>
                  </tr>
               </thead>
               <tbody>
                  <tr v-for="(data, index) in barangcs" :key="index">
                     <td class="text-center">{{data.foto}}</td>
                     <td class="text-center">
                       <div class="px-2 py-1 d-flex align-items-center">
                        <div class="ms-4">
                          <p class="mb-0 text-lg font-weight-bold">{{data.nama_barang}}</p>
                          <!-- <a href="#" class="mb-0 text-sm"></a> / -->
                          <a href="#" class="mb-0 text-sm">{{data.sku}}</a>
                        </div>
                      </div>
                     </td>
                     <td class="text-center ">{{data.data_stock_seller}}</td>
                     <td class="ps-7">
                        <div class="b575-number-input number-input ">
                        <button onclick="this.parentNode.querySelector('input[type=number]').stepDown()" class="minus"></button>
                        <input class="quantity" min="0" name="quantity" value="0" type="number" v-model="data.data_stock_gudang">
                        <button onclick="this.parentNode.querySelector('input[type=number]').stepUp()" class="plus"></button>
                        </div>
                     </td>
                     <td class="text-center">{{data.tgl_expired}}</td>
                     <td class="text-center">
                        <b-button id="show-modaledit" @click="ModalEdit(data)" class="btn bg-gradient-success me-2" >Edit Seller</b-button>
                        <button class="btn btn-danger " @click="alertDelete(data.id)">Delete!</button>
                     </td>
                  </tr>
               </tbody>
            </table>
         </div>
      </div>
   </div>
</template>

<script>
import axios from 'axios'
// import {  useRoute } from 'vue-router'
export default {
      name: 'InventoryCustomer',

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
            axios.get(`http://localhost:3000/Inventory_Dummy/${this.$route.params.id}`)
               .then((res) => {
                  this.barangcs = res.data.barang;
               })
               .catch((error) =>{
                  console.log(error)
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
</style>