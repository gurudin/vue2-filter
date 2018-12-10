import toggleComponent from "./ToggleButton.vue";

const ToggleButton = {
  install: function (Vue) {
    if (typeof window !== 'undefined' && window.Vue) {
      Vue = window.Vue
    }

    Vue.component('ToggleButton', toggleComponent)
  }
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(ToggleButton);
}

export default ToggleButton
