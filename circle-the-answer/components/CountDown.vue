<template>
   <div class="count-down bg-base-violet flex flex-col relative">
      <div class="flex help-icon bg-base-violet-light p-2 absolute right-0 rounded-full m-10">
         <i class='bx bx-question-mark text-lg font-bold text-base-aqua'></i>
      </div>
      <div  class="wrapper h-full flex flex-col justify-center items-center gap-10">
         <div class="title-header">
            <h1 class="title text-6xl font-bold">The quiz start in</h1>
         </div>
         <div class="count-down">
            <h1 class="count-down-text text-8xl font-bold text-base-blue">{{count}}</h1>
         </div>
      </div>
   </div>
</template>

<script>
export default {
   data() {
      return {
         count: 5
      }
   },
   mounted() {
      this.countDown()
   },
   methods: {
      countDown() {
         let count = this.count
         let interval = setInterval(() => {
            count--
            this.count = count
            if (count == 0) {
               clearInterval(interval)
            }
         }, 1000)
      }
   }

}
</script>

<style>

</style>