<template>
  <section id="seond-features" class="text-center">
    <transition
      appear
      :duration="{ enter: 400, leave: 400 }"
      enter-active-class="animated fadeInLeft"
      leave-active-class="animated fadeOutLeft"
    >
<div class="Gallery"  v-bind:style="{ backgroundImage: 'url(\''+ geturl +'\')'}"  v-show="show">
  <div @click="show=!show"  class="closer">
    <svg  width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg" >
    <path d="M10.6068 31.8201L31.82 10.6069" stroke="white" stroke-width="3" stroke-linecap="round"/>
    <path d="M10.6068 10.6064L31.82 31.8196" stroke="white" stroke-width="3" stroke-linecap="round"/>
    </svg>
  </div>
</div>
    </transition>
    <transition
      appear
      :duration="{ enter: 0, leave: 0 }"
      enter-active-class="animated zoomIn"
      leave-active-class="animated zoomOut"
    >
    <div class="wrapper" v-show="!show">
      <div class="Block1"  @click="showart('1')"></div>
      <div class="Block2" @click="showart('2')"></div>
      <div class="Block3" @click="showart('3')"></div>
      <div class="Block4" @click="showart('4')"></div>
      <div class="Block5" @click="showart('5')"></div>
      <div class="Block6" @click="showart('6')"></div>
    </div>
    </transition>
  </section>
</template>

<script>
export default {
  // name: 'ComponentName',
  data () {
    return {
      show: false,
      url: [
        { '1': '../statics/Gallery/A-full.png', '2': '../statics/Gallery/B-full.png', '3': '../statics/Gallery/C-full.png', '4': '../statics/Gallery/D-full.png', '5': '../statics/Gallery/E-full.png', '6': '../statics/Gallery/F-full.png'
        }],
      geturl: ''
    }
  },
  methods: {
    showart: function (num) {
      new Promise((resolve, reject) => {
        this.geturl = this.url[0][num]
      }).then(this.show = !this.show)
    }
  }
}
</script>
<style scoped>
  .closer{
      cursor: pointer;
    position: absolute;
    right: 0px;
    margin-top: 5px;
    z-index: 1001;
    width: 50px;
    height: 50px;
  }
  .Gallery{
    background-color: #201E1F;
    background-size: 100%;
    height: 100vh;
    width: 100%;
    position: absolute;
    z-index: 1000;
    background-repeat: no-repeat;
  }
  .wrapper{
    display: grid;
    grid-template-areas:
      "a a a b b b c c c e e e"
      "a a a b b b c c c e e e"
      "a a a d d d c c c e e e"
      "a a a d d d v v v e e e"
      "a a a d d d v v v e e e"
  }
  .Block1{
    background-image: url("../statics/Gallery/A.png");
    background-size: cover;
    background-repeat: no-repeat;
    grid-area: a;
    height: 100vh;
    width: 100%;
    z-index: 998;
  }
  .Block2{
    background-image: url("../statics/Gallery/B.png");
    background-size: cover;
    background-repeat: no-repeat;
    grid-area: b;
    z-index: 998;
  }
  .Block3{
    background-image: url("../statics/Gallery/C.png");
    background-size: cover;
    background-repeat: no-repeat;
    grid-area: c;
    z-index: 998;
  }
  .Block4{
    background-image: url("../statics/Gallery/B.png");
    background-size: cover;
    background-repeat: no-repeat;
    grid-area: e;
    z-index: 998;
  }
  .Block5{
    background-image: url("../statics/Gallery/E.png");
    background-size: cover;
    background-repeat: no-repeat;
    grid-area: d;
    z-index: 998;
  }
  .Block6{
    background-image: url("../statics/Gallery/F.png");
    background-size: cover;
    /*background-size: 150%;*/
    background-repeat: no-repeat;
    grid-area: v;
    z-index: 998;
  }
  .Block1:hover {
    cursor: pointer;

    /*background-size:570%;*/
  }
  .Block2:hover
  {
    cursor: pointer;
    /*background-size:370%;*/
  }
  .Block3:hover
  {
    cursor: pointer;
    /*background-size:340%;*/
  }
  .Block4:hover
  {
    cursor: pointer;
    /*background-size:570%;*/
  }
  .Block5:hover
  {
    cursor: pointer;
    /*background-size:350%;*/
  }
  .Block6:hover{
    cursor: pointer;
    /*background-size:230%;*/
  }
  #seond-features{
    min-height: 100vh;
    background: #393939;
  }
  @media (max-width: 480px) {
    .wrapper{
      display: grid;
      grid-template-areas:
        "a b "
        "a d "
        "v d "
        "v e "
        "c e";
      grid-column-gap: 20px;
      grid-row-gap: 20px;
    }

    .Block1{
      background-image: url("../statics/Gallery/mob-A.png");
      background-repeat: no-repeat;
      grid-area: a;
      height: 240px;
      width: 100%;
      border-radius: 4px;
    }
    .Block2{
      background-image: url("../statics/Gallery/mob-B.png");
      background-repeat: no-repeat;
      height: 140px;
      grid-area: b;
      border-radius: 4px;

    }
    .Block3{
      background-image: url("../statics/Gallery/mob-С.png");
      background-repeat: no-repeat;
      height: 140px;
      grid-area: c;
      border-radius: 4px;

    }
    .Block4{
      background-image: url("../statics/Gallery/mob-D.png");
      background-repeat: no-repeat;
      height: 240px;
      grid-area: e;
      border-radius: 4px;

    }
    .Block5{
      background-image: url("../statics/Gallery/mob-E.png");
      background-repeat: no-repeat;
      height: 170px;
      grid-area: d;
      border-radius: 4px;

    }
    .Block6{
      background-image: url("../statics/Gallery/mob-F.png");
      /*background-size: 150%;*/
      background-repeat: no-repeat;
      height: 170px;
      grid-area: v;
      border-radius: 4px;

    }
    #seond-features{
      padding: 20px;
      height: 110vh;
      background: #201e1f;
    }
    .Gallery{
      background-color: #201E1F;
      background-size: 100%;
      height: 100vh;
      max-width: 88%;
      position: absolute;
      z-index: 1000;
      background-repeat: no-repeat;
    }
  }

</style>
