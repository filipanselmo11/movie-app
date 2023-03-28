<template>
  <v-app>
    <v-main>
      <MovieAppBar/>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import MovieAppBar from './components/MovieAppBar.vue';

export default defineComponent({
  name: 'App',

  components: {
    MovieAppBar
},

  data () {
    return {
      //
    }
  },
})
</script>
