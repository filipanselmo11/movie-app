<template>
  <v-app>
    <v-main>
      <MovieAppBar />
      <MovieInput />
      <br />
      <MovieCard />
      <br />
      <MovieDialog />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import MovieAppBar from './components/MovieAppBar.vue';
import MovieInput from './components/MovieInput.vue';
import MovieCard from './components/MovieCard.vue';
import MovieDialog from './components/MovieDialog.vue';
import axios from 'axios';

export default defineComponent({
  name: 'App',

  components: {
    MovieAppBar,
    MovieInput,
    MovieCard,
    MovieDialog
  },

  created() {
    this.getMovies()
  },

  data() {
    return {
      //
    }
  },
  methods: {
    getMovies() {
      axios.get('titles').then(res => {
        console.log('RES ', res);
      }).catch(error => {
        console.log('ERROR ', error);
      })
    }
  },
})
</script>
