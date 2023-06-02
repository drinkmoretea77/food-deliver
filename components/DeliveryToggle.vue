<template>
  <div class="delivery-toggle">
    <button
      class="delivery-toggle__button"
      :class="{ 'delivery-toggle__button--active': isDelivery }"
      type="button"
      @click="toggleDeliveryType"
    >
      Доставка
    </button>
    <button
      class="delivery-toggle__button"
      :class="{ 'delivery-toggle__button--active': !isDelivery }"
      type="button"
      @click="toggleDeliveryType"
    >
      Самовивіз
    </button>
  </div>
</template>

<script>
export default {
  name: 'DeliveryToggle',
  data () {
    return {
      deliveryType: 'delivery'
    }
  },
  computed: {
    isDelivery () {
      return this.deliveryType === 'delivery'
    }
  },
  methods: {
    toggleDeliveryType () {
      this.deliveryType = this.deliveryType === 'delivery' ? 'pickup' : 'delivery'
    }
  }
}
</script>

<style scoped lang="scss">
.delivery-toggle {
  background: $color-bg;
  border: 1px solid $color-border;
  padding: 3px;
  border-radius: 48px;
  display: flex;
  flex-flow: row nowrap;
  gap: 4px;

  &__button {
    @include button_secondary();

    &--active {
      @include button();
    }
  }
}
</style>
