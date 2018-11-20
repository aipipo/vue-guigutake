<template>
  <div id="app">
    <router-view />
    <FooterGuide v-show="$route.meta.showFoot"/>
  </div>
</template>

<script>
import FooterGuide from './components/FooterGuide/FooterGuide'
export default {
  mounted () {
    this.$store.dispatch('getAddress')
    this.$store.dispatch('getUserInfo')
  },
    components: {
    FooterGuide
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
  #app
    width 100%
    height 100%
</style>
