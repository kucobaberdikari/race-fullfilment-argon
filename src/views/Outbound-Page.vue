<template>
  <div class="py-4 container-fluid" >
      <div class="row mx-2">
         <div class="card h-auto ">
                  <table class="table table-bordered table-striped datatable-table table-responsive mb-0" id="table1">
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