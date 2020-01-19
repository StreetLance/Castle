<template>
  <!--Navbar-->
  <nav class="navbar navbar-expand-lg navbar-dark fixed-top scrolling-navbar " :class="{bgstyle : bg}" >
    <div class="row items-center w-30 pl-4">
      <a href="#info"><img class="logos" src="../statics/Header_Logo.svg"></a>
      <div class="pl-3 pt-3 lang"><p>{{lang}}<img src="../statics/larng_shewron.svg" class=" d-flex justify-center fl"
                                                  alt="" @click="show"></p>
      </div>
    </div>
    <div class="container ">

      <!-- Navbar brand -->

      <!-- Collapse button -->
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav"
              aria-controls="basicExampleNav" aria-expanded="false" aria-label="Toggle navigation"
              @click="clickcollaps" >
        <span class="navbar-toggler-icon"></span>
      </button>
      <!-- Collapsible content -->
      <div class="collapse navbar-collapse justify-center pl-6" :class="{placebo : collaps , collapse : !collaps}" id="basicExampleNav" data-toggle="collapse"
           data-target=".placebo">
        <!-- Links -->
        <div class="row navbar-nav smooth-scroll w-100 justify-around items-center text-center">
          <div class="col"><a class="nav-link fw-300 text-white" @click="facts">{{ $t('main.facts') }}</a></div>
          <hr class="separator">
          <div class="col"><a class="nav-link fw-300 text-white" @click="Gallery">{{ $t('main.Gallery') }}</a></div>
          <hr class="separator">
          <div class="col"><a class="nav-link fw-300  text-white" @click="Floor">{{ $t('main.Floorplans') }} </a></div>
          <hr class="separator">
          <div class="col"><a class="nav-link fw-300 text-white" @click="Information">{{ $t('main.Information') }}</a></div>
          <hr class="separator">
          <div class="col"><a class="nav-link fw-300 text-white" @click="Location">{{ $t('main.Location') }}</a></div>
          <hr class="separator">
          <div class="col locale"><a class="nav-link fw-300 text-white">{{ $t('main.English') }}</a></div>
          <hr class="separator locale">
          <div class="col"></div>
        </div>
        <!-- Links -->
        <div v-if="hower" @mouseover="mousehower" class=" d-flex justify-end padding-right-fix"><a class="nav-link "
                                                                                                   data-toggle="modal"
                                                                                                   data-target="#exampleModalCenter">
          <img class="p-l" src="../statics/grayKey.svg" align="left">
        </a>
          <span class="login">{{ $t('main.Login') }}</span>
        </div>
        <div v-else @mouseout="mousehower" class=" d-flex justify-end padding-right-fix"><a class="nav-link "
                                                                                            data-toggle="modal"
                                                                                            data-target="#exampleModalCenter">
          <img class="p-l" src="../statics/Key2.svg">
        </a>
          <span class="login">Log in</span>
        </div>
      </div>
      <!-- Collapsible content -->
    </div>
    <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog"
         aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered d-flex justify-center" role="document">
        <div class="modal-content">
          <img src="../statics/Key2.svg">
          <h5 class="text-black text-center">{{ $t('modal.WTKM') }}</h5>
          <form class="text-center pt-0 pb-3 pl-5" action="#!">
            <label class="text-dark">{{ $t('modal.Login') }}</label><input type="email" class="form-control" placeholder="Login">

            <label class="text-dark">{{ $t('modal.Password') }} </label><input type="email" class="form-control" placeholder="Password">
          </form>
          <p id="popuptext" class="text-black  text-center">{{ $t('modal.contactus') }}</p>
          <div class="jumbotron bg-gray">
            <span id="popuptext2" class="text-black ">
              <span class="psl"><a href="https://tiroxgroup.com/" class="text-black">{{ $t('modal.cont1') }}</a></span><br>
              {{ $t('modal.cont2') }}<br>
              {{ $t('modal.cont3') }}<br>
              <a href="tel:+4314130000" class="text-black">{{ $t('modal.cont4') }} +43 1 413 0000</a><br>
              {{ $t('modal.cont5') }}<span><a href="mailto:office@tiroxgroup.com " class="text-black">office@tiroxgroup.com</a> </span><br>
            </span>
          </div>
          <button id="btn" class="btn  my-4 waves-effect  smoll-button" type="button" data-dismiss="modal">{{ $t('modal.cont6') }}
          </button>
        </div>
      </div>
    </div>
    <ul class="language" v-show="showlang">
      <li @click="languege('ge')"><a>ge</a></li>
      <li @click="languege('en')"><a>en</a></li>
    </ul>
  </nav>

  <!--/.Navbar-->
