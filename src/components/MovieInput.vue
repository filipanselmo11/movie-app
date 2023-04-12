<script lang="ts">

import { defineComponent } from 'vue';

export default defineComponent({
    name: 'MovieInput',
    props: {
        loaed: {
            type: Boolean,
            default: false,
        },
        loading: {
            type: Boolean,
            default: false,
        },
        userInput: {
            type: String,
        },
    },
    data() {
        return {
            userInputLocal: '',
        }
    },
    watch:{
        userInput(val) {
            this.userInputLocal = val;
        }
    },
    methods: {
        search() {
            this.$emit('searchMovie');
        }
    },
})
</script>

<template>
    <v-card class="mx-auto mt-10" color="grey" max-width="400">
        <v-card-text>
            <v-text-field v-model="userInputLocal" :loading="loading" density="compact" variant="solo" label="Pesquisar Filmes"
                append-inner-icon="mdi-magnify" single-line hide-details @click:append-inner="search"></v-text-field>
        </v-card-text>
    </v-card>
</template>