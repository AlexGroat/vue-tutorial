// create custom global view component called task
Vue.component("task", {
  // slot the user input inside the task
  template: "<li><slot></li>",

  /* components can return data as a function, not an object
     as its not linked to an instance of Vue */
  data() {
      // data function which returns an object
      return {

      }
  },
});

new Vue({
  el: "#root",

  // regular instances of view can return data as an object
  data: {},
});
