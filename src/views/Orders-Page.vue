<template>
    <div class="py-4 container-fluid">
        <div class="row px-3">
           <div class="col-12">
            <div class="card">
            
                <b-card no-body>
                    <b-tabs pills card class="col-md-12" content-class="mt-3" justified>
                        <b-tab no-body title="All " active>
                            <table class="table table-bordered table-striped table-responsive-md" id="table1">
                                <thead>
                                    <tr>
                                        <th>No</th>
                                        <th>Invoice</th>
                                        <th>Total</th>
                                        <th>Status</th>
                                        <th>Gudang</th>
                                        <th>Created At</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(data,index) in Orders_Dummy" :key="data.id">
                                        <td  >{{index+1}}</td>
                                        <td>{{data.invoice}}</td>
                                        <td>{{data.total}}</td>
                                        <td v-if="data.status === 'Inbound'"> <span class="badge bg-gradient-warning">{{data.status}}</span></td>
                                        <td v-else-if="data.status === 'Proses'"> <span class="badge bg-gradient-primary">{{data.status}}</span></td>
                                        <td v-else-if="data.status === 'Outbound'"> <span class="badge bg-gradient-success">{{data.status}}</span></td>
                                        <td v-else-if="data.status === 'Dikirim'"> <span class="badge bg-gradient-info">{{data.status}}</span></td>
                                        <td v-else-if="data.status === 'Sampai'"> <span class="badge bg-gradient-secondary">{{data.status}}</span></td>
                                        <td v-else><span class="badge bagde-default">{{data.status}}</span></td>
                                        <td>{{data.gudang}}</td>
                                        <td>{{data.created_at}}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </b-tab>
                        <b-tab no-body title="Inbound">
                           <table class="table table-bordered table-striped table-responsive-md" id="table2">
                                <thead>
                                    <tr>
                                        <th>No</th>
                                        <th>Invoice</th>
                                        <th>Total</th>
                                        <th>Status</th>
                                        <th>Gudang</th>
                                        <th>Created At</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(data,index) in filterstatusInbound" :key="data.id">
                                        <td>{{index+1}}</td>
                                        <td>{{data.invoice}}</td>
                                        <td>{{data.total}}</td>
                                        <td><span class="badge bg-gradient-warning">{{data.status}}</span></td>
                                        <td>{{data.gudang}}</td>
                                        <td>{{data.created_at}}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </b-tab>
                        <b-tab no-body title="Proses">
                           <table class="table table-bordered table-striped table-responsive-md" id="table3">
                                <thead>
                                    <tr>
                                        <th>No</th>
                                        <th>Invoice</th>
                                        <th>Total</th>
                                        <th>Status</th>
                                        <th>Gudang</th>
                                        <th>Created At</th>
                                    </tr>
                                </thead>
                                <tbody>
                                     <tr v-for="(data,index) in filterstatusProses" :key="data.id">
                                        <td>{{index+1}}</td>
                                        <td>{{data.invoice}}</td>
                                        <td>{{data.total}}</td>
                                        <td><span class="badge bg-gradient-primary">{{data.status}}</span></td>
                                        <td>{{data.gudang}}</td>
                                        <td>{{data.created_at}}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </b-tab>
                        <b-tab no-body title="Outbound">
                           <table class="table table-bordered table-striped table-responsive-md" id="table2">
                                <thead>
                                    <tr>
                                        <th>No</th>
                                        <th>Invoice</th>
                                        <th>Total</th>
                                        <th>Status</th>
                                        <th>Gudang</th>
                                        <th>Created At</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(data,index) in filterstatusOutbound" :key="data.id">
                                        <td>{{index+1}}</td>
                                        <td>{{data.invoice}}</td>
                                        <td>{{data.total}}</td>
                                        <td><span class="badge bg-gradient-success">{{data.status}}</span></td>
                                        <td>{{data.gudang}}</td>
                                        <td>{{data.created_at}}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </b-tab>
                        <b-tab no-body title="Dikirim">
                           <table class="table table-bordered table-striped table-responsive-md" id="table5">
                                <thead>
                                    <tr>
                                        <th>No</th>
                                        <th>Invoice</th>
                                        <th>Total</th>
                                        <th>Status</th>
                                        <th>Gudang</th>
                                        <th>Created At</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="data in filterstatusDikirim" :key="data.id">
                                        <td>{{data.id}}</td>
                                        <td>{{data.invoice}}</td>
                                        <td>{{data.total}}</td>
                                        <td><span class="badge bg-gradient-info">{{data.status}}</span></td>
                                        <td>{{data.gudang}}</td>
                                        <td>{{data.created_at}}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </b-tab>
                        <b-tab no-body title="Sampai">
                            <table class="table table-bordered table-striped table-responsive-md" id="table4">
                                <thead>
                                    <tr>
                                        <th>No</th>
                                        <th>Invoice</th>
                                        <th>Total</th>
                                        <th>Status</th>
                                        <th>Gudang</th>
                                        <th>Created At</th>
                                    </tr>
                                </thead>
                               <tbody>
                                     <tr v-for="(data,index) in filterstatusSampai" :key="data.id">
                                        <td>{{index+1}}</td>
                                        <td>{{data.invoice}}</td>
                                        <td>{{data.total}}</td>
                                        <td><span class="badge bg-gradient-secondary">{{data.status}}</span></td>
                                        <td>{{data.gudang}}</td>
                                        <td>{{data.created_at}}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </b-tab>
                    </b-tabs>
                </b-card>
           </div>
           </div>
        </div> 
    </div>
</template>

<script>
// import OrdersDummy from "../components/data-dummy/Orders-Dummy.json";
import axios from "axios";
import $ from "jquery";
export default{
    name: 'OrdersPage',
    components: {},
    data(){
        return{
            Orders_Dummy:[],
        }
    },
    mounted(){
       $('#table1').dataTable({
         "responsive": false,"lengthChange": false,
     });
       $('#table2').dataTable({
         "responsive": false,"lengthChange": false,
     });
       $('#table3').dataTable({
         "responsive": false,"lengthChange": false,
     });
       $('#table4').dataTable({
         "responsive": false,"lengthChange": false,
     });
       $('#table5').dataTable({
         "responsive": false,"lengthChange": false,
     });
       $('#table6').dataTable({
         "responsive": false,"lengthChange": false,
     });
      this.load()
    },
   computed:{
        filterstatusInbound(){
            return this.Orders_Dummy.filter(function (Orders_Dummy){
                return Orders_Dummy.status =='Inbound'
            })
        },
        filterstatusOutbound(){
            return this.Orders_Dummy.filter(function (Orders_Dummy){
                return Orders_Dummy.status =='Outbound'
            })
        },
        filterstatusDikirim(){
            return this.Orders_Dummy.filter(function (Orders_Dummy){
                return Orders_Dummy.status =='Dikirim'
            })
        },
        filterstatusProses(){
            return this.Orders_Dummy.filter(function (Orders_Dummy){
                return Orders_Dummy.status =='Proses'
            })
        },
        filterstatusSampai(){
            return this.Orders_Dummy.filter(function (Orders_Dummy){
                return Orders_Dummy.status =='Sampai'
            })
        },

   },
   methods: {
        load(){
            axios.get('http://localhost:3000/Orders_Dummy').then(response =>{
                this.Orders_Dummy = response.data
            }).catch((err) => {
                console.log(err);
            })
        }
   }
}
</script>

<style scoped>
</style>