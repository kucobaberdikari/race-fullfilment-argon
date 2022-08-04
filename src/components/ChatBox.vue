<template>
   <div>
     
   </div>
</template>
<script>
export default{
    data() {
        return {
    
        };
    }, 

}
</script>
<style scoped>
 .open-button {
      background-color: #555;
      color: white;
      padding: 1px 2px;
      border: none;
      cursor: pointer;
      opacity: none;
      position: fixed;
      bottom: 10px;
      right: 5px;
      width: 90px;
      display: block;
      border-radius: 10px;
      transition: ease all 0.3s;
        
    }
    
    /* The popup chat - hidden by default */
    .chat-popup {
      display: none;
      position: fixed;
      bottom: 0;
      right: 15px;
      border: 3px solid #f1f1f1;
      z-index: 9;
    }
    
    /* Add styles to the form container */
    .form-container {
      max-width: 300px;
      padding: 10px;
      background-color: white;
    }
    
    /* Full-width textarea */
    .form-container textarea {
      width: 80%;
      padding: 5px 5;
      margin: 5px 0 5px 0;
      border: none;
      background: #f1f1f1;
      resize: none;
      /* max-height: 25px; */
    }
    
    /* When the textarea gets focus, do something */
    .form-container textarea:focus {
      background-color: #ddd;
      outline: none;
    }
    
    /* Set a style for the submit/send button */
    .form-container .btn {
      background-color: #04AA6D;
      color: white;
      /* padding: 5px; */
      border: none;
      cursor: pointer;
      width: 20%;
      /* margin-bottom:10px; */
      opacity: 0.8;
      max-height: 52px;
    }
    
    /* Add a red background color to the cancel button */
    .form-container .cancel {
      background-color: red;
    }
    
    /* Add some hover effects to buttons */
    .form-container .btn:hover, .open-button:hover {
      opacity: 1;
    }
    .chat-popup .close{
        margin-right: 6px;
        margin-top: 4px;
    }


    /* Chat containers */
.container {
  border: 2px solid #dedede;
  background-color: #f1f1f1;
  border-radius: 5px;
  padding: 3px 3px 3px 9px;
  margin: 3px 0;
  border-radius: 3px;
}

/* Darker chat container */
.darker {
  border-color: #ccc;
  background-color: #ddd;
  border-radius: 3px 9px 3px 3px;
}

/* Clear floats */
.container::after {
  content: "";
  clear: both;
  display: table;
}

/* Style images */
.container img {
  float: left;
  max-width: 60px;
  width: 100%;
  margin-right: 20px;
  border-radius: 50%;
}

/* Style the right image */
.container img.right {
  float: right;
  margin-left: 20px;
  margin-right:0;
}

/* Style time text */
.time-right {
  float: right;
  color: #aaa;
}

/* Style time text */
.time-left {
  float: left;
  color: #999;
}
</style>