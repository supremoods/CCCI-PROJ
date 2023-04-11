<template>
   <div v-if="isShow" class="correct-answer" :class="{'isShow': isShow}">
      <div class="wrapper" >
         <div class="flex content" :class="{'correct': !isWrong}"> 
            <div class="flex">
               <h1 class="text-3xl text-base-blue">{{ answer.question }}</h1>
            </div>
            <div class="flex">
               <h1 class="text-3xl text-base-blue">Answer: <span class="font-bold text-base-aqua">{{ answer.answer }}</span></h1>
            </div>
            <div class="flex flex-col gap-3">
               <h1 class="text-xl text-base-blue font-bold">Explanation</h1>
               <p class="text-2xl text-base-aqua"> {{answer.explanation}} </p>
            </div>
            <div class="flex w-full justify-end">
               <div class="next-btn ">
                  <h1 ref="Next" class="text-2xl text-base-aqua font-bold">Next</h1>
                  <encircle 
                     @selected="isSelectedNext"
                     @get-selected="next"
                     :penColor="penColor" 
                     :penThickness="penThickness"
                  />
               </div>
            </div>
         </div>
      </div>
   </div>
</template>

<script>
import Encircle from '~/components/canvas/Encircle'

export default {
   components:{
      Encircle
   },
   props:{
      isShow: {
         type: Boolean,
         default: false
      },
      isWrong:{
         type: Boolean,
         default: false
      },
      penColor: {
         type: String,
         default: '#8D72E1'
      },
      penThickness: {
         type: Number,
         default: 5
      },
      answer:{
         type: Object,
      }
   },
   methods:{
      isSelectedNext(highLight){
         if(highLight){
            this.$refs.Next.style = `color: ${this.penColor}`
         }else{
            this.$refs.Next.style = `color: #B9E0FF`
         }
      },
      next(selected){
         if(selected){
            // check if username is not empty
            console.log(selected)
            this.$emit('next', selected)
         }else{
            this.$toast.show({
                  type: 'danger',
                  title: 'alert',
                  message: `Please make sure you draw a circle around the word "Next"`,
                  classTimeout: 'bg-base-red'
            })
         }
      },
   }
}

</script>