</template>
<script>
  import {ScrollToPlugin} from 'gsap/ScrollToPlugin'
  import {gsap} from 'gsap'

  gsap.registerPlugin(ScrollToPlugin)
  import { Quasar } from 'quasar'
  export default {
    data() {
      return {
        lang: 'en',
        showlang: false,
        hower: true,
        collaps: false,
        bg: false
      }
    },
    methods: {
      show: function () {
        this.showlang = !this.showlang
      },
      languege: function (value) {
        this.lang = value
        this.$i18n.locale = value
        // set quasar's language too!!
        import(`quasar/lang/${value}`).then(language =>
          {this.$q.lang.set(language.default)
        console.log(this.$q.lang.isoName) })
        this.show()
      },
      mousehower: function () {
        this.hower = !this.hower
      },
      clickcollaps: function () {
        this.collaps = true
        this.bg = !this.bg
      },
      facts: function () {
        this.bg =false
        gsap.to(window, {duration: 2, scrollTo: "#best-features"})
      },
      Gallery: function () {
        this.bg =false
        gsap.to(window, {duration: 2, scrollTo: "#seond-features"});
      },
      Floor: function () {
        this.bg =false
        gsap.to(window, {duration: 2, scrollTo: "#forth-features"});
      },
      Information: function () {
        this.bg =false
        gsap.to(window, {duration: 2, scrollTo: "#six-features"});
      },
      Location: function () {
        this.bg =false
        gsap.to(window, {duration: 2, scrollTo: "#fifth-features"});
      }
    }
  }
</script>
<style scoped>
  .nav-link:hover {
    color: #E08C5A !important;
  }

  .login {
    display: none;
  }

  .locale {
    display: none;
  }

  label {
    display: inline-block;
    margin-bottom: .5rem;
    position: relative;
    top: 36px;
    right: 105px;
  }

  .logos {
    height: 100%;
    width: 100%;
  }

  ul {
    list-style: none;
  }

  .language {
    color: white;
    position: absolute;
    top: 10%;
    left: 10%;
  }

  .fl {
    padding-top: 10px;
    padding-left: 5px;
    float: right;
  }

  .psl {
    position: relative;
    left: -20px;
  }

  .jumbotron {
    padding: 0.5rem;
    padding-left: 1rem;
    margin-bottom: 0;
  }

  .bg-gray {
    background-color: lightgray;
  }

  .padding-right-fix {
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

  .text-style, h5 {
    margin-top: 40px;
    margin-bottom: 8px;
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
    z-index: 100000;
    -ms-flex-direction: column;
    flex-direction: column;
    width: 65%;
    pointer-events: auto;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid rgba(0, 0, 0, .2);
    border-radius: .3rem;
    outline: 0;
  }

  #btn {
    margin-left: 26%;
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 10px;
    /*line-height: 36px;*/
    letter-spacing: 0.1px;
  }

  #popuptext, #popuptext2 {
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 26px;
    letter-spacing: 0.1px;
  }

  #popuptext2 {
    margin-left: 7%;
    margin-bottom: 0;
    font-size: 18px;
    line-height: 34px;
    letter-spacing: 0.5px;
  }

  #popuptext2 > span {
    /*margin-left: 10%;*/
    margin-bottom: 0;
    font-size: 16px;
  }

  form {
    width: 77%;
  }

  input {
    font-size: 12px;
    width: 90%;
    padding-top: 0;
    margin-left: 40px;
    border: none;
    border-bottom: 1px solid #DF7856;
    letter-spacing: 0.9px;
  }

  .smoll-button {
    width: 50%;
    border-radius: 40px;
    background-color: #DF7856;;
  }

  .fw-300 {
    font-family: Montserrat;
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 20px;
  }
