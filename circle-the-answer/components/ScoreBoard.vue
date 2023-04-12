<template>
   <div class="score-board bg-base-violet flex flex-col relative h-screen">
      <div class="wrapper flex flex-col w-9/12">
         <div class="title-header">
            <h1 class="title text-6xl font-bold">Score Board</h1>
         </div>
         <div class="nav-header flex">
            <div class="nav-item">
               <h2>Beginner</h2>
            </div>
            <div class="nav-item">
               <h2>Intermediate</h2>
            </div>
            <div class="nav-item">
               <h2>Advanced</h2>
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