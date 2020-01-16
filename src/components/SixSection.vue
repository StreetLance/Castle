<template>
  <section id="six-features" class="text-center">
    <div class="fix" align="right">
      <img align="right" class="castle2" src="../statics/Chertejnew1.png" alt=""></div>
    <div class="container ">
      <div class="row w-100 ">
        <div class="col col-xl-6">
          <div class="main"><img  class="twetytwenty2" src="../statics/2021.svg" alt=""></div>
          <div class="main2 " align="left">
            <span class="text-white"><h4>Our Vision:</h4></span>
            <hr align="left">
            <span><p>This luxurious manor is located in the second district of Vienna, directly opposite Augarten Park along Obere Augartenstrasse 40. The house was built back in the 18th century by the noble family of Grassalkovich. The current reconstruction plans are really impressive. According to the project, until 2021 Palace will have its own indoor pool, wellness area with a sauna, fitness room, private gym, two additional terraces, numerous halls and bedrooms, home theatre, security and staff rooms and its own wine cellar.
</p>
              <p>As a matter of fact, besides the architectural solutions for the restoration and reconstruction of the entire palace, full project includes a detailed interior design for each room, accompanied by the selection of furniture and sanitary products as well as a full package of lighting and electric plans. These facts emphasize the uniqueness of this object in the Austrian real estate market. Grassalkovich Palace is a pure luxury.
</p></span>
            <hr align="left">
            <span><p class="ref2 text-white">Developer: <span
              class="text-grey lite-text"> Tirox Group GmbH</span></p></span>
            <span><p class="ref2 text-white">Architect: <span class="text-grey lite-text">Architectur Buro Andreas Pacher</span></p></span>
            <span><p class="ref2 text-white mt-0">Interior Design: <span class="text-grey lite-text"> Andreas Pacher | Igor Petrychenko</span></p></span>
          </div>
        </div>
        <div class="col col-xl-6 mobile-secret" align="right"></div>
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
  .castle2 {
    /*position: relative;*/
    /*top: 5%;*/
    /*right: 0%;*/
    width: 80vh;
  }

  .fix {
    position: absolute;
    padding-top: 5%;
    right: 0;
    /*max-height: 100vh;*/
    /*width: 49%;*/
    /*margin-right: 0;*/
  }

  .lite-text {
    font-family: Montserrat;
    font-style: normal;
    font-size: 16px;
    line-height: 38px;
    letter-spacing: 0.2em;
  }

  .ref2 {
    margin-top: 2%;
    margin-bottom: 0;
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 38px;
    letter-spacing: 0.3em;
  }

  hr {
    margin-top: 7%;
    width: 80%;
    border-bottom: 2px solid #c27c51;
  }

  p {
    margin-top: 7%;
    text-align: left;
    width: 170%;
    color: gray;
    font-family: Montserrat;
    font-style: normal;
    font-size: 14px;
    line-height: 25px;
    letter-spacing: 0.2em;
  }

  h4 {
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 31.5px;
    line-height: 38px;
    letter-spacing: 0.2em;

  }

  .main {
    margin-top: 9%;
    padding-right: 70%;
    /*margin-left: 8%;*/
  }

  .main2 {
    margin-top: 17%;
    padding-right: 40%;
    /*margin-left: 14%;*/
    padding-bottom: 60px;
  }
  .twetytwenty2{
    height: 100%;
    width: 30vh;
  }
  /*#castle{*/
    /*margin-top: 12%;*/
    /*height: 90vh;*/
    /*!*width: 100vh;*!*/
    /*background: url("../statics/Chertejnew1.png")no-repeat center center;*/
  /*}*/
  #six-features {
    /*height: 100vh;*/
    background-color: #201e1f;
    /*-webkit-background-size: cover;*/
    /*-moz-background-size: cover;*/
    /*-o-background-size: cover;*/
    /*background-size: cover;*/
  }

  .container {
    max-height: 100%;
  }
  @media (max-width: 800px){
    .mobile-secret{
      display: none;
    }
    .castle2{
      display: none;
    }
    p {
      margin-top: 7%;
      text-align: left;
      width: 100%;
      color: gray;
      font-family: Montserrat;
      font-style: normal;
      font-size: 14px;
      line-height: 25px;
      letter-spacing: 0.2em;
    }
    .ref2 {
      margin-top: 2%;
      margin-bottom: 0;
      font-family: Montserrat;
      font-style: normal;
      font-weight: bold;
      font-size: 14px;
      line-height: 18px;
      letter-spacing: 0.3em;
    }
    .main2{
      margin-top: 17%;
      padding-right: 17%;
      margin-left: 4%;
      padding-bottom: 60px;
      width: 100%;
    }
    h4 {
      font-family: Montserrat;
      font-style: normal;
      font-weight: bold;
      font-size: 20px;
      line-height: 38px;
      letter-spacing: 0.2em;

    }
  }
</style>
