<template>
  <section id="best-features" class="text-center">
    <div class="container">
      <div class="row w-100 h-100">
        <div class="col-sm-6">
          <img src="../statics/The_New_Chapter.svg" alt="The_New_Chapter" class="pt-5-5 ">
        <br>
          <div class="data pl-4 pt-tabs">
            <span class="text-white "><p class="text-left">Addresse</p></span>
            <span class="text-grey"><p class="text-left fw-300 pb-5">Obere AugartenstraBe 40, 1020 Vienna,Austria</p></span>
            <div id="right-border" >
              <span class="text-white"><p class="text-left ">Total area: <span class="text-grey fw-300">1487 m2</span></p></span>
              <span class="text-white"><p class="text-left  mb-2">Style: <span class="text-grey fw-300">Classicism</span></p></span>
              <span class="text-white"><p class="text-left ">Number of floors: <span class="text-grey fw-300">5</span></p></span>
              <span class="text-white"><p class="text-left">Bedrooms: <span class="text-grey fw-300">7</span></p></span>
              <div class="row">
                <div class="col mt-2">
                  <span class="text-grey"><p class="text-left fw-300 mb-0">Ground Flor</p></span>
                  <span class="text-grey"><p class="text-left fw-300 mb-0">First Flor</p></span>
                  <span class="text-grey"><p class="text-left fw-300 mb-0">Second Floor</p></span>
                  <span class="text-grey"><p class="text-left fw-300 mb-0"> Third Floor</p></span>
                  <span class="text-grey"><p class="text-left fw-300 mb-0">Attic</p></span>
                </div>
                <div class="col mt-2 pl-5">
                  <span class="text-grey"><p class="text-left fw-300 mb-0">10 rooms</p></span>
                  <span class="text-grey"><p class="text-left fw-300 mb-0">10 rooms</p></span>
                  <span class="text-grey"><p class="text-left fw-300 mb-0">10 rooms</p></span>
                  <span class="text-grey"><p class="text-left fw-300 mb-0">10 rooms</p></span>
                  <span class="text-grey"><p class="text-left fw-300 mb-0">10 rooms</p></span>
                </div>
                <div class="col mt-2 w-0 pl-0"></div>
                <div class="col mt-2 pl-5">
                  <span class="text-grey"><p class="text-left fw-300 mb-0">100 m2</p></span>
                  <span class="text-grey"><p class="text-left fw-300 mb-0">100 m2</p></span>
                  <span class="text-grey"><p class="text-left fw-300 mb-0">100 m2</p></span>
                  <span class="text-grey"><p class="text-left fw-300 mb-0">100 m2</p></span>
                  <span class="text-grey"><p class="text-left fw-300 mb-0">100 m2</p></span>
                </div>
              </div>
              <span class="text-grey"><p class="text-left fw-300 mt-4">Summer 2021 - Autumn2021</p></span></div>
            <span class="text-white "><p class="text-left mt-4">Prise</p></span>
            <span class="text-grey"><p class="text-left pt-0">Upon request | <span class="color-mail ">mail@gmail.com</span></p></span>
          </div>
        </div>
        <div class="col-sm-6"></div>
      </div>
    </div>
  </section>
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
  #right-border{
    border-right: 2px solid #df8c5a;
  }
  .color-mail{
    color: #df8c5a !important;
  }
  .w-0{
    max-width: 10%;
  }
  .fw-300{
    font-family: Montserrat;
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 20px;
  }
  .pt-tabs{
    padding-top: 27% ;
  }
  .pt-5-5{
    padding-top: 5rem!important;
  }
  #best-features{
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 20px;

    height: 100vh;
    background: #151518;
  }
</style>
