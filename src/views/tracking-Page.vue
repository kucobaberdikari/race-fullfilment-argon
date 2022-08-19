<template>
    <div class="py-4 container-fluid">
        <div class="row px-4  ">
            <div class="card rounded-3">
                <div class="card-body my-3">
                    <div class="col-lg-12 p-lg-8">
                        <div class="d-flex justify-content-center py-3">
                            <div class="d-flex flex-column justify-content-center">
                                <p class="mb-0 text-lg ">Mencari Pengiriman Parcel</p>
                            </div>
                        </div>
                        
                        <!-- <div class="row"> -->
                            <!-- <div class="col-md-8 offset-md-2"> -->
                                    <div class="input-group mt-n2 mb-3">
                                        <input type="text" class="form-control ms-0 form-control-lg" placeholder="Masukkan Tracking ID, Nama, atau Nomor Telepon">
                                        <!-- <div class="input-group-append"> -->
                                            <button type="submit" class="btn btn-lg btn-dark mb-0">
                                                <i class="fa fa-search"></i>
                                            </button>
                                        <!-- </div> -->
                                    </div>
                            <!-- </div> -->
                        <!-- </div> -->
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