<template>
  <q-layout view="lHh Lpr lFf">
    <header>
<Main></Main>

    </header>
    <first-section></first-section>
<second-section></second-section>
    <therdte-section></therdte-section>
    <forth-section></forth-section>
    <fifth-section></fifth-section>
    <SixeSection></SixeSection>
    <Footer></Footer>
    <q-page-container>
<!--      <router-view />-->
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'MyLayout',

  data () {
    return {
      leftDrawerOpen: false
    }
  }
}
</script>
