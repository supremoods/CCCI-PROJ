<template>
  <div>
    <main-menu/>
    <enter-username/>
    <encircle-difficulty/>
    <count-down/>
    <questions/>
  </div>
</template>

<script>
  import MainMenu from '~/components/MainMenu'
  import EnterUsername from '~/components/EnterUsername'
  import EncircleDifficulty from '~/components/EncircleDifficulty'
  import CountDown from '~/components/CountDown'
  import Questions from '~/components/Questions'
    
  export default {
      components: {
        // ...
        MainMenu,
        EnterUsername,
        EncircleDifficulty,
        CountDown,
        Questions
      },
      data() {
        return {
          // ...
        }
      },
      methods: {
        // ...
      },
      mounted() {
        // ...
      }
  }
</script>
