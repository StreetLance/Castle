<template>
  <!--Mask-->
  <div id="intro" class="view">

    <div class="mask rgba-black-strong">

      <div class="container-fluid d-flex align-items-center justify-content-center h-100">

        <div class="row d-flex justify-content-center text-center">

          <div class="col-md-10">
            <img src="../statics/full_logo.svg">
          </div>

        </div>

      </div>

    </div>

  </div>
  <!--/.Mask-->

</template>

<script>
export default {
  // name: 'ComponentName',
  data () {
    return {}
  }
}
</script>
<style scoped>
  .q-page-container{
    height: 100%;
  }
  .view {
     position: unset;
    overflow: hidden;
    cursor: default;
  }
  .rgba-black-strong{
    background-color: rgba(0,0,0,0.83);
  }
   .mask {
      position: unset;
     top: 0;
     right: 0;
     bottom: 0;
     left: 0;
     width: 100%;
     height: 100%;
     overflow: hidden;
     background-attachment: fixed;
   }
</style>
