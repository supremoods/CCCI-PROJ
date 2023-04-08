<template>
   <div class="main-menu h-screen bg-base-violet flex flex-col relative">
      <div class="flex help-icon bg-base-violet-light p-2 absolute right-0 rounded-full m-10">
         <i class='bx bx-question-mark text-lg font-bold text-base-aqua'></i>
      </div>
      <div  class="wrapper h-full flex flex-col justify-center items-center">
         <div class="title-header">
            <h1 class="title text-6xl font-bold">Stack Quiz</h1>
         </div>
         <canvas-menu />
      </div>
   </div>
</template>

<script>
import CanvasMenu from '~/components/canvas/CanvasMenu'
export default {
   components:{
      CanvasMenu
   }
}
</script>

<style>

</style>