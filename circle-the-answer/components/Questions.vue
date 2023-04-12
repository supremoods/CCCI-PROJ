<template>
   <div class="questions bg-base-violet flex flex-col relative" :class="{'isShow':isShow}">
      <div class="flex flex-col fixed right-0 m-11 gap-15" style="gap: 10px;">
         <div class="flex help-icon bg-base-violet-light rounded-full p-2">
           <i class="bx bx-question-mark text-3xl font-bold text-base-aqua"></i>
         </div> 
         <div class="flex exit-icon bg-base-red rounded-full p-2" @click="backToMainMenu">
            <i class="bx bx-exit text-3xl font-bold text-base-aqua"></i>
         </div>
       </div>

      <div  class="wrapper h-full flex flex-col gap-10">
         <div class="progress-timer bg-base-violet-light w-full h-4">
            <div ref="progress-bar" class="progress w-full h-full" :class="bgColor"></div>
         </div>
         <div v-if="isShow" class="quiz-container flex flex-col w-full items-center">
            <div class="quiz-details flex w-8/12 justify-between">
               <div class="flex flex-col">
                  <div class="stats">Username: <span> {{ username }} </span></div>
                  <div class="stats">Correct Answer: <span> {{ correctAnswer }} </span></div>
                  <div class="stats">Points: <span> {{ points }} </span></div>
                  <div class="stats">Multiplier: <span> x{{ multiplier }}</span></div>
               </div>
               <div class="flex flex-col">
                  <div class="stats">Difficulty: <span>{{ difficulty }}</span></div>
                  <div class="stats">Question: <span>{{ counterQuestion + 1 }} /  {{ getQuestions.length }}</span></div>
               </div>
            </div>
            <div class="flex w-8/12 justify-center">
               <p class="question text-base-aqua text-3xl">
                  {{  getQuestions[counterQuestion].question }}
               </p>
            </div>
            <div class="choices grid grid-cols-2 w-8/12 justify-between mt-20">
               <div class="opt">
                  <h1 ref="optA" class="opt-label">{{getQuestions[counterQuestion].choices[0]}}</h1>
                  <encircle 
                     @selected="isSelectedA"
                     @get-selected="optA"
                     :penColor="penColor" 
                     :penThickness="penThickness"
                  />
               </div>
               <div class="opt">
                  <h1 ref="optB" class="opt-label">{{getQuestions[counterQuestion].choices[1]}}</h1>
                  <encircle 
                     @selected="isSelectedB"
                     @get-selected="optB"
                     :penColor="penColor" 
                     :penThickness="penThickness"
                  />
               </div>
               <div class="opt">
                  <h1 ref="optC" class="opt-label">{{getQuestions[counterQuestion].choices[2]}}</h1>
                  <encircle 
                     @selected="isSelectedC"
                     @get-selected="optC"
                     :penColor="penColor" 
                     :penThickness="penThickness"
                  />
               </div>
               <div class="opt">
                  <h1 ref="optD" class="opt-label">{{getQuestions[counterQuestion].choices[3]}}</h1>
                  <encircle 
                     @selected="isSelectedD"
                     @get-selected="optD"
                     :penColor="penColor" 
                     :penThickness="penThickness"
                  />
               </div>
            </div>
         </div>
      </div>
      <correct-answer
         @next="next"
         :answer="answer"
         :isShow="showAnswer"
         :isWrong="isWrong"
         :penColor="penColor"
         :penThickness="penThickness"
      />
   </div>
</template>

