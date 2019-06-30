var app = new Vue({
    el: '#app',
    data: {
        todo: '',
        todos: [
        ]
    },
    methods: {
        save: function (todo) {
            let id = this.todos.length;
            this.todos.push({ id: id + 1, text: todo, done: false });
            this.todo = '';
        },
        revert: function (id) {
            this.todos.forEach((todo) => {
                let cursor_id = todo.id;

                if (id == cursor_id) {
                    if (todo.done == false) {
                        todo.done = true;
                    } else {
                        todo.done = false;
                    }
                }
            });
        },

    }
});