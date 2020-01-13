<template>
  <section id="best-features" class="text-center">
    <div class="container">
      <div class="row w-100 h-100">
        <div class="col-sm-6">
          <img  src="../statics/The_New_Chapter.svg" alt="The_New_Chapter" class="pt-5 TNC">
        <br>
          <div class="data pl-4-new pt-tabs">
            <span class="text-white "><p class="text-left">Addresse</p></span>
            <span class="text-grey"><p class="text-left fw-300 pb-5-new">Obere AugartenstraBe 40, 1020 Vienna,Austria</p></span>
            <div id="right-border" >
              <span class="text-white"><p class="text-left ">Total area: <span class="text-grey fw-300">1487 m2</span></p></span>
              <span class="text-white"><p class="text-left  mb-2">Style: <span class="text-grey fw-300">Classicism</span></p></span>
              <span class="text-white"><p class="text-left ">Number of floors: <span class="text-grey fw-300">5</span></p></span>
              <span class="text-white"><p class="text-left">Bedrooms: <span class="text-grey fw-300">7</span></p></span>
              <div class="row">
                <div class="col mt-2">
                  <span class="text-white"><p class="text-left fw-300 mb-2">First building:<span class="text-grey fw-300"> 1777</span></p></span>
                  <span class="text-white"><p class="text-left fw-300 mb-2">Rebuild into the Place:<span class="text-grey fw-300"> 1794</span></p></span>
                  <span class="text-white"><p class="text-left fw-300 mb-2"><span class="text-grey fw-300">Architects:</span> Franz Duschinger / Ernest Koch</p></span>
                  <span class="text-white"><p class="text-left fw-300 mb-2">First owner:<span class="text-grey fw-300"> Prince Anton Grassalkovich II</span></p></span>
                  <span class="text-white"><p class="text-left fw-300 mb-2"><span class="text-grey fw-300">1975:</span> purchased by Vienna by City of Vienna</p></span>
                  <span class="text-white"><p class="text-left fw-300 mb-2"><span class="text-grey fw-300">1991:</span> last major restoration</p></span>
                  <span class="text-white"><p class="text-left fw-300 mb-2">since 1991: office of the Vienna City Tourism Association</p></span>
                  <span class="text-white"><p class="text-left fw-300 mb-2"><span class="text-grey fw-300">2021: Exclusive Estate</span></p></span>
                </div>
              </div>
              <span class="text-grey"><p class="text-left fw-300 mt-4">Summer 2021 - Autumn2021</p></span></div>
            <span class="text-white "><p class="text-left mt-4">Prise</p></span>
            <span class="text-grey"><p class="text-left pt-0">Upon request | <span class="color-mail ">mail@gmail.com</span></p></span>
            <hr class="section2">
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
  .section2{
    background-color: #df8c5a;
    height:2px;
    width: 120px;
    display: none;
  }
  .pl-4-new {
    padding-left: 1.5rem !important;
  }
  .TNC{
    width: 100%;
  }
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
    padding-top: 27%;
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
  @media (max-width: 480px) {
    .section2{
      background-color: #df8c5a;
      height:2px;
      width: 120px;
      display: block;
    }
    #right-border{
      border-right: 0;
    }
    .pb-5-new{
      padding-bottom: 0rem!important;
    }
    .fw-300{
      font-family: Montserrat;
      font-style: normal;
      font-weight: 300;
      font-size: 14px;
      line-height: 20px;
    }
    .pt-tabs{
      padding-top: 7% ;
    }
    #best-features{
      font-family: Montserrat;
      font-style: normal;
      font-weight: bold;
      font-size: 14px;
      line-height: 20px;

      height: 130vh;
      background: #201E1F;
    }
    .pl-4-new{
      padding-left: 1rem !important;
    }
  }
</style>