<script>
   import {mapState} from 'vuex'
   const questions = require('~/assets/questionaire/questions.json')
   import Encircle from '~/components/canvas/Encircle'

   export default{
      components:{
         Encircle
      }, 
      props:{
         isShow: {
            type: Boolean,
            default: false
         },
         penColor: {
          type: String,
          default: '#8D72E1'
         },
         penThickness: {
            type: Number,
            default: 5
         }
      },
      data() {
         return {
            count: 30,
            bgColor: "bg-base-aqua",
            questions,
            correctAnswer:0,
            counterQuestion:0,
            points:0,
            multiplier:2,
            items: [],
            showAnswer: false,
            isWrong: false,
            answer: {},
            answers:[],
            isStreak: false
         }
      },
      computed: {
         ...mapState(['difficulty', 'username']),
         getQuestions(){
            this.items = this.questions.questions.find(
               q => q.category === this.difficulty 
            ).items

            return this.items
         }
      },
      methods: {
         countDown(progress) {
             this.interval = setInterval(() => {
               this.count--
               const percent = (this.count / 30) * 100
               progress.style.width = `${percent}%`
               this.bgColor = percent < 30 ? 'bg-base-red' : percent < 60 ? 'bg-base-yellow' : 'bg-base-aqua'
               if (this.count === 0) {
                  clearInterval(this.interval)
                  
                  this.$toast.show({
                     type: 'danger',
                     title: 'alert',
                     message: `times up`,
                     classTimeout: 'bg-base-red'
                  })

                  this.isWrong = true
                  this.showAnswer = true
               }
            }, 1000)
         },
         optA(selected){
            if(selected){
               if(this.items[this.counterQuestion].choices[0] === this.items[this.counterQuestion].answer){

                  this.$refs.optA.style = `color: #00C48C`
                  this.$refs.optB.style = `color: #8D9EFF`
                  this.$refs.optC.style = `color: #8D9EFF`
                  this.$refs.optD.style = `color: #8D9EFF`

                  this.correctAnswer++

                  this.isWrong = false
                  this.showAnswer = true

                  this.answers.push(this.items[this.counterQuestion].choices[0])

                  clearInterval(this.interval)

               }else{


                  this.$refs.optA.style = `color: #FF5656`
                  this.$refs.optB.style = `color: #8D9EFF`
                  this.$refs.optC.style = `color: #8D9EFF`
                  this.$refs.optD.style = `color: #8D9EFF`
                  
                  this.isWrong = true
                  this.showAnswer = true

                  this.answers.push(this.items[this.counterQuestion].choices[0])

                  clearInterval(this.interval)
               }
               this.addPoints()
            }
         },
         optB(selected){
            if(selected){
               if(this.items[this.counterQuestion].choices[1] ===  this.items[this.counterQuestion].answer){

                  this.$refs.optB.style = `color: #FF5656`
                  this.$refs.optA.style = `color: #8D9EFF`
                  this.$refs.optC.style = `color: #8D9EFF`
                  this.$refs.optD.style = `color: #8D9EFF`

                  this.correctAnswer++

                  this.isWrong = false
                  this.showAnswer = true

                  this.answers.push(this.items[this.counterQuestion].choices[1])

                  clearInterval(this.interval)

               }else{
    
                  this.$refs.optB.style = `color: #FF5656`
                  this.$refs.optA.style = `color: #8D9EFF`
                  this.$refs.optC.style = `color: #8D9EFF`
                  this.$refs.optD.style = `color: #8D9EFF`

                  this.isWrong = true
                  this.showAnswer = true

                  this.answers.push(this.items[this.counterQuestion].choices[1])
                  
                  clearInterval(this.interval)

               }
               this.addPoints()
            }
         },
         optC(selected){
            if(selected){
               if(this.items[this.counterQuestion].choices[2] ===  this.items[this.counterQuestion].answer){

                  this.$refs.optC.style = `color: #FF5656`
                  this.$refs.optB.style = `color: #8D9EFF`
                  this.$refs.optA.style = `color: #8D9EFF`
                  this.$refs.optD.style = `color: #8D9EFF`

                  this.correctAnswer++

                  this.isWrong = false
                  this.showAnswer = true

                  this.answers.push(this.items[this.counterQuestion].choices[2])

                  clearInterval(this.interval)

               }else{

                  this.$refs.optC.style = `color: #FF5656`
                  this.$refs.optB.style = `color: #8D9EFF`
                  this.$refs.optA.style = `color: #8D9EFF`
                  this.$refs.optD.style = `color: #8D9EFF`

                  this.isWrong = true
                  this.showAnswer = true

                  this.answers.push(this.items[this.counterQuestion].choices[2])

                  clearInterval(this.interval)

               }
               this.addPoints()
            }
         },
         optD(selected){
            if(selected){
               if(this.items[this.counterQuestion].choices[3] === this.items[this.counterQuestion].answer){

                  this.$refs.optD.style = `color: #FF5656`
                  this.$refs.optB.style = `color: #8D9EFF`
                  this.$refs.optC.style = `color: #8D9EFF`
                  this.$refs.optA.style = `color: #8D9EFF`

                  this.correctAnswer++

                  this.isWrong = false
                  this.showAnswer = true

                  this.answers.push(this.items[this.counterQuestion].choices[3])

                  clearInterval(this.interval)
               }else{

                  this.$refs.optD.style = `color: #FF5656`
                  this.$refs.optB.style = `color: #8D9EFF`
                  this.$refs.optC.style = `color: #8D9EFF`
                  this.$refs.optA.style = `color: #8D9EFF`

                  this.isWrong = true
                  this.showAnswer = true

                  this.answers.push(this.items[this.counterQuestion].choices[3])

                  clearInterval(this.interval)
               }
               this.addPoints()
            }
         },

         isSelectedA(highLight){
            if(highLight){
               this.$refs.optA.style = `color: ${this.penColor}`
            }else{
               this.$refs.optA.style = `color: #8D9EFF`
            }
         },
         isSelectedB(highLight){
            if(highLight){
               this.$refs.optB.style = `color: ${this.penColor}`
            }else{
               this.$refs.optB.style = `color: #8D9EFF`
            }
         },
         isSelectedC(highLight){
            if(highLight){
               this.$refs.optC.style = `color: ${this.penColor}`
            }else{
               this.$refs.optC.style = `color: #8D9EFF`
            }
         },
         isSelectedD(highLight){
            if(highLight){
               this.$refs.optD.style = `color: ${this.penColor}`
            }else{
               this.$refs.optD.style = `color: #8D9EFF`
            }
         },
         next(selected){
            this.counterQuestion++
            if(selected){
               if(this.counterQuestion < this.items.length){
                  const progress = this.$refs['progress-bar']
                  this.reset()
                  this.countDown(progress)
               }else{
                  this.reset()
                  clearInterval(this.interval)
                  this.$store.commit('SET_POINTS', this.points)
                  this.$store.commit('SET_CORRECT_ANSWERS', this.correctAnswer)
                  this.$store.commit('SET_ACCURACY', this.correctAnswer / this.items.length * 100)
                  this.counterQuestion = 0
                  this.multiplier = 2
                  this.correctAnswer = 0
                  this.points = 0
                  this.$emit('next', {isNext:true, answers: this.answers, items: this.items})
               }
            }
         },
         backToMainMenu(){
            this.reset()
            clearInterval(this.interval)
            this.counterQuestion = 0
            this.multiplier = 2
            this.correctAnswer = 0
            this.$store.commit('SET_USERNAME', null)
            this.$emit('back', true)
         },
         reset(){
            this.isWrong = false
            this.showAnswer = false
            this.$refs.optA.style = `color: #8D9EFF`
            this.$refs.optB.style = `color: #8D9EFF`
            this.$refs.optC.style = `color: #8D9EFF`
            this.$refs.optD.style = `color: #8D9EFF`
            this.count = 30;
         },
         addPoints(){

            if(!this.isWrong){
               this.points += this.multiplier * 150

               if(this.multiplier < 8){
                  this.multiplier += 2       
               }

               if(this.multiplier <= 4){
                  this.$toast.show({
                     type:'success',
                     title:'Good job',
                     message: 'Your answer is correct',
                     classTimeout: 'bg-base-green'
                  })
               }else if(this.multiplier >= 6){
                  this.$toast.show({
                     type:'success',
                     title:'Streak points!',
                     message: 'Genius!, your doing great',
                     classTimeout: 'bg-base-green'
                  })
               }
            }else{
               this.$toast.show({
                  type:'danger',
                  title:'Nice try',
                  message: 'Your answer is wrong',
                  classTimeout: 'bg-base-red'
               })

               this.multiplier = 2;
            }
         }
      },
      watch: {
         isShow() {
            if(this.isShow) {
               const progress = this.$refs['progress-bar']
               this.items = []
               this.answer = {}
               this.answers = []
               this.countDown(progress)
            }
         },
         showAnswer(){
            if(this.showAnswer){
               this.answer = this.items[this.counterQuestion]
            }
         }

      }
   }
</script>