<template>
  <v-app>
    <v-main>
      <MovieAppBar />
      <MovieInput :userInput="userInput" :loading="loading" :loaed="loaded" @searchMovie="searchMovie" />
      <br />
      <v-row>
        <v-col v-for="item in movies" :key="item.id" cols="12" sm="6" md="4">
          <MovieCard :image="item.image" :title="item.title" />
          <br />
        </v-col>
      </v-row>
      <!-- <MovieDialog /> -->
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

  // created() {
  //   this.getMovies()
  // },

  data() {
    return {
      movies: [
        { id: 1, title: 'Homem Aranha', image: 'https://c4.wallpaperflare.com/wallpaper/451/794/543/comics-maguire-marvel-movies-wallpaper-preview.jpg' },
        { id: 2, title: 'X Men 2', image: 'https://c4.wallpaperflare.com/wallpaper/758/370/397/movies-x-men-2-wolverine-magneto-wallpaper-preview.jpg' },
        { id: 3, title: 'Django Livre', image: 'https://c4.wallpaperflare.com/wallpaper/161/142/425/movies-django-unchained-text-wallpaper-preview.jpg' },
        { id: 4, title: 'Ju-On', image: 'https://c4.wallpaperflare.com/wallpaper/111/10/338/bunshinsaba-dark-evil-film-wallpaper-preview.jpg' },
        { id: 5, title: 'Senhor dos Anéis 2', image: 'https://c4.wallpaperflare.com/wallpaper/194/440/971/lord-of-the-rings-mordor-mount-doom-eye-of-sauron-wallpaper-preview.jpg' },
        { id: 6, title: 'O Tigre e o Dragão 2', image: 'https://observatoriodocinema.uol.com.br/wp-content/uploads/2015/12/tigreeodragao2.jpg' },
        { id: 7, title: 'Truque de Mestre', image: 'https://flim-1-0-2.s3.eu-central-1.amazonaws.com/thumbs/hd_720px/8a50a952e0ca11eaaad910ddb1aba44f.jpeg' },
        { id: 8, title: 'Massacre da Serra Elétrica', image: 'https://flim-1-0-2.s3.eu-central-1.amazonaws.com/thumbs/hd_720px/0270cfa8e20011eaaad910ddb1aba44f.jpeg' },
        { id: 9, title: 'Capitão América: Guerra Civil', image: 'https://r7k2t3x9.rocketcdn.me/wp-content/uploads/2021/01/img-949.jpg' },
        { id: 10, title: 'Resident Evil 2: Apocalipse', image: 'https://images.alphacoders.com/522/522797.jpg' },
        { id: 11, title: 'Gente Grande 2', image: 'https://images7.alphacoders.com/803/803159.jpg' },
        { id: 12, title: 'Velozes e Furiosos 9', image: 'https://images.alphacoders.com/112/1124633.jpg' },
        { id: 13, title: 'John Wick', image: 'https://images6.alphacoders.com/637/637352.jpg' },
        { id: 14, title: 'Matrix', image: 'https://images8.alphacoders.com/117/1175352.jpg' },
        { id: 15, title: 'Vidro', image: 'https://cdn.ome.lt/uZhkegRcob4aBQmfm8Zw_DsLwKk=/1200x630/smart/extras/conteudos/7_vdLwCRd.jpg' },
        { id: 16, title: 'Interestelar', image: 'https://images7.alphacoders.com/550/550739.jpg' },
        { id: 17, title: 'A Morte do Demônio', image: 'https://images5.alphacoders.com/403/403329.jpg' },
        { id: 18, title: 'Mortal Kombat (2021)', image: 'https://images5.alphacoders.com/113/1131821.jpg' },
        { id: 19, title: 'O Incrivel Hulk', image: 'https://images8.alphacoders.com/509/509123.png' },
      ],
      loading: false,
      loaded: false,
      userInput: '',
    }
  },
  methods: {
    searchMovie() {
      console.log('Buscando Filme');
      this.loading = true;
      this.movies.forEach(item => {
        if (this.userInput === item.title) {
          this.loading = false;
          this.loaded = true;
          console.log('Filme Encontrado');
        }
      })
      // setTimeout(() => {
      //   this.loading = false;
      //   this.loaded = true;
      //   this.movies.forEach(item => {
      //     if (item.title === this.userInput) {
      //       console.log('Filme Encontrado')
      //     }
      //   })
      // }, 5000);
    }
    // getMovies() {
    //   this.movies.forEach(item => {
    //     console.log(item)
    //   })
    // }
    // getMovies() {
    //   axios.get('titles').then(res => {
    //     console.log('RES ', res);
    //   }).catch(error => {
    //     console.log('ERROR ', error);
    //   })
    // }
  },
})
</script>
