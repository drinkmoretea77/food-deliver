<template>
  <nav class="main-nav">
    <ul class="main-nav__list">
      <li v-for="route in menuRoutes" :key="route.key" class="main-nav__item">
        <nuxt-link :to="route.key">
          {{ route.label }}
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'MainNav',
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
.main-nav {
  width: 100%;
  display: flex;
  align-items: stretch;
  flex-flow: row nowrap;

  &__list {
    display: flex;
    width: 100%;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: center;
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
