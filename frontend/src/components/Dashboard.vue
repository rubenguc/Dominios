<template>
  <v-container>
    <v-layout
      text-center
      wrap
    >
      <v-flex xs12>
        <v-img
          :src="require('../assets/ManSolutions.jpg')"
          class="my-3"
          contain
          height="200"
        ></v-img>
      </v-flex>

      <v-flex mb-4>
        <h1 class="display-2 font-weight-bold mb-3">
          ¡Bienvenido a Dominios!
        </h1>

        <h2 class="headline font-weight-bold mb-3">Sistema desarrollado por pasantes de la UCLA
          <br> en Man Solutions</h2>
       
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    
  })
}
</script>
