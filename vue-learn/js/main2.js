// create custom global view component called task
Vue.component("task-list", {
  // slot the user input inside the task
  /* when there is a template in a component, it always needs to have a single root element
    wrap it in a div */
  template: `
    <div>
    <task v-for="task in tasks">{{ task.description }}</task>
    </div>
`,

  data() {
    return {
      tasks: [
        { description: "Go to the store", completed: true },
        { description: "Go to the bank", completed: true },
        { description: "Go to the concert", completed: false },
      ],
    };
  },
});

// create custom global view component called task
Vue.component("task", {
  // slot the user input inside the task
  template: "<li><slot></li>",

  /* components can return data as a function, not an object
       as its not linked to an instance of Vue */
  data() {
    // data function which returns an object
    return {};
  },
});

new Vue({
  el: "#root",

  // regular instances of view can return data as an object
  data: {},
});
