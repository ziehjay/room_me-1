
<template>
  <div class="purchasing">
    <v-container class="my-5">
      <h3 class="heading greylighten-5--text">Einkaufsliste:</h3>
      <span>
        kannst Du Artikel, die gekauft werden müssen, in die Einkaufsliste eintragen.
        Deine Mitbewohner werden per Push-Benachrichtigung informiert!
      </span>
      <v-card flat class="pa-3">
        <v-row wrap justify-space-around>
          <v-col xs="12" sm="12" md="6">
            <div class="caption grey--text">Einkaufsliste:</div>
            <div>
              <v-checkbox 
              v-model="checkbox" 
              v-for="n in 3" 
              :key="n" 
              :label="`Checkbox 1: ${checkbox.toString()}`"
              :value="n">
          
              </v-checkbox>
             
            </div>
          </v-col>
          <v-col xs="12" sm="6" md="3">
            <div>Hier kannst Du Artikel, dichtigung informiert!</div>
          </v-col>
          <v-col xs="12" sm="6" md="3">
            <div>Hböabaöbfö</div>
          </v-col>
        </v-row>
      </v-card>
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