<template>
   <canvas class="flex z-10" ref="canvas"></canvas>
</template>
<script>
   export default{

      data() {
         return {
            isDrawing: false,
            startX: 0,
            startY: 0,
         }
      },
      mounted() {
         const canvas =  this.$refs.canvas
         const context = canvas.getContext('2d')
         context.canvas.width = 500
         context.canvas.height = 400
         context.strokeStyle = '#8F43EE'
         context.lineWidth = 5
         context.lineCap = 'round'
         context.lineJoin = 'round'
         context.shadowBlur = 5
         context.shadowColor = '#8F43EE'
         context.globalCompositeOperation = 'source-over'
         context.globalAlpha = 1

         
         let isDrawing = false
         let startX, startY

         canvas.addEventListener('mousedown', (event) => {
            isDrawing = true
            startX = event.offsetX
            startY = event.offsetY
            context.beginPath()
            context.moveTo(startX, startY)
         })
         
         canvas.addEventListener('mousemove', (event) => {
            if (isDrawing) {
               context.lineTo(event.offsetX, event.offsetY)
               context.stroke()
            }
         })
         
         canvas.addEventListener('mouseup', (event) => {
            isDrawing = false
            
            const endX = event.offsetX
            const endY = event.offsetY
            
            // calculate the distance between the starting point and ending point
            const radius = Math.sqrt((endX - startX) ** 2 + (endY - startY) ** 2)
            
            // loop through each intermediate point and calculate its distance to the starting point
            let isCircle = true
            
            for (let x = startX; x <= endX; x++) {
               const y1 = startY + Math.sqrt(radius ** 2 - (x - startX) ** 2)
               const y2 = startY - Math.sqrt(radius ** 2 - (x - startX) ** 2)
               if (Math.abs(event.offsetY - y1) > 2 && Math.abs(event.offsetY - y2) > 2) {
                  isCircle = false
                  break
               }
            }
            
            if (isCircle) {
               console.log('User drew a circle')
               // pass isCircle to the parent component
               this.$emit('get-selected', isCircle)
            } else {
               console.log('User did not draw a circle')
               this.$emit('get-selected', isCircle)
            }

            // reset the canvas
            context.clearRect(0, 0, canvas.width, canvas.height)
         })
      },
      methods: {
         // make alert appear when user clicks on the button
         alert() {
            console.log('You clicked the button!')
         }
      },
   }
</script>