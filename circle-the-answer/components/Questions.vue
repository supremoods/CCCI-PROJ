<template>
   <div class="encircle-diff h-screen bg-base-violet flex flex-col relative">
      <div class="flex help-icon bg-base-violet-light p-2 absolute right-0 rounded-full m-11">
         <i class='bx bx-question-mark text-lg font-bold text-base-aqua'></i>
      </div>
      <div  class="wrapper h-full flex flex-col gap-10">
         <div class="progress-timer bg-base-violet-light w-full h-4">
            <div ref="progress-bar" class="progress w-full h-full" :class="bgColor"></div>
         </div>
         <div class="flex px-24 py-16 justify-between">
            <div class="flex flex-col">
               <div class="stats">Question: <span>4/15</span></div>
               <div class="stats">Correct Answer: <span>0</span></div>
               <div class="stats">Points: <span>1530</span></div>
               <div class="stats">Multiplier <span>x2</span></div>
            </div>
            <div class="flex">
               <div class="stats">Difficulty: <span>Intermediate</span></div>
            </div>
         </div>
         <div class="flex px-24">
            <p class="text-base-aqua text-2xl">
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.
            </p>
         </div>
      </div>
   </div>
</template>

<script>
   export default{
      data() {
         return {
            count: 30,
            bgColor: "bg-base-aqua"
         }
      },
      mounted() {
         const progress = this.$refs['progress-bar']

         this.countDown(progress)

      },          
      methods: {
         countDown(progress) {
            let count = this.count
            let interval = setInterval(() => {
               count--
               this.count = count
               const percent = (count / 30) * 100
               console.log(percent)
               if(percent < 30) {
                  this.bgColor = "bg-base-red"
               } else if(percent < 50) {
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
      }
   }
</script>