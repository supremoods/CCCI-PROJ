<template>
  <div>
    <main-menu  
      @showPanel="showMainMenu" 
      :isShow="isMainMenu"
      @getPenColor="color"
      @getPenThickness="thickness"
    />

    <enter-username  
      @back="backEnterUsername" 
      @next="nextEnterUsername" 
      :isShow="isEnterUsername"
      :penThickness="penThickness"
      :penColor="penColor"
    />

    <encircle-difficulty 
      @back="backEncircleDifficulty"
      @next="nextEncircleDifficulty"
      :isShow="isEncircleDifficulty"
      :penThickness="penThickness"
      :penColor="penColor"
    />

    <count-down 
      :isShow="isCountDown"
      @next="nextQuestions"
    />

    <questions 
      :isShow="isQuestions"
      @back="backToMainMenu"
    />

  </div>
</template>

<script>
  import MainMenu from '~/components/MainMenu'
  import EnterUsername from '~/components/EnterUsername'
  import EncircleDifficulty from '~/components/EncircleDifficulty'
  import CountDown from '~/components/CountDown'
  import Questions from '~/components/Questions'
    
  export default {
      data() {
        return {
          isMainMenu: true,
          isEnterUsername: false,
          isEncircleDifficulty: false,
          isCountDown: false,
          isQuestions: false,
          penColor: '',
          penThickness: 0
        }
      },
      components: {
        MainMenu,
        EnterUsername,
        EncircleDifficulty,
        CountDown,
        Questions
      },
      methods: {
        showMainMenu(isStart){
          if(isStart){
            this.isMainMenu = false
            this.isEnterUsername = true
          }
        },
        backEnterUsername(isBack){
          if(isBack){
            this.isEnterUsername = false
            this.isMainMenu = true
          }
        },
        nextEnterUsername(isNext){
          if(isNext){
            this.isEnterUsername = false
            this.isEncircleDifficulty = true
          }
        },
        backEncircleDifficulty(isBack){
          if(isBack){
            this.isEncircleDifficulty = false
            this.isEnterUsername = true
          }
        },
        nextEncircleDifficulty(isNext){
          if(isNext){
            this.isEncircleDifficulty = false
            this.isCountDown = true
          }
        },
        nextQuestions(isNext){
          if(isNext){
            this.isCountDown = false
            this.isQuestions = true
          }
        },
        backToMainMenu(isBack){
          if(isBack){
            this.isQuestions = false
            this.isMainMenu = true
          }
        },
        color(color){
          this.penColor = color;
          this.$emit('getPenColor', this.penColor)
        },
        thickness(thickness){
          this.penThickness = thickness;
          this.$emit('getPenThickness', this.penThickness)
        }
      },
  }
</script>
