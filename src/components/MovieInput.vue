<script lang="ts">

import { defineComponent } from 'vue';

export default defineComponent({
    name: 'MovieInput',
    data() {
        return {
            loaded: false,
            loading: false,
        }
    },

    methods: {
        search() {
            this.loading = true;
            setTimeout(() => {
                this.loading = false;
                this.loaded = true;
            }, 2000);
        }
    },
})
</script>

<template>
    <v-card class="mx-auto mt-10" color="grey" max-width="400">
        <v-card-text>
            <v-text-field :loading="loading" density="compact" variant="solo" label="Pesquisar Filmes"
                append-inner-icon="mdi-magnify" single-line hide-details @click:append-inner="search"></v-text-field>
        </v-card-text>
    </v-card>
</template>