<template>
   <div class="enter-username h-screen bg-base-violet flex flex-col relative">
      <div class="flex help-icon bg-base-violet-light p-2 absolute right-0 rounded-full m-10">
         <i class='bx bx-question-mark text-lg font-bold text-base-aqua'></i>
      </div>
      <div  class="wrapper h-full flex flex-col justify-center items-center gap-10">
         <div class="title-header">
            <h1 class="title text-6xl font-bold">Enter your username</h1>
         </div>
         <div class="input-container w-full">
            <input type="text" class="w-full input text-4xl p-3 text-center bg-transparent border-b-2 border-base-violet-light rounded-md focus:outline-none text-base-aqua">
         </div>
      </div>
   </div>
</template>

<script>
export default {

}
</script>

<style>

</style>