@media (max-width: 1000px) {
  .bgstyle {
    /*background: #201e1f;*/
    padding-bottom: 141px;
  }
}
  @media (max-width: 769px) {
    .lang {
      position: absolute;
      top: 20px;
      left: 35%;
    }

    .bgstyle {
      /*background: #201e1f;*/
      padding-bottom: 141px;
    }

    .locale {
      display: block;
    }

    .login {
      display: block;
      position: relative;
      top: 35px;
      right: 10px;
      font-family: Montserrat;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 20px;
      /* identical to box height */
      text-align: center;
      color: #FBFBFE;
    }

    .p-l {
      position: relative;
      bottom: 30px;
      left: 55px;
    }
  }

  /*.key{*/
  /*  position: absolute;*/
  /*  right: 90px;*/
  /*}*/
  .pl-6 {
    padding-left: 4rem !important;
  }

  .w-30 {
    width: 20% !important;
  }

  @media (min-width: 700px) {
    .navbar.scrolling-navbar {
      padding-top: 15px;
      /*padding-bottom: 141px;*/
      -webkit-transition: background 0.5s ease-in-out, padding 0.5s ease-in-out;
      transition: background 0.5s ease-in-out, padding 0.5s ease-in-out;
    }

    .navbar.scrolling-navbar:hover {
      background-color: #201e1f;
      padding-top: 15px;
      /*padding-bottom: 141px;*/
      -webkit-transition: background 0.5s ease-in-out, padding 0.5s ease-in-out;
      transition: background 0.5s ease-in-out, padding 0.5s ease-in-out;
    }

  }

  @media (max-width: 988px) {
    .navbar-toggler {
      position: fixed;
      right: 0;
      top: 6px;
    }

    .lang {
      position: absolute;
      top: 20px;
      left: 35%;
      display: none;
    }
  }

  p {
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
    /* identical to box height */
    color: #FBFBFE;
  }

  img {
    float: left;
  }

  @media (max-width: 978px) {
    .padding-right-fix {
      /*height: 100vh;*/
      position: relative;
      right: 45%;
      top: 60px;
    }
  }

  @media (max-width: 978px) {
    .separator {
      background-color: white;
      height: 0.2px;
      width: 100%;
    }
  }

  @media (min-width: 600px) {
    .bgstyle {
      /*padding-bottom: 141px;}*/
    }
  }

  @media (max-width: 550px) {

    .modal-content {
      padding-top: 21px;
      position: relative;
      display: -ms-flexbox;
      display: flex;
      z-index: 100000;
      -ms-flex-direction: column;
      flex-direction: column;
      width: 300px;
      pointer-events: auto;
      background-color: #fff;
      background-clip: padding-box;
      border: 1px solid rgba(0, 0, 0, .2);
      border-radius: .3rem;
      outline: 0;
    }

    label {
      display: inline-block;
      margin-bottom: .5rem;
      position: relative;
      top: 36px;
      right: 90px;
    }

    #popuptext2[data-v-54d3a52e] {
      margin-left: 7%;
      margin-bottom: 0;
      font-size: 14px;
      line-height: 20px;
      letter-spacing: 0.5px;
    }

    #popuptext2 > span[data-v-54d3a52e] {
      /* margin-left: 10%; */
      margin-bottom: 0;
      font-size: 14px;
    }
  }

  @media (max-width: 292px) {
    label {
      display: inline-block;
      margin-bottom: .5rem;
      position: relative;
      top: 36px;
      right: 80px;
    }
  }
</style>
