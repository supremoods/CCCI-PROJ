<template>
  <div class="bg-base-violet">

    <!-- <score-board
      :isShow="isScoreBoard"
    /> -->

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
      :penThickness="penThickness"
      :penColor="penColor"
      @back="backToMainMenu"
      @next="nextQuizSummary"
    />

    <quiz-summary 
      :isShow="isSummary"
      :answers="answers"
      :items="items"
      @back="backToMainMenuQS"
    />
  </div>
</template>

<script>
  import MainMenu from '~/components/MainMenu'
  import EnterUsername from '~/components/EnterUsername'
  import EncircleDifficulty from '~/components/EncircleDifficulty'
  import CountDown from '~/components/CountDown'
  import Questions from '~/components/Questions'
  import QuizSummary from '~/components/QuizSummary'
  import ScoreBoard from '~/components/ScoreBoard'

  export default {
      data() {
        return {
          isMainMenu: true,
          isEnterUsername: false,
          isEncircleDifficulty: false,
          isCountDown: false,
          isQuestions: false,
          isSummary: false,
          isScoreBoard: false,
          penColor: '',
          penThickness: 0,
          answers: [],
          items:[]
        }
      }
      ,
      components: {
        MainMenu,
        EnterUsername,
        EncircleDifficulty,
        CountDown,
        Questions,
        QuizSummary,
        ScoreBoard
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
        nextQuizSummary(data){
          if(data.isNext){
            this.isQuestions = false
            this.isSummary = true
            this.answers = data.answers
            this.items = data.items
          }
        },
        backToMainMenu(isBack){
          if(isBack){
            this.isQuestions = false
            this.isMainMenu = true
          }
        },
        backToMainMenuQS(isBack){
          if(isBack){
            this.isSummary = false
            this.isMainMenu = true
          }
        },
        color(color){
          this.penColor = color;
        },
        thickness(thickness){
          this.penThickness = thickness;
        }
      }
  }
</script>
