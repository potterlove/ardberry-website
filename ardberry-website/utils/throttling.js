export default (func, delay) => {
  // Previously called time of the function
  let prev = 0
  return (...args) => {
    // Current called time of the function
    let now = new Date().getTime()

    if (now - prev > delay) {
      prev = now

      return func(...args)
    }
  }
}
