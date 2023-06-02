<template>
  <div class="outer">
    <div ref="container" class="container">
      <div ref="ball" class="btn-order ball">
        <span class="btn-order__text">
          <slot />
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ButtonOrder',
  data () {
    return {
      isHovered: false
    }
  },
  mounted () {
    this.animateBall()
  },
  methods: {
    handleEnter (e) {
      this.isHovered = true
      const gsap = this.$gsap

      const container = this.$refs.container
      const ball = this.$refs.ball

      const { left, top, width, height } = container.getBoundingClientRect()

      const halfW = width / 2
      const halfH = height / 2
      const mouseX = e.x - left
      const mouseY = e.y - top

      const x = gsap.utils.interpolate(-halfW, halfW, mouseX / width)
      const y = gsap.utils.interpolate(-halfH, halfH, mouseY / height)

      gsap.to(ball, {
        x,
        y,
        duration: 0.6,
        ease: 'power1',
        overwrite: true
      })
    },
    animateBall () {
      const gsap = this.$gsap

      const container = this.$refs.container
      const ball = this.$refs.ball

      container.addEventListener('mousemove', onMove)
      container.addEventListener('mouseleave', onLeave)

      function onMove (e) {
        const { left, top, width, height } = container.getBoundingClientRect()

        const halfW = width / 2
        const halfH = height / 2
        const mouseX = e.x - left
        const mouseY = e.y - top

        const x = gsap.utils.interpolate(-halfW, halfW, mouseX / width)
        const y = gsap.utils.interpolate(-halfH, halfH, mouseY / height)

        gsap.to(ball, {
          x,
          y,
          duration: 0.6,
          scale: 1.1,
          ease: 'power1',
          overwrite: true
        })

        ball.classList.add('hovered')
      }

      function onLeave (e) {
        gsap.to(ball, {
          x: 0,
          y: 0,
          ease: 'power3',
          scale: 1,
          duration: 0.6,
          overwrite: true
        })

        ball.classList.remove('hovered')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
$resized: 1.1;
$btn-order-size: calc(195px / $resized);
$btn-order-size-mobile: calc(150px / $resized);

.btn-order {
  width: $btn-order-size;
  height: $btn-order-size;
  background: $color-accent;
  border-radius: 50%;
  text-align: center;
  @include flex-center;
  cursor: pointer;
  border: 1px solid transpatent;

  @include responsive($mobile) {
    width: $btn-order-size-mobile;
    height: $btn-order-size-mobile;
  }

  &__text {
    color: $color-text-light;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    transform: rotate(-15deg);
    letter-spacing: 0.03em;
    text-transform: uppercase;
    line-height: 1.3;
    font-size: 18px;
    font-weight: 600;
    -webkit-text-stroke: 1px $color-text-dark;

    @include responsive($mobile) {
        font-size: 14px;
    }
  }
}
.outer {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  position: relative;
}
.container {
  width: $btn-order-size;
  height: $btn-order-size;
  position: relative;

  @include responsive($mobile) {
    width: $btn-order-size-mobile;
    height: $btn-order-size-mobile;
  }
}

.ball {
  position: absolute;
  top: 0;
  left: 0;

  &.hovered {
    border: 1px solid $color-text;
  }
}

</style>
</template>
