<template>
   <div class="score-board bg-base-violet flex flex-col relative items-center" :class="{'isShow':isShow}">
      <div class="wrapper flex flex-col w-3/5 py-20 gap-10">
         <div class="title-header flex justify-center">
            <h1 class="title text-6xl font-bold">Score Board</h1>
         </div>
         <div class="nav-header flex justify-center gap-16">
            <div class="nav-item" @click="filterDifficulty(`beginner`)" >
               <h1 class="text-2xl font-bold text-base-blue " :class="{'isBeginner':isBeginner}">Beginner</h1>
            </div>
            <div class="nav-item" @click="filterDifficulty(`intermediate`)" >
               <h1 class="text-2xl font-bold text-base-blue " :class="{'isIntermediate':isIntermediate}">Intermediate</h1>
            </div>
            <div class="nav-item"  @click="filterDifficulty(`advanced`)">
               <h1 class="text-2xl font-bold text-base-blue "  :class="{'isAdvanced':isAdvanced}">Advanced</h1>
            </div>
         </div>
         <table class="score-board-table table-fixed">
            <thead>
               <tr>
                  <th v-for="(item, index) in column" :key="index" class="column-item text-xl text-base-blue">{{ item }}</th>
               </tr>
            </thead>
            <tbody>
               <tr v-for="(user, index) in rankList" :key="index">
                  <td class="row-item text-lg text-base-blue text-center">{{ index+1 }}</td>
                  <td class="row-item text-lg text-base-blue text-center">{{ user.username }}</td>
                  <td class="row-item text-lg text-base-blue text-center">{{ user.accuracy.toFixed(2) }} %</td>
                  <td class="row-item text-lg text-base-blue text-center">{{ user.points }}</td>
               </tr>
            </tbody>
         </table>
         <div class="nav-footer flex justify-center ">
            <div class="flex relative items-center justify-center h-32 ">
               <h1 ref="Back" class="back text-2xl text-base-blue ">Back</h1>
               <encircle 
                  @selected="isSelectedBack"
                  @get-selected="back" 
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
   
   export default{
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
      components:{
         Encircle
      },
      data: ()=> ({
         column: ['Rank', 'Username', 'Accuracy', 'Points'],
         isBeginner: true,
         isIntermediate: false,
         isAdvanced: false
      }),
      computed:{
         rankList(){
            if (localStorage.getItem('ranking') === null) {
               console.log('no data')
               return []
            }
            
            if(this.isBeginner){
               return JSON.parse(localStorage.getItem('ranking')).filter(user => user.difficulty === 'beginner').sort((a, b) => b.points - a.points)
            }else if(this.isIntermediate){
               return JSON.parse(localStorage.getItem('ranking')).filter(user => user.difficulty === 'intermediate').sort((a, b) => b.points - a.points)
            }else if(this.isAdvanced){
               return JSON.parse(localStorage.getItem('ranking')).filter(user => user.difficulty === 'advanced').sort((a, b) => b.points - a.points)
            }
         }
      },
      methods:{
         isSelectedBack(highLight){
            if(highLight){
               this.$refs.Back.style = `color: ${this.penColor}`
            }else{
               this.$refs.Back.style = `color: #B9E0FF`
            }
         },
         back(selected){
            if(selected){
               this.isBack = true
               this.$emit('back', this.isBack)
               
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
         filterDifficulty(difficulty){
            if(difficulty === "beginner"){
               this.isBeginner = true
               this.isIntermediate = false
               this.isAdvanced = false
            }else if(difficulty === "intermediate"){
               this.isBeginner = false
               this.isIntermediate = true
               this.isAdvanced = false
            }else if(difficulty === "advanced"){
               this.isBeginner = false
               this.isIntermediate = false
               this.isAdvanced = true
            }
         }
      },
      watch:{
         rankList(){
            if(this.rankList.length === 0){
               this.$toast.show({
                  type: 'danger',
                  title: 'alert',
                  message: `No data`,
                  classTimeout: 'bg-base-red'
               })
            }
         } 
      }
   }
</script>