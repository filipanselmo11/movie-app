<template>
  <v-app>
    <v-main>
      <MovieAppBar />
      <MovieInput :inputMovie="inputMovie" />
      <br />
      <v-row>
        <v-col v-for="item in filteredMovies" :key="item.title" cols="12" sm="6" md="4">
          <MovieCard
            :image="item.image"
            :title="item.title"
            :sinopse="item.sinopse" />
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

  data() {
    return {
      movies: [
        {
          id: 1,
          title: 'Homem Aranha',
          image: 'https://c4.wallpaperflare.com/wallpaper/451/794/543/comics-maguire-marvel-movies-wallpaper-preview.jpg',
          sinopse: 'Peter Parker (Tobey Maguire) em uma excursão visita um laboratório de genética a exposição de aranhas de 15 espécies junto com seu amigo Harry Osborn (James Franco) e seu interesse amoroso, Mary Jane Watson (Kirsten Dunst). Lá, Peter é picado por uma aranha geneticamente modificada. Depois de chegar a casa de seu Tio Ben (Cliff Robertson) e sua Tia May (Rosemary Harris), ele acaba inconsciente. Enquanto isso, o pai de Harry, o cientista Norman Osborn (Willem Dafoe), está tentando preservar um contrato militar de importância crucial para sua empresa a Oscorp. Ele testa uma fórmula ampliadora de desempenho em si mesmo, porém, acaba ficando insano e mata seu assistente, Mendel Stromm (Ron Perkins). Na manhã seguinte, Peter descobre que sua visão melhorou, e seu corpo se metamorfoseou em um físico mais musculoso. Na escola, ele descobre que pode produzir teias, e ganha um sentido de aranha, que o salva de ser esmurrado pelo valentão da escola, Flash Thompson (Joe Manganiello), e termina por mandar o mesmo ao chão com um único soco, impressionando seus colegas.'
        },
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
      inputMovie: '',
    }
  },
  computed: {
    filteredMovies() {
      let tempMovies = this.movies;
      if (this.inputMovie != '' && this.inputMovie) {
        tempMovies = tempMovies.filter((item) => {
          return item.title
            .toUpperCase()
            .includes(this.inputMovie.toUpperCase())
        })
      }
      return tempMovies;
    }
  },
})
</script>
