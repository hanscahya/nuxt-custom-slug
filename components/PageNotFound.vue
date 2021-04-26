<template lang="pug">
  div.main
    div Page Not Found
    nuxt-link(to="/") Home
</template>

<script lang="javascript">
export default {
}
</script>

<style lang="scss">
  .main {
    height: 100vh;
    width: 100vw;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
</style>
