<template>
   <div class="summary flex flex-col relative " :class="{'isShow': isShow}">
      <div class="flex flex-col fixed right-0 m-11 gap-15" style="gap: 10px;">
         <div class="flex help-icon bg-base-violet-light rounded-full p-2">
           <i class="bx bx-question-mark text-3xl font-bold text-base-aqua"></i>
         </div> 
         <div class="flex exit-icon bg-base-red rounded-full p-2" @click="backToMainMenu">
            <i class="bx bx-exit text-3xl font-bold text-slate-100"></i>
         </div>
      </div>
      <div class="wrapper h-full flex flex-col gap-10 items-center p-10">
         <div class="flex header-title justify-center">
            <h1 class="text-4xl text-base-aqua font-bold">Quiz Summary</h1>
         </div>
         <div class="sub-header w-8/12 flex justify-between  border-b border-base-blue p-2">
            <div class="flex username items-end">
               <h1 class="text-3xl text-base-blue font-bold">{{ username }}</h1>
            </div>
            <div class="flex flex-col">
               <div class="points">
                  <h1 class="text-xl text-base-blue">Points: <span class="font-bold">{{ points }}</span></h1>
               </div>
               <div class="score">
                  <h1 class="text-xl text-base-blue">Score: <span class="font-bold">{{ correct_answers }}/{{ items.length }}</span></h1>
               </div>
               <div class="difficulty">
                  <h1 class="text-xl text-base-blue">Difficulty: <span class="font-bold">{{ difficulty }}</span></h1>
               </div>
            </div>
         </div>
         <div class="summmary-content flex w-8/12">
            <div  class="summary-wrapper flex flex-col w-full gap-5">
               <div v-for="(item, index) in items" :key="index" class="item" >
                  <div class="item-question">
                     <h1 class="text-2xl text-base-blue">
                        <i v-if="answers[index] === item.answer" class='bx bx-check text-base-green'></i>
                        <i v-else class='bx bx-x text-base-red' ></i> {{ index+1 }}. {{ item.question }}</h1>
                  </div>
                  <div v-for="(option, i) in item.choices" :key="i" class="item-choices p-4">
                     <h1 class="summary-opt text-2xl  text-base-blue" :class="{'isCorrect' : (option === answers[index] && answers[index] === item.answer), 'isWrong' : (option === answers[index] && answers[index] !== item.answer)}">{{ option }}</h1>
                  </div> 
                  <div class="item-answer p-4">
                     <h1 class="text-2xl text-base-blue">Answer: <span class="font-bold text-base-aqua">{{ item.answer }}</span></h1>
                  </div>
                  <div class="item-explanation p-3">
                     <h1 class="text-xl text-base-blue">{{ item.explanation }}</h1>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>

<script>
   import {mapState} from 'vuex'
   const QuizRanking = require('~/static/QuizRanking.json')


   export default{
      props: {
         isShow: {
            type: Boolean,
            default: false
         },
         answers: {
            type: Array,
            default: []
         },
         items: {
            type: Array,
            default: []
         }
      },
      computed: {
         ...mapState(['username', 'points', 'correct_answers', 'difficulty', 'accuracy']),
      },
      methods:{
         async pushQuizRanking(){
            // // push to QuizRanking
            // const data = {
            //    username: this.username,
            //    points: this.points,
            //    correct_answers: this.correct_answers,
            //    difficulty: this.difficulty,
            //    accuracy: this.accuracy
            // }

            // await QuizRanking.push(data)

            // // save to local storage
            // localStorage.setItem('QuizRanking', JSON.stringify(QuizRanking))




         },
         backToMainMenu(){
            this.$emit('back', true)
         },
      },
      watch:{
         items (val) {
            console.log(val)
         }
      }
   }
</script>
