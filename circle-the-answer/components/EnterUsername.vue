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
            <input v-model="userName" 
               type="text" 
               placeholder="e.g. John Doe"
               class="username input" :class="{'isEmpty':!isUserName}">
         </div>
         <div class="flex justify-between w-6/12 mt-20">
            <div class="flex relative items-center justify-center h-32">
               <h1 ref="Back"  class="text-2xl text-base-blue ">Back</h1>

               <encircle 
                  @selected="isSelectedBack"
                  @get-selected="back" 
                  :penColor="penColor" 
                  :penThickness="penThickness"
               />

            </div>
            <div class="flex relative items-center justify-center h-32 ">
               <h1 ref="Next" class="text-2xl font-bold text-base-aqua">Next</h1>

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
         isUserName: true,
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
            this.$toast.show({
                  type: 'danger',
                  title: 'alert',
                  message: `Please make sure you draw a circle around the word "Back"`,
                  classTimeout: 'bg-base-red'
            })
            this.$emit('back', this.isBack)
         }
      },
      next(selected){
         if(selected){
            // check if username is not empty
            if(this.userName !== ''){
     
               this.$toast.show({
                  type: 'success',
                  title: 'Success',
                  message: `Username ${this.userName} is set`,
                  classTimeout: 'bg-base-green'
               })

               // set username
               this.$store.commit('SET_USERNAME', this.userName)

               this.isNext = true
               this.$emit('next', true)
               this.isUserName = true

            }else{
               this.$toast.show({
                  type: 'danger',
                  title: 'Error',
                  message: 'Username cannot be empty',
                  classTimeout: 'bg-base-red'
               })
               this.isNext = false
               this.$emit('next', false)
               this.isUserName = false
            }
         }else{
            this.$toast.show({
                  type: 'danger',
                  title: 'alert',
                  message: `Please make sure you draw a circle around the word "Next"`,
                  classTimeout: 'bg-base-red'
            })
            this.isNext = false
         }
         console.log(`next is ${this.isNext}`)
      },
      reset(){
         this.userName = ''
         this.isUserName = true
      },
      isSelectedBack(highLight){
         if(highLight){
            this.$refs.Back.style = `color: ${this.penColor}`
         }else{
            this.$refs.Back.style = `color: #B9E0FF`
         }
      },
      isSelectedNext(highLight){
         if(highLight){
            this.$refs.Next.style = `color: ${this.penColor}`
         }else{
            this.$refs.Next.style = `color: #B9E0FF`
         }
      }
   },
}
</script>

<style>

</style>