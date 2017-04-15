<style lang="scss" scoped>
  .index {
    flex: 1 1 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    #animate-wrapper {
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
      height: 100%;
      width: 100%;
      position: absolute;
      z-index: -1;
    }

    .landing-box {
      display: flex;
      //justify-content: center;
      text-align: center;
      align-items: center;
      flex-direction: column;

      height: 250px;

      h2 {
        color: #F87756;
        font-size: 24px;
        font-weight: lighter;
        margin: 0 0 0 0;
      }

      h3 {
        color: #8A8A8A;
        font-size: 14px;
        font-weight: lighter;
        margin: 15px 0 60px 0;
      }

      a {
        display: block;
        border: 1px solid #F87756;
        height: 36px;
        width: 83px;
        line-height: 36px;
        font-size: 12px;
        color: #F87756;
        text-decoration: none;
        font-weight: bolder;
        transition: all 0.2s;

        &:hover {
          color: #FFFFFF;
          background-color: #F87756;
        }
      }
    }
  }
</style>

<template>
  <div class="index">
    <div class="landing-box">
      <h2>聚沙成塔，集丝成裘</h2>
      <h3>技术驱动为基础，融入态度方得最优解</h3>
      <a href="mailto:p@vecsight.com">联络我们</a>
    </div>
    <div id="animate-wrapper">
      <canvas id="animate"></canvas>
    </div>
  </div>
</template>

<script>
  import { fabric } from 'fabric'
  export default {
    mounted () {
      this.$nextTick(function () {
        let canvas = new fabric.StaticCanvas('animate', {
          renderOnAddRemove: false,
          stateful: false
        })

        let canvasHeight = document.getElementById('animate-wrapper').clientHeight
        let canvasWidth = document.getElementById('animate-wrapper').clientWidth

        canvas.setHeight(canvasHeight)
        canvas.setWidth(canvasWidth)

        function createBubble () {
          let rect = new fabric.Circle({
            left: canvasWidth / 2,
            top: canvasHeight - 10,
            radius: 1,
            fill: 'transparent',
            stroke: 'rgba(248,168,86,0.3)',
            strokeWidth: 1
          })
          canvas.add(rect)

          let duration = 10000
          rect.animate('top', '0', {
            onChange: canvas.renderAll.bind(canvas),
            duration: duration
          })
          rect.animate('radius', '30', {
            onChange: canvas.renderAll.bind(canvas),
            duration: duration
          })
          rect.animate('strokeWidth', '30', {
            onChange: canvas.renderAll.bind(canvas),
            duration: duration
          })
          rect.animate('opacity', '0', {
            onChange: canvas.renderAll.bind(canvas),
            duration: duration
          })

          let offset = (Math.random() - 0.5) * 1000
          offset = offset >= 0 ? '+=' + offset : '-=' + (-offset)

          rect.animate('left', offset, {
            onChange: canvas.renderAll.bind(canvas),
            duration: duration,
            easing: (t, b, c, d) => c * (t /= d) * t * t + b,
            onComplete: () => {
              canvas.remove(rect)
            }
          })
        }

        setInterval(() => {
          if (!document.hidden) {
            createBubble()
          }
        }, 2000)

        canvas.renderAll()
      })
    }
  }
</script>
