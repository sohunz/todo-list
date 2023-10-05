<template>
  <div class="container-fluid mt-5">
    <div class="wrapper-todo m-auto py-5 px-3 rounded-2">
      <h3>TODO LIST</h3>
      <div class="input mt-4 mb-5">
        <input type="text" class="form-control" v-model="newTodo" />
        <button
          type="button"
          class="btn btn-success"
          @click="addTodo"
          id="btn-add"
        >
          Add
        </button>
      </div>
      <div class="lists">
        <button
          @click="deleteAll"
          class="btn btn-danger mb-2 delete-all"
          v-if="this.todos.length > 0"
        >
          Delete All
        </button>
        <div
          class="list border border-1 rounded-2 p-2 my-2"
          v-for="(todo, index) in todos"
          :key="index"
        >
          <div class="title-add w-75" :class="{ 'done-task': todo.done }">
            {{ todo.text }}
          </div>
          <div class="action" style="display: flex; align-items: center">
            <button
              class="done btn btn-primary mx-2"
              @click="toggleDone(index)"
            >
              {{ todo.done ? "Undone" : "Done" }}
            </button>
            <button class="delete btn btn-danger" @click="removeTodo(index)">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true,
      newTodo: "",
      todos: [],
    };
  },
  methods: {
    addTodo() {
      if (this.newTodo.trim() !== "") {
        this.todos.push({ text: this.newTodo });
        this.newTodo = "";
        this.saveToLocalStorage();
      }
    },
    removeTodo(index) {
      this.todos.splice(index, 1);
      this.saveToLocalStorage();
    },

    toggleDone(index) {
      this.todos[index].done = !this.todos[index].done;
      this.saveToLocalStorage();
    },

    deleteAll() {
      this.todos.splice(this.todos);
      this.saveToLocalStorage();
    },
    saveToLocalStorage() {
      localStorage.setItem("todos", JSON.stringify(this.todos));
    },
  },
  mounted() {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      this.todos = JSON.parse(savedTodos);
    }
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=AR+One+Sans&display=swap');
* {
    font-family: 'AR One Sans', sans-serif;
    font-weight: 600;
}
.done-task {
  text-decoration: line-through;
  color: #777;
}

#btn-add {
  width: 100px;
  margin-left: 10px;
}
.list {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.input {
  display: flex;
  flex-direction: row;
}
.wrapper-todo {
  width: 60%;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
}

@media screen and (max-width: 1200px) {
  .wrapper-todo {
    width: 70%;
  }
}
@media screen and (max-width: 1000px) {
  .wrapper-todo {
    padding: 0px;
  }
  .done,
  .delete,
  .delete-all {
    font-size: 13px;
    margin-top: 10px;
  }
  .wrapper-todo {
    width: 90%;
  }
  .title-add {
    font-size: 14px;
    padding: 0 10px;
    display: flex;
    align-items: center;
  }

  .list .action {
    padding: 10px 0;
    display: flex;
    justify-content: space-between;
  }
}
@media screen and (max-width: 500px) {
  .wrapper-todo {
    padding: 0px;
  }
  h3 {
    font-size: 14px;
  }
  button {
    font-size: 10px;
    margin-top: 10px;
  }
  .wrapper-todo {
    width: 90%;
  }
  .input {
    display: flex;
    flex-direction: column;
  }
  .title-add {
    font-size: 12px;
    padding: 0 10px;
    display: flex;
    align-items: center;
  }
  .list {
    display: flex;
    flex-direction: column;
  }

  .list .action {
    padding: 10px 0;
    display: flex;
    justify-content: space-between;
  }
  #btn-add {
    width: 100%;
    height: 35px;
    margin-left: 0px;
    font-size: 11px;
    margin-bottom: -10px;
  }
}
</style>
