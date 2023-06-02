<template>
  <div class="card">
    <h3 class="card__title">
      {{ title }}
    </h3>
    <p class="card__descr">
      {{ description }}
    </p>
    <img class="card__image" :src="img" :alt="title">
  </div>
</template>

<script>
export default {
  name: 'FeatureCard',
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: true
    }
  },
  computed: {
    img () {
      try {
        return require(`~/assets/images/${this.icon}` || '')
      } catch (e) {
        return ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  width: 100%;
  height: 328px;
  overflow: hidden;
  background: $color-bg-secondary;
  color: white;
  color: $color-text;
  text-align: center;
  padding: 20px 40px 25px;
  position: relative;
  border-radius: 8px;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: space-between;

  &__title {
    margin-bottom: 5px;
    font-weight: 500;
    font-size: 24px;
    line-height: 1.3;
  }

  &__descr {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    opacity: 0;
    transition: $transition;
    transition-duration: 0.3s;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.4;
    border-radius: 8px;
    background: $color-accent;
    color: $color-text-light;
    padding: 30px;
    text-align: left;
  }

  &:hover &__descr {
    opacity: 1;
  }

  &__image {
    width: 100%;
    height: 100%;
    max-width: 190px;
    max-height: 190px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-position: center;
    transition: $transition;
  }
}
</style>
