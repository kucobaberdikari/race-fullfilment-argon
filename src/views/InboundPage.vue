  <template>
<div class="py-4 container-fluid">
  <div class="row">
     <div class="card">
    <div class="card-header">
        <div class="row row1">
          <button type="button" class="btn btn-info" @click="showModal">Open Modal!  </button>
              <ModalAdd v-show="isModalVisible" @close="closeModal" >
                <template v-slot:header></template>
                <template v-slot:body></template>
                <template v-slot:footer></template>
              </ModalAdd>
              <button class="btn btn-info" v-on:click="onClick()" >Notification12</button>
        </div>         
    </div>
    <div class="card-body">
        <table class="table table-bordered table-striped table-responsive-md" id="table1">
          <thead>
              <tr class="">
                <th class="dt-head-center">No</th>
                <th class="dt-head-center">Kode Inbound</th>
                <th class="dt-head-center">Dikirim Ke</th>
                <th class="dt-head-center">Tanggal Inbound</th>
                <th class="dt-head-center">Status</th> 
              </tr>
          </thead>
          <tbody>
              <tr v-for="(data,index) in datas" :key="data.id">
                <td>{{index+1}}</td>
                <td v-if="data.status === 'Menunggu Penerimaan'"><span class="badge badge-warning badge1"><i class="far fa-dot-circle"></i></span>{{data.kd_inbound}}</td>
                <td v-else-if="data.status === 'Menunggu Pengiriman'"><span class="badge badge-secondary badge1"><i class="far fa-dot-circle"></i></span>{{data.kd_inbound}}</td>
                <td v-else-if="data.status === 'Sudah Diterima'"><span class="badge badge-primary badge1"><i class="far fa-dot-circle"></i></span>{{data.kd_inbound}}</td>
                <td v-else><span class="badge badge-success badge1"><i class="far fa-dot-circle"></i></span>{{data.kd_inbound}}</td>
                <td>{{data.tujuan}}</td>
                <td>{{data.tanggal}}</td>
                <td v-if="data.status === 'Menunggu Penerimaan'"><span class="badge badge-warning">{{data.status}}</span></td>
                <td v-else-if="data.status === 'Menunggu Pengiriman'"><span class="badge badge-secondary">{{data.status}}</span></td>
                <td v-else-if="data.status === 'Sudah Diterima'"><span class="badge badge-primary">{{data.status}}</span></td>
                <td v-else><span class="badge badge-success">{{data.status}}</span></td>
              </tr>
          </tbody>
        </table>
    </div>
      </div>
  </div>
     
  <!-- </div> -->
<!-- </div> -->

   <button type="button" class="open-button " @click="openForm" >Chat</button>
   <ChatBox v-show="ChatVisible" @close="closeChat" />

  <!-- <div class="p-3 bg-secondary progress-bar-striped" style="min-height: 170px;">
    <b-button variant="primary" @click="makeToast('primary')" class="mb-2">Primary</b-button>
  </div> -->
</div>
</template>

<script>


import ModalAdd from "../components/ModalAdd.vue";
// import ToastrNotif from '../components/ToastrNotif.vue';
import ChatBox from "@/components/ChatBox.vue";
import Datadummy from "../components/data-dummy/Inbond-Dummy.json";
import $ from "jquery";
  export default {
    name: 'InboundPage',
    components: {
      ModalAdd,
      // ToastrNotif,
      ChatBox,
    },
    data() {
      return {
        isModalVisible: false,
        ChatVisible: false,
        isHidden: false,
        isShow:true,
        datas:Datadummy,
      };

    },
    beforeMount(){
      this.onClick()
    },
    mounted(){
       $('#table1').dataTable({
         "responsive": false,"lengthChange": false,
        columnDefs: [
      {
          className: 'dt-head-center dt-body-center'
      }
    ],
     });
    },
    methods: {
      showModal() {
        this.isModalVisible = true;
      },
      closeModal() {
        this.isModalVisible = false;
      },
      showChat(){
         this.ChatVisible = true;
      },
      closeChat(){
         this.ChatVisible = false;
      },
      openForm() {
       document.getElementById("myForm").style.display = "block";
      },  
     
     onClick(){
      this.$toast.success({
         title:'Data Transaksi asdasdasd asdasdasda asdadadadasda  ',
         message:'Data Transaksi asdasdasd asdasdasda asdadadadasda Data Transaksi asdasdasd asdasdasda asdadadadasda',
         showMethod : 'slideInRight',
         hideMethod : 'slideOutRight',
         showDuration :1000 ,
         hideDuration : 1000,
         timeOut : 99500,
         icon: "../foto-produk/nanti-kita-sambat-hari-ini.jpeg",  
         closeButton: true ,
         position: 'top right',
         color: '#343a40',
         delay:   600,
        //  urlBlank: true,
        //  url: 'https://jaja.i qd/produk/nanti-kita-sambat-tentang-hari-ini-25',
          })
      },
    },
  };
  
  
