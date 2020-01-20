<template>
  <section id="forth-features" class="text-center" @click="anyclick">
    <div class="container d-flex justify-content-center ">
      <div class="FF" align="left" @click="selectshevrone=!selectshevrone">
        <img class="Ffloor" :src="getfloor" alt="">
        <svg class="ml-2 mt-3" width="19" height="11" viewBox="0 0 19 11" fill="none"
             xmlns="http://www.w3.org/2000/svg">
          <path d="M1.5 1.5L9.5 8.5L17.5 1.5" stroke="#E08C5A" stroke-width="3"/>
        </svg>
      </div>
      <div class="navfloor" :class="{showing: selectshevrone}">
        <ul class="listfloor">
          <li><span :class="{textstspecial: FF }" @click="selectnav('0')">
            {{$t('section4.nav1')}}
            <svg class="shev" width="20" height="23" viewBox="0 0 20 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M17 11H3C1.89543 11 1 11.8954 1 13V20C1 21.1046 1.89543 22 3 22H17C18.1046 22 19 21.1046 19 20V13C19 11.8954 18.1046 11 17 11Z"
                :stroke="colorsvg1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path
                d="M5 10.9999V6.99991C4.99876 5.75996 5.45828 4.56378 6.28938 3.64358C7.12047 2.72338 8.26383 2.14481 9.49751 2.0202C10.7312 1.89558 11.9671 2.23381 12.9655 2.96922C13.9638 3.70463 14.6533 4.78476 14.9 5.99991"
                :stroke="colorsvg1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </span>
          </li>
          <li @mouseover="nav=!nav" @onmouseout="nav=!nav" @click="selectnav('1')"><span :class="{textstspecial: GF }">{{$t('section4.nav2')}}
            <svg class="block" width="20" height="23" viewBox="0 0 20 23" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
              <path
                d="M17 11H3C1.89543 11 1 11.8954 1 13V20C1 21.1046 1.89543 22 3 22H17C18.1046 22 19 21.1046 19 20V13C19 11.8954 18.1046 11 17 11Z"
                :stroke="colorsvg2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path
                d="M5 10.9999V6.99991C4.99876 5.75996 5.45828 4.56378 6.28938 3.64358C7.12047 2.72338 8.26383 2.14481 9.49751 2.0202C10.7312 1.89558 11.9671 2.23381 12.9655 2.96922C13.9638 3.70463 14.6533 4.78476 14.9 5.99991"
                :stroke="colorsvg2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </span>
          </li>
          <li @mouseover="nav=!nav" @onmouseout="nav=!nav"><span :class="{special: nav }"><a
            class="nav-link "
            data-toggle="modal"
            data-target="#exampleModalCenter">{{$t('section4.nav3')}}
            <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M17 10H3C1.89543 10 1 10.8954 1 12V19C1 20.1046 1.89543 21 3 21H17C18.1046 21 19 20.1046 19 19V12C19 10.8954 18.1046 10 17 10Z"
                stroke="#6B6B6D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path
                d="M5 10V6C5 4.67392 5.52678 3.40215 6.46447 2.46447C7.40215 1.52678 8.67392 1 10 1C11.3261 1 12.5979 1.52678 13.5355 2.46447C14.4732 3.40215 15 4.67392 15 6V10"
                stroke="#6B6B6D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg></a>
          </span>
          </li>
          <li @mouseover="nav=!nav" @onmouseout="nav=!nav"><span :class="{special: nav}"><a
            class="nav-link "
            data-toggle="modal"
            data-target="#exampleModalCenter">
            {{$t('section4.nav3')}}
            <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M17 10H3C1.89543 10 1 10.8954 1 12V19C1 20.1046 1.89543 21 3 21H17C18.1046 21 19 20.1046 19 19V12C19 10.8954 18.1046 10 17 10Z"
                stroke="#6B6B6D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path
                d="M5 10V6C5 4.67392 5.52678 3.40215 6.46447 2.46447C7.40215 1.52678 8.67392 1 10 1C11.3261 1 12.5979 1.52678 13.5355 2.46447C14.4732 3.40215 15 4.67392 15 6V10"
                stroke="#6B6B6D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg></a>
          </span>
          </li>
          <li @mouseover="nav=!nav" @onmouseout="nav=!nav"><span :class="{special: nav}"><a
            class="nav-link "
            data-toggle="modal"
            data-target="#exampleModalCenter">
           {{$t('section4.nav4')}}
            <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M17 10H3C1.89543 10 1 10.8954 1 12V19C1 20.1046 1.89543 21 3 21H17C18.1046 21 19 20.1046 19 19V12C19 10.8954 18.1046 10 17 10Z"
                stroke="#6B6B6D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path
                d="M5 10V6C5 4.67392 5.52678 3.40215 6.46447 2.46447C7.40215 1.52678 8.67392 1 10 1C11.3261 1 12.5979 1.52678 13.5355 2.46447C14.4732 3.40215 15 4.67392 15 6V10"
                stroke="#6B6B6D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg></a>
          </span>
          </li>
        </ul>
      </div>
      <div id="castle" class="d-flex justify-content-center align-items-center">
        <img src="../statics/Rotator.svg" alt="" class="Rotator d-flex justify-content-center align-items-center">
        <img class="FCflor d-flex align-items-center " :src="getchertej" alt="" :class="{fixfloor: zerofloor}">
        <div class="wrapper mobile-secret" :class="{showing: zerofloor}">
          <div class="eye1 d-flex justify-content-center align-items-center" @click="drov1">
            <div >
              <img v-if="Eye1" @mouseover="howereye1" src="../statics/Eye.svg">
              <img v-else @mouseout="howereye1" src="../statics/hower_eye.svg">
              <button id="btn" class="btn  my-4 waves-effect eyeBtn1  smoll-button" type="button" data-dismiss="modal">
                Send code
              </button>
            </div>
            <div></div>

          </div>
          <div class="eye2 d-flex justify-content-center align-items-center" @click="drov2">
            <div>
              <img v-if="Eye2" @mouseover="howereye2" src="../statics/Eye.svg">
              <img v-else @mouseout="howereye2" src="../statics/hower_eye.svg">
              <button id="btn" class="btn  my-4 waves-effect eyeBtn2  smoll-button" type="button" data-dismiss="modal">
                Send code
              </button>
            </div>
            <div></div>

          </div>
          <div class="eye3 d-flex justify-content-center align-items-center" @click="drov3">
            <div>
              <img v-if="Eye3" @mouseover="howereye3" src="../statics/Eye.svg">
              <img v-else @mouseout="howereye3" src="../statics/hower_eye.svg">
              <button id="btn" class="btn  my-4 waves-effect eyeBtn3  smoll-button" type="button" data-dismiss="modal">
                Send code
              </button>
            </div>
            <div></div>

          </div>
          <div class="eye4 d-flex justify-content-center align-items-center" @click="drov4">
            <div>
              <img v-if="Eye4" @mouseover="howereye4" src="../statics/Eye.svg">
              <img v-else @mouseout="howereye4" src="../statics/hower_eye.svg">
              <button id="btn" class="btn  my-4 waves-effect eyeBtn4  smoll-button" type="button" data-dismiss="modal">
                Send code
              </button>
            </div>
            <div></div>

          </div>
          <div class="eye5 d-flex justify-content-center align-items-center" @click="drov5">
            <div>
              <img v-if="Eye5" @mouseover="howereye5" src="../statics/Eye.svg">
              <img v-else @mouseout="howereye5" src="../statics/hower_eye.svg">
              <button id="btn" class="btn  my-4 waves-effect eyeBtn5  smoll-button" type="button" data-dismiss="modal">
                Send code
              </button>
            </div>
            <div></div>

          </div>
          <div class="eye6 d-flex justify-content-center align-items-center" @click="drov6">
            <div>
              <img v-if="Eye6" @mouseover="howereye6" src="../statics/Eye.svg">
              <img v-else @mouseout="howereye6" src="../statics/hower_eye.svg">
              <button id="btn"  class="btn  my-4 waves-effect eyeBtn6  smoll-button" type="button" data-dismiss="modal">
                Send code
              </button>
            </div>
            <div></div>
          </div>
          <div class="eye7 d-flex justify-content-center align-items-center" @click="drov7">
            <div>
              <img v-if="Eye7" @mouseover="howereye7"  src="../statics/Eye.svg">
            <img v-else  @mouseout="howereye7"  src="../statics/hower_eye.svg">
              <button id="btn" class="btn  my-4 waves-effect eyeBtn  smoll-button" type="button" data-dismiss="modal">
                Dining Room
              </button>
            </div>
            <div></div>

          </div>
        </div>
      </div>
    </div>
    <div class="row mt-tab mobile-secret" :class="{showing: zerofloor}">
      <div class="col">
        <span class="text-grey"><p
          class="text-left fw-300 mb-0" :class="{textstspecial: rom3}" v-html="$t('section4.room1')"></p></span>
        <span class="text-grey"><p class="text-left fw-300 mb-0"
                                   :class="{textstspecial: rom3}" v-html="$t('section4.room2')"></p></span>
        <span class="text-grey"><p class="text-left fw-300 mb-0"
                                   :class="{textstspecial: rom3}" v-html="$t('section4.room3')"></p></span>
        <span class="text-grey"><p class="text-left fw-300 mb-0"
                                   :class="{textstspecial: rom3}" v-html="$t('section4.room4')"></p></span>
      </div>
      <div class="col">
        <span class="text-grey"><p class="text-left fw-300 mb-0" :class="{textstspecial: rom7}"
                                   v-html="$t('section4.room5')"></p></span>
        <span class="text-grey"><p class="text-left fw-300 mb-0"
                                   :class="{textstspecial: rom7}" v-html="$t('section4.room6')"></p></span>
        <span class="text-grey"><p class="text-left fw-300 mb-0"
                                   :class="{textstspecial: rom7}" v-html="$t('section4.room7')"></p></span>
        <span class="text-grey"><p class="text-left fw-300 mb-0"
                                   :class="{textstspecial: rom4}" v-html="$t('section4.room8')"></p></span>
      </div>
      <div class="col">
        <span class="text-grey"><p class="text-left fw-300 mb-0"
                                   :class="{textstspecial: rom2}" v-html="$t('section4.room9')"></p></span>
        <span class="text-grey"><p class="text-left fw-300 mb-0"
                                   :class="{textstspecial: rom2}" v-html="$t('section4.room10')"></p></span>
        <span class="text-grey"><p class="text-left fw-300 mb-0" :class="{textstspecial: rom2}"
                                   v-html="$t('section4.room11')"></p></span>
        <span class="text-grey"><p class="text-left fw-300 mb-0"
                                   :class="{textstspecial: rom2}" v-html="$t('section4.room12')"></p></span>
      </div>
      <div class="col">
        <span class="text-grey"><p class="text-left fw-300 mb-0"
                                   :class="{textstspecial: rom6}" v-html="$t('section4.room13')"></p></span>
        <span class="text-grey"><p class="text-left fw-300 mb-0"
                                   :class="{textstspecial: rom5}" v-html="$t('section4.room14')"></p></span>
        <span class="text-grey"><p class="text-left fw-300 mb-0"
                                   :class="{textstspecial: rom5}" v-html="$t('section4.room15')"></p></span>
        <span class="text-grey"><p class="text-left fw-300 mb-0"
                                   :class="{textstspecial: rom4}" v-html="$t('section4.room16')"></p></span>
      </div>
    </div>
  </section>
</template>

<script>
  // import { gsap } from 'gsap'

  export default {
    // name: 'ComponentName',
    data() {
      return {
        rom1: false,
        rom2: false,
        rom3: false,
        rom4: false,
        rom5: false,
        rom6: false,
        rom7: false,
        nav: false,
        Eye1: true,
        Eye2: true,
        Eye3: true,
        Eye4: true,
        Eye5: true,
        Eye6: true,
        Eye7: true,
        selected: false,
        colorsvg1: '#E08C5A',
        colorsvg2: '#6B6B6D',
        FF: true,
        GF: false,
        selectshevrone: true,
        zerofloor: false,
        floor: [{'0': '../statics/First_floor.svg', '1': '../statics/ground_floor.svg'}],
        getfloor: '../statics/First_floor.svg',
        chertej: [{'0': '../statics/Chert22.jpg', '1': '../statics/scema_0floor .svg'}],
        getchertej: '../statics/Chert22.jpg'
      }
    },
    methods: {
      howereye1:function(){
      this.Eye1 = !this.Eye1
        },
      howereye2:function(){
        this.Eye2 = !this.Eye2
      },
      howereye3:function(){
        this.Eye3 = !this.Eye3
      },
      howereye4:function(){
        this.Eye4 = !this.Eye4
      },
      howereye5:function(){
        this.Eye5 = !this.Eye5
      },
      howereye6:function(){
        this.Eye6 = !this.Eye6
      },
      howereye7:function(){
        this.Eye7 = !this.Eye7
      },


      anyclick: function () {
        let target = event.target // где был клик?
        if (target.className === 'Ffloor') {
          if (this.selectshevrone === false) {
            this.selectshevrone = false
          } else if (this.selectshevrone === true) {
            this.selectshevrone = true
          }
        } else {
          this.selectshevrone = true
        }
      },
      selectnav: function (num) {
        this.getfloor = this.floor[0][num]
        this.getchertej = this.chertej[0][num]
        this.selectshevrone = true
        if (num === '1') {
          this.colorsvg2 = '#E08C5A'
          this.colorsvg1 = '#6B6B6D'
          this.FF = false
          this.GF = true
          this.zerofloor = true
        } else if (num === '0') {
          this.colorsvg2 = '#6B6B6D'
          this.colorsvg1 = '#E08C5A'
          this.FF = true
          this.GF = false
          this.zerofloor = false
        }
      },
      // drowDisable: function () {
      //   var tab = gsap
      //   tab.set('#q, #w, #q1, #w1, #q2, #w2, #q3, #w3, #q4, #w4, #q5, #w5, #q6, #w6', {fill: '93959A'})
      //   tab.set('.a, .b, .c, .d, .e, .f, .g', { visibility: 'hidden' })
      //   tab.set('#line1, #line2, #line3, #line4, #line5, #line6, #line7', {attr: {d: 'M2.38086 0 0'}})
      // },
      drov1: function () {
        this.rom1 = false
        this.rom2 = false
        this.rom3 = false
        this.rom4 = true
        this.rom5 = false
        this.rom6 = false
        this.rom7 = false
        // this.drowDisable()
        // let p = new Promise((resolve, reject) => {
        //   var tab = gsap.timeline({})
        //   tab.from('.a', {visibility: 'visible'})
        //   tab.to('.a', {visibility: 'hidden'})
        //   tab.from('.a', {visibility: 'visible'})
        //   tab.timeScale(6.2)
        //   resolve('true')
        // })
        // p.then(result => {
        //   var tab = gsap.timeline({})
        //   tab.to('#q', {delay: 2, fill: 'E08C5A'})
        //   // tab.to('#line1', {duration: 1, attr: {d: 'L4.6188 110.994 M2.38086 0 0'}})
        //   // tab.to('#w', {opacity: '0.1'})
        //   tab.to('#w', {delay: 2, fill: 'E08C5A'})
        //   // tab.from('#w', {opacity: '0.9'})
        //   tab.timeScale(5.2)
        // })
      },
      drov2: function () {
        this.rom1 = false,
          this.rom2 = true,
          this.rom3 = false,
          this.rom4 = false,
          this.rom5 = false,
          this.rom6 = false
        this.rom7 = false
        // this.drowDisable()
        // let p = new Promise((resolve, reject) => {
        //   var tab = gsap.timeline({})
        //   tab.from('.b', {visibility: 'visible'})
        //   tab.to('.b', {visibility: 'hidden'})
        //   tab.from('.b', {visibility: 'visible'})
        //   tab.timeScale(6.2)
        //   resolve('true')
        // })
        // p.then(result => {
        //   var tab = gsap.timeline({})
        //   tab.to('#q1', {delay: 2, fill: 'E08C5A'})
        //   // tab.to('#line2', {duration: 1, attr: {d: 'M44.38086 1.00562L47.6188 110.994'}})
        //   // tab.to('#w1', {opacity: '0.1'})
        //   tab.to('#w1', {delay: 2, fill: 'E08C5A'})
        //   // tab.from('#w1', {opacity: '1'})
        //   tab.timeScale(5.2)
        // })
      },
      drov3: function () {
        this.rom1 = false,
          this.rom2 = false,
          this.rom3 = true,
          this.rom4 = false,
          this.rom5 = false,
          this.rom6 = false
        this.rom7 = false
        // this.drowDisable()
        // let p = new Promise((resolve, reject) => {
        //   var tab = gsap.timeline({})
        //   tab.from('.c', {visibility: 'visible'})
        //   tab.to('.c', {visibility: 'hidden'})
        //   tab.from('.c', {visibility: 'visible'})
        //   tab.timeScale(6.2)
        //   resolve('true')
        // })
        // p.then(result => {
        //   var tab = gsap.timeline({})
        //   tab.to('#q2', {delay: 2, fill: 'E08C5A'})
        //   // tab.to('#line3', {duration: 1, visibility: 'visible', attr: {d: 'M50.38086 100.00562L1.6188 1.994'}})
        //   // tab.to('#w2', {opacity: '0.1'})
        //   tab.to('#w2', {delay: 2, fill: 'E08C5A'})
        //   // tab.from('#w2', {opacity: '1'})
        //   tab.timeScale(5.2)
        // })
      },
      drov4: function () {
        this.rom1 = false,
          this.rom2 = false,
          this.rom3 = false,
          this.rom4 = true,
          this.rom5 = false,
          this.rom6 = false
        this.rom7 = false
        // this.drowDisable()
        // let p = new Promise((resolve, reject) => {
        //   var tab = gsap.timeline({})
        //   tab.from('.d', {visibility: 'visible'})
        //   tab.to('.d', {visibility: 'hidden'})
        //   tab.from('.d', {visibility: 'visible'})
        //   tab.timeScale(6.2)
        //   resolve('true')
        // })
        // p.then(result => {
        //   var tab = gsap.timeline({})
        //   tab.to('#q3', {delay: 2, fill: 'E08C5A'})
        //   // tab.to('#line4', {duration: 1, attr: {d: 'M2.38086 110.00562L47.6188 1.994'}})
        //   // tab.to('#w3', {opacity: '0.1'})
        //   tab.to('#w3', {delay: 2, fill: 'E08C5A'})
        //   // tab.from('#w3', {opacity: '1'})
        //   tab.timeScale(5.2)
        // })
      },
      drov5: function () {
        this.rom1 = false,
          this.rom2 = false,
          this.rom3 = false,
          this.rom4 = false,
          this.rom5 = true,
          this.rom6 = false
        this.rom7 = false
        // console.log("5")
        // this.drowDisable()
        // let p = new Promise((resolve, reject) => {
        //   var tab = gsap.timeline({})
        //   tab.from('.e', {visibility: 'visible'})
        //   tab.to('.e', {visibility: 'hidden'})
        //   tab.from('.e', {visibility: 'visible'})
        //   tab.timeScale(6.2)
        //   resolve('true')
        // })
        // p.then(result => {
        //   var tab = gsap.timeline({})
        //   tab.to('#q4', {delay: 2, fill: 'E08C5A'})
        //   // tab.to('#line5', {duration: 1, attr: {d: 'M2.38086 1.00562L47.6188 110.994'}})
        //   // tab.to('#w4', {opacity: '0.1'})
        //   tab.to('#w4', {delay: 2, fill: 'E08C5A'})
        //   // tab.from('#w4', {opacity: '1'})
        //   tab.timeScale(5.2)
        // })
      },
      drov6: function () {
        this.rom1 = false,
          this.rom2 = false,
          this.rom3 = false,
          this.rom4 = false,
          this.rom5 = false,
          this.rom6 = true
        this.rom7 = false
        // this.drowDisable()
        // let p = new Promise((resolve, reject) => {
        //   var tab = gsap.timeline({})
        //   tab.from('.f', {visibility: 'visible'})
        //   tab.to('.f', {visibility: 'hidden'})
        //   tab.from('.f', {visibility: 'visible'})
        //   tab.timeScale(6.2)
        //   resolve('true')
        // })
        // p.then(result => {
        //   var tab = gsap.timeline({})
        //   tab.to('#q5', {delay: 2, fill: 'E08C5A'})
        //   // tab.to('#line6', {duration: 1, attr: {d: 'M47.38086 1.00562L2.6188 110.994'}})
        //   // tab.to('#w5', {opacity: '0.1'})
        //   tab.to('#w5', {delay: 2, fill: 'E08C5A'})
        //   // tab.from('#w5', {opacity: '1'})
        //   tab.timeScale(5.2)
        // })
      },
      drov7: function () {
        this.rom1 = false,
          this.rom2 = false,
          this.rom3 = false,
          this.rom4 = false,
          this.rom5 = false,
          this.rom6 = false,
          this.rom7 = true
        // console.log("7")
        // this.drowDisable()
        // let p = new Promise((resolve, reject) => {
        //   var tab = gsap.timeline({})
        //   tab.from('.g', {visibility: 'visible'})
        //   tab.to('.g', {visibility: 'hidden'})
        //   tab.from('.g', {visibility: 'visible'})
        //   tab.timeScale(6.2)
        //   resolve('true')
        // })
        // p.then(result => {
        //   var tab = gsap.timeline({})
        //   tab.to('#q6', {delay: 2, fill: 'E08C5A'})
        //   // tab.to('#line7', {duration: 1, attr: {d: 'M2.38086 110.00562L47.6188 1.994'}})
        //   // tab.to('#w6', {opacity: '0.1'})
        //   tab.to('#w6', {delay: 2, fill: 'E08C5A'})
        //   // tab.from('#w6', {opacity: '1'})
        //   tab.timeScale(5.2)
        // })
      }
    }
  }
