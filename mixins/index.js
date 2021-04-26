export default {
  methods: {
    handleResize() {
      console.log('handleResize');
      this.$store.commit('setHeight', window.innerHeight);
      this.$store.commit('setWidth', window.innerWidth);
    }
  }
}