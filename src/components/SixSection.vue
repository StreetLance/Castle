<template>
  <section id="six-features" class="text-center">
    <div class="container">
      <div class="row w-100 fix ">
        <div class="col-sm-6 fix">
          <div class="main"><img src="../statics/2021.svg" alt=""></div>
          <div class="main2 " align="left">
            <span class="text-white"><h4>LOREM IPSUM</h4></span>
            <hr align="left">
            <span><p>Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit amet consectetur adipisci[ng] velit, sed quia non numquam [do]</p></span>
            <hr align="left">

            <span><p class="ref2 text-white">Developer: <span
              class="text-grey lite-text"> Tirox Group GmbH</span></p></span>
            <span><p class="ref2 text-white">Architect: <span class="text-grey lite-text">Architectur Buro Andreas Pacher</span></p></span>
            <span><p class="ref2 text-white mt-0">Interior Design: <span class="text-grey lite-text"> Andreas Pacher | Igor Petrychenko</span></p></span>
          </div>
        </div>
        <div class="col-sm-5 fix">
          <!--          <div class="ref" id="castle"></div>-->
          <img class="castle2" src="../statics/Chertejnew1.png" alt=""></div>
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
    position: relative;
    top: 5%;
    right: 0%;
  }

  .fix {
    max-height: 100vh;
    width: 49%;
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
    margin-left: 8%;
  }

  .main2 {
    margin-top: 17%;
    padding-right: 17%;
    margin-left: 14%;
    padding-bottom: 1px;
  }

  /*#castle{*/
  /*  margin-top: 12%;*/
  /*  height: 90vh;*/
  /*  !*width: 100vh;*!*/
  /*  background: url("../statics/Chertejnew1.png")no-repeat center center;*/
  /*}*/
  #six-features {
    height: 100vh;
    background-color: #201e1f;
    /*-webkit-background-size: cover;*/
    /*-moz-background-size: cover;*/
    /*-o-background-size: cover;*/
    /*background-size: cover;*/
  }

  .container {
    max-height: 100%;
  }
</style>
