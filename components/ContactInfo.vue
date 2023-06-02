<template>
  <div class="contact-info">
    <button
      v-if="phonesTransitionPoint"
      class="icon-phone"
      type="button"
      @click="togglePhoneNumbers"
    />
    <div class="contact-info__items" :class="{ open: showPhoneNumbers }">
      <span class="contact-info__phone"> +380 67 451 99 57 </span>
      <span class="contact-info__separator">&nbsp;</span>
      <span class="contact-info__time"> 24/7 </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactInfo',
  data () {
    return {
      showPhoneNumbers: false
    }
  },
  computed: {
    phonesTransitionPoint () {
      return this.$screen.width < 479
    }
  },
  methods: {
    togglePhoneNumbers () {
      this.showPhoneNumbers = !this.showPhoneNumbers
    }
  }
}
</script>

<style scoped lang="scss">
.contact-info {
  font-weight: 600;
  font-size: 16px;
  line-height: 1.2;
  letter-spacing: 0.2px;

  &__items {
    display: flex;
    flex-flow: row nowrap;
    gap: 15px;
    color: $color-text;
    @include responsive($mobile) {
        margin-left: 15px;
        position: relative;
    }
  }

  &__phone {
    @include responsive($mobile) {
      position: absolute;
      right: 0;
      left: auto;
      width: 300px;
      top: 25px;
      opacity: 0;
      visibility: hidden;
      overflow: hidden;
      transition: $transition;
      text-align: right;
      transform: translateX(100%);
    }
  }

  &__items.open &__phone {
    @include responsive($mobile) {
      opacity: 1;
      visibility: visible;
      transform: translateX(0);
    }
  }

  &__separator {
    background: $color-text;
    width: 2.5px;
    height: 14px;
    margin: 0 0 3.2px;
  }
}

.icon-phone {
  display: none;
  @include icon_phone();
  @include responsive($mobile) {
    display: block;
  }
}
</style>
