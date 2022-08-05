<template>
    <div class="py-4 container-fluid">
        <div class="row p-4">
             <div class="card">
                <div class="card-header pb-0 pt-3">
                    <div class="float-left">
                        <button type="button" class="btn btn-lg btn-warning"><a href="/integrations/add" class="text-decoration-none">ADD</a></button>
                    </div>
                </div>
                <div class="card-body">
                    <table class="table table-bordered table-striped table-responsive-md" id="table1">
                        <thead>
                            <tr>
                                <th>SERVICE</th>
                                <th>IDENTIFIER</th>
                                <th>TYPE</th>
                                <th>LAST IMPORTED</th>
                                <th>LAST EXPORTED</th>
                                <th>SYNC STOCK</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="data in datas" :key="data.identifier" >
                                <td>{{data.service}}</td>
                                <td>{{data.identifier}}</td>
                                <td>{{data.type}}</td>
                                <td>{{data.last_imp}}</td>
                                <td>{{data.last_exp}}</td>
                                <td>{{data.sync_stock}}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
           
    </div>
</template>

<script>
    import IntegrationDummy from "../components/data-dummy/Integration-Dummy.json";
    import $ from "jquery";
    export default{
        name:'IntegrationS',
        components:{},
        data(){
            return{
                datas:IntegrationDummy,
            }
        },
        mounted(){
            $('#table1').dataTable({
                "responsive": false,"lengthChange": false,
            });
            },  
    }
</script>

<style scoped>
    
</style>