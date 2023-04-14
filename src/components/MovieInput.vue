<script lang="ts">

import { defineComponent } from 'vue';

export default defineComponent({
    name: 'MovieInput',
    props: {
        inputMovie: {
            type: String,
        },
    },
    data() {
        return {
            inputMovieLocal: '',
        }
    },
    watch:{
        inputMovie(val) {
            this.inputMovieLocal = val
        }
    },
})
</script>

<template>
    <v-card class="mx-auto mt-10" color="grey" max-width="400">
        <v-card-text>
            <v-text-field v-model="inputMovieLocal" density="compact" variant="solo" label="Pesquisar Filmes"
                append-inner-icon="mdi-magnify" single-line hide-details></v-text-field>
        </v-card-text>
    </v-card>
</template>