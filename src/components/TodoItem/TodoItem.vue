<template>
    <!--  We make the styling of the class conditional based on one of todos attributes (completed)-->
    <div class = "todo-item" v-bind:class = "{'is-complete':todo.completed}">
        <p>
            <!-- We define an event: Whenever we click the checkbox, a method gets called that changes the state of "completed" -->
            <input type="checkbox" v-on:change="markComplete">
            {{todo.title}}</p>
        <!-- We fire off an event along with the id of the todoItem using a parameter -->
        <button @click="$emit('del-todo', todo.id)" class="del">x</button>
    </div>


</template>

<script>
    export default {
        name: "TodoItem",
        // We accept props of that name
        props: ["todo"],
        methods: {
            markComplete(){
                this.todo.completed = !this.todo.completed;
            }
        } /*,

    ALle daten aus dem Back-End laden, siehe Login Query
    created(){
        this.loadComents(); Methode schreibt Samy

        // oben dann:
        in data: comments: [], ... <--- hier kommen die kommentare aus dem back-end rein
    },
    mounted(),
     */
    }
</script>

<style scoped>
    .todo-item{
        background: #f4f4f4;
        padding: 10px;
        border-bottom: 1px #ccc dotted;
    }

    .is-complete{
        text-decoration: line-through;
    }

    .del{
        background: #ff0000;
        color: #fff;
        border: none;
        padding: 5px 9px;
        border-radius: 50%;
        cursor: pointer;
        float: right;
    }
</style>