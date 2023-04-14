<template>
   <div class="instructions flex flex-col bg-base-violet-light  gap-3 w-72 p-5 rounded-lg z-10">
      <div class="header-instructions">
         <h2 class="text-xl font-bold text-indigo-100">{{ tutorials[counter].title }}</h2>
      </div>
      <div class="content">
         <h2 class="text-indigo-100">{{ tutorials[counter].content }}</h2>
      </div>
      <div class="btns-container w-full flex justify-end " :class="{'justify-end': counter == 0, 'justify-between': counter != 0}">
         <button v-if="counter!=0" class="text-base text-base-violet font-bold hover:text-[#00FFD1]" @click="prev">Back</button>
         <button v-if="counter==0" class="text-base text-base-aqua font-bold hover:text-[#00FFD1]" @click="next">Let's go</button>
         <button v-else class="text-base text-base-aqua font-bold hover:text-[#00FFD1]" @click="next">{{ (tutorials.length != counter+1 ? `Next` : `Done`) }}</button>
      </div>
   </div>
</template>

<script>
export default ({
   props:{
      counter: {
         type: Number,
         default: 0
      },
   },
   data: () => ({
      isShow: false,
      tutorials: [
         {
            title: 'Welcome to Stack Quiz',
            content: 'In this game, you\'ll be challenged to answer the questions about basic concepts of Data Structures.'
         },
         {
            title: 'Quick Tutorial',
            content: 'Encircle “Start” button using your pen to begin the game'
         },
         {
            title: 'Score Board',
            content: 'Encircle “Score Board” using your pen to view your score dashboard'
         },
         {
            title: 'Pen Settings',
            content: 'In this game, you\'ll be challenged to answer the questions about basic concepts of Data Structures.'
         },
      ]
   }),
   methods: {
      next() {
         this.$emit('next', true)
      },
      prev() {
         this.$emit('back', true)
      }
   }

})
</script>

