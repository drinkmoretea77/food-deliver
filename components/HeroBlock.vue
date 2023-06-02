<template>
  <div class="hero">
    <div class="hero__img">
      &nbsp;
    </div>
    <div class="hero__content">
      <div class="hero__content-inner">
        <h1 class="hero__title">
          Доставка готової їжі в Києві
        </h1>
        <p class="hero__descr">
          Ми пропонуємо доставку їжі прямо до ваших дверей. Насолоджуйтесь
          смачними стравами без необхідності готувати самостійно.
        </p>
      </div>
    </div>
    <ButtonOrder ref="heroBtn" class="hero__btn-order">
      Замовити доставку
    </ButtonOrder>
  </div>
</template>

<script>
export default {
  name: 'HeroBlock',
  mounted () {
    this.scrollBarFix()
  },
  methods: {
    scrollBarFix () {
      const container = this.$el.parentNode.clientWidth
      const offset = (window.innerWidth - container) / 2 || 0
      const heroBtn = this.$refs.heroBtn.$el
      heroBtn.style.left = `calc(50% - ${offset}px)`
    }
  }
}
</script>

<style scoped lang="scss">
.hero {
  display: flex;
  flex-flow: row nowrap;
  align-items: stretch;
  min-height: 100vh;
  position: relative;

  @include responsive($laptop) {
    min-height: auto;
    flex-flow: row wrap;
    gap: 60px;
    justify-content: center;
    margin-bottom: 60px;
  }

  @include responsive($tablet) {
    gap: 40px;
    margin-bottom: 40px;
  }

  &__img {
    background-image: url("~/assets/images/hero.png");
    background-repeat: no-repeat;
    background-size: cover;
    flex-grow: 1;
    width: 100%;

    @include responsive($laptop) {
      background-position: center;
      height: auto;
      aspect-ratio: 9 / 5;
      align-items: flex-start;
    }
    @include responsive($tablet) {
      aspect-ratio: 16 / 9;
    }
    @include responsive($mobile) {
      aspect-ratio: 1 / 1;
    }
  }

  &__content {
    flex-grow: 1;
    width: 100%;
    @include flex_center();
    padding: 0 20px 10px;

    @include responsive($laptop) {
      align-items: flex-start;
    }
  }

  &__content-inner {
    max-width: 400px;
    display: flex;
    align-items: center;
    flex-flow: column nowrap;
    flex-grow: 1;

    @include responsive($laptop) {
      max-width: 80%;
    }

    @include responsive($mobile) {
      max-width: 100%;
    }
  }

  &__title {
    color: $color-text;
    font-size: 76px;
    line-height: 1.1;
    font-weight: normal;
    margin-bottom: 30px;

    @include responsive($laptop) {
      font-size: 48px;
    }
  }

  &__descr {
    color: $color-text;
    font-weight: 500;
    font-size: 24px;
    line-height: 1.3;

    @include responsive($laptop) {
      font-size: 18px;
    }
  }

  &__btn-order {
    position: fixed !important;
    display: flex;
    flex-flow: row nowrap;
    align-items: flex-end;
    justify-content: center;
    bottom: 20px;
    z-index: 1;
    @include center_horizontal();
  }
}
</style>
