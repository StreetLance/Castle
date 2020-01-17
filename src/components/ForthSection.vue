<template>
  <section id="forth-features" class="text-center">
    <div class="container d-flex justify-content-center ">
      <div class="FF" align="left"><img class="Ffloor" src="../statics/First_floor.svg" alt=""></div>
      <img src="../statics/Rotator.svg" alt="" class="Rotator">
      <div id="castle" class="d-flex justify-content-center ">
        <img class="FCflor d-flex align-items-center" src="../statics/Chert22.jpg" alt="">
      </div>
      <div class="eye1" @click="drov1">
        <svg id="H" width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
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
        <svg id="svgLine1" visibility="hidden" vi width="50" height="112" viewBox="0 0 50 112" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path x="10" id="line1" stroke="#E08C5A" stroke-width="3" stroke-dasharray="4 4"/>
        </svg>
        <button  id="btn" class="btn  my-4 waves-effect eyeBtn1  smoll-button" type="button" data-dismiss="modal">Send code</button>
      </div>
      <div class="eye2" @click="drov2">
        <svg width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
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
        <svg id="svgLine2" visibility="hidden" width="70" height="162" viewBox="0 0 50 112" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path id="line2" stroke="#E08C5A" stroke-width="3" stroke-dasharray="4 4"/>
        </svg>
        <button  id="btn" class="btn  my-4 waves-effect eyeBtn2  smoll-button" type="button" data-dismiss="modal">Send code</button>
      </div>
      <div class="eye3" @click="drov3">
        <svg width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
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
        <svg id="svgLine3" visibility="hidden" width="50" height="112" viewBox="0 0 50 112" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path id="line3" stroke="#E08C5A" stroke-width="3" stroke-dasharray="4 4"/>
        </svg>
        <button  id="btn" class="btn  my-4 waves-effect eyeBtn3  smoll-button" type="button" data-dismiss="modal">Send code</button>
      </div>
      <div class="eye4" @click="drov4">
        <svg width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
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
        <svg id="svgLine4" visibility="hidden" width="50" height="112" viewBox="0 0 50 112" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path id="line4" stroke="#E08C5A" stroke-width="3" stroke-dasharray="4 4"/>
        </svg>
        <button  id="btn" class="btn  my-4 waves-effect eyeBtn4  smoll-button" type="button" data-dismiss="modal">Send code</button>
      </div>
      <div class="eye5" @click="drov5">
        <svg width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
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
        <svg id="svgLine5" visibility="hidden" width="50" height="112" viewBox="0 0 50 112" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path id="line5" stroke="#E08C5A" stroke-width="3" stroke-dasharray="4 4"/>
        </svg>
        <button  id="btn" class="btn  my-4 waves-effect eyeBtn5  smoll-button" type="button" data-dismiss="modal">Send code</button>
      </div>
      <div class="eye6" @click="drov6">
        <svg width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
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
        <svg id="svgLine6" visibility="hidden" width="50" height="112" viewBox="0 0 50 112" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path id="line6" stroke="#E08C5A" stroke-width="3" stroke-dasharray="4 4"/>
        </svg>
        <button  id="btn" class="btn  my-4 waves-effect eyeBtn6  smoll-button" type="button" data-dismiss="modal">Send code</button>
      </div>
      <div class="eye7" @click="drov7">
        <svg width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
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
        <svg id="svgLine7" visibility="hidden" width="50" height="112" viewBox="0 0 50 112" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path id="line7" stroke="#E08C5A" stroke-width="3" stroke-dasharray="4 4"/>
        </svg>
        <button  id="btn" class="btn  my-4 waves-effect eyeBtn  smoll-button" type="button" data-dismiss="modal">Dining Room</button>
      </div>
    </div>
    <div class="row mt-tab mobile-secret">
      <div class="col">
        <span class="text-grey" :class="{textstspecial: rom1}"><p
          class="text-left fw-300 mb-0">Lobby 19.49 m<sup>2</sup></p></span>
        <span class="text-grey"><p class="text-left fw-300 mb-0">Wardrobe 4.46 m<sup>2</sup></p></span>
        <span class="text-grey"><p class="text-left fw-300 mb-0">Technical room 4.28 m<sup>2</sup></p></span>
        <span class="text-grey"><p class="text-left fw-300 mb-0">Lavatory 1.88 m<sup>2</sup></p></span>
      </div>
      <div class="col">
        <span class="text-grey"><p class="text-left fw-300 mb-0">Dining room 11.14 m<sup>2</sup></p></span>
        <span class="text-grey"><p class="text-left fw-300 mb-0">Staff kitchen 14.50 m<sup>2</sup></p></span>
        <span class="text-grey"><p class="text-left fw-300 mb-0">Kitchen 31.96 m<sup>2</sup></p></span>
        <span class="text-grey"><p class="text-left fw-300 mb-0">Hall 156.45 m<sup>2</sup></p></span>
      </div>
      <div class="col">
        <span class="text-grey"><p class="text-left fw-300 mb-0">Lobby 29.35 m<sup>2</sup></p></span>
        <span class="text-grey"><p class="text-left fw-300 mb-0">Office 27.95 m<sup>2</sup></p></span>
        <span class="text-grey"><p class="text-left fw-300 mb-0">Utility room 6.09 m<sup>2</sup></p></span>
        <span class="text-grey"><p class="text-left fw-300 mb-0">Lavatory 2.38 m2</p></span>
      </div>
      <div class="col">
        <span class="text-grey"><p class="text-left fw-300 mb-0">Fireplace room 24.65 m<sup>2</sup></p></span>
        <span class="text-grey"><p class="text-left fw-300 mb-0">Library 23.32 m<sup>2</sup></p></span>
        <span class="text-grey"><p class="text-left fw-300 mb-0">Bar 8.26 m<sup>2</sup></p></span>
        <span class="text-grey" :class="{textstspecial: rom1}"><p
          class="text-left fw-300 mb-0">Balcony 10.49 m<sup>2</sup></p></span>
      </div>
    </div>

  </section>
</template>

<script>
  import {gsap} from 'gsap'

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
        rom7: false
      }
    },
    methods: {
      drowDisable: function () {
        var tab = gsap
        tab.set('#q, #w, #q1, #w1, #q2, #w2, #q3, #w3, #q4, #w4, #q5, #w5, #q6, #w6', {fill: '93959A'})
        tab.set('.a, .b, .c, .d, .e, .f, .g', {visibility: 'hidden'})
        tab.set('#line1, #line2, #line3, #line4, #line5, #line6, #line7', {attr: {d: 'M2.38086 0 0'}})
      },
      drov1: function () {
        this.rom1 = true
        this.rom2 = false
        this.rom3 = false
        this.rom4 = false
        this.rom5 = false
        this.rom6 = false
        this.rom7 = false
        console.log("1")
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
          tab.to('#w', {opacity: '0.1'})
          tab.to('#w', {delay: 2, fill: 'E08C5A'})
          tab.from('#w', {opacity: '0.9'})
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
        console.log("2")
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
          tab.to('#w1', {opacity: '0.1'})
          tab.to('#w1', {delay: 2, fill: 'E08C5A'})
          tab.from('#w1', {opacity: '1'})
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
        console.log("3")
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
          tab.to('#w2', {opacity: '0.1'})
          tab.to('#w2', {delay: 2, fill: 'E08C5A'})
          tab.from('#w2', {opacity: '1'})
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
        console.log("4")
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
          tab.to('#w3', {opacity: '0.1'})
          tab.to('#w3', {delay: 2, fill: 'E08C5A'})
          tab.from('#w3', {opacity: '1'})
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
          tab.to('#w4', {opacity: '0.1'})
          tab.to('#w4', {delay: 2, fill: 'E08C5A'})
          tab.from('#w4', {opacity: '1'})
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
        console.log("6")
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
          tab.to('#w5', {opacity: '0.1'})
          tab.to('#w5', {delay: 2, fill: 'E08C5A'})
          tab.from('#w5', {opacity: '1'})
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
          tab.from('#w6', {opacity: '1'})
          tab.timeScale(5.2)
        })
      }
    }
  }
</script>
<style scoped>
  .eyeBtn{ visibility: hidden;
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
    width: 100%;
  }

  .text-grey {
    color: #9e9e9e !important;
  }

  .FCflor {
    padding-top: 13%;
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

  .eye1 {
    height: 15vh;
    width: 15vh;
    position: absolute;
    margin-top: 595px;

  }

  .eye2 {
    height: 15vh;
    width: 15vh;
    position: absolute;
    margin-top: 400px;
  }

  .eye3 {
    height: 15vh;
    width: 15vh;
    position: absolute;
    left: 34%;
    margin-top: 430px;
  }

  .eye4 {
    height: 15vh;
    width: 15vh;
    position: absolute;
    left: 28%;
    margin-top: 620px;
  }

  .eye5 {
    height: 15vh;
    width: 15vh;
    position: absolute;
    left: 36%;
    margin-top: 620px;
  }

  .eye6 {
    height: 15vh;
    width: 15vh;
    position: absolute;
    right: 32%;
    margin-top: 620px;
    /*background-color: rgb(0,0,0,0.7);*/
  }

  .eye7 {
    height: 15vh;
    width: 15vh;
    position: absolute;
    right: 32%;
    margin-top: 451px;
    /*background-color: rgb(0,0,0,0.7);*/
  }

  .FF {
    margin-top: 4.6rem;
    position: absolute;
    left: 20%;
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

  @media (max-width: 1368px) {
    .eye3 {
      height: 15vh;
      width: 15vh;
      position: absolute;
      left: 31%;
      margin-top: 430px;
    }

    .eye4 {
      height: 15vh;
      width: 15vh;
      position: absolute;
      left: 25%;
      margin-top: 620px;
    }

    .eye5 {
      height: 15vh;
      width: 15vh;
      position: absolute;
      left: 34%;
      margin-top: 620px;
    }
  }

  @media (max-width: 1350px) {
    .eye6 {
      height: 15vh;
      width: 15vh;
      position: absolute;
      right: 29%;
      margin-top: 620px;
    }

    .eye7 {
      height: 15vh;
      width: 15vh;
      position: absolute;
      right: 29%;
      margin-top: 451px;

    }
  }

  @media (max-width: 1264px) {
    .eye6 {
      height: 15vh;
      width: 15vh;
      position: absolute;
      right: 27%;
      margin-top: 620px;
    }

    .eye7 {
      height: 15vh;
      width: 15vh;
      position: absolute;
      right: 28%;
      margin-top: 451px;

    }
  }

  @media (max-width: 1199px) {
    .eye1 {
      height: 15vh;
      width: 15vh;
      position: absolute;
      margin-top: 495px;

    }

    .eye2 {
      height: 15vh;
      width: 15vh;
      position: absolute;
      margin-top: 320px;
    }

    .eye3 {
      height: 15vh;
      width: 15vh;
      position: absolute;
      left: 32%;
      margin-top: 355px;
    }

    .eye4 {
      height: 15vh;
      width: 15vh;
      position: absolute;
      left: 300px;
      margin-top: 513px;
    }

    .eye5 {
      height: 15vh;
      width: 15vh;
      position: absolute;
      left: 399px;
      margin-top: 512px;
    }

    .eye6 {
      height: 15vh;
      width: 15vh;
      position: absolute;
      right: 29%;
      margin-top: 510px;
    }

    .eye7 {
      height: 15vh;
      width: 15vh;
      position: absolute;
      right: 29%;
      margin-top: 386px;
    }
  }

  @media (max-width: 1126px) {
    .eye4 {
      height: 15vh;
      width: 15vh;
      position: absolute;
      left: 23%;
      margin-top: 513px;
    }

    .eye5 {
      height: 15vh;
      width: 15vh;
      position: absolute;
      left: 33%;
      margin-top: 512px;
    }
  }

  @media (max-width: 1062px) {
    .eye3 {
      height: 15vh;
      width: 15vh;
      position: absolute;
      left: 29%;
      margin-top: 355px;
    }

    .eye6 {
      height: 15vh;
      width: 15vh;
      position: absolute;
      right: 27%;
      margin-top: 510px;
    }

    .eye7 {
      height: 15vh;
      width: 15vh;
      position: absolute;
      right: 27%;
      margin-top: 386px;
    }
  }

  @media (max-width: 990px) {
    .eye1 {
      height: 15vh;
      width: 15vh;
      position: absolute;
      margin-top: 365px;

    }

    .eye2 {
      height: 15vh;
      width: 15vh;
      position: absolute;
      margin-top: 230px;
    }

    .eye3 {
      height: 15vh;
      width: 15vh;
      position: absolute;
      left: 32%;
      margin-top: 258px;
    }

    .eye4 {
      height: 15vh;
      width: 15vh;
      position: absolute;
      left: 263px;
      margin-top: 369px;
      /*background-color: rgb(0,0,0,0.7);*/
    }

    .eye5 {
      height: 15vh;
      width: 15vh;
      position: absolute;
      left: 322px;
      margin-top: 372px;
      /*background-color: rgb(0,0,0,0.7);*/
    }

    .eye6 {
      height: 15vh;
      width: 15vh;
      position: absolute;
      right: 30%;
      margin-top: 372px;
    }

    .eye7 {
      height: 15vh;
      width: 15vh;
      position: absolute;
      right: 30%;
      margin-top: 276px;
    }
  }

  @media (max-width: 914px) {
    .eye6 {
      height: 15vh;
      width: 15vh;
      position: absolute;
      right: 28%;
      margin-top: 372px;
    }

    .eye7 {
      height: 15vh;
      width: 15vh;
      position: absolute;
      right: 28%;
      margin-top: 276px;
    }
  }

  @media (max-width: 906px) {
    .eye4 {
      height: 15vh;
      width: 15vh;
      position: absolute;
      left: 24%;
      margin-top: 369px;
    }

    .eye5 {
      height: 15vh;
      width: 15vh;
      position: absolute;
      left: 33%;
      margin-top: 372px;
    }
  }

  @media (max-width: 880px) {
    .eye3 {
      height: 15vh;
      width: 15vh;
      position: absolute;
      left: 31%;
      margin-top: 258px;
    }
  }

  @media (max-width: 766px) {
    .eye1 {
      height: 15vh;
      width: 15vh;
      position: absolute;
      margin-top: 265px;

    }

    .eye2 {
      height: 15vh;
      width: 15vh;
      position: absolute;
      margin-top: 160px;
    }

    .eye3 {
      height: 15vh;
      width: 15vh;
      position: absolute;
      left: 30%;
      margin-top: 185px;
    }

    .eye4 {
      height: 15vh;
      width: 15vh;
      position: absolute;
      left: 194px;
      margin-top: 269px;
      /*background-color: rgb(0,0,0,0.7);*/
    }

    .eye5 {
      height: 15vh;
      width: 15vh;
      position: absolute;
      left: 247px;
      margin-top: 267px;
      /*background-color: rgb(0,0,0,0.7);*/
    }

    .eye6 {
      height: 15vh;
      width: 15vh;
      position: absolute;
      right: 28%;
      margin-top: 266px;
    }

    .eye7 {
      height: 15vh;
      width: 15vh;
      position: absolute;
      right: 28%;
      margin-top: 190px;
    }
  }

  @media (max-width: 712px) {
    .eye4 {
      height: 15vh;
      width: 15vh;
      position: absolute;
      left: 24%;
      margin-top: 269px;
    }

    .eye5 {
      height: 15vh;
      width: 15vh;
      position: absolute;
      left: 32%;
      margin-top: 267px;
    }
  }

  @media (max-width: 652px) {
    .eye4 {
      height: 15vh;
      width: 15vh;
      position: absolute;
      left: 21%;
      margin-top: 269px;
    }

    .eye5 {
      height: 15vh;
      width: 15vh;
      position: absolute;
      left: 30%;
      margin-top: 267px;
    }

    .eye6 {
      height: 15vh;
      width: 15vh;
      position: absolute;
      right: 25%;
      margin-top: 266px;
    }

    .eye7 {
      height: 15vh;
      width: 15vh;
      position: absolute;
      right: 25%;
      margin-top: 190px;
    }
  }

  @media (max-width: 702px) {
    .Ffloor {
      height: 100%;
      width: 70%;
    }

    .FCflor {
      padding-top: 13%;
      height: 100%;
      width: 100%;
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
</style>
