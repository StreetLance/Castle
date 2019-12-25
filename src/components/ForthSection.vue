<template>
  <section id="forth-features" class="text-center">
    <div class="container">
  <div id="castle" class="d-flex justify-content-center items-start">
    <div class="FF" align="left"><img  src="../statics/First_floor.svg" alt=""></div>
    <img src="../statics/Chert22.jpg" alt="">
  </div>
      <div class="eye1"> <img  src="../statics/Eye.svg" alt=""></div>
      <div class="eye2"> <img  src="../statics/Eye.svg" alt=""></div>
      <div class="eye3"> <img  src="../statics/Eye.svg" alt=""></div>
      <div class="eye4"> <img  src="../statics/Eye.svg" alt=""></div>
      <div class="HowerEye5"> <img  src="../statics/Hower_eye.png" alt=""></div>
      <div class="row mt-tab" >
        <div class="col">
          <span class="text-grey"><p class="text-left fw-300 mb-0">Lobby 19.49 m2</p></span>
          <span class="text-grey"><p class="text-left fw-300 mb-0">Wardrobe 4.46 m2</p></span>
          <span class="text-grey"><p class="text-left fw-300 mb-0">Technical room 4.28 m2</p></span>
          <span class="text-grey"><p class="text-left fw-300 mb-0">Lavatory 1.88 m2</p></span>
        </div>
        <div class="col">
          <span class="text-secial"><p class="text-left fw-300 mb-0">Dining room 11.14 m2</p></span>
          <span class="text-grey"><p class="text-left fw-300 mb-0">Staff kitchen 14.50 m2</p></span>
          <span class="text-grey"><p class="text-left fw-300 mb-0">Kitchen 31.96 m2</p></span>
          <span class="text-grey"><p class="text-left fw-300 mb-0">Hall 156.45 m2</p></span>
        </div>
        <div class="col">
          <span class="text-grey"><p class="text-left fw-300 mb-0">Lobby 29.35 m2</p></span>
          <span class="text-grey"><p class="text-left fw-300 mb-0">Office 27.95 m2</p></span>
          <span class="text-grey"><p class="text-left fw-300 mb-0">Utility room 6.09 m2</p></span>
          <span class="text-grey"><p class="text-left fw-300 mb-0">Lavatory 2.38 m2</p></span>
        </div>
        <div class="col">
          <span class="text-grey"><p class="text-left fw-300 mb-0">Fireplace room 24.65 m2</p></span>
          <span class="text-grey"><p class="text-left fw-300 mb-0">Library 23.32 m2</p></span>
          <span class="text-grey"><p class="text-left fw-300 mb-0">Bar 8.26 m2</p></span>
          <span class="text-grey"><p class="text-left fw-300 mb-0">Balcony 10.49 m2</p></span>
        </div>
      </div>
    </div>

  </section>
</template>

<script>
  export default {
    // name: 'ComponentName',
    data() {
      return {}
    }
  }
</script>
<style scoped>
  .text-secial{
   color: #E08C5A;
  }
  p{
    font-family: Montserrat;
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 24px;
  }
  .mt-tab{
    margin-top: 7rem;
  }
  .eye1{
    position: relative;
    left: 12%;
    top: -37vh;
    max-width: 105px;

  }
  .eye2{
    position: relative;
    left: 27%;
    top: -40vh;
    max-width: 105px;

  }
  .eye3{
    position: relative;
    left: 71%;
    top: -41vh;
    max-width: 105px;
  }
  .eye4{
    position: relative;
    left: 46%;
    top: -73vh;
    max-width: 105px;
  }
  .HowerEye5{
    height: 23vh;
    width: 25vh;
    position: relative;
    left: 40%;
    margin-top: -53%;
    padding: 8%;
    background-color: rgb(0,0,0,0.5);
    /*top: 62vh;*/
  }
  .FF{
    margin-top: 4.6rem;
    position: absolute;
    left: 20%;
  }
img{
  border: none;
}
  #forth-features {
    height: 100vh;
    background-color: #201e1f;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }
</style>
