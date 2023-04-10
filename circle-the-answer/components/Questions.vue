<template>
   <div class="questions bg-base-violet flex flex-col relative" :class="{'isShow':isShow}">
      <div class="flex help-icon bg-base-violet-light p-2 absolute right-0 rounded-full m-11">
         <i class='bx bx-question-mark text-lg font-bold text-base-aqua'></i>
      </div>
      <div  class="wrapper h-full flex flex-col gap-10">
         <div class="progress-timer bg-base-violet-light w-full h-4">
            <div ref="progress-bar" class="progress w-full h-full" :class="bgColor"></div>
         </div>
         <div class="flex px-24 py-16 justify-between">
            <div class="flex flex-col">
               <div class="stats">Question: <span>{{counterQuestion+1}}/{{beginnerQuestionsCount}}</span></div>
               <div class="stats">Correct Answer: <span>{{ correctAnswer }}</span></div>
               <div class="stats">Points: <span>{{points}}</span></div>
               <div class="stats">Multiplier: <span>x{{multiplier}}</span></div>
            </div>
            <div class="flex">
               <div class="stats">Difficulty: <span>{{difficulty}}</span></div>
            </div>
         </div>
         <div class="flex px-24 justify-center">
            <p class="text-base-aqua text-3xl">
               {{questions[counterQuestion].question}}
            </p>
         </div>
         <div class="flex px-24 justify-center items-center">
            <!-- <canvas-choices :choices="questions[counterQuestion].choices" /> -->
         </div>
      </div>
   </div>
</template>

<script>
   const questionaire = require('~/assets/questionaire/questions.json')

   export default{
      props:{
         isShow: {
            type: Boolean,
            default: false
         },
      },
      data() {
         return {
            count: 30,
            bgColor: "bg-base-aqua",
            questionaire: questionaire,
            correctAnswer:0,
            counterQuestion:0,
            points:0,
            multiplier:2,
            isShow: false,
         }
      },
      computed: {
         beginnerQuestionsCount() {
            return questionaire.questions
               .filter(q => q.category === 'beginner')
               .reduce((total, q) => total + q.items.length, 0)
         },
         intermediateQuestionsCount() {
            return questionaire.questions
               .filter(q => q.category === 'intermediate')
               .reduce((total, q) => total + q.items.length, 0)
         },
         advancedQuestionsCount() {
            return questionaire.questions
               .filter(q => q.category === 'advanced')
               .reduce((total, q) => total + q.items.length, 0)
         },
         difficulty() {
            return questionaire.questions.find(
               q => q.category === "beginner" 
            ).category
         },
         questions() {
            return questionaire.questions.find(
               q => q.category === "beginner" 
            ).items
         },

      },
       
      methods: {
         countDown(progress) {
            let count = this.count
            let interval = setInterval(() => {
               count--
               this.count = count
               const percent = (count / 30) * 100
               if(percent < 30) {
                  this.bgColor = "bg-base-red"
               } else if(percent < 60) {
                  this.bgColor = "bg-base-yellow"
               } else {
                  this.bgColor = "bg-base-aqua"
               }
               progress.style.width = `${percent}%`

               if (count == 0) {
                  clearInterval(interval)
               }
            }, 1000)
         }
      },
      watch: {
         isShow() {
            if(this.isShow) {
               const progress = this.$refs['progress-bar']
               this.countDown(progress)
            }
         }
      }
   }
</script>