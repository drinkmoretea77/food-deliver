<template>
  <nav class="main-nav-m">
    <ul class="main-nav-m__list">
      <li v-for="route in menuRoutes" :key="route.key" class="main-nav-m__item">
        <nuxt-link :to="route.key">
          {{ route.label }}
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'MainNavMob',
  computed: {
    menuRoutes () {
      const routes = [
        { key: 'institutions', label: 'Заклади' },
        { key: 'delivery-payment', label: 'Доставка і оплата' },
        { key: 'promotions', label: 'Акції' },
        { key: 'about-us', label: 'Про нас' }
      ]
      return routes
    }
  }
}
</script>

<style lang="scss" scoped>
.main-nav-m {
  width: 100%;

  &__list {
    display: flex;
    width: 100%;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: flex-start;
    gap: 32px;
  }
  &__item {
    display: flex;

    a {
      color: $color-text;
      font-weight: 500;
      font-size: 16px;
      line-height: 1.2;
      letter-spacing: 0.2px;
    }
  }
}
</style>
