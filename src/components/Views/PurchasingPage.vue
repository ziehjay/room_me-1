
<template>
  <div class="purchasing">
    <v-container class="my-5">
      <v-row wrap justify-space-around>
        <v-col xs="12" sm="12" md="6">
          <v-card flat class="pa-3">
            <v-simple-table>
              <template v-slot:default>
                <thead>
                  <tr>
                    <th class="text-left">Bezeichnung</th>
                    <th class="text-left">Status</th>
                    <th class="text-left">Annehmen</th>
                    <th class="text-left">Ablehnen</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in shoppingList" :key="item.articleName">
                    <td>{{ item.articleName }}</td>
                    <td>{{ item.statusBoolean }}</td>
                    <td>
                      <v-btn text>
                        <v-icon>mdi-check</v-icon>
                      </v-btn>
                    </td>
                    <td>
                      <v-btn text>
                        <v-icon>mdi-close</v-icon>
                      </v-btn>
                    </td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
            <v-container>
              <v-row>
                <v-col cols="12" sm="9" xs="12">
                  <v-text-field label="Want to add something?" single-line></v-text-field>
                </v-col>
                <v-col cols="3" sm="3" xs="12">
                  <v-btn color="orange" label="add" single-line>+</v-btn>
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </v-col>
        <v-col xs="12" sm="6" md="3">
          <v-card class="mx-auto" max-width="344">
            <v-list-item three-line>
              <v-list-item-content>
                <div class="overline mb-4">Übersicht</div>
                <v-list>
                  <v-list-item v-for="item in overviewList" :key="item.username">
                    <v-list-item-avatar>
                      <v-img class="overview-pic" v-bind:src="item.profilePicture"></v-img>
                    </v-list-item-avatar>
                    <v-list-item-content>
                      <v-list-item-title>{{ item.username }}</v-list-item-title>
                      <v-list-item-subtitle>{{ item.balance }}</v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
              </v-list-item-content>
            </v-list-item>
          </v-card>
        </v-col>
        <v-col xs="12" sm="6" md="3">
          <v-card elevation="24" max-width="444" class="mx-auto">
            <v-system-bar lights-out></v-system-bar>
            <v-carousel
              :continuous="false"
              :cycle="cycle"
              :show-arrows="false"
              hide-delimiter-background
              delimiter-icon="mdi-minus"
              height="300"
            >
              <v-carousel-item v-for="(slide, i) in slides" :key="i">
                <v-sheet :color="colors[i]" height="100%" tile>
                  <v-row class="fill-height" align="center" justify="center">
                    <div class="display-3">{{ slide }} Slide</div>
                  </v-row>
                </v-sheet>
              </v-carousel-item>
            </v-carousel>
            <v-list two-line>
              <v-list-item>
                <v-list-item-avatar>
                  <v-img src="https://cdn.vuetifyjs.com/images/john.png"></v-img>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title>Spüli, Klopapier</v-list-item-title>
                  <v-list-item-subtitle>Gekauft am 03.05.20</v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-action></v-list-item-action>
              </v-list-item>
            </v-list>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checkbox: true,
      shoppingList: [
        {
          articleName: "Spüli",
          statusBoolean: false,
        },
        {
          articleName: "Müllsäcke",
          statusBoolean: false,
        },
        {
          articleName: "Ingwerbröd",
          statusBoolean: false,
        },
      ],
      overviewList: [
        {
          username: "Chris",
          profilePicture:
            "https://images.unsplash.com/photo-1531927557220-a9e23c1e4794?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
          balance: "+ " + "02.50" + " €",
        },
        {
          username: "Hannah",
          profilePicture:
            "https://images.unsplash.com/photo-1457131760772-7017c6180f05?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
          balance: "- " + "01.50" + " €",
        },
        {
          username: "Rufus",
          profilePicture:
            "https://images.unsplash.com/photo-1517423568366-8b83523034fd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
          balance: "- " + "01.50" + " €",
        },
        {
          username: "Tim",
          profilePicture:
            "https://images.unsplash.com/photo-1516210673878-84fa2173547b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
          balance: "+ " + "02.50" + " €",
        },
      ],
      colors: [
        "green",
        "secondary",
        "yellow darken-4",
        "red lighten-2",
        "orange darken-1",
      ],
      cycle: false,
      slides: ["First", "Second", "Third", "Fourth", "Fifth"],
    };
  },
};
</script>

 <!-- 

  <v-row wrap justify-space-around>
        <v-col xs="12" sm="12" md="6">
        <v-btn outlined block color="blue">1</v-btn>
        </v-col>
        <v-col xs="6" sm="6" md="3">
        <v-btn outlined block color="blue">2</v-btn>
        </v-col>
        <v-col xs="6" sm="6" md="3">
        <v-btn outlined block color="blue">2</v-btn>
        </v-col>
      </v-row>




        -->