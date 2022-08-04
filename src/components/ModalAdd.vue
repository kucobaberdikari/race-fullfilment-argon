<template>
<div class="modal-fade ">
  <div class=" modal-content modal-xl" role="dialog" aria-hidden="true" aria-labelledby="modalTitle"  aria-describedby="modalDescription">
        <header class="modal-header" id="modalTitle">
          <slot name="header">
            <h4 class="modal-title">Detail Laporan</h4>
          </slot>
           <button class="close" type="button" data-dismiss="modal" aria-label="close" @click="close">
              <span aria-hidden="true">&times;</span>
          </button>
        </header>
        <section class="modal-body"  id="modalDescription" >
          <slot name="body"> 
             <div class="form-group">
               <label for="name" class="col-md-4">Image</label>
                <div class="col-sm-12">
                  <input type="file" class="form-control" id="image" name="image" >
                  <span id="imageError" class="alert-message"></span>
                </div>
              </div>
             <div class="form-group">
               <label for="name" class="col-md-4">Name</label>
                <div class="col-sm-12">
                  <input type="text" class="form-control" id="nama" name="nama" >
                  <span id="namaError" class="alert-message"></span>
                </div>
              </div>
             <div class="form-group">
               <label for="name" class="col-md-4">SKU</label>
                <div class="col-sm-12">
                  <input type="text" class="form-control" id="sku" name="sku" >
                  <span id="skuError" class="alert-message"></span>
                </div>
              </div>
             <div class="form-group">
               <label for="name" class="col-md-4">Store</label>
                <div class="col-sm-12">
                  <input type="text" class="form-control" id="store" name="store" >
                  <span id="storeError" class="alert-message"></span>
                </div>
              </div>
             <div class="form-group">
               <label for="name" class="col-md-4">Stock</label>
                <div class="col-sm-12">
                  <input type="text" class="form-control" id="stock" name="stock" >
                  <span id="stockError" class="alert-message"></span>
                </div>
              </div>
             <div class="form-group">
               <label for="name" class="col-md-4">Price</label>
                <div class="col-sm-12">
                  <input type="text" class="form-control" id="price" name="price" >
                  <span id="priceError" class="alert-message"></span>
                </div>
              </div>
          </slot>
        </section>
        <footer class="modal-footer">
          <button type="button" class="btn-info" @click="close" aria-label="Close modal">
            Close me!
          </button>
        </footer>
  </div>
</div> 

</template>

<script>
  export default {
    name: 'ModalAdd',
    methods: {
      close() {
        this.$emit('close');
      },
    },
  };
</script>

<style>
      .modal-backdrop {
        position: relative;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: rgb(255, 255, 255);
        display: flex;
        justify-content: center;
        align-items: center;
        opacity: 0.85 !important;
      }

      .modal-content .modal-xl {
        position: relative;
        background: #ffffff;
        box-shadow: 2px 2px 20px 1px;
        overflow-x: auto; 
        display: block;
        flex-direction: column;
        width: 900px;
        height: 600px; 
        opacity: 1;
      }

      .modal-header,
      .modal-footer {
        padding: 15px;
        display: flex;
      }

      .modal-header {
        position: relative;
        border-bottom: 1px solid #eeeeee;
        color: #4AAE9B;
        justify-content: space-between;
      }

      .modal-footer {
        border-top: 1px solid #eeeeee;
        flex-direction: column;
        justify-content: flex-end;
      }

      .modal-body {
        position: relative;
        padding: 20px 10px;
      }

      .btn-close {
        position: absolute;
        top: 0;
        right: 0;
        border: none;
        font-size: 20px;
        padding: 10px;
        cursor: pointer;
        font-weight: bold;
        color: #4AAE9B;
        background: transparent;
      }

      .btn-green {
        color: white;
        background: #4AAE9B;
        border: 1px solid #4AAE9B;
        border-radius: 2px;
      }

      .modal-fade-enter,
      .modal-fade-leave-to {
        opacity:0.1 ;
      }

      .modal-fade-enter-active,
      .modal-fade-leave-active {
        transition: opacity .1s ease;
        }
</style> 
