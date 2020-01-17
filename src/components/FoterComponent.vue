<template>
  <section id="footer">
    <hr>
    <div class="container">
      <div class="contacts">
        <div class="row modifitext d-flex align-items-center">
          <div class="col-10 col-md-2 text-special ">CONTACTS:</div>
          <div class="col-9">
            <div class="d-flex flex-wrap flex-lg-nowrap flex-column flex-xl-row justify-content-start justify-content-lg-between  ">
              <div class="text-white"><a href="tel:+4314130000" class="text-white">+43 1 413 0000</a></div>
              <div ><a href="mailto:office@tiroxgroup.com " class="text-white">office@tiroxgroup.com</a></div>
              <div class="text-white"> Tuchlauben 7a/Top 7 1010 Vienna</div>
            </div>
          </div>

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
    /*padding-bottom: 5%;*/
    font-family: Montserrat;
    font-style: normal;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.2em;
  }
  .modifitext>div>div>div, .modifitext>div{
    margin-top: 3%;
    margin-bottom: 3%;
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
  /*height: 30vh;*/
  background-color: #201e1f;
}
  @media (max-width: 568px) {
    #footer{
      /*height: 55vh;*/
      background-color: #201e1f;
    }
    .child2 {
      position: absolute;
      left: 57%;
      margin-top: 3px;
      max-width: 34%;
    }
    .child4{
      margin-top: 40px;
    }
  }
</style>
