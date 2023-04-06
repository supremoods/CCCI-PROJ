<template>
   <div class="landing-page flex flex-col h-[100vh] bg-slate-400 gap-30">
      <div v-if="isCircle" class="back-btn p-10 translate-x-10 ease-in-out" v-on:click="backBtn">
         <i class='bx bx-arrow-back text-5xl'></i>
      </div>
      <div class="flex flex-col h-full w-full justify-center items-center">
         <div class="header-title ">
            <h1 class="text-8xl font-bold leading-tight text-slate-800">Stack Quiz</h1>
         </div>
         <div class="content-sectionrelative flex justify-center items-center">
            <div class="flex absolute z-0 ">
               <h1 class="lets-go-txt text-5xl font-medium leading-tight text-slate-800 ease-in " :class="{'isCircle': isCircle}">Let's go!</h1>
            </div>
            <canvas-draw @get-selected="isSelected"/>
         </div>
      </div>
   </div>
</template>

<script>
import CanvasDraw from '~/components/CanvasDraw.vue'
export default {
   components: { 
      CanvasDraw 
   },
   data() {
      return {
         isCircle: false
      }
   },
   methods: {
      isSelected(isCircle) {
         console.log(isCircle)
         this.isCircle = isCircle
      },
      backBtn() {
         this.isCircle = false
      },

   }
};
</script>