</script>
<style scoped>
  .FF {
    margin-top: 4.6rem;
    cursor: pointer;
    position: absolute;
    left: 20%;
  }

  .navfloor {
    background-color: #2e2e30;
    position: absolute;
    left: 24%;
    margin-top: 11%;
    z-index: 10000;
    padding: 20px;
    width: 30%;
  }

  .navfloor > .listfloor {
    padding-left: 0;
    list-style: none;
    color: #93959A;
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    letter-spacing: 1px;
    line-height: 20px;
  }

  .navfloor > .listfloor > li > span {
    display: flex;
    cursor: pointer;
    justify-content: space-between;
    text-align: left;
    padding: 20px 2px 20px 2px;
    border-bottom: solid 1px #E08C5A;
  }

  .navfloor > .listfloor > li > span > a {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 0;
  }

  .navfloor > .listfloor > li > span:hover {
    color: #E08C5A;
  }

  /*.Svg {*/
  /*min-width: 3vh;*/
  /*max-width: 7vh;*/
  /*}*/

  .wrapper {
    position: absolute;
    /*padding-top: 15%;*/
    display: grid;
    grid-template-areas: " . . . . . . " " . . . a . . " " . . . a . . " " . b b a c c " " . . . d . . " " e e f d g g " " . . . d . . " " . . . . . . "
  }

  .eye1 {
    grid-area: a;
  }

  .eye2 {
    grid-area: b;
  }

  .eye3 {
    grid-area: c;
  }

  .eye4 {
    grid-area: d;
  }

  .eye5 {
    grid-area: e;
  }

  .eye6 {
    grid-area: f;
  }

  .eye7 {
    grid-area: g;
  }

  .eye1, .eye4 {
    height: 200px;
    width: 240px;
  }

  .eye2, .eye3, .eye5, .eye6, .eye7 {
    height: 100px;
  }

  .eye7, .eye3 {
    width: 236px;
  }

  .eye2 {
    width: 190px;
  }

  .eye5 {
    width: 150px;
  }

  .eye6 {
    width: 114px;
  }

  @media (max-width: 1196px) {
    .FF {
      margin-top: 0.6rem;
      position: absolute;
      left: 20%;
    }

    .eye1, .eye4 {
      height: 187px;
      width: 190px;
    }

    .eye2, .eye3, .eye5, .eye6, .eye7 {
      height: 100px;
    }

    .eye7, .eye3 {
      width: 209px;
    }

    .eye2 {
      width: 180px;
    }

    .eye5 {
      width: 110px;
    }

    .eye6 {
      width: 100px;
    }
  }

  @media (max-width: 990px) {
    .navfloor {
      background-color: #2e2e30;
      position: absolute;
      left: 24%;
      margin-top: 11%;
      z-index: 10000;
      padding: 20px;
      width: 40%;
    }

    .eye1, .eye4 {
      height: 160px;
      width: 96px;
    }

    .eye2, .eye3, .eye5, .eye6, .eye7 {
      height: 7vh;
    }

    .eye7, .eye3 {
      width: 180px;
    }

    .eye2 {
      width: 110px;
    }

    .eye5 {
      width: 90px;
    }

    .eye6 {
      width: 90px;
    }
  }

  @media (max-width: 766px) {
    /*.fixfloor[data-v-7bec2358] {*/
      /*width: 60vh;*/
    /*}*/

    .wrapper {
      padding-top: 10%;
    }

    .FCflor {
      padding-top: 13%;
      height: 100%;
      width: 100%;
    }

    wrapper {
      padding-top: 12%;
    }

    .eye1, .eye4 {
      height: 120px;
      width: 85px;
    }

    .eye2, .eye3, .eye5, .eye6, .eye7 {
      height: 80px;
    }

    .eye7, .eye3 {
      width: 130px;
    }

    .eye2 {
      width: 100px;
    }

    .eye5 {
      width: 70px;
    }

    .eye6 {
      width: 60px;
    }

    .navfloor {
      background-color: #2e2e30;
      position: absolute;
      left: 24%;
      margin-top: 11%;
      z-index: 10000;
      padding: 20px;
      width: 50%;
    }
  }

  @media (max-width: 566px) {
    eye1, .eye4 {
      height: 26vh;
      width: 25vh;
    }

    .eye2, .eye3, .eye5, .eye6, .eye7 {
      height: 10vh;
    }

    .eye7, .eye3 {
      width: 31vh;
    }

    .eye2 {
      width: 28vh;
    }

    .eye5 {
      width: 15vh;
    }

    .eye6 {
      width: 12vh;
    }
  }

  .placebo {
    grid-area: x;
  }

  .eyeBtn, .eyeBtn1, .eyeBtn2, .eyeBtn3, .eyeBtn4, .eyeBtn5, .eyeBtn6, .eyeBtn7 {
    visibility: hidden;
    position: absolute;
    height: 20px;
    width: 103px;
    padding: 2px;
    border-radius: 15px;
    background: #E08C5A !important;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 300;
    font-size: 10px;
    line-height: 17px;
    color: white;
  }

  #svgLine1, #svgLine5 {
    position: absolute;
    top: 36%;
    left: 50%;
  }

  #svgLine6 {
    position: absolute;
    top: 38%;
    left: 12%;
  }

  #svgLine4 {
    position: absolute;
    top: 36%;
    left: 10%;
  }

  #svgLine3 {
    position: absolute;
    top: -70%;
    left: 9%;
  }

  #svgLine7 {
    position: absolute;
    top: -86%;
    right: 10%;
  }

  #svgLine2 {
    position: absolute;
    top: -124%;
    left: -6%;
  }

  .a, .b, .c, .d, .e, .f, .g {
    visibility: hidden;
  }

  #H {
    cursor: pointer;
  }

  .Rotator {
    display: none !important;
  }

  .Ffloor {
    height: 100%;
    width: 80%;
  }

  .text-grey {
    color: #9e9e9e !important;
  }

  .FCflor {
    /*padding-top: 13%;*/
    height: 100%;
    width: 100%;
  }

  .textstspecial {
    color: #E08C5A !important;
  }

  p {
    font-family: Montserrat;
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 24px;
  }

  .mt-tab {
    margin-top: 3rem;
    padding-left: 12%;
    padding-right: 4%;
    padding-bottom: 50px;
    max-width: 100%;
    margin-left: 0;
    margin-right: 0;
  }


  img {
    border: none;
  }

  #forth-features {
    /*height: 100vh;*/
    background-color: #201e1f;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }

@media (max-width: 794px ) {
  .fixfloor {
    max-width: 700px;
  }
}
  @media (max-width: 702px) {
    .Ffloor {
      height: 100%;
      width: 70%;
    }
    .fixfloor {
      width: 63vh;
      max-width: 500px;
    }
    .FF {
      margin-top: 3%;
      position: absolute;
      z-index: 200;
      left: 9%;
    }

    .Rotator {
      display: none !important;
    }

    #forth-features {
      /*height: 139vh;*/
      background-color: #201e1f;
      -webkit-background-size: cover;
      -moz-background-size: cover;
      -o-background-size: cover;
      background-size: cover;
    }

    p {
      font-family: Montserrat;
      font-style: normal;
      font-weight: 300;
      font-size: 12px;
      line-height: 24px;
    }
  }


@media (max-width: 1024px) {
  .fixfloor {
    max-width: 1005px !important;
  }
  @media (max-width: 768px) {
    .fixfloor {
      max-width: 765px !important;
    }
  }
  @media (max-width: 660px) {
    .fixfloor {
      width: 63vh;
    }
  }
}
  @media (max-width: 600px) {
    .Rotator {
      display: block !important;
      align-items: center;
    }

    .eye1, .eye2, .eye3, .eye4, .eye5, .eye6, .eye7 {
      display: none;
    }

    .Ffloor {
      height: 100%;
      width: 70%;
    }

    .FCflor {
      /*position: relative;*/
      /*top: 20vh;*/
      /*left: 10%;*/
      height: 100%;
      width: 100%;
    }

    .Rotator {
      position: absolute;
      /*padding-top: 33%;*/
      display: block;
    }

    .mobile-secret {
      display: none;
    }
    .fixfloor {
      width: 70vh;
      max-width: 505px !important;
    }
  }
  @media(max-width: 500px) {
    .showing {
      display: none;
    }

    .fixfloor {
      width: 60vh;
      max-width: 427px !important;
    }
  }
  @media(max-width: 400px){
    .fixfloor {
      width: 160px;
      max-width: 313px !important;
    }
  }
  .showing {
    display: none;
  }

  .fixfloor {
    width: 100vh;
  }
</style>
