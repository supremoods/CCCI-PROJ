<template>
  <landing-page />
</template>

<script>
import LandingPage from '~/components/LandingPage.vue'
  export default {
    components: { 
      LandingPage 
    },
    name: 'IndexPage',
    isSelected(isCircle) {
      console.log(isCircle)
      this.isCircle = isCircle
    }
  }
  
</script>
