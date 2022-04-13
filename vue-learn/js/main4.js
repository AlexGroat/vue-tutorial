Vue.component("modal", {
  template: `
    <div class="modal is-active">
    <div class="modal-background"></div>
    <div class="modal-content">
      <div class="box">
      <slot></slot>
      </div>
    </div>
    <button class="modal-close is-large" aria-label="close" @click="$emit('close')"></button>
  </div>`,
});

/* line 15 make an announcement, use events. when clicked, emit a close event 
   which will be trigged in index9.html line 21 which will set the showModal
   value to false 
*/

// modal is-active is default as we use vue to control it

new Vue({
  el: "#root",

  data: {
    showModal: false,
  },
});
