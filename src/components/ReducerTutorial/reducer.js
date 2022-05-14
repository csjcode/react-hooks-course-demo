export const reducer = (state,action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1, showText: state.showText }
    case "RESET":
      return { count: 0, showText: state.showText }
    case "TOGGLETEXT":
      return { count: state.count, showText: !state.showText }
    default:
      return { }
  }
}