<template>
  <canvas class="canvas" ref="canvas" @mousedown="startDrawing" @mousemove="draw"  @mouseup="stopDrawing"></canvas>
</template>
<script>
  export default{
     data() {
        return {
           isDrawing: false,
           startX: 0,
           startY: 0,
           isCircle: false
        }
     },
      props: {
        penColor: {
          type: String,
          default: '#8D72E1'
        },
        penThickness: {
          type: Number,
          default: 5
        }
      },
     mounted() {
        this.canvas =  this.$refs.canvas
        this.context = this.canvas.getContext('2d')
        this.menuItem = document.querySelector('.menu-item')
        this.itemHeight = this.menuItem.clientHeight
        this.brush()
     },
     methods: {
        startDrawing(event){
          this.isDrawing = true
          this.startX = event.offsetX
          this.startY = event.offsetY
          this.context.beginPath()
          this.context.moveTo(this.startX, this.startY)
          this.$emit('selected', this.isDrawing)
        },
        draw(event){
          if (this.isDrawing) {
              this.context.lineTo(event.offsetX, event.offsetY)
              this.context.stroke()
           }
        },
        stopDrawing(event){
          this.isDrawing = false
          const endX = event.offsetX
          const endY = event.offsetY

          this.$emit('selected', this.isDrawing)
          
          if(this.startX === endX && this.startY === endY){
            this.isCircle = false
            this.$emit('get-selected', this.isCircle)
            this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
            return
          }
          // calculate the distance between the starting point and ending point
          const radius = Math.sqrt((endX - this.startX) ** 2 + (endY - this.startY) ** 2)
          // loop through each intermediate point and calculate its distance to the starting point
          this.isCircle = true
          for (let x = this.startX; x <= endX; x++) {
            const y1 = this.startY + Math.sqrt(radius ** 2 - (x - this.startX) ** 2)
            const y2 = this.startY - Math.sqrt(radius ** 2 - (x - this.startX) ** 2)
            if (Math.abs(event.offsetY - y1) > 2 && Math.abs(event.offsetY - y2) > 2) {
                this.isCircle = false
                break
            }
          }
          if (this.isCircle) {
            this.$emit('get-selected', this.isCircle)
          } else {
            this.$emit('get-selected', this.isCircle)
          }

          this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
        },
        brush(){
          this.context.canvas.width = 300
          this.context.canvas.height = this.itemHeight
          this.context.strokeStyle = this.penColor
          this.context.lineWidth = this.penThickness
          this.context.lineCap = 'round'
          this.context.lineJoin = 'round'
          this.context.shadowOffsetX = 0
          this.context.shadowOffsetY = 0
          this.context.shadowBlur = 5
          this.context.shadowColor = this.penColor
          this.context.globalCompositeOperation = 'source-over'
          this.context.globalAlpha = 1

        }
     },
      watch: {
          penColor: function (newColor, oldColor) {
            this.brush()
          },
          penThickness: function (newThickness, oldThickness) {
            this.brush()
          }
      }
  }
</script> 