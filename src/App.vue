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
        {
          id: 2,
          title: 'X Men 2',
          image: 'https://c4.wallpaperflare.com/wallpaper/758/370/397/movies-x-men-2-wolverine-magneto-wallpaper-preview.jpg',
          sinopse: 'Stryker, um ex-comandante perverso do exército, tem a chave para o passado de Wolverine e o futuro dos X-Men. Esta ameaça reacende a chamada para um ato de registro mutante. Stryker inicia um ataque à mansão e escola do Professor Xavier. Depois de escapar de sua cela de plástico, Magneto propõe uma parceria com Xavier e os X-Men para combater esse novo inimigo que ambos têm em comum.'
        },
        {
          id: 3,
          title: 'Django Livre',
          image: 'https://c4.wallpaperflare.com/wallpaper/161/142/425/movies-django-unchained-text-wallpaper-preview.jpg',
          sinopse: 'No sul dos Estados Unidos, o ex-escravo Django faz uma aliança inesperada com o caçador de recompensas Schultz para caçar os criminosos mais procurados do país e resgatar sua esposa de um fazendeiro que força seus escravos a participar de competições mortais.'
        },
        {
          id: 4,
          title: 'Ju-On',
          image: 'https://c4.wallpaperflare.com/wallpaper/111/10/338/bunshinsaba-dark-evil-film-wallpaper-preview.jpg',
          sinopse: 'No Japão, dois fantasmas vingativos atormentam e matam qualquer um que entre na casa onde eles morreram: Kakayo, uma mulher assassinada pelo marido, e seu filho pequeno, Toshio.'
        },
        {
          id: 5,
          title: 'Senhor dos Anéis 2',
          image: 'https://c4.wallpaperflare.com/wallpaper/194/440/971/lord-of-the-rings-mordor-mount-doom-eye-of-sauron-wallpaper-preview.jpg',
          sinopse: 'Após a captura de Merry e Pippy pelos orcs, a Sociedade do Anel é dissolvida. Frodo e Sam seguem sua jornada rumo à Montanha da Perdição para destruir o anel e descobrem que estão sendo perseguidos pelo misterioso Gollum. Enquanto isso, Aragorn, o elfo e arqueiro Legolas e o anão Gimli partem para resgatar os hobbits sequestrados e chegam ao reino de Rohan, onde o rei Theoden foi vítima de uma maldição mortal de Saruman.',
        },
        {
          id: 6,
          title: 'O Tigre e o Dragão 2',
          image: 'https://observatoriodocinema.uol.com.br/wp-content/uploads/2015/12/tigreeodragao2.jpg',
          sinopse: 'Yu Shu Lien, Snow Vase e Silent Wolf protegem uma espada legendária de um perigoso senhor de guerra e sua clã.',
        },
        { 
          id: 7,
          title: 'Truque de Mestre', 
          image: 'https://flim-1-0-2.s3.eu-central-1.amazonaws.com/thumbs/hd_720px/8a50a952e0ca11eaaad910ddb1aba44f.jpeg',
          sinopse: 'Um grupo de ilusionistas encanta o público com suas mágicas e também rouba bancos em outro continente, distribuindo a quantia para os próprios espectadores. O agente do FBI Dylan Hobbs está determinado a capturá-los e conta com a ajuda de Alma Vargas, uma detetive da Interpol, e também de Thaddeus Bradley, um veterano desmistificador de mágicos que insiste que os assaltos são realizados a partir de disfarces e jogos envolvendo vídeos.',
        },
        { 
          id: 8, 
          title: 'Massacre da Serra Elétrica', 
          image: 'https://flim-1-0-2.s3.eu-central-1.amazonaws.com/thumbs/hd_720px/0270cfa8e20011eaaad910ddb1aba44f.jpeg',
          sinopse: 'No caminho para visitar o túmulo de seu avô, cinco jovens se perdem e mergulham em um pesadelo sem fim quando conhecem uma família de canibais. Os psicopatas atacam os forasteiros utilizando uma variedade de métodos brutais e sádicos.'
        },
        {
          id: 9, 
          title: 'Capitão América: Guerra Civil', 
          image: 'https://r7k2t3x9.rocketcdn.me/wp-content/uploads/2021/01/img-949.jpg',
          sinopse: 'Depois do ataque de Ultron, os políticos decidem controlar os Vingadores, já que suas ações afetam toda a humanidade. A decisão coloca o Capitão América em rota de colisão com o Homem de Ferro.'
        },
        { 
          id: 10, 
          title: 'Resident Evil 2: Apocalipse', 
          image: 'https://images.alphacoders.com/522/522797.jpg',
          sinopse: 'A heroína Alice tenta livrar Raccoon City de um segundo ataque de zumbis, mas a diabólica Umbrella Corporation e os militares têm uma nova arma secreta. Os sobreviventes Jill Valentine, Carlos Oliviera e Nicholai lutam ao lado de Alice contra um novo e melhorado Matt Addison de codinome Nemesis.'
        },
        { 
          id: 11, 
          title: 'Gente Grande 2', 
          image: 'https://images7.alphacoders.com/803/803159.jpg',
          sinopse: 'Lenny Feder e sua família se mudam para sua cidade natal para ficar perto dos amigos, mas acabam tendo que enfrentar alguns fantasmas do passado, como a covardia diante de valentões e o famigerado bullying na escola.'
        },
        { 
          id: 12,
          title: 'Velozes e Furiosos 9',
          image: 'https://images.alphacoders.com/112/1124633.jpg',
          sinopse: 'Dominic Toretto e Letty vivem uma vida pacata ao lado do filho. Mas eles logo são ameaçados pelo passado de Dom: seu irmão desaparecido Jakob, que retorna e está trabalhando ao lado de Cipher. Cabe a Dom reunir a equipe novamente para enfrentá-los.'
        },
        {
          id: 13, 
          title: 'John Wick', 
          image: 'https://images6.alphacoders.com/637/637352.jpg',
          sinopse: 'John Wick é um lendário assassino de aluguel aposentado, lidando com o luto após perder o grande amor de sua vida. Quando um gângster invade sua casa, mata seu cachorro e rouba seu carro, ele é forçado a voltar à ativa e inicia sua vingança.'
        },
        { 
          id: 14, 
          title: 'Matrix', 
          image: 'https://images8.alphacoders.com/117/1175352.jpg',
          sinopse: 'O jovem programador Thomas Anderson é atormentado por estranhos pesadelos em que está sempre conectado por cabos a um imenso sistema de computadores do futuro. À medida que o sonho se repete, ele começa a desconfiar da realidade. Thomas conhece os misteriosos Morpheus e Trinity e descobre que é vítima de um sistema inteligente e artificial chamado Matrix, que manipula a mente das pessoas e cria a ilusão de um mundo real enquanto usa os cérebros e corpos dos indivíduos para produzir energia.'
        },
        { 
          id: 15, 
          title: 'Vidro', 
          image: 'https://cdn.ome.lt/uZhkegRcob4aBQmfm8Zw_DsLwKk=/1200x630/smart/extras/conteudos/7_vdLwCRd.jpg',
          sinopse: 'Kevin Crumb, um homem com 24 personalidades diferentes, passa a ser perseguido por David Dunn. O jogo de gato e rato entre o homem inquebrável e a Fera é influenciado pela presença de Elijah Price, que manipula seus encontros.'
        },
        { 
          id: 16, 
          title: 'Interestelar', 
          image: 'https://images7.alphacoders.com/550/550739.jpg',
          sinopse: 'As reservas naturais da Terra estão chegando ao fim e um grupo de astronautas recebe a missão de verificar possíveis planetas para receberem a população mundial, possibilitando a continuação da espécie. Cooper é chamado para liderar o grupo e aceita a missão sabendo que pode nunca mais ver os filhos. Ao lado de Brand, Jenkins e Doyle, ele seguirá em busca de um novo lar.'
        },
        { 
          id: 17, 
          title: 'A Morte do Demônio', 
          image: 'https://images5.alphacoders.com/403/403329.jpg',
          sinopse: 'Mia é uma viciada em drogas que, para vencer seus demônios pessoais, vai com seu irmão David, a namorada do irmão, Natalie, e os amigos de infância Olivia e Eric até uma cabana rústica, que pertence à família. Assim que chegam, descobrem que a cabana foi invadida e que o porão parece uma espécie de altar, rodeado por animais mumificados, onde a descoberta de um Livro dos Mortos invoca forças demoníacas. A presença do mal os possui até que apenas um é deixado a lutar pela sobrevivência.',
        },
        { 
          id: 18, 
          title: 'Mortal Kombat (2021)', 
          image: 'https://images5.alphacoders.com/113/1131821.jpg',
          sinopse: 'O lutador de MMA Cole Young não conhece sua herança, nem sabe o motivo do Imperador da Exoterra ter enviado seu melhor guerreiro, Sub-Zero, para ir atrás dele. Temendo pela segurança de sua família, ele se une a outros heróis para proteger a Terra.',
        },
        { 
          id: 19,
          title: 'O Incrivel Hulk',
          image: 'https://images8.alphacoders.com/509/509123.png',
          sinopse: 'O cientista Bruce Banner se esconde no Brasil enquanto busca desesperadamente a cura da mutação que o transforma em um monstro incontrolável. Só assim ele poderá novamente levar uma vida normal e ficar ao lado da mulher que ama. Porém, durante este processo, ele precisa lutar contra o Abominável, um novo inimigo que quer capturá-lo.'
        },
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
