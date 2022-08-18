<template>
    <div class="py-4 container-fluid">
        <div class="row p-4">
             <div class="card">
                <div class="card-header pb-0 pt-3 bg-white border-0">
                    <div class="float-left">
                        <button type="button" class="btn btn-lg btn-default"><a href="/integrations/add" class="text-decoration-none">ADD</a></button>
                    </div>
                </div>
                <div class="card-body pt-0 px-0">
                    <div class="table-responsive">
                        <table class="table table-striped table-responsive-md" id="table1">
                            <thead>
                                <tr>
                                    <th class="dt-head-center">SERVICE</th>
                                    <th class="dt-head-center">IDENTIFIER</th>
                                    <th class="dt-head-center">TYPE</th>
                                    <th class="dt-head-center">LAST IMPORTED</th>
                                    <th class="dt-head-center">LAST EXPORTED</th>
                                    <th class="dt-head-center">SYNC STOCK</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="data in datas" :key="data.identifier" >
                                    <td class="dt-body-center">{{data.service}}</td>
                                    <td class="dt-body-center">{{data.identifier}}</td>
                                    <td class="dt-body-center">{{data.type}}</td>
                                    <td class="dt-body-center">{{data.last_imp}}</td>
                                    <td class="dt-body-center">{{data.last_exp}}</td>
                                    <td class="dt-body-center">{{data.sync_stock}}</td>
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
    import IntegrationDummy from "../components/data-dummy/Integration-Dummy.json";
    import $ from "jquery";
    export default{
        name:'IntegrationsPage',
        components:{},
        data(){
            return{
                datas:IntegrationDummy,
            }
        },
        mounted(){
            $('#table1').dataTable({
                "responsive": false,"lengthChange": false,"ordering":false,
                 columnDefs: [
                            {
                                className: 'dt-head-center dt-body-center'
                            }]
            });
            },  
    }
</script>

<style scoped>
    
</style>