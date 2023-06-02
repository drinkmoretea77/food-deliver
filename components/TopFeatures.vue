<template>
  <div ref="features" class="features">
    <FeatureCard
      v-for="(feature, idx) in features"
      :key="idx"
      class="feature-item"
      v-bind="feature"
    />
  </div>
</template>

<script>
export default {
  name: 'TopFeatures',
  data () {
    return {
      features: [
        {
          title: 'Висока якість продукції',
          description:
            'Наша доставка гарантує вам високу якість продуктів. Кожна страва, яку ми готуємо, пройшла строгий контроль якості, щоб забезпечити вам найкращий смаковий досвід.',
          icon: 'check.png'
        },
        {
          title: 'Різноманітність страв',
          description:
            'Ми пропонуємо великий вибір страв, які ви можете замовити. Ви можете замовити страви з різних кухонь світу, таких як італійська, японська, китайська, українська та інші.',
          icon: 'bowl.png'
        },
        {
          title: 'Швидка доставка',
          description:
            'Ми пропонуємо швидку доставку. Ви можете замовити доставку їжі прямо до ваших дверей. Ми працюємо цілодобово, щоб ви могли замовити доставку їжі в будь-який час.',
          icon: 'rocket.png'
        },
        {
          title: 'Працюємо цілодобово',
          description:
            'Ми працюємо цілодобово, щоб ви могли замовити доставку їжі в будь-який час. Ми пропонуємо швидку доставку. Ви можете замовити доставку їжі прямо до ваших дверей.',
          icon: 'clock.png'
        }
      ]
    }
  },
  computed: {
    featuresTransitionPoint () {
      return this.$screen.width > 1023
    }
  },
  mounted () {
    if (this.featuresTransitionPoint) {
      this.initFeaturesAnimation()
    }
  },
  methods: {
    initFeaturesAnimation () {
      const gsap = this.$gsap
      const features = this.$refs.features

      const stepY = 30
      let offsetY = -stepY
      const top = '-200px'

      for (const element of features.children) {
        const y = offsetY + stepY
        gsap.from(element, {
          scrollTrigger: {
            trigger: features,
            start: `${top} center`,
            end: 'bottom center'
          },
          y,
          duration: 0.5
        })
        offsetY += stepY
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 40px;
  max-width: 1440px;
  margin: 73px auto 70px;
  padding: 0 60px;

  @include responsive($tablet) {
    padding: 0 40px;
  }

  @include responsive($mobile) {
    padding: 0 20px;
    grid-gap: 20px;
    margin: 40px auto 50px;
    grid-template-columns: repeat(auto-fit, minmax(100%, 1fr));
  }
}
</style>
