<template>
  <section id="best-features" class="text-center">
    <div class="container">
      <div class="row w-100 h-100">
        <div class="col">
          <img  src="../statics/The_New_Chapter.svg" alt="The_New_Chapter" class="pt-5 mt-5 TNC">
        <br>
          <div class="data pl-4-new pt-tabs">
            <span class="text-white " v-html="$t('section2.Addresse')"></span>
            <span class="text-grey" v-html="$t('section2.Totalarea')"></span>
            <div id="right-border" >
              <span class="text-white" v-html="$t('section2.Style')"></span>
              <span class="text-white" v-html="$t('section2.Numberoffloors')"></span>
              <span class="text-white" v-html="$t('section2.Bedrooms')"></span>
              <span class="text-white" v-html="$t('section2.Firstbuilding')"></span>
              <div class="row">
                <div class="col mt-2">
                  <span class="text-white" v-html="$t('section2.RebuildintothePlace')"></span>
                  <span class="text-white" v-html="$t('section2.Architects')"></span>
                  <span class="text-white" v-html="$t('section2.Firstowner')"></span>
                  <span class="text-white" v-html="$t('section2.Vienna')"></span>
                  <span class="text-white" v-html="$t('section2.major')"></span>
                  <span class="text-white" v-html="$t('section2.since')"></span>
                  <span class="text-white" v-html="$t('section2.Exclusive')"></span>
                  <span class="text-white" v-html="$t('section2.Summer')"></span>
                </div>
              </div>
              <!--<span class="text-grey" v-html="$t('section2.Prise')"></span>-->
              </div>
            <span class="text-white " v-html="$t('section2.Prise')"></span>
            <span class="text-grey" > <p class="text-left pt-0">{{$t('section2.Uponrequest')}}  <a href="mailto:office@tiroxgroup.com" class="color-mail ">office@tiroxgroup.com</a></p></span>
            <hr class="section2">
          </div>
        </div>
        <div class="col mobile-secret"></div>
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
    padding-bottom: 100px;
    background: #151518;
  }
  @media (max-width: 1000px) {
    .mobile-secret{
      display: none;
    }
  }
  @media (max-width: 702px) {
    .section2 {
      background-color: #df8c5a;
      height: 2px;
      width: 130px;
      display: block;
    }

    #right-border {
      border-right: 0;
    }

    .pb-5-new {
      padding-bottom: 0rem !important;
    }

    .fw-300 {
      font-family: Montserrat;
      font-style: normal;
      font-weight: 300;
      font-size: 14px;
      line-height: 20px;
    }

    .pt-tabs {
      padding-top: 7%;
    }

    #best-features {
      font-family: Montserrat;
      font-style: normal;
      font-weight: bold;
      font-size: 14px;
      line-height: 20px;
      /*height: 200vh;*/
      background: #201E1F;
    }

    .pl-4-new {
      padding-left: 1rem !important;
    }
  }
  @media (max-width: 480px) {
    .section2{
      background-color: #df8c5a;
      height:2px;
      width: 110px;
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

      /*height: 120vh;*/
      background: #201E1F;
    }
    .pl-4-new{
      padding-left: 1rem !important;
    }
    /**------------------------**/
  }

</style>
