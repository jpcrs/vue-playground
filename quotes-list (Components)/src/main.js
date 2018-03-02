import Vue from 'vue'
import App from './App.vue'

//Only if i was using eventBus
// export const eventBus = new Vue({
//   methods: {
//     addQuote(quote) {
//       this.$emit('addNewQuote', quote);
//     }
//   }
// });

new Vue({
  el: '#app',
  render: h => h(App)
})
