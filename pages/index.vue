<template>
  <div class="page-index">
    <HeroBlock />
    <TopFeatures />
  </div>
</template>

<script>
export default {
  name: 'IndexPage'
}
</script>

<style scoped lang="scss">
.page-index {
  @include responsive($header_breakpoint) {
    padding-top: calc($header-height);
  }
}
</style>
