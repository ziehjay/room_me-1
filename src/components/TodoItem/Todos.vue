<template>
    <div class="hello">
        <!-- For-each
        todo is the singular name of each object, v-bind:key points to it's ID, making it unique. However it would also work using v-bind:key="todo" -->
        <div v-bind:key="todo.id" v-for="todo in todos">
            <!-- <h3>{{todo.title}}</h3> -->
            <!-- We are catching the event the other component sends
            and fire it once more, so it reaches App.vue -->
            <TodoItem v-bind:todo="todo" v-on:del-todo="$emit('del-todo', todo.id)"/>
        </div>
    </div>
</template>

<script>
    import TodoItem from "./TodoItem.vue";

    export default {
        name: 'Todos',
        components: {
            TodoItem
        },
        props: ["todos"]
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