</script>
<style scoped>
.row1{
   padding-right:20px;
   padding-left:20px;
}
.row{
   padding-right:20px;
   padding-left:20px;
   padding-top:30px;
}
.breadcrumb.float-sm-left{
   background-color:#ffff;
}
.btn-modal{
   /* background-position-x: right; */
   align-items: initial;
   
}
 .open-button {
      background-color:#65b0c8;
      color: rgb(0, 0, 0);
      padding: 1px 2px;
      border: none;
      cursor: pointer;
      opacity: none;
      position: fixed;
      bottom: 20px;
      right: 5px;
      width: 90px;
      display: block;
      border-radius: 5px;
      transition: ease all 0.3s;
      height: 40px;
      font-size: large;
}

.open-button:hover {
      opacity: 1;
    }

 .btn-info{
    border-radius: 5px;
    margin-left: 10px;
    background-color: #8ddef9;
  }
    
    

    h3{
	font-size: 14px;
	font-weight: 500;
	font-family: 'Poppins', sans-serif;
	color: #303030;
	font-variant-ligatures: common-ligatures;
	margin-top: 0;
	margin-bottom: 0;
}
.notification--reminder{
	padding: 20px 0;
  position: fixed;
  bottom: 0;
  z-index: 9999999999999;
  background: #fff;
  transform: translateY(80px);
  animation: notification--in linear 500ms;
  animation-iteration-count: 1;
  transform-origin: 50% 50%;
  animation-fill-mode:forwards; /*when the spec is finished*/
  -webkit-animation: notification--in linear 500ms;
  -webkit-animation-iteration-count: 1;
  -webkit-transform-origin: 50% 50%;
  -webkit-animation-fill-mode:forwards; /*Chrome 16+, Safari 4+*/ 
  -moz-animation: notification--in linear 500ms;
  -moz-animation-iteration-count: 1;
  -moz-transform-origin: 50% 50%;
  -moz-animation-fill-mode:forwards; /*FF 5+*/
  -o-animation: notification--in linear 500ms;
  -o-animation-iteration-count: 1;
  -o-transform-origin: 50% 50%;
  -o-animation-fill-mode:forwards; /*Not implemented yet*/
  -ms-animation: notification--in linear 500ms;
  -ms-animation-iteration-count: 1;
  -ms-transform-origin: 50% 50%;
  -ms-animation-fill-mode:forwards; /*IE 10+*/
}

@keyframes notification--in{
  0% {
    transform:  translate(0px,80px)  ;
  }
  100% {
    transform:  translate(0px,0px)  ;
  }
}

@-moz-keyframes notification--in{
  0% {
    -moz-transform:  translate(0px,80px)  ;
  }
  100% {
    -moz-transform:  translate(0px,0px)  ;
  }
}

@-webkit-keyframes notification--in {
  0% {
    -webkit-transform:  translate(0px,80px)  ;
  }
  100% {
    -webkit-transform:  translate(0px,0px)  ;
  }
}

@-o-keyframes notification--in {
  0% {
    -o-transform:  translate(0px,80px)  ;
  }
  100% {
    -o-transform:  translate(0px,0px)  ;
  }
}

@-ms-keyframes notification--in {
  0% {
    -ms-transform:  translate(0px,80px)  ;
  }
  100% {
    -ms-transform:  translate(0px,0px)  ;
  }
}
/* .move--down{

} */
.notification--reminder h3{
  font-weight: 500;
}
.notification--reminder h3 a{
	text-decoration: none;
  margin-left: 15px;
  background: #1a22b8;
  border: 1px solid #1a22b8;
  color: #fff;
  display: inline-block;
  height: 40px;
  letter-spacing: 1px;
  line-height: 40px;
  padding: 0 40px;
  text-transform: uppercase;
  -webkit-transition: all 0.5s ease 0s;
  transition: all 0.5s ease 0s;
}
.notification--reminder h3 a:hover{
  border: 1px solid #aaaaaa;
  color: #8b8b8b;
  background: transparent;
}
.notification--wrapper{
  position: fixed;
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 99999;
  top: 0;
}
@media (max-width: 767px){
	.notification--reminder h3{
    font-size: 14px;
  }
  .notification--reminder{
    padding: 30px;
  }
  .notification--reminder h3 a{
    display: inline-block!important;
    margin-top: 15px;
    margin-left: 0px;
  }
}
.table-bordered{
  text-align: center;
}
.card-nav{
  margin: 10px 10px 10px 10px;
  /* margin-left: 10px; */
}
.content-wrapper{
  padding-left: 30px;
  padding-right:20px;
}
span.badge1{
  margin-right: 5px;
}
</style>