export default {
  bind (el, binding) {
    el._HandleScrollHandler_ = event => binding.value(event)
    document.body.addEventListener('mousewheel', el._HandleScrollHandler_)
    document.body.addEventListener('touchmove', el._HandleScrollHandler_)
  },
  unbind (el) {
    document.body.removeEventListener('mousewheel', el._HandleScrollHandler_)
    document.body.removeEventListener('touchmove', el._HandleScrollHandler_)
  }
}
