<template>
  <v-app>
    <v-main>
      <MovieAppBar/>
      <MovieInput/>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import MovieAppBar from './components/MovieAppBar.vue';
import MovieInput from './components/MovieInput.vue';

export default defineComponent({
  name: 'App',

  components: {
    MovieAppBar,
    MovieInput
},

  data () {
    return {
      //
    }
  },
})
</script>
