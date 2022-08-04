<template>
  <div class="content-wrapper" >
   <div class="card">
      <div class="breadcrumb float-sm-left card-title">
          <li class="breadcrumb-item"><a href="#">Pages</a></li>
          <li class="breadcrumb-item active">Dashboard-Fulfillment-Dashboard</li>
      </div>
      <div class="breadcrumb float-sm-left card-text">
        <li class="breadcrumb-item active">Dashboard-Fulfillment-Dashboard</li>
      </div>
   </div>      
   
   
    <div class="card">
        <div class="card-body">
            <table class="table table-bordered table-striped table-responsive-md">
                <thead>
                    <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>SKU</th>
                    <th>Store</th>
                    <th>Stock</th>
                    <th>Price</th>
                    <th>Created Date</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="data in datas" :key="data.SKU">
                    <td>{{data.Image}}</td>
                    <td>{{data.Name}}</td>
                    <td>{{data.SKU}}</td>
                    <td><p class=" bg-info ">{{data.store}}</p></td>
                    <td>{{data.stock}}</td>
                    <td>{{data.price}}</td>
                    <td>{{data.created_date}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
</div>

   <!-- <button type="button" class="open-button " @click="openForm" >Chat</button> -->
   <!-- <ChatBox v-show="ChatVisible" @close="closeChat" /> -->

  <!-- <div class="p-3 bg-secondary progress-bar-striped" style="min-height: 170px;">
    <b-button variant="primary" @click="makeToast('primary')" class="mb-2">Primary</b-button>
  </div> -->
</div>
</template>

<script>
export default{
    name: 'ProductPage',
    components: {},
    data(){}
}
</script>

<style>
</style>