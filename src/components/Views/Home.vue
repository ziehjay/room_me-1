<template>
    <v-container class="home" fluid>
        <!--        <h1>-->
        <!--            <v-icon color="#ffffff">mdi-home</v-icon>-->
        <!--        </h1>-->
        <v-carousel
                height="400"
                hide-delimiter-background
                show-arrows-on-hover
        >
            <v-carousel-item
                    v-for="(post, i) in posts"
                    :key="i"
            >
                <v-sheet
                        :color="colors[i]"
                        height="100%"
                >
                    <v-row
                            class="fill-height"
                            align="center"
                            justify="center"
                    >
                        <div class="posts">
                            <v-card elevation="10" max-width="100%">
                                <v-card-title>
                                    {{ post.postTitle }}
                                </v-card-title>
                                <v-card-text>
                                    {{post.postContent}}
                                </v-card-text>
                            </v-card>
                            <comments
                                    :comments_wrapper_classes="['custom-scrollbar', 'comments-wrapper']"
                                    :comments="comments"
                                    :current_user="current_user"
                                    @submit-comment="submitComment"
                            ></comments>
                        </div>

                    </v-row>
                </v-sheet>
            </v-carousel-item>
        </v-carousel>

        <div class="comments">
            <v-layout col justify-space-between>
                <v-flex xs12 md6>
                    <h1>Comments</h1>
                </v-flex>
                <v-flex xs12 md6>

                    <v-dialog
                            v-model="dialog"
                            width="500"
                    >
                        <template v-slot:activator="{ on }">
                            <v-btn
                                    color="#9FB18F"
                                    dark
                                    v-on="on"
                            >
                                Add comment
                            </v-btn>
                        </template>
                        <v-card>
                            <v-card-title
                                    class="headline grey lighten-2"
                                    primary-title
                            >
                                New comment
                            </v-card-title>
                            <div class="d-flex">
                                <div>
                                    <v-card-actions>
                                        <v-list-item-avatar size="50">
                                            <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
                                        </v-list-item-avatar>
                                    </v-card-actions>
                                </div>

                                <v-col cols="12" md="9">
                                    <v-textarea
                                            filled
                                            name="input-7-4"
                                            value="..."
                                    ></v-textarea>
                                </v-col>
                            </div>
                            <v-divider></v-divider>

                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn
                                        color="primary"
                                        text
                                        @click="dialog = false"
                                >
                                    Send
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>


                </v-flex>
            </v-layout>

            <v-layout col wrap>
                <v-flex xs12 md6>
                    <v-card elevation="10" max-width="90%">
                        <v-card-title>
                            Title
                        </v-card-title>
                        <v-card-text>
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                            invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
                            et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
                            Lorem ipsum dolor sit amet.
                        </v-card-text>
                    </v-card>
                </v-flex>
                <v-flex xs12 md6>
                    <v-card elevation="10" max-width="90%">
                        <v-card-title>
                            Title
                        </v-card-title>
                        <!--                        <v-card-text v-bind:comment>-->
                        <v-card-text v-bind:key="todo.id" v-for="todo in todos">
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                            invidunt ut labore et dolore magna aliquyam erat.
                        </v-card-text>
                    </v-card>
                </v-flex>
            </v-layout>
        </div>

        <div class="comments">
            <v-layout col justify-space-between>
                <v-flex xs12 md6>
                    <h1>Comments</h1>
                </v-flex>
                <v-flex xs12 md6>

                    <v-dialog
                            v-model="dialog"
                            width="500"
                    >
                        <template v-slot:activator="{ on }">
                            <v-btn
                                    color="#9FB18F"
                                    dark
                                    v-on="on"
                            >
                                Add comment
                            </v-btn>
                        </template>
                        <v-card>
                            <v-card-title
                                    class="headline grey lighten-2"
                                    primary-title
                            >
                                New comment
                            </v-card-title>
                            <div class="d-flex">
                                <div>
                                    <v-card-actions>
                                        <v-list-item-avatar size="50">
                                            <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
                                        </v-list-item-avatar>
                                    </v-card-actions>
                                </div>

                                <v-col cols="12" md="9">
                                    <v-textarea
                                            filled
                                            name="input-7-4"
                                            value="..."
                                    ></v-textarea>
                                </v-col>
                            </div>
                            <v-divider></v-divider>

                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn
                                        color="primary"
                                        text
                                        @click="dialog = false"
                                >
                                    Send
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>


                </v-flex>
            </v-layout>

            <v-layout col wrap>
                <v-flex xs12 md6>
                    <v-card elevation="10" max-width="90%">
                        <v-card-title>
                            Title
                        </v-card-title>
                        <v-card-text>
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                            invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
                            et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
                            Lorem ipsum dolor sit amet.
                        </v-card-text>
                    </v-card>
                </v-flex>
                <v-flex xs12 md6>
                    <v-card elevation="10" max-width="90%">
                        <v-card-title>
                            Title
                        </v-card-title>
                        <!--                        <v-card-text v-bind:comment>-->
                        <v-card-text v-bind:key="todo.id" v-for="todo in todos">
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                            invidunt ut labore et dolore magna aliquyam erat.
                        </v-card-text>
                    </v-card>
                </v-flex>
            </v-layout>
        </div>
    </v-container>
</template>

<script>
    import axios from "axios";

    export default {
        /*
        beforeCreate: function () {
            document.body.className = 'home';
        },*/
        name: 'Home',

        // Leer
        data() {
            return {
                posts: [
                    {
                        postId: 1,
                        postAuthor: 'Peter',
                        postTitle: 'Hi friends!',
                        postContent: 'Who wants to go to the beach tomorrow?',
                        postTimeDate: '06.06.2020, 13:00',
                        comments: [
                            {
                                commentAuthor: 'Clara',
                                commentContent: 'Me!',
                                commentTimeDate: '06.06.2020, 13:30',
                            }
                        ]
                    }, {
                        postid: 2,
                        postAuthor: 'Clara',
                        postTitle: 'We need to buy cleaning supplies.',
                        postContent: 'See title.',
                        postTimeDate: '07.06.2020, 14:00',
                        comments: [
                            {
                                commentAuthor: '',
                                commentContent: '',
                                commentTimeDate: '',
                            }
                        ]
                    }
                ],
                commentTitle: String,
                commentText: String,
                commentTimeDate: Object,
                //activeUser von App.vue;
                colors: [
                    'indigo',
                    'warning',
                    'pink darken-2',
                    'red lighten-1',
                    'deep-purple accent-4',
                ],
                slides: [
                    'First',
                    'Second',
                    'Third',
                    'Fourth',
                    'Fifth',
                ]
            }
        },
        methods: {
            postComment() {

            },
            getComments() {
                axios.get('https://jsonplaceholder.typicode.com/comments?_limit=5')
                    // res = response, array wird damit gefüllt...
                    .then(res => this.posts = res.data)
                    .catch(err => console.log(err));
            }
        },
        created() {
        }
    }
</script>

<style>
    .comments {
        margin-top: 30px;
        background: #B1493D;
        border-radius: 25px;
        padding: 20px;
        padding-bottom: 50px;
    }

    .comments h1 {
    }

    .home {
        margin: 5px;
    }

   .roomme  .v-card__title {
        font-size: 1rem;

    }
</style>
