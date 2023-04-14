<template>
   <div id="main-menu" class="main-menu bg-base-violet flex flex-col relative" :class="{'isShow':isShow}">
      <instructions v-if="counterStep == 0 && isInstruction" 
         class="absolute right-24 top-16"
         @next="nextStep"
         @back="prevStep"
         :counter="counterStep"
      />
      <div class="flex help-icon bg-base-violet-light p-2 absolute right-0 rounded-full m-10" @click="showInstruction">
         <i class='bx bx-question-mark text-lg font-bold text-base-aqua'></i>
      </div>
      <div  class="wrapper h-full flex flex-col justify-center items-center gap-28">
         <div class="title-header">
            <h1 class="title text-6xl font-bold">Stack Quiz</h1>
         </div>
         <div class="flex flex-col w-96">
            <div class="menu-item relative">
               <h1 ref="Start">Start</h1>
               <encircle 
                  @selected="isSelectedStart"
                  @get-selected="start" 
                  :penColor="penColor" 
                  :penThickness="penThickness"
                  :isDraw="isDrawStart"
               />
               <instructions
                  v-if="counterStep == 1 && isInstruction" 
                  class="absolute right-[-14rem] top-[-5em]"
                  @next="nextStep"
                  @back="prevStep"
                  :counter="counterStep"
               />
            </div>
            <div class="menu-item relative">
               <h1 ref="ScoreBoard">Score Board</h1>
               <encircle 
                  @selected="isSelectedScoreBoard"
                  @get-selected="scoreBoard" 
                  :penColor="penColor" 
                  :penThickness="penThickness"
                  :isDraw="isDrawScoreBoard"
               />
               <instructions
                  v-if="counterStep == 2 && isInstruction"
                  class="absolute left-[-14rem] top-[-5em]"
                  @next="nextStep"
                  @back="prevStep"
                  :counter="counterStep"
               />
            </div>   
            <div class="menu-item relative">
               <h1 ref="PenSettings">Pen Settings</h1>
               <encircle  
                  @selected="isSelectedPenSettings"
                  @get-selected="penSettings" 
                  :penColor="penColor" 
                  :penThickness="penThickness"
                  :isDraw="isDrawPenSettings"
               />
               <instructions
                  v-if="counterStep == 3"
                  class="absolute right-[-14rem] top-[-5em]"
                  @next="nextStep"
                  @back="prevStep"
                  :counter="counterStep"
               />
            </div>
         </div>
      </div>
      <pen-settings 
         @getPenColor="color" 
         @getPenThickness="thickness" 
         @closeSettings="penSettingsClose" 
         :isPenSettings="isPenSettings"
      />
   </div>
</template>

<script>
import Encircle from '~/components/canvas/Encircle'
import PenSettings from '~/components/PenSettings'
import Instructions from '~/components/modal/Instructions'

export default {
   props:{
      isShow: {
         type: Boolean,
         default: true
      }
   },
   components:{
      Encircle,
      PenSettings,
      Instructions
   }, 
   data(){
      return{
         isStart: false,
         isScoreBoard: false,
         isPenSettings: false,
         penColor: '#B9E0FF',
         penThickness: 5,
         counterStep: 0,
         isInstruction: false,
         isDrawStart: false,
         isDrawScoreBoard: false,
         isDrawPenSettings: false,
      }
   },
   methods:{
      start(selected){
         if(selected){
            this.isStart = true
            this.$emit('showPanel', this.isStart)
            this.$emit('getPenColor', this.penColor)
            this.$emit('getPenThickness', this.penThickness)
         }else{
            this.isStart = false
            this.$toast.show({
                  type: 'danger',
                  title: 'alert',
                  message: `Please make sure you draw a circle around the word "Start"`,
                  classTimeout: 'bg-base-red'
            })

            this.$emit('showPanel', this.isStart)
         }
      },
      scoreBoard(selected){
         if(selected){
            this.isScoreBoard = true
            this.$emit('showScoreBoard', this.isScoreBoard)
         }else{
            this.$toast.show({
                  type: 'danger',
                  title: 'alert',
                  message: `Please make sure you draw a circle around the word "Score Board"`,
                  classTimeout: 'bg-base-red'
            })
            this.isScoreBoard = false
            this.$emit('showScoreBoard', this.isScoreBoard)
         }
      },
      penSettings(selected){
         if(selected){
            this.isPenSettings = true
         }else{
            this.$toast.show({
                  type: 'danger',
                  title: 'alert',
                  message: `Please make sure you draw a circle around the word "Pen Settings"`,
                  classTimeout: 'bg-base-red'
            })
            this.isPenSettings = false
         }
      },
      penSettingsClose(isClose){
         this.isPenSettings = isClose
      },
      color(color){
         this.penColor = color;
         console.log("main menu: "+this.penColor)
      },
      thickness(thickness){
         this.penThickness = thickness;
      },
      isSelectedStart(selected){
         if(selected){
            this.$refs.Start.style = `color: ${this.penColor};`
         }else{
            this.$refs.Start.style = `color: #B9E0FF`
         }
      },
      isSelectedScoreBoard(selected){
         if(selected){
            this.$refs.ScoreBoard.style = `color: ${this.penColor};`
         }else{
            this.$refs.ScoreBoard.style = `color: #B9E0FF`
         }
      },
      isSelectedPenSettings(selected){
         if(selected){
            this.$refs.PenSettings.style = `color: ${this.penColor};`
         }else{
            this.$refs.PenSettings.style = `color: #B9E0FF`
         }
      },
      nextStep(next){
         console.log(next)
         if(next){
            if (this.counterStep < 4) {
               this.counterStep++
               console.log(this.counterStep)

               if (this.counterStep == 1) {
                  this.isDrawStart = true
                  this.isDrawScoreBoard = false
                  this.isDrawPenSettings = false
               }else if(this.counterStep == 2){
                  this.isDrawStart = false
                  this.isDrawScoreBoard = true
                  this.isDrawPenSettings = false
               }else if(this.counterStep == 3){
                  this.isDrawStart = false
                  this.isDrawScoreBoard = false
                  this.isDrawPenSettings = true
               }else{
                  this.isDrawStart = false
                  this.isDrawScoreBoard = false
                  this.isDrawPenSettings = false

                  this.isInstruction = !this.isInstruction
               }
               console.log(this.isDrawStart)
               console.log(this.isDrawScoreBoard)
               console.log(this.isDrawPenSettings)
            } 
         }
      },
      prevStep(prev){
         if(prev){
            if (this.counterStep > 0) {
               this.counterStep--
            } 
         }
      },
      showInstruction(){
         // toggle isInstruction
         if(this.counterStep >= 1){
            this.counterStep = 0
            this.isInstruction = !this.isInstruction
         }else{
            this.isInstruction = !this.isInstruction
         }
      }
   }
}
</script>

<style>

</style>