<template lang="pug">
  div.main
    div Products

</template>

<script lang="javascript">
export default {
  data() {
    return {
      menus: []
    }
  },

  async mounted() {
  }
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
  a {
    margin: 10px;
  }
</style>
