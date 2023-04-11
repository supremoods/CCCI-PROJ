<template>
   <div class="summary bg-base-violet flex flex-col relative">
      <div class="flex flex-col fixed right-0 m-11 gap-15" style="gap: 10px;">
         <div class="flex help-icon bg-base-violet-light rounded-full p-2">
           <i class="bx bx-question-mark text-3xl font-bold text-base-aqua"></i>
         </div> 
         <div class="flex exit-icon bg-base-red rounded-full p-2" @click="backToMainMenu">
            <i class="bx bx-exit text-3xl font-bold text-slate-100"></i>
         </div>
      </div>
      <div class="wrapper h-full flex flex-col gap-10 items-center">
         <div class="flex header-title justify-center">
            <h1 class="text-4xl text-base-aqua font-bold">Quiz Summary</h1>
         </div>
         <div class="sub-header w-8/12 flex justify-between  border-b border-base-blue p-2">
            <div class="flex username items-end">
               <h1 class="text-3xl text-base-blue font-bold">Supremood</h1>
            </div>
            <div class="flex flex-col">
               <div class="points">
                  <h1 class="text-xl text-base-blue">Points: <span class="font-bold">15230</span></h1>
               </div>
               <div class="score">
                  <h1 class="text-xl text-base-blue">Score: <span class="font-bold">10/10</span></h1>
               </div>
               <div class="difficulty">
                  <h1 class="text-xl text-base-blue">Difficulty: <span class="font-bold">Intermediate</span></h1>
               </div>
            </div>
         </div>
         <div class="summmary-content flex w-8/12">
            <div class="summary-wrapper flex flex-col w-full gap-5">
               <div class="item">
                  <div class="item-question">
                     <h1 class="text-2xl text-base-blue">1. What is the process of inserting an element in a stack?</h1>
                  </div>
                  <div class="item-choices p-4">
                     <h1 class="text-2xl text-base-blue">Create</h1>
                     <h1 class="text-2xl font-bold text-base-aqua">Push</h1>
                     <h1 class="text-2xl text-base-blue">Evaluation</h1>
                     <h1 class="text-2xl text-base-blue">Pop</h1>
                  </div> 
                  <div class="item-answer p-4">
                     <h1 class="text-2xl text-base-blue">Answer: <span class="font-bold text-base-aqua">Push</span></h1>
                  </div>
                  <div class="item-explanation p-3">
                     <h1 class="text-xl text-base-blue">The Push operation allows users to insert elements in the stack. If the stack is filled completely and trying to perform push operation, stack-overflow can happen.</h1>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>

<script>
   export default{
      methods:{
         backToMainMenu(){
            this.$emit('back', true)
         },
      }
   }
</script>
