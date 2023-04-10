<template>
   <div id="enter-username" class="enter-username bg-base-violet flex flex-col relative" :class="{'isShow':isShow}">
      <div class="flex help-icon bg-base-violet-light p-2 absolute right-0 rounded-full m-10">
         <i class='bx bx-question-mark text-lg font-bold text-base-aqua'></i>
      </div>
      <div  class="wrapper h-full flex flex-col justify-center items-center gap-16">
         <div class="title-header">
            <h1 class="title text-6xl font-bold">Enter your username</h1>
         </div>
         <div class="input-container w-6/12 justify-center flex-col">
            <input v-model="userName" type="text" class="username w-full input text-4xl p-3 text-center bg-transparent  rounded-md focus:outline-none text-base-aqua" :class="{'isEmpty':!isUserName}">
         </div>
         <div class="flex justify-between w-6/12 mt-20">
            <div class="flex relative items-center justify-center h-32">
               <h1 class="text-2xl text-base-blue ">Back</h1>

               <encircle 
                  @get-selected="back" 
                  :penColor="penColor" 
                  :penThickness="penThickness"
               />

            </div>
            <div class="flex relative items-center justify-center h-32 ">
               <h1 class="text-2xl font-bold text-base-aqua">Next</h1>

               <encircle 
                  @get-selected="next"
                  :penColor="penColor" 
                  :penThickness="penThickness"
               />

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
      penColor: {
          type: String,
          default: '#8D72E1'
      },
      penThickness: {
         type: Number,
         default: 5
      }
   },
   data(){
      return{
         isBack: false,
         isNext: false,
         userName: '',
         isUserName: true
      }
   },
   methods:{
      back(selected){
         if(selected){
            this.isBack = true
            this.$emit('back', this.isBack)
            this.reset()
         }else{
            this.isBack = false
            this.$emit('back', this.isBack)
         }
      },
      next(selected){
         if(selected){
            // check if username is not empty
            if(this.userName !== ''){
               this.isNext = true
               this.$emit('next', true)
               this.isUserName = true
            }else{
               this.isNext = false
               this.$emit('next', false)
               this.isUserName = false
               this.$toast.show({
                  type: 'danger',
                  title: 'Error',
                  message: 'Username cannot be empty',
                  classTimeout: 'bg-base-red'
               })
            }
         }else{
            this.isNext = false
         }
         console.log(`next is ${this.isNext}`)
      },
      reset(){
         this.userName = ''
         this.isUserName = true
      },
       
   }
}
</script>

<style>

</style>