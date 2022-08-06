<template>
    <div class="py-4 container-fluid">
        <div class="row px-4  ">
             <div class="card border-radius-lg">
            <div class="card-body mt-7">
                <h4 class="text-center ">Mencari Pengiriman Parcel</h4>
                <div class="row">
                    <div class="col-md-8 offset-md-2">
                            <div class="input-group">
                                <input type="text" class="form-control ms-0 form-control-lg" placeholder="Masukkan Tracking ID, Nama, atau Nomor Telepon">
                                <!-- <div class="input-group-append"> -->
                                    <button type="submit" class="btn btn-lg btn-dark mb-0">
                                        <i class="fa fa-search"></i>
                                    </button>
                                <!-- </div> -->
                            </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
           
    </div>
</template>


<script>
export default{
    name: 'trackingPage',
    components: {},
    data(){}
}
</script>


<style scoped>
    .row{
        padding-bottom: 200px;
    }
    .btn-dark{
        background-color: #344767;
        
    }
    .card-body{
        margin-top: 100px;
    }
    .card{
        margin:0,10px;
    }
</style>