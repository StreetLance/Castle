// import something here
import Main from '../components/Main'
import ForthSection from '../components/ForthSection'
import SecondSection from '../components/SecondSection'
import therdteSection from '../components/therdteSection'
import FirstSection from '../components/FirstSection'
import FifthSection from '../components/FifthSection'
import SixeSection from '../components/SixSection'
import Footer from '../components/FoterComponent'
import Vue from 'vue'

Vue.component('Main', Main)
Vue.component('FirstSection', FirstSection )
Vue.component('SecondSection', SecondSection )
Vue.component('ForthSection', ForthSection )
Vue.component('therdteSection', therdteSection )
Vue.component('FifthSection', FifthSection )
Vue.component('SixeSection', SixeSection )
Vue.component('Footer', Footer )

// "async" is optional
// export default async ({ /* app, router, Vue, ... */ }) => {
//   // something to do
// }
