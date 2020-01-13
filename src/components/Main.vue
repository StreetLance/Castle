<template>
  <!--Navbar-->
  <nav class="navbar navbar-expand-lg navbar-dark fixed-top scrolling-navbar ">
    <div class="row items-center w-30 pl-4">
      <a href="#info"><img class="logos" src="../statics/Header_Logo.svg"></a>
      <div class="pl-3 pt-3 lang"><p>{{lang}}<img src="../statics/larng_shewron.svg"  class=" d-flex justify-center fl" alt=""  @click="show"></p>
      </div>
    </div>
    <div class="container ">

      <!-- Navbar brand -->

      <!-- Collapse button -->
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav"
                     aria-controls="basicExampleNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
      <!-- Collapsible content -->
      <div class="collapse navbar-collapse justify-center pl-6" id="basicExampleNav">
        <!-- Links -->
        <div class="row navbar-nav smooth-scroll w-100 justify-around items-center text-center">
          <div class="col-sm"><a class="nav-link fw-300 text-white" href="#best-features">Data/Facts</a></div>
          <hr class="separator">
          <div class="col-sm "> <a class="nav-link fw-300 text-white" href="#seond-features">Gallery</a></div>
          <hr class="separator">
          <div class="col-sm "><a class="nav-link fw-300  text-white" href="#forth-features">Plans Floorplans</a></div>
          <hr class="separator">
          <div class="col-sm "><a class="nav-link fw-300 text-white" href="#six-features">Information</a></div>
          <hr class="separator">
          <div class="col-sm "><a class="nav-link fw-300 text-white" href="#fifth-features">Location</a></div>
          <hr class="separator">
          <div class="col"></div>
        </div>
        <!-- Links -->
        <!-- Social Icon  -->
        <div v-if="hower" @mouseover="mousehower" class=" d-flex justify-end padding-right-fix"><a class="nav-link " data-toggle="modal" data-target="#exampleModalCenter">
          <img src="../statics/grayKey.svg">
        </a></div>
        <div v-else  @mouseout="mousehower" class=" d-flex justify-end padding-right-fix"><a class="nav-link " data-toggle="modal" data-target="#exampleModalCenter">
          <img src="../statics/Key2.svg">
        </a></div>
      </div>
      <!-- Collapsible content -->
    </div>
    <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered d-flex justify-center" role="document">
        <div class="modal-content">
          <img  src="../statics/Header_key.svg">
          <h5 class="text-black text-center">Want to know more?</h5>
          <form class="text-center pt-0 pb-4 pl-4" action="#!">
            <label class="text-dark">Login: <input type="email" class="form-control" placeholder="Login"></label>

            <label class="text-dark">Password: <input type="email" class="form-control" placeholder="Password"></label>
          </form>
          <p  id="popuptext" class="text-black  text-center">Do not have one? Please contact us:</p>
          <div class="jumbotron bg-gray">
            <span id="popuptext2" class="text-black ">
              <span class="psl">TIROX GmbH</span><br>
              Tuchlauben 7a/7<br>
              1010 Wien<br>
              Telefon: +43 1 413 0000<br>
              E-Mail:<span> office@tiroxgroup.com</span><br>
            </span>
          </div>
          <!--<p id="popuptext2" class="text-black">-->
            <!--наш адрес, <br>-->
           <!--<span>email,<br></span>-->
            <!--телефон.<br>-->
          <!--</p>-->
          <button id="btn" class="btn  my-4 waves-effect  smoll-button" type="button" data-dismiss="modal">Send code</button>
        </div>
      </div>
    </div>
    <ul class="language" v-show="showlang">
    <li @click="languege('ru')"><a >ru</a></li>
    <li @click="languege('en')"><a >en</a></li>
  </ul>
  </nav>

  <!--/.Navbar-->
</template>

<script>
export default {
  // name: 'ComponentName',
  data () {
    return {
      lang: 'en',
      showlang: false,
      hower: true
    }
  },
  methods: {
    show: function () {
      this.showlang = !this.showlang
    },
    languege: function (value) {
      this.lang = value
      this.show()
    },
    mousehower: function () {
      this.hower = !this.hower
    }
  }
}
</script>
<style scoped>
  .logos{
    height: 100%;
    width: 100%;
  }
  .modal-backdrop.show {
    opacity: 0;
  }
  ul{
    list-style: none;
  }
  .language{
    color: white;
   position: absolute;
    top: 10%;
    left: 10%;
  }
  .fl{
    padding-top:10px ;
    padding-left:5px ;
    float: right;
  }
  .psl{
    position: relative;
    left: -20px;
  }
  .jumbotron {
    padding: 0.5rem;
    padding-left: 1rem;
     margin-bottom: 0;
  }
  .bg-gray{
    background-color: lightgray;
  }
  .padding-right-fix{
    position: absolute;
    right: 0;
    padding-right: 0;
  }
  .container {
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
     margin-right: 0;
    margin-left: 0;
  }
  .text-style,h5{
    margin-top: 40px;
    margin-bottom: 30px;
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 20px;
  }
  .modal-content {
    padding-top: 21px;
    position: relative;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;
    width:60%;
    pointer-events: auto;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid rgba(0,0,0,.2);
    border-radius: .3rem;
    outline: 0;
  }

  #btn{
    margin-left: 26%;
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 10px;
    /*line-height: 36px;*/
    letter-spacing: 0.1px;
  }
  #popuptext,#popuptext2{
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 26px;
    letter-spacing: 0.1px;
  }
  #popuptext2{
    margin-left: 7%;
    margin-bottom: 0;
    font-size: 18px;
    line-height: 34px;
    letter-spacing: 0.5px;
  }
  #popuptext2>span{
    /*margin-left: 10%;*/
    margin-bottom: 0;
    font-size: 16px;
  }
  form{
    width: 100%;
  }
  input{
    font-size: 12px;
    width: 90%;
    padding-top: 0;
    border: none;
    border-bottom: 1px solid #DF7856;
    letter-spacing: 0.9px;
  }
  .smoll-button{
width: 50%;
    border-radius: 40px;
    background-color: #DF7856;;
  }
  .fw-300{
    font-family: Montserrat;
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 20px;
  }
  @media (max-width: 769px) {
    .lang{
position: absolute;
      top: 20px;
      left: 35%;
    }
  }
  /*.key{*/
  /*  position: absolute;*/
  /*  right: 90px;*/
  /*}*/
  .pl-6{
    padding-left: 4rem!important;
  }
  .w-30 {
    width: 20%!important;
  }
  @media (min-width: 700px){
    .navbar.scrolling-navba{
      padding-top: 15px;
      padding-bottom: 12px;
      -webkit-transition: background 0.5s ease-in-out,padding 0.5s ease-in-out;
      transition: background 0.5s ease-in-out,padding 0.5s ease-in-out;
    }

  }
  @media (max-width: 988px) {
    .navbar-toggler{
      position: fixed;
      right: 0;
      top: 6px;
    }
    .lang{
      position: absolute;
      top: 20px;
      left: 35%;
      display: none;
    }
  }

  p,a{
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
    /* identical to box height */
    color: #FBFBFE;
  }
  img{
    float:left;
  }
  @media (max-width: 978px) {
    .padding-right-fix{
      height: 100vh;
      position: relative;
      right: 45%;
      top: 60px;
    }
  }
  @media (max-width: 978px) {
    .separator{
      background-color: white;
      height: 0.2px;
      width: 100%;
    }
  }
</style>
