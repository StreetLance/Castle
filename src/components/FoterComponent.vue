<template>
  <section id="footer">
    <hr>
    <div class="container">
      <div class="contacts">
        <div class="row modifitext">
          <div class="col-sm text-special">CONTACTS:</div>
          <div class="col-sm text-white">+38 000 000 00 00</div>
          <div class="col-sm text-white">email@gmail.com</div>
          <div class="col-sm text-white">Addresse</div>
        </div>
      </div>
    </div>
    <hr>
    <div class="container">
      <div class="AfterContacts">
        <div class="row modifitext2 text-grey">
          <div class="col-sm-4">Impressum</div>
          <div class="col-sm-4 child2 ">Datenschutz</div>
          <!--<div class="col"></div>-->
          <div class="col child4" align="right"><p>All rights reserved</p></div>
        </div>
      </div></div>
  </section>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>
<style scoped>
  .modifitext2{
    margin-top: 5%;
    margin-bottom: 5%;
    font-family: Montserrat;
    font-style: normal;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.2em;
  }
  .modifitext{
    margin-top: 5%;
    margin-bottom: 5%;
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 0.2em;
  }
  .text-special{
    color: #E08C5A;
  }
  hr{
    margin-top: 0rem;
    margin-bottom: 1rem;
    border: 0;
    border-top: 2px solid gray;
    opacity: 0.5;
  }
#footer{
  height: 30vh;
  background-color: #201e1f;
}
  @media (max-width: 410px) {
    .modifitext>div{
      margin-bottom: 20px;
    }
    #footer{
      height: 55vh;
      background-color: #201e1f;
    }
    .child2 {
      position: absolute;
      left:65%
    }
    .child4{
      margin-top: 40px;
    }
  }
</style>
