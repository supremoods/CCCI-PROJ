<template>
  <canvas ref="canvas" class="canvas"></canvas>
</template>

<script>
export default {
  data() {
    return {
      options: ["Start", "Score Board", "Pen Settings"],
      selectedOption: 0,
      isDrawing: false,
      lastX: 0,
      lastY: 0
    };
  },
  mounted() {
    this.drawOptions();
    const canvas = this.$refs.canvas;
    canvas.addEventListener("mousedown", this.startDrawing);
    canvas.addEventListener("mousemove", this.draw);
    canvas.addEventListener("mouseup", this.stopDrawing);
  },
  beforeDestroy() {
    const canvas = this.$refs.canvas;
    canvas.removeEventListener("mousedown", this.startDrawing);
    canvas.removeEventListener("mousemove", this.draw);
    canvas.removeEventListener("mouseup", this.stopDrawing);
    canvas.removeEventListener("mouseleave", this.stopDrawing);
  },
  methods: {
    drawOptions() {
      const canvas = this.$refs.canvas;
      canvas.width = 1400;
      canvas.height = 500;
      const ctx = canvas.getContext("2d");
      ctx.strokeStyle = "#8D9EFF";
      ctx.lineJoin = "round";
      ctx.lineCap = "round";
      ctx.lineWidth = 10;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.font = "32px League Spartan";
      ctx.fillStyle = "#8D9EFF";
      ctx.textAlign = "center";
      this.options.forEach((option, index) => {
        if (index === this.selectedOption) {
          ctx.fillStyle = "#8D9EFF";
        } else {
          ctx.fillStyle = "#B9E0FF";
        }
        ctx.fillText(option, canvas.width / 2, canvas.height / 2 + index * 60);
      });
    },
    startDrawing(e) {
      this.isDrawing = true;
      this.lastX = e.offsetX;
      this.lastY = e.offsetY;
    },
    draw(e) {
      if (!this.isDrawing) return;
      const canvas = this.$refs.canvas;
      const ctx = canvas.getContext("2d");
      ctx.beginPath();
      ctx.moveTo(this.lastX, this.lastY);
      ctx.lineTo(e.offsetX, e.offsetY);
      ctx.stroke();
      this.lastX = e.offsetX;
      this.lastY = e.offsetY;
    },
    stopDrawing() {
      this.isDrawing = false;
      const canvas = this.$refs.canvas;
      const ctx = canvas.getContext("2d");
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      this.drawOptions();
    },
  },
};
</script>

<style>
</style>