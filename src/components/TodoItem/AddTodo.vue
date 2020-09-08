<template>
    <div>
        <form @submit="addTodo">
            <input type="text" v-model="title" name="title" placeholder="Add Todo...">
            <input type="submit" value="Submit" class="btn">
        </form>
    </div>
</template>

<script>
    export default {
        name: "AddTodo",
        data() {
            return {
                title: ''
            }
        },
        methods: {
            // On hitting submit, calls this function and then emits the event
            addTodo(e) {
                // Stops the form to submit to a file, and instead calls our method
                e.preventDefault();

                const newTodo = {
                    title: this.title,
                    completed: false
                }
                this.$emit('add-todo', newTodo);

                this.title = ""; // clears the input field
            }
        }
    }
</script>

<style scoped>
    form {
        display: flex;
    }

    input[type="text"] {
        flex: 10;
        padding: 5px;
    }

    input[type="submit"] {
        flex: 2;
    }
</style>