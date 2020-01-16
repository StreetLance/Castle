<template>
  <section id="seond-features" class="text-center">
    <transition
      appear
      enter-active-class="animated fadeInLeft"
      leave-active-class="animated fadeOutLeft"
    >
<div class="Gallery" @click="show=!show" v-show="show" v-bind:style="{ backgroundImage: 'url(\''+ geturl +'\')'}">

</div>
    </transition>
    <transition
      appear
      enter-active-class="animated zoomIn"
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
        { '1': '../statics/Gallery/1_flor .jpg', '2': '../statics/Gallery/2_flor .jpg', '3': '../statics/Gallery/3_flor .jpg', '4': '../statics/Gallery/4_flor .jpg', '5': '../statics/Gallery/5_flor .jpg', '6': '../statics/Gallery/6_flor .jpg'
        }],
      geturl: '../statics/Gallery/1_flor .jpg'
    }
  },
  methods:{
    showart: function (num) {
      this.show = !this.show
      console.log(this.url[0][num])
      this.geturl = this.url[0][num]
    }
  }
}
</script>
<style scoped>
  .Gallery{
    background-size: 100%;
    height: 100vh;
    width: 100%;
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
    background-image: url("../statics/Gallery/1_flor .jpg");
    background-size: cover;
    background-repeat: no-repeat;
    grid-area: a;
    height: 100vh;
    width: 100%;
  }
  .Block2{
    background-image: url("../statics/Gallery/2_flor .jpg");
    background-size: cover;
    background-repeat: no-repeat;
    grid-area: b;
  }
  .Block3{
    background-image: url("../statics/Gallery/3_flor .jpg");
    background-size: cover;
    background-repeat: no-repeat;
    grid-area: c;
  }
  .Block4{
    background-image: url("../statics/Gallery/4_flor .jpg");
    background-size: cover;
    background-repeat: no-repeat;
    grid-area: e;
  }
  .Block5{
    background-image: url("../statics/Gallery/5_flor .jpg");
    background-size: cover;
    background-repeat: no-repeat;
    grid-area: d;
  }
  .Block6{
    background-image: url("../statics/Gallery/6_flor .jpg");
    background-size: cover;
    /*background-size: 150%;*/
    background-repeat: no-repeat;
    grid-area: v;
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
    height: 100vh;
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
      background-image: url("../statics/Gallery/1_flor .jpg");
      background-repeat: no-repeat;
      grid-area: a;
      height: 240px;
      width: 100%;
      border-radius: 4px;
    }
    .Block2{
      background-image: url("../statics/Gallery/2_flor .jpg");
      background-repeat: no-repeat;
      height: 140px;
      grid-area: b;
      border-radius: 4px;

    }
    .Block3{
      background-image: url("../statics/Gallery/3_flor .jpg");
      background-repeat: no-repeat;
      height: 140px;
      grid-area: c;
      border-radius: 4px;

    }
    .Block4{
      background-image: url("../statics/Gallery/4_flor .jpg");
      background-repeat: no-repeat;
      height: 240px;
      grid-area: e;
      border-radius: 4px;

    }
    .Block5{
      background-image: url("../statics/Gallery/5_flor .jpg");
      background-repeat: no-repeat;
      height: 170px;
      grid-area: d;
      border-radius: 4px;

    }
    .Block6{
      background-image: url("../statics/Gallery/6_flor .jpg");
      /*background-size: 150%;*/
      background-repeat: no-repeat;
      height: 170px;
      grid-area: v;
      border-radius: 4px;

    }
    #seond-features{
      padding: 20px;
      height: 124vh;
      background: #201e1f;
    }

  }

</style>
