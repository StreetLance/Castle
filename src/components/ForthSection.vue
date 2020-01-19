<template>
  <section id="forth-features" class="text-center">
    <div class="container d-flex justify-content-center ">
      <div class="FF" align="left">
        <img class="Ffloor" :src="getfloor" alt="">
        <svg @click="selectshevrone=!selectshevrone" class="ml-2 mt-3" width="19" height="11" viewBox="0 0 19 11" fill="none"
             xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1.5 1.5L9.5 8.5L17.5 1.5" stroke="#E08C5A" stroke-width="3"/>
        </svg>
      </div>
      <div class="navfloor" :class="{showing: selectshevrone}">
        <ul class="listfloor">
          <li ><span :class="{special: nav}"  @click="selectnav('0')">
            Ground floor
            <svg width="20" height="23" viewBox="0 0 20 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M17 11H3C1.89543 11 1 11.8954 1 13V20C1 21.1046 1.89543 22 3 22H17C18.1046 22 19 21.1046 19 20V13C19 11.8954 18.1046 11 17 11Z"
                stroke="#6B6B6D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path
                d="M5 10.9999V6.99991C4.99876 5.75996 5.45828 4.56378 6.28938 3.64358C7.12047 2.72338 8.26383 2.14481 9.49751 2.0202C10.7312 1.89558 11.9671 2.23381 12.9655 2.96922C13.9638 3.70463 14.6533 4.78476 14.9 5.99991"
                stroke="#6B6B6D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg></span>
          </li>
          <li @mouseover="nav=!nav" @onmouseout="nav=!nav" @click="selectnav('1')"><span>First floor
            <svg class="block" width="20" height="23" viewBox="0 0 20 23" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
              <path
                d="M17 11H3C1.89543 11 1 11.8954 1 13V20C1 21.1046 1.89543 22 3 22H17C18.1046 22 19 21.1046 19 20V13C19 11.8954 18.1046 11 17 11Z"
                stroke="#6B6B6D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path
                d="M5 10.9999V6.99991C4.99876 5.75996 5.45828 4.56378 6.28938 3.64358C7.12047 2.72338 8.26383 2.14481 9.49751 2.0202C10.7312 1.89558 11.9671 2.23381 12.9655 2.96922C13.9638 3.70463 14.6533 4.78476 14.9 5.99991"
                stroke="#6B6B6D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg></span>
          </li>
          <li @mouseover="nav=!nav" @onmouseout="nav=!nav" @click="selectnav"><span :class="{special: nav}"><a
            class="nav-link "
            data-toggle="modal"
            data-target="#exampleModalCenter">Second floor
            <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M17 10H3C1.89543 10 1 10.8954 1 12V19C1 20.1046 1.89543 21 3 21H17C18.1046 21 19 20.1046 19 19V12C19 10.8954 18.1046 10 17 10Z"
                stroke="#6B6B6D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path
                d="M5 10V6C5 4.67392 5.52678 3.40215 6.46447 2.46447C7.40215 1.52678 8.67392 1 10 1C11.3261 1 12.5979 1.52678 13.5355 2.46447C14.4732 3.40215 15 4.67392 15 6V10"
                stroke="#6B6B6D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg></a></span>
          </li>
          <li @mouseover="nav=!nav" @onmouseout="nav=!nav" @click="selectnav"><span :class="{special: nav}"><a
            class="nav-link "
            data-toggle="modal"
            data-target="#exampleModalCenter">
            Third floor
            <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M17 10H3C1.89543 10 1 10.8954 1 12V19C1 20.1046 1.89543 21 3 21H17C18.1046 21 19 20.1046 19 19V12C19 10.8954 18.1046 10 17 10Z"
                stroke="#6B6B6D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path
                d="M5 10V6C5 4.67392 5.52678 3.40215 6.46447 2.46447C7.40215 1.52678 8.67392 1 10 1C11.3261 1 12.5979 1.52678 13.5355 2.46447C14.4732 3.40215 15 4.67392 15 6V10"
                stroke="#6B6B6D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg></a></span>
          </li>
          <li @mouseover="nav=!nav" @onmouseout="nav=!nav" @click="selectnav"><span :class="{special: nav}"><a
            class="nav-link "
            data-toggle="modal"
            data-target="#exampleModalCenter">
            Attic floor
            <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M17 10H3C1.89543 10 1 10.8954 1 12V19C1 20.1046 1.89543 21 3 21H17C18.1046 21 19 20.1046 19 19V12C19 10.8954 18.1046 10 17 10Z"
                stroke="#6B6B6D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path
                d="M5 10V6C5 4.67392 5.52678 3.40215 6.46447 2.46447C7.40215 1.52678 8.67392 1 10 1C11.3261 1 12.5979 1.52678 13.5355 2.46447C14.4732 3.40215 15 4.67392 15 6V10"
                stroke="#6B6B6D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg></a></span>
          </li>
        </ul>
      </div>
      <img src="../statics/Rotator.svg" alt="" class="Rotator">
      <div id="castle" class="d-flex justify-content-center align-items-center">
        <img class="FCflor d-flex align-items-center " :src="getchertej" alt="" :class="{fixfloor: zerofloor}">
        <div  class="wrapper mobile-secret" :class="{showing: zerofloor}">
          <div class="eye1 d-flex justify-content-center align-items-center" @click="drov1">
            <svg class="Svg" width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path id="q"
                    d="M52.0056 28.346L52.5159 27.5L52.0056 26.6541C51.925 26.5198 49.8438 23.1628 45.8154 19.8059C40.4578 15.3479 34.1333 12.9846 27.5537 12.9846C20.9741 12.9846 14.6362 15.3479 9.25171 19.8059C5.19653 23.1628 3.10181 26.5064 3.00781 26.6541L2.48413 27.5L3.00781 28.346C3.10181 28.4937 5.19653 31.8372 9.25171 35.1807C14.6362 39.6387 20.9741 42.002 27.5537 42.002C34.1467 42.002 40.4578 39.6387 45.8154 35.1807C49.8438 31.8372 51.9116 28.4802 52.0056 28.346ZM43.667 32.7771C38.8464 36.7651 33.4216 38.7793 27.5537 38.7793C21.6858 38.7793 16.2341 36.7517 11.3867 32.7771C8.87573 30.7092 7.17041 28.6279 6.33789 27.5C7.17041 26.3721 8.87573 24.2908 11.3867 22.2229C16.2476 18.2349 21.6858 16.2207 27.5537 16.2207C33.4216 16.2207 38.8464 18.2349 43.667 22.2229C46.1646 24.2908 47.8564 26.3855 48.6755 27.5C47.8564 28.6279 46.1646 30.7227 43.667 32.7771Z"
                    fill="#93959A"/>
              <path id="w"
                    d="M27.5 17.8186C22.1558 17.8186 17.8186 22.1558 17.8186 27.5C17.8186 32.8442 22.1558 37.1814 27.5 37.1814C32.8442 37.1814 37.1814 32.8442 37.1814 27.5C37.1814 22.1558 32.8442 17.8186 27.5 17.8186ZM27.5 33.9587C23.9416 33.9587 21.0413 31.0583 21.0413 27.5C21.0413 23.9416 23.9416 21.0413 27.5 21.0413C31.0583 21.0413 33.9587 23.9416 33.9587 27.5C33.9587 31.0583 31.0583 33.9587 27.5 33.9587Z"
                    fill="#93959A"/>
              <path class="a" d="M3.22266 3.22266H9.94995V0H0V9.8291H3.22266V3.22266Z" fill="#E08C5A"/>
              <path class="a" d="M45.05 0V3.22266H51.7773V9.8291H55V0H45.05Z" fill="#E08C5A"/>
              <path class="a" d="M3.22266 45.1709H0V55H9.94995V51.7773H3.22266V45.1709Z" fill="#E08C5A"/>
              <path class="a" d="M51.7773 51.7773H45.05V55H55V45.1709H51.7773V51.7773Z" fill="#E08C5A"/>
            </svg>
            <svg id="svgLine1" visibility="hidden" vi width="50" height="112" viewBox="0 0 50 112" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
              <path x="10" id="line1" stroke="#E08C5A" stroke-width="3" stroke-dasharray="4 4"/>
            </svg>
            <button id="btn" class="btn  my-4 waves-effect eyeBtn1  smoll-button" type="button" data-dismiss="modal">
              Send code
            </button>
          </div>
          <div class="eye2 d-flex justify-content-center align-items-center" @click="drov2">
            <svg id="Svg2" width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path id="q1"
                    d="M52.0056 28.346L52.5159 27.5L52.0056 26.6541C51.925 26.5198 49.8438 23.1628 45.8154 19.8059C40.4578 15.3479 34.1333 12.9846 27.5537 12.9846C20.9741 12.9846 14.6362 15.3479 9.25171 19.8059C5.19653 23.1628 3.10181 26.5064 3.00781 26.6541L2.48413 27.5L3.00781 28.346C3.10181 28.4937 5.19653 31.8372 9.25171 35.1807C14.6362 39.6387 20.9741 42.002 27.5537 42.002C34.1467 42.002 40.4578 39.6387 45.8154 35.1807C49.8438 31.8372 51.9116 28.4802 52.0056 28.346ZM43.667 32.7771C38.8464 36.7651 33.4216 38.7793 27.5537 38.7793C21.6858 38.7793 16.2341 36.7517 11.3867 32.7771C8.87573 30.7092 7.17041 28.6279 6.33789 27.5C7.17041 26.3721 8.87573 24.2908 11.3867 22.2229C16.2476 18.2349 21.6858 16.2207 27.5537 16.2207C33.4216 16.2207 38.8464 18.2349 43.667 22.2229C46.1646 24.2908 47.8564 26.3855 48.6755 27.5C47.8564 28.6279 46.1646 30.7227 43.667 32.7771Z"
                    fill="#93959A"/>
              <path id="w1"
                    d="M27.5 17.8186C22.1558 17.8186 17.8186 22.1558 17.8186 27.5C17.8186 32.8442 22.1558 37.1814 27.5 37.1814C32.8442 37.1814 37.1814 32.8442 37.1814 27.5C37.1814 22.1558 32.8442 17.8186 27.5 17.8186ZM27.5 33.9587C23.9416 33.9587 21.0413 31.0583 21.0413 27.5C21.0413 23.9416 23.9416 21.0413 27.5 21.0413C31.0583 21.0413 33.9587 23.9416 33.9587 27.5C33.9587 31.0583 31.0583 33.9587 27.5 33.9587Z"
                    fill="#93959A"/>
              <path class="b" d="M3.22266 3.22266H9.94995V0H0V9.8291H3.22266V3.22266Z" fill="#E08C5A"/>
              <path class="b" d="M45.05 0V3.22266H51.7773V9.8291H55V0H45.05Z" fill="#E08C5A"/>
              <path class="b" d="M3.22266 45.1709H0V55H9.94995V51.7773H3.22266V45.1709Z" fill="#E08C5A"/>
              <path class="b" d="M51.7773 51.7773H45.05V55H55V45.1709H51.7773V51.7773Z" fill="#E08C5A"/>
            </svg>
            <svg id="svgLine2" visibility="hidden" width="70" height="162" viewBox="0 0 50 112" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
              <path id="line2" stroke="#E08C5A" stroke-width="3" stroke-dasharray="4 4"/>
            </svg>
            <button id="btn" class="btn  my-4 waves-effect eyeBtn2  smoll-button" type="button" data-dismiss="modal">
              Send code
            </button>
          </div>
          <div class="eye3 d-flex justify-content-center align-items-center" @click="drov3">
            <svg class="Svg" width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path id="q2"
                    d="M52.0056 28.346L52.5159 27.5L52.0056 26.6541C51.925 26.5198 49.8438 23.1628 45.8154 19.8059C40.4578 15.3479 34.1333 12.9846 27.5537 12.9846C20.9741 12.9846 14.6362 15.3479 9.25171 19.8059C5.19653 23.1628 3.10181 26.5064 3.00781 26.6541L2.48413 27.5L3.00781 28.346C3.10181 28.4937 5.19653 31.8372 9.25171 35.1807C14.6362 39.6387 20.9741 42.002 27.5537 42.002C34.1467 42.002 40.4578 39.6387 45.8154 35.1807C49.8438 31.8372 51.9116 28.4802 52.0056 28.346ZM43.667 32.7771C38.8464 36.7651 33.4216 38.7793 27.5537 38.7793C21.6858 38.7793 16.2341 36.7517 11.3867 32.7771C8.87573 30.7092 7.17041 28.6279 6.33789 27.5C7.17041 26.3721 8.87573 24.2908 11.3867 22.2229C16.2476 18.2349 21.6858 16.2207 27.5537 16.2207C33.4216 16.2207 38.8464 18.2349 43.667 22.2229C46.1646 24.2908 47.8564 26.3855 48.6755 27.5C47.8564 28.6279 46.1646 30.7227 43.667 32.7771Z"
                    fill="#93959A"/>
              <path id="w2"
                    d="M27.5 17.8186C22.1558 17.8186 17.8186 22.1558 17.8186 27.5C17.8186 32.8442 22.1558 37.1814 27.5 37.1814C32.8442 37.1814 37.1814 32.8442 37.1814 27.5C37.1814 22.1558 32.8442 17.8186 27.5 17.8186ZM27.5 33.9587C23.9416 33.9587 21.0413 31.0583 21.0413 27.5C21.0413 23.9416 23.9416 21.0413 27.5 21.0413C31.0583 21.0413 33.9587 23.9416 33.9587 27.5C33.9587 31.0583 31.0583 33.9587 27.5 33.9587Z"
                    fill="#93959A"/>
              <path class="c" d="M3.22266 3.22266H9.94995V0H0V9.8291H3.22266V3.22266Z" fill="#E08C5A"/>
              <path class="c" d="M45.05 0V3.22266H51.7773V9.8291H55V0H45.05Z" fill="#E08C5A"/>
              <path class="c" d="M3.22266 45.1709H0V55H9.94995V51.7773H3.22266V45.1709Z" fill="#E08C5A"/>
              <path class="c" d="M51.7773 51.7773H45.05V55H55V45.1709H51.7773V51.7773Z" fill="#E08C5A"/>
            </svg>
            <svg id="svgLine3" visibility="hidden" width="50" height="112" viewBox="0 0 50 112" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
              <path id="line3" stroke="#E08C5A" stroke-width="3" stroke-dasharray="4 4"/>
            </svg>
            <button id="btn" class="btn  my-4 waves-effect eyeBtn3  smoll-button" type="button" data-dismiss="modal">
              Send code
            </button>
          </div>
          <div class="eye4 d-flex justify-content-center align-items-center" @click="drov4">
            <svg class="Svg" width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path id="q3"
                    d="M52.0056 28.346L52.5159 27.5L52.0056 26.6541C51.925 26.5198 49.8438 23.1628 45.8154 19.8059C40.4578 15.3479 34.1333 12.9846 27.5537 12.9846C20.9741 12.9846 14.6362 15.3479 9.25171 19.8059C5.19653 23.1628 3.10181 26.5064 3.00781 26.6541L2.48413 27.5L3.00781 28.346C3.10181 28.4937 5.19653 31.8372 9.25171 35.1807C14.6362 39.6387 20.9741 42.002 27.5537 42.002C34.1467 42.002 40.4578 39.6387 45.8154 35.1807C49.8438 31.8372 51.9116 28.4802 52.0056 28.346ZM43.667 32.7771C38.8464 36.7651 33.4216 38.7793 27.5537 38.7793C21.6858 38.7793 16.2341 36.7517 11.3867 32.7771C8.87573 30.7092 7.17041 28.6279 6.33789 27.5C7.17041 26.3721 8.87573 24.2908 11.3867 22.2229C16.2476 18.2349 21.6858 16.2207 27.5537 16.2207C33.4216 16.2207 38.8464 18.2349 43.667 22.2229C46.1646 24.2908 47.8564 26.3855 48.6755 27.5C47.8564 28.6279 46.1646 30.7227 43.667 32.7771Z"
                    fill="#93959A"/>
              <path id="w3"
                    d="M27.5 17.8186C22.1558 17.8186 17.8186 22.1558 17.8186 27.5C17.8186 32.8442 22.1558 37.1814 27.5 37.1814C32.8442 37.1814 37.1814 32.8442 37.1814 27.5C37.1814 22.1558 32.8442 17.8186 27.5 17.8186ZM27.5 33.9587C23.9416 33.9587 21.0413 31.0583 21.0413 27.5C21.0413 23.9416 23.9416 21.0413 27.5 21.0413C31.0583 21.0413 33.9587 23.9416 33.9587 27.5C33.9587 31.0583 31.0583 33.9587 27.5 33.9587Z"
                    fill="#93959A"/>
              <path class="d" d="M3.22266 3.22266H9.94995V0H0V9.8291H3.22266V3.22266Z" fill="#E08C5A"/>
              <path class="d" d="M45.05 0V3.22266H51.7773V9.8291H55V0H45.05Z" fill="#E08C5A"/>
              <path class="d" d="M3.22266 45.1709H0V55H9.94995V51.7773H3.22266V45.1709Z" fill="#E08C5A"/>
              <path class="d" d="M51.7773 51.7773H45.05V55H55V45.1709H51.7773V51.7773Z" fill="#E08C5A"/>
            </svg>
            <svg id="svgLine4" visibility="hidden" width="50" height="112" viewBox="0 0 50 112" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
              <path id="line4" stroke="#E08C5A" stroke-width="3" stroke-dasharray="4 4"/>
            </svg>
            <button id="btn" class="btn  my-4 waves-effect eyeBtn4  smoll-button" type="button" data-dismiss="modal">
              Send code
            </button>
          </div>
          <div class="eye5 d-flex justify-content-center align-items-center" @click="drov5">
            <svg class="Svg" width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path id="q4"
                    d="M52.0056 28.346L52.5159 27.5L52.0056 26.6541C51.925 26.5198 49.8438 23.1628 45.8154 19.8059C40.4578 15.3479 34.1333 12.9846 27.5537 12.9846C20.9741 12.9846 14.6362 15.3479 9.25171 19.8059C5.19653 23.1628 3.10181 26.5064 3.00781 26.6541L2.48413 27.5L3.00781 28.346C3.10181 28.4937 5.19653 31.8372 9.25171 35.1807C14.6362 39.6387 20.9741 42.002 27.5537 42.002C34.1467 42.002 40.4578 39.6387 45.8154 35.1807C49.8438 31.8372 51.9116 28.4802 52.0056 28.346ZM43.667 32.7771C38.8464 36.7651 33.4216 38.7793 27.5537 38.7793C21.6858 38.7793 16.2341 36.7517 11.3867 32.7771C8.87573 30.7092 7.17041 28.6279 6.33789 27.5C7.17041 26.3721 8.87573 24.2908 11.3867 22.2229C16.2476 18.2349 21.6858 16.2207 27.5537 16.2207C33.4216 16.2207 38.8464 18.2349 43.667 22.2229C46.1646 24.2908 47.8564 26.3855 48.6755 27.5C47.8564 28.6279 46.1646 30.7227 43.667 32.7771Z"
                    fill="#93959A"/>
              <path id="w4"
                    d="M27.5 17.8186C22.1558 17.8186 17.8186 22.1558 17.8186 27.5C17.8186 32.8442 22.1558 37.1814 27.5 37.1814C32.8442 37.1814 37.1814 32.8442 37.1814 27.5C37.1814 22.1558 32.8442 17.8186 27.5 17.8186ZM27.5 33.9587C23.9416 33.9587 21.0413 31.0583 21.0413 27.5C21.0413 23.9416 23.9416 21.0413 27.5 21.0413C31.0583 21.0413 33.9587 23.9416 33.9587 27.5C33.9587 31.0583 31.0583 33.9587 27.5 33.9587Z"
                    fill="#93959A"/>
              <path class="e" d="M3.22266 3.22266H9.94995V0H0V9.8291H3.22266V3.22266Z" fill="#E08C5A"/>
              <path class="e" d="M45.05 0V3.22266H51.7773V9.8291H55V0H45.05Z" fill="#E08C5A"/>
              <path class="e" d="M3.22266 45.1709H0V55H9.94995V51.7773H3.22266V45.1709Z" fill="#E08C5A"/>
              <path class="e" d="M51.7773 51.7773H45.05V55H55V45.1709H51.7773V51.7773Z" fill="#E08C5A"/>
            </svg>
            <svg id="svgLine5" visibility="hidden" width="50" height="112" viewBox="0 0 50 112" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
              <path id="line5" stroke="#E08C5A" stroke-width="3" stroke-dasharray="4 4"/>
            </svg>
            <button id="btn" class="btn  my-4 waves-effect eyeBtn5  smoll-button" type="button" data-dismiss="modal">
              Send code
            </button>
          </div>
          <div class="eye6 d-flex justify-content-center align-items-center" @click="drov6">
            <svg class="Svg" width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path id="q5"
                    d="M52.0056 28.346L52.5159 27.5L52.0056 26.6541C51.925 26.5198 49.8438 23.1628 45.8154 19.8059C40.4578 15.3479 34.1333 12.9846 27.5537 12.9846C20.9741 12.9846 14.6362 15.3479 9.25171 19.8059C5.19653 23.1628 3.10181 26.5064 3.00781 26.6541L2.48413 27.5L3.00781 28.346C3.10181 28.4937 5.19653 31.8372 9.25171 35.1807C14.6362 39.6387 20.9741 42.002 27.5537 42.002C34.1467 42.002 40.4578 39.6387 45.8154 35.1807C49.8438 31.8372 51.9116 28.4802 52.0056 28.346ZM43.667 32.7771C38.8464 36.7651 33.4216 38.7793 27.5537 38.7793C21.6858 38.7793 16.2341 36.7517 11.3867 32.7771C8.87573 30.7092 7.17041 28.6279 6.33789 27.5C7.17041 26.3721 8.87573 24.2908 11.3867 22.2229C16.2476 18.2349 21.6858 16.2207 27.5537 16.2207C33.4216 16.2207 38.8464 18.2349 43.667 22.2229C46.1646 24.2908 47.8564 26.3855 48.6755 27.5C47.8564 28.6279 46.1646 30.7227 43.667 32.7771Z"
                    fill="#93959A"/>
              <path id="w5"
                    d="M27.5 17.8186C22.1558 17.8186 17.8186 22.1558 17.8186 27.5C17.8186 32.8442 22.1558 37.1814 27.5 37.1814C32.8442 37.1814 37.1814 32.8442 37.1814 27.5C37.1814 22.1558 32.8442 17.8186 27.5 17.8186ZM27.5 33.9587C23.9416 33.9587 21.0413 31.0583 21.0413 27.5C21.0413 23.9416 23.9416 21.0413 27.5 21.0413C31.0583 21.0413 33.9587 23.9416 33.9587 27.5C33.9587 31.0583 31.0583 33.9587 27.5 33.9587Z"
                    fill="#93959A"/>
              <path class="f" d="M3.22266 3.22266H9.94995V0H0V9.8291H3.22266V3.22266Z" fill="#E08C5A"/>
              <path class="f" d="M45.05 0V3.22266H51.7773V9.8291H55V0H45.05Z" fill="#E08C5A"/>
              <path class="f" d="M3.22266 45.1709H0V55H9.94995V51.7773H3.22266V45.1709Z" fill="#E08C5A"/>
              <path class="f" d="M51.7773 51.7773H45.05V55H55V45.1709H51.7773V51.7773Z" fill="#E08C5A"/>
            </svg>
            <svg id="svgLine6" visibility="hidden" width="50" height="112" viewBox="0 0 50 112" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
              <path id="line6" stroke="#E08C5A" stroke-width="3" stroke-dasharray="4 4"/>
            </svg>
            <button id="btn" class="btn  my-4 waves-effect eyeBtn6  smoll-button" type="button" data-dismiss="modal">
              Send code
            </button>
          </div>
          <div class="eye7 d-flex justify-content-center align-items-center" @click="drov7">
            <svg class="Svg" width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path id="q6"
                    d="M52.0056 28.346L52.5159 27.5L52.0056 26.6541C51.925 26.5198 49.8438 23.1628 45.8154 19.8059C40.4578 15.3479 34.1333 12.9846 27.5537 12.9846C20.9741 12.9846 14.6362 15.3479 9.25171 19.8059C5.19653 23.1628 3.10181 26.5064 3.00781 26.6541L2.48413 27.5L3.00781 28.346C3.10181 28.4937 5.19653 31.8372 9.25171 35.1807C14.6362 39.6387 20.9741 42.002 27.5537 42.002C34.1467 42.002 40.4578 39.6387 45.8154 35.1807C49.8438 31.8372 51.9116 28.4802 52.0056 28.346ZM43.667 32.7771C38.8464 36.7651 33.4216 38.7793 27.5537 38.7793C21.6858 38.7793 16.2341 36.7517 11.3867 32.7771C8.87573 30.7092 7.17041 28.6279 6.33789 27.5C7.17041 26.3721 8.87573 24.2908 11.3867 22.2229C16.2476 18.2349 21.6858 16.2207 27.5537 16.2207C33.4216 16.2207 38.8464 18.2349 43.667 22.2229C46.1646 24.2908 47.8564 26.3855 48.6755 27.5C47.8564 28.6279 46.1646 30.7227 43.667 32.7771Z"
                    fill="#93959A"/>
              <path id="w6"
                    d="M27.5 17.8186C22.1558 17.8186 17.8186 22.1558 17.8186 27.5C17.8186 32.8442 22.1558 37.1814 27.5 37.1814C32.8442 37.1814 37.1814 32.8442 37.1814 27.5C37.1814 22.1558 32.8442 17.8186 27.5 17.8186ZM27.5 33.9587C23.9416 33.9587 21.0413 31.0583 21.0413 27.5C21.0413 23.9416 23.9416 21.0413 27.5 21.0413C31.0583 21.0413 33.9587 23.9416 33.9587 27.5C33.9587 31.0583 31.0583 33.9587 27.5 33.9587Z"
                    fill="#93959A"/>
              <path class="g" d="M3.22266 3.22266H9.94995V0H0V9.8291H3.22266V3.22266Z" fill="#E08C5A"/>
              <path class="g" d="M45.05 0V3.22266H51.7773V9.8291H55V0H45.05Z" fill="#E08C5A"/>
              <path class="g" d="M3.22266 45.1709H0V55H9.94995V51.7773H3.22266V45.1709Z" fill="#E08C5A"/>
              <path class="g" d="M51.7773 51.7773H45.05V55H55V45.1709H51.7773V51.7773Z" fill="#E08C5A"/>
            </svg>
            <svg id="svgLine7" visibility="hidden" width="50" height="112" viewBox="0 0 50 112" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
              <path id="line7" stroke="#E08C5A" stroke-width="3" stroke-dasharray="4 4"/>
            </svg>
            <button id="btn" class="btn  my-4 waves-effect eyeBtn  smoll-button" type="button" data-dismiss="modal">
              Dining Room
            </button>
          </div>
        </div >
      </div>
    </div>
    <div class="row mt-tab mobile-secret" :class="{showing: zerofloor}">
      <div class="col">
        <span class="text-grey"><p
          class="text-left fw-300 mb-0" :class="{textstspecial: rom3}">Lobby 19.49 m<sup>2</sup></p></span>
        <span class="text-grey"><p class="text-left fw-300 mb-0"
                                   :class="{textstspecial: rom3}">Wardrobe 4.46 m<sup>2</sup></p></span>
        <span class="text-grey"><p class="text-left fw-300 mb-0"
                                   :class="{textstspecial: rom3}">Technical room 4.28 m<sup>2</sup></p></span>
        <span class="text-grey"><p class="text-left fw-300 mb-0"
                                   :class="{textstspecial: rom3}">Lavatory 1.88 m<sup>2</sup></p></span>
      </div>
      <div class="col">
        <span class="text-grey"><p class="text-left fw-300 mb-0" :class="{textstspecial: rom7}">Dining room 11.14 m<sup>2</sup></p></span>
        <span class="text-grey"><p class="text-left fw-300 mb-0"
                                   :class="{textstspecial: rom7}">Staff kitchen 14.50 m<sup>2</sup></p></span>
        <span class="text-grey"><p class="text-left fw-300 mb-0"
                                   :class="{textstspecial: rom7}">Kitchen 31.96 m<sup>2</sup></p></span>
        <span class="text-grey"><p class="text-left fw-300 mb-0"
                                   :class="{textstspecial: rom4}">Hall 156.45 m<sup>2</sup></p></span>
      </div>
      <div class="col">
        <span class="text-grey"><p class="text-left fw-300 mb-0"
                                   :class="{textstspecial: rom2}">Lobby 29.35 m<sup>2</sup></p></span>
        <span class="text-grey"><p class="text-left fw-300 mb-0"
                                   :class="{textstspecial: rom2}">Office 27.95 m<sup>2</sup></p></span>
        <span class="text-grey"><p class="text-left fw-300 mb-0" :class="{textstspecial: rom2}">Utility room 6.09 m<sup>2</sup></p></span>
        <span class="text-grey"><p class="text-left fw-300 mb-0"
                                   :class="{textstspecial: rom2}">Lavatory 2.38 m2</p></span>
      </div>
      <div class="col">
        <span class="text-grey"><p class="text-left fw-300 mb-0"
                                   :class="{textstspecial: rom6}">Fireplace room 24.65 m<sup>2</sup></p></span>
        <span class="text-grey"><p class="text-left fw-300 mb-0"
                                   :class="{textstspecial: rom5}">Library 23.32 m<sup>2</sup></p></span>
        <span class="text-grey"><p class="text-left fw-300 mb-0"
                                   :class="{textstspecial: rom5}">Bar 8.26 m<sup>2</sup></p></span>
        <span class="text-grey"><p class="text-left fw-300 mb-0"
                                   :class="{textstspecial: rom4}">Balcony 10.49 m<sup>2</sup></p></span>
      </div>
    </div>
  </section>
</template>

<script>
import { gsap } from 'gsap'

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
        selected: false,
        selectshevrone: true,
        zerofloor: false,
        floor: [{ '0': '../statics/First_floor.svg', '1': '../statics/ground_floor.svg' }],
        getfloor: '../statics/First_floor.svg',
        chertej: [{ '0': '../statics/Chert22.jpg', '1': '../statics/scema_0floor .svg' }],
        getchertej: '../statics/Chert22.jpg'
      }
    },
    methods: {
      selectnav: function (num) {
          this.selected = true
        console.log(this.floor)
              this.getfloor = this.floor[0][num]
              this.getchertej = this.chertej[0][num]
        this.selectshevrone = true
        if(num === '1') {
          this.zerofloor = !this.zerofloor
        } else if(num === '0'){
          this.zerofloor = false
        }
      },
      drowDisable: function () {
        var tab = gsap
        tab.set('#q, #w, #q1, #w1, #q2, #w2, #q3, #w3, #q4, #w4, #q5, #w5, #q6, #w6', {fill: '93959A'})
        tab.set('.a, .b, .c, .d, .e, .f, .g', { visibility: 'hidden' })
        tab.set('#line1, #line2, #line3, #line4, #line5, #line6, #line7', {attr: {d: 'M2.38086 0 0'}})
      },
      drov1: function () {
        this.rom1 = false
        this.rom2 = false
        this.rom3 = false
        this.rom4 = true
        this.rom5 = false
        this.rom6 = false
        this.rom7 = false
        this.drowDisable()
        let p = new Promise((resolve, reject) => {
          var tab = gsap.timeline({})
          tab.from('.a', {visibility: 'visible'})
          tab.to('.a', {visibility: 'hidden'})
          tab.from('.a', {visibility: 'visible'})
          tab.timeScale(6.2)
          resolve('true')
        })
        p.then(result => {
          var tab = gsap.timeline({})
          tab.to('#q', {delay: 2, fill: 'E08C5A'})
          // tab.to('#line1', {duration: 1, attr: {d: 'L4.6188 110.994 M2.38086 0 0'}})
          // tab.to('#w', {opacity: '0.1'})
          tab.to('#w', {delay: 2, fill: 'E08C5A'})
          // tab.from('#w', {opacity: '0.9'})
          tab.timeScale(5.2)
        })
      },
      drov2: function () {
        this.rom1 = false,
          this.rom2 = true,
          this.rom3 = false,
          this.rom4 = false,
          this.rom5 = false,
          this.rom6 = false
        this.rom7 = false
        this.drowDisable()
        let p = new Promise((resolve, reject) => {
          var tab = gsap.timeline({})
          tab.from('.b', {visibility: 'visible'})
          tab.to('.b', {visibility: 'hidden'})
          tab.from('.b', {visibility: 'visible'})
          tab.timeScale(6.2)
          resolve('true')
        })
        p.then(result => {
          var tab = gsap.timeline({})
          tab.to('#q1', {delay: 2, fill: 'E08C5A'})
          // tab.to('#line2', {duration: 1, attr: {d: 'M44.38086 1.00562L47.6188 110.994'}})
          // tab.to('#w1', {opacity: '0.1'})
          tab.to('#w1', {delay: 2, fill: 'E08C5A'})
          // tab.from('#w1', {opacity: '1'})
          tab.timeScale(5.2)
        })
      },
      drov3: function () {
        this.rom1 = false,
          this.rom2 = false,
          this.rom3 = true,
          this.rom4 = false,
          this.rom5 = false,
          this.rom6 = false
        this.rom7 = false
        this.drowDisable()
        let p = new Promise((resolve, reject) => {
          var tab = gsap.timeline({})
          tab.from('.c', {visibility: 'visible'})
          tab.to('.c', {visibility: 'hidden'})
          tab.from('.c', {visibility: 'visible'})
          tab.timeScale(6.2)
          resolve('true')
        })
        p.then(result => {
          var tab = gsap.timeline({})
          tab.to('#q2', {delay: 2, fill: 'E08C5A'})
          // tab.to('#line3', {duration: 1, visibility: 'visible', attr: {d: 'M50.38086 100.00562L1.6188 1.994'}})
          // tab.to('#w2', {opacity: '0.1'})
          tab.to('#w2', {delay: 2, fill: 'E08C5A'})
          // tab.from('#w2', {opacity: '1'})
          tab.timeScale(5.2)
        })
      },
      drov4: function () {
        this.rom1 = false,
          this.rom2 = false,
          this.rom3 = false,
          this.rom4 = true,
          this.rom5 = false,
          this.rom6 = false
        this.rom7 = false
        this.drowDisable()
        let p = new Promise((resolve, reject) => {
          var tab = gsap.timeline({})
          tab.from('.d', {visibility: 'visible'})
          tab.to('.d', {visibility: 'hidden'})
          tab.from('.d', {visibility: 'visible'})
          tab.timeScale(6.2)
          resolve('true')
        })
        p.then(result => {
          var tab = gsap.timeline({})
          tab.to('#q3', {delay: 2, fill: 'E08C5A'})
          // tab.to('#line4', {duration: 1, attr: {d: 'M2.38086 110.00562L47.6188 1.994'}})
          // tab.to('#w3', {opacity: '0.1'})
          tab.to('#w3', {delay: 2, fill: 'E08C5A'})
          // tab.from('#w3', {opacity: '1'})
          tab.timeScale(5.2)
        })
      },
      drov5: function () {
        this.rom1 = false,
          this.rom2 = false,
          this.rom3 = false,
          this.rom4 = false,
          this.rom5 = true,
          this.rom6 = false
        this.rom7 = false
        console.log("5")
        this.drowDisable()
        let p = new Promise((resolve, reject) => {
          var tab = gsap.timeline({})
          tab.from('.e', {visibility: 'visible'})
          tab.to('.e', {visibility: 'hidden'})
          tab.from('.e', {visibility: 'visible'})
          tab.timeScale(6.2)
          resolve('true')
        })
        p.then(result => {
          var tab = gsap.timeline({})
          tab.to('#q4', {delay: 2, fill: 'E08C5A'})
          // tab.to('#line5', {duration: 1, attr: {d: 'M2.38086 1.00562L47.6188 110.994'}})
          // tab.to('#w4', {opacity: '0.1'})
          tab.to('#w4', {delay: 2, fill: 'E08C5A'})
          // tab.from('#w4', {opacity: '1'})
          tab.timeScale(5.2)
        })
      },
      drov6: function () {
        this.rom1 = false,
          this.rom2 = false,
          this.rom3 = false,
          this.rom4 = false,
          this.rom5 = false,
          this.rom6 = true
        this.rom7 = false
        this.drowDisable()
        let p = new Promise((resolve, reject) => {
          var tab = gsap.timeline({})
          tab.from('.f', {visibility: 'visible'})
          tab.to('.f', {visibility: 'hidden'})
          tab.from('.f', {visibility: 'visible'})
          tab.timeScale(6.2)
          resolve('true')
        })
        p.then(result => {
          var tab = gsap.timeline({})
          tab.to('#q5', {delay: 2, fill: 'E08C5A'})
          // tab.to('#line6', {duration: 1, attr: {d: 'M47.38086 1.00562L2.6188 110.994'}})
          // tab.to('#w5', {opacity: '0.1'})
          tab.to('#w5', {delay: 2, fill: 'E08C5A'})
          // tab.from('#w5', {opacity: '1'})
          tab.timeScale(5.2)
        })
      },
      drov7: function () {
        this.rom1 = false,
          this.rom2 = false,
          this.rom3 = false,
          this.rom4 = false,
          this.rom5 = false,
          this.rom6 = false,
          this.rom7 = true
        console.log("7")
        this.drowDisable()
        let p = new Promise((resolve, reject) => {
          var tab = gsap.timeline({})
          tab.from('.g', {visibility: 'visible'})
          tab.to('.g', {visibility: 'hidden'})
          tab.from('.g', {visibility: 'visible'})
          tab.timeScale(6.2)
          resolve('true')
        })
        p.then(result => {
          var tab = gsap.timeline({})
          tab.to('#q6', {delay: 2, fill: 'E08C5A'})
          // tab.to('#line7', {duration: 1, attr: {d: 'M2.38086 110.00562L47.6188 1.994'}})
          // tab.to('#w6', {opacity: '0.1'})
          tab.to('#w6', {delay: 2, fill: 'E08C5A'})
          // tab.from('#w6', {opacity: '1'})
          tab.timeScale(5.2)
        })
      }
    }
  }
</script>
<style scoped>
  .FF {
    margin-top: 4.6rem;
    position: absolute;
    left: 20%;
  }
  .navfloor {
    background-color: #2E2E30;
    position: absolute;
    left: 24%;
    margin-top: 8%;
    z-index: 10000;
    padding: 20px;
    width: 40vh;
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

  .Svg {
    min-width: 3vh;
    max-width: 7vh;
  }

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
    height: 26vh;
    width: 25vh;
  }

  .eye2, .eye3, .eye5, .eye6, .eye7 {
    height: 10vh;
  }

  .eye7, .eye3 {
    width: 29vh;
  }

  .eye2 {
    width: 19vh;
  }

  .eye5 {
    width: 15vh;
  }

  .eye6 {
    width: 12vh;
  }

  @media (max-width: 1196px) {
    .FF {
      margin-top: 0.6rem;
      position: absolute;
      left: 20%;
    }
    .eye1, .eye4 {
      height: 20vh;
      width: 19vh;
    }

    .eye2, .eye3, .eye5, .eye6, .eye7 {
      height: 10vh;
    }

    .eye7, .eye3 {
      width: 27vh;
    }

    .eye2 {
      width: 18vh;
    }

    .eye5 {
      width: 11vh;
    }

    .eye6 {
      width: 10vh;
    }
  }

  @media (max-width: 990px) {

    .eye1, .eye4 {
      height: 16vh;
      width: 16vh;
    }

    .eye2, .eye3, .eye5, .eye6, .eye7 {
      height: 7vh;
    }

    .eye7, .eye3 {
      width: 18vh;
    }

    .eye2 {
      width: 11vh;
    }

    .eye5 {
      width: 9vh;
    }

    .eye6 {
      width: 9vh;
    }
  }

  @media (max-width: 766px) {
    .wrapper {
      padding-top: 11%;
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
      height: 12vh;
      width: 11vh;
    }

    .eye2, .eye3, .eye5, .eye6, .eye7 {
      height: 8vh;
    }

    .eye7, .eye3 {
      width: 13vh;
    }

    .eye2 {
      width: 10vh;
    }

    .eye5 {
      width: 7vh;
    }

    .eye6 {
      width: 6vh;
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
    display: none;
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

  @media (max-width: 702px) {
    .Ffloor {
      height: 100%;
      width: 70%;
    }

    .FF {
      margin-top: 3%;
      position: absolute;
      left: 9%;
    }

    .Rotator {
      display: none;
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

  @media (max-width: 600px) {
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
      padding-top: 33%;
      display: block;
    }

    .mobile-secret {
      display: none;
    }
  }
  .showing{
    display: none;
  }
  .fixfloor{
    width: 100vh;
  }
</style>
