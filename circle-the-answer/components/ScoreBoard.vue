<template>
   <div class="score-board bg-base-violet flex flex-col relative h-screen items-center">
      <div class="wrapper flex flex-col w-9/12 py-20">
         <div class="title-header flex justify-center">
            <h1 class="title text-6xl font-bold">Score Board</h1>
         </div>
         <div class="nav-header flex justify-center">
            <div class="nav-item">
               <h1 ref="Beginner" class="text-5x1 font-bold text-base-blue ">Beginner</h1>
            </div>
            <div class="nav-item">
               <h1 ref="Intermediate" class="text-5x1 font-bold text-base-blue ">Intermediate</h1>
            </div>
            <div class="nav-item">
               <h1 ref ="Advanced" class="text-5x1 font-bold text-base-blue ">Advanced</h1>
            </div>
         </div>
         <table class="score-board-table table-fixed">
            <thead>
               <tr>
                  <th class="px-6 py-3">Rank</th>
                  <th class="px-6 py-3">Username</th>
                  <th class="px-6 py-3">Difficulty</th>
                  <th class="px-6 py-3">Accuracy</th>
                  <th class="px-6 py-3">Points</th>
               </tr>
            </thead>
            <tbody>
               <tr>
                  <td class="px-6 py-4">1</td>
                  <td class="px-6 py-4">John</td>
                  <td class="px-6 py-4">Beginner</td>
                  <td class="px-6 py-4">100%</td>
                  <td class="px-6 py-4">2500</td>
               </tr>
            </tbody>
         </table>
         <div class="nav-footer flex">
            <div class="flex">
               <h1 ref="Back" class="text-2xl text-base-blue ">Back</h1>
            </div>
         </div>
      </div>
   </div>
</template>

<script>
   export default{
      props:{

      }
   }
</script>