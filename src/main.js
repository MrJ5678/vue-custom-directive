import { createApp } from "vue"
import App from "./App.vue"

const app = createApp(App)

// Vue 2 -> Vue.directive
app.directive("font-size", {
  beforeMount: (el, binding) => {
    // console.log(el)
    // console.log(binding)
    let size = 12
    if (binding.modifiers.small) {
      size = 8
    } else if (binding.modifiers.large) {
      size = 24
    }
    if (binding.modifiers.red) {
      el.style.color = "#ff0000"
    }
    el.style.fontSize = `${size}px`
  },
  updated: (el, binding) => {
    // console.log(el)
    // console.log(binding)
    el.style.fontSize = `${binding.value}px`
  },
})

app.mount("#app")
