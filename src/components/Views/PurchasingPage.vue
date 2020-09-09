
<template>
  <div class="purchasing">
    <v-container class="my-5">
      <h3 class="heading greylighten-5--text">Einkaufsliste:</h3>
      <span>
        kannst Du Artikel, die gekauft werden müssen, in die Einkaufsliste eintragen.
        Deine Mitbewohner werden per Push-Benachrichtigung informiert!
      </span>

      <v-row wrap justify-space-around>
        <v-col xs="12" sm="12" md="6">
          <v-card flat class="pa-3">
            <v-simple-table>
              <template v-slot:default>
                <thead>
                  <tr>
                    <th class="text-left"></th>
                    <th class="text-left">Bezeichnung</th>
                    <th class="text-left">Status</th>
                    <th class="text-left"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in desserts" :key="item.name">
                    <td>
                      <v-checkbox v-model="checkbox"></v-checkbox>
                    </td>
                    <td>{{ item.name }}</td>
                    <td>{{ item.statusBoolean }}</td>
                    <td>
                      <v-btn text>
                        <v-icon>mdi-check</v-icon>
                      </v-btn>
                      <v-btn text>
                        <v-icon>mdi-close</v-icon>
                      </v-btn>
                    </td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </v-card>
        </v-col>
        <v-col xs="12" sm="6" md="3">
          <div>Hier kannst Du Artikel, dichtigung informiert!</div>
        </v-col>
        <v-col xs="12" sm="6" md="3">
          <div>Hböabaöbfö</div>
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
      radioGroup: 1,
      switch1: true,
      desserts: [
        {
          name: "Spüli",
          statusBoolean: false,
        },
        {
          name: "Müllsäcke",
          statusBoolean: false,
        },
        {
          name: "Ingwerbröd",
          statusBoolean: false,
        },
      ],
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