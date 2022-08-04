<template>
    <div class="modal fade" id="post-modal" aria-hidden="true" >
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title">Detail Laporan</h4>
                <button class="close" type="button" data-dismiss="modal" aria-label="close" @click="close">
                <span aria-hidden="true">&times;</span>
            </button>
            </div>
            <div class="modal-body">
                <form name="userForm" class="form-horizontal" id="editForm">
                @csrf
                <input type="hidden" name="id" id="id" >
                    <div class="form-group">
                        <label for="name" class="col-md-2">ID pelanggan</label>
                        <div class="col-sm-12">
                            <input type="text" class="form-control" id="id_pelanggan" name="id_pelanggan" >
                            <span id="id_pelangganError" class="alert-message"></span>
                        </div>
                    </div>
                    <div class="form-group">
                    <label for="name" class="col-sm-2">Nama</label>
                    <div class="col-sm-12">
                        <input type="text" class="form-control" id="nama" name="nama" >
                        <span id="namaError" class="alert-message"></span>
                    </div>
                </div>
                <div class="form-group">
                    <label for="name" class="col-sm-2">Alamat</label>
                    <div class="col-sm-12">
                        <input type="text" class="form-control" id="alamat" name="alamat" >
                        <span id="alamatError" class="alert-message"></span>
                    </div>
                </div>
                <div class="form-group">
                <label for="name" class="col-sm-2">Kode Pos</label>
                <div class="col-sm-12">
                    <input type="text" class="form-control" id="kodepos" name="kodepos" >
                    <span id="kodeposError" class="alert-message"></span>
                </div>
            </div>
            <div class="form-group">
                <label for="name" class="col-sm-2">telepon</label>
                <div class="col-sm-12">
                    <input type="text" class="form-control" id="telepon" name="telepon" >
                    <span id="teleponError" class="alert-message"></span>
                </div>
            </div>
            <div class="form-group">
            <label for="name" class="col-sm-2">email</label>
            <div class="col-sm-12">
                <input type="text" class="form-control" id="email" name="email" >
                <span id="emailError" class="alert-message"></span>
            </div>
        </div>
        <div class="form-group">
            <label class="col-sm-2">Deskripsi</label>
            <div class="col-sm-12">
                <textarea class="form-control" id="description" name="description" rows="4" cols="50" >
                </textarea>
                <span id="descriptionError" class="alert-message"></span>
            </div>
        </div>
        <div class="modal-footer" style="align-items: right">
            <button type="button" class="btn btn-default" data-dismiss="modal" @click="close">Close</button>
            <button  class="btn btn-primary update" type="submit" >Update </button>
            </div>
        </form>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
  export default {
    name: 'ModalProduct',
    methods: {
      close() {
        this.$emit('close');
      },
    },
  };
</script>

<style scoped>

</style>