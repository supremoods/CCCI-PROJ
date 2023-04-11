<template>
   <div class="encircle-diff bg-base-violet flex flex-col relative " :class="{'isShow':isShow}">
      <div class="flex help-icon bg-base-violet-light p-2 absolute right-0 rounded-full m-10">
         <i class='bx bx-question-mark text-lg font-bold text-base-aqua'></i>
      </div>
      <div  class="wrapper h-full flex flex-col justify-center items-center gap-10">
         <div class="title-header">
            <h1 class="title text-6xl font-bold">Encircle difficulty </h1>
         </div>
         <div class="difficulty-options flex w-8/12 justify-between mt-16">
            <div class="opt">
               <h1 ref="beginner" class="opt-label">Beginner</h1>
               <encircle 
                  @get-selected="beginner"
                  @selected="isSelectedBeginner"
                  :penColor="penColor" 
                  :penThickness="penThickness"
               />
            </div>
            <div  class="opt">
               <h1 ref="Intermediate" class="opt-label">Intermediate</h1>
               <encircle 
                  @get-selected="intermediate"
                  @selected="isSelectedIntermediate"
                  :penColor="penColor" 
                  :penThickness="penThickness"
               />
            </div>   
            <div class="opt">
               <h1 ref="Advanced" class="opt-label">Advanced</h1>
               <encircle 
                  @get-selected="advanced" 
                  @selected="isSelectedAdvanced"
                  :penColor="penColor" 
                  :penThickness="penThickness"
               />
            </div>
         </div>
         <div class="nav-options flex w-8/12 justify-between mt-20">
            <div class="opt">
               <h1 ref="Back" class="opt-label">Back</h1>
               <encircle 
                  @get-selected="back" 
                  @selected="isSelectedBack"
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
import {mapState} from 'vuex'

export default {
   data(){
      return {
         isNext : false,
         isBack : false,
      }
   },
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
   computed: {
      ...mapState({
         username: state => state.username
      })
   },
   methods:{
      isSelectedBeginner(highLight){
         if(highLight){
            this.$refs.beginner.style = `color: ${this.penColor}`
         }else{
            this.$refs.beginner.style = `color: #8D9EFF`
         }
      },
      isSelectedIntermediate(highLight){
         if(highLight){
            this.$refs.Intermediate.style = `color: ${this.penColor}`
         }else{
            this.$refs.Intermediate.style = `color: #8D9EFF`
         }
      },
      isSelectedAdvanced(highLight){
         if(highLight){
            this.$refs.Advanced.style = `color: ${this.penColor}`
         }else{
            this.$refs.Advanced.style = `color: #8D9EFF`
         }
      },
      isSelectedBack(highLight){
         if(highLight){
            this.$refs.Back.style = `color: ${this.penColor}`
         }else{
            this.$refs.Back.style = `color: #8D9EFF`
         }
      },
      beginner(selected){
         if(selected){
            this.isNext = true
            this.$store.commit('SET_DIFFICULTY', 'beginner') 
            this.$emit('next', this.isNext)
         }else{
            this.isNext = false
            this.$emit('next', this.isNext)
         }
      },
      intermediate(selected){
         if(selected){
            this.isNext = true
            this.$store.commit('SET_DIFFICULTY', 'intermediate') 
            this.$emit('next', this.isNext)
         }else{
            this.isNext = false
            this.$emit('next', this.isNext)
         }
      },
      advanced(selected){
         if(selected){
            this.isNext = true
            this.$store.commit('SET_DIFFICULTY', 'advanced') 
            this.$emit('next', this.isNext)
         }else{
            this.isNext = false
            this.$emit('next', this.isNext)
         }
      },
      back(selected){
         if(selected){
            this.isBack = true
            this.$emit('back', this.isBack)
         }else{
            this.isBack = false
            this.$emit('back', this.isBack)
         }
      }

   }

}
</script>

<style>

</style>