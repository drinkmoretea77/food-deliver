<template>
  <transition name="header-transition">
    <header
      v-if="!headerTransitionPoint"
      ref="headerDesktop"
      class="site-header site-header--desktop"
      :class="{ 'site-header--index': isHomePage }"
    >
      <div class="site-header__logo-delivery">
        <a href="/" class="site-header__logo logo">FoodDeliver</a>
        <DeliveryToggle class="site-header__delivery-toggle" />
      </div>
      <MainNav class="site-header__main-nav" />
      <ContactInfo class="site-header__contact-info" />
    </header>
    <header
      v-else
      ref="headerMobile"
      class="site-header site-header--mobile"
      :class="{ 'site-header--index': isHomePage }"
    >
      <div class="site-header__burger-menu burger-menu site-header-m__item">
        <button
          class="burger-menu__button burger-button"
          type="button"
          @click="toggleBurgerMenu"
        />
        <transition name="burger-menu">
          <div
            v-if="isBurgerMenuOpen"
            class="burger-menu__content @touchstart="
            @touchstart="handleTouchStart"
            @touchmove="handleTouchMove"
            @touchcancel="closeBurgerMenu"
          >
            <a href="/" class="logo">FoodDeliver</a>
            <div class="burger-menu__toggle">
              <DeliveryToggle class="site-header__delivery-toggle" />
            </div>
            <MainNavMob class="site-header__main-nav-mob burger-menu" />
          </div>
        </transition>
        <transition name="burger-menu-overlay">
          <div
            v-if="isBurgerMenuOpen"
            class="burger-menu__overlay"
            @click="closeBurgerMenu"
          >
            &nbsp;
          </div>
        </transition>
      </div>
      <a href="/" class="site-header-m__item logo">FoodDeliver</a>
      <ContactInfo class="site-header-m__item contact-info-m" />
    </header>
  </transition>
</template>

<script>
export default {
  name: 'SiteHeader',
  data () {
    return {
      isBurgerMenuOpen: false,
      touchStartX: 0,
      touchEndX: 0,
      isSticky: false
    }
  },
  computed: {
    headerTransitionPoint () {
      return this.$screen.width < 1366
    },
    isHomePage () {
      return this.$route.path === '/'
    }
  },
  mounted () {
    this.initStickyHeader()
  },
  methods: {
    toggleBurgerMenu () {
      this.isBurgerMenuOpen = !this.isBurgerMenuOpen
    },
    closeBurgerMenu () {
      this.isBurgerMenuOpen = false
    },
    handleTouchStart (event) {
      this.startX = event.touches[0].clientX
    },
    handleTouchMove (event) {
      const touch = event.touches[0]
      const deltaX = touch.clientX - this.startX
      if (deltaX < -50) {
        this.closeBurgerMenu()
      }
    },
    initStickyHeader () {
      const gsap = this.$gsap
      const header = !this.headerTransitionPoint
        ? this.$refs.headerDesktop
        : null

      if (header?.classList.contains('site-header--index')) {
        gsap.to(header, {
          scrollTrigger: {
            start: 'top -70',
            end: 99999,
            toggleClass: {
              className: 'site-header--sticky',
              targets: 'header'
            }
          }
        })
      }
    }
  }
}
</script>

<style scoped lang="scss">
.site-header {
  height: $header-height;
  position: fixed;
  overflow: hidden;
  left: 0;
  right: 0;
  top: 0;
  bottom: auto;
  z-index: 10;
  display: flex;
  flex-flow: row nowrap;
  align-items: stretch;
  justify-content: space-between;

  &:not(.site-header--index),
  &--sticky {
    box-shadow: $box-shadow;
    background: $color-bg;
    position: fixed;
    transition: $transition;
  }

  &__logo-delivery {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    gap: 27px;
    flex-grow: 1;
    width: 100%;
    max-width: 30%;
    padding: 0 0 0 58px;
  }
  &__main-nav {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
    width: 100%;
    max-width: 60%;
  }
  &__contact-info {
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-end;
    align-items: center;
    flex-grow: 1;
    width: 100%;
    max-width: 30%;
    padding: 0 30px 0 0;
  }
  &__burger-menu {
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center;
    padding: 0 0 0 20px;
  }

  &--mobile {
    position: fixed;
    justify-content: flex-start;
    gap: 15px;
    box-shadow: $box-shadow;
    background: $color-bg;
  }

  &--mobile .logo {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  &--mobile .contact-info-m {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-right: 20px;
    margin-left: auto;
  }
}

.logo {
  font-family: "Verdana", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 1.4;
  color: $color-text;
}

.burger-button {
  display: inline-block;
  width: 30px;
  height: 20px;
  position: relative;
  cursor: pointer;

  &,
  &::before,
  &::after {
    content: "";
    display: block;
    background-color: $color-text;
    height: 2px;
    border-radius: 2px;
    transition: $transition;
  }

  &::before,
  &::after {
    position: absolute;
    width: 100%;
  }

  &::before {
    top: -6px;
  }

  &::after {
    top: 6px;
  }

  &.active {
    &::before {
      transform: rotate(45deg) translate(6px, 6px);
    }

    &::after {
      transform: rotate(-45deg) translate(6px, -6px);
    }
  }
}
.burger-menu__content {
  position: fixed;
  top: 0;
  left: 0;
  width: calc(100% - 20px);
  height: 100%;
  background-color: #ffffff;
  padding: 20px;
  z-index: 1000;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  gap: 40px;
}

.burger-menu__overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: $color-overlay;
  z-index: 999;
}

.burger-menu__toggle {
  flex-grow: 0;
}

.burger-menu-enter-active,
.burger-menu-leave-active {
  transition: $transition;
}

.burger-menu-enter,
.burger-menu-leave-to {
  transform: translateX(-100%);
}

.burger-menu-overlay-enter-active,
.burger-menu-overlay-leave-active {
  transition: $transition-overlay;
}

.burger-menu-overlay-enter,
.burger-menu-overlay-leave-to {
  opacity: 0;
  visibility: hidden;
}

.overlay-transition-enter-active,
.overlay-transition-leave-active {
  transition: $transition-overlay;
}

.overlay-transition-enter {
  opacity: 0;
}

.overlay-transition-enter-to,
.overlay-transition-leave {
  opacity: 1;
}
</style>
