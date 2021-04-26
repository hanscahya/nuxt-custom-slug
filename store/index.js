export const state = () => ({
  height: 0,
  width: 0
})

export const mutations = {
  setHeight (state, height) {
    state.height = height
  },
  setWidth (state, width) {
    state.width = width
  }
}