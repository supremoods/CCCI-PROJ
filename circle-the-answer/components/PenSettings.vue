<template>
   <div class="pen-settings flex  absolute  w-full  justify-center " :class="{'show':isPenSettings}">
       <div class="wrapper relative">
         <div class="pen-color flex flex-col gap-5 p-10 ">
            <h1 class="text-xl text-base-aqua"> Pick a color for your pen </h1>
            <color-picker v-model="color" ></color-picker>
         </div>
         <div class="pen-thickness flex flex-col gap-5 p-10 justify-center items-center flex-wrap ">
            <h1 class="text-xl text-base-aqua" > Pen thickness</h1>
            <div class="range-slider flex justify-center items-center gap-5">
               <input class="range-slider-range " type="range" v-model="thicknessValue" min="5" max="20">
               <div class="thickness-value flex rounded-full bg-slate-50 h-6 px-2">
                  <span class="range-slider-value  font-bold ">{{thicknessValue}}</span>
               </div>
            </div>
         </div>
         <div class="close-settings flex justify-center items-center p-10">
            <div class="flex justify-center items-center ">
               <div class="flex justify-center items-center bg-base-aqua rounded-full w-10 h-10" @click="closeSettings">
                  <!-- chevron-up -->
                  <i class='bx bx-chevron-up text-3xl font-bold text-base-violet'></i>
               </div>
            </div>
         </div>
       </div>
   </div>
</template>

<script>
   import ColorPicker from 'verte'
   import 'verte/dist/verte.css';

   export default{
      components:{
         ColorPicker
      },
      data(){
         return{
            color: '#8D72E1',
            thicknessValue: 10,
            maxThickness: 20,
         }
      },
      props:{
         isPenSettings: {
            type: Boolean,
            default: false
         }
      },
      methods:{
         closeSettings(){
            this.$emit('closeSettings', false)
         }
      },
      watch: {
         color(newColor) {
            const rangeSliderThumb = document.querySelector('.range-slider-range');
            const thicknessValue = document.querySelector('.thickness-value');

            // set background color of value
            thicknessValue.style.setProperty('background', newColor);
            rangeSliderThumb.style.setProperty('--pen-color', newColor);

            this.$emit('getPenColor', newColor)
         },
         thicknessValue(newThickness){
            const rangeSliderThumb = document.querySelector('.range-slider-range');

            const percentage = (newThickness / 20) * 100
            const calcHeight = (percentage / 100) * 36 + 'px'

            rangeSliderThumb.style.setProperty('--thickness', calcHeight);
            this.$emit('getPenThickness', newThickness)
         }
      }
   }
</script>