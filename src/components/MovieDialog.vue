<script lang="ts">

import { defineComponent } from 'vue';

export default defineComponent({
    name: 'MovieDialog',
    data() {
        return {
            dialog: false,
        }
    },

    methods: {
        openDialog() {
            this.dialog = true;
        },
        closeDialog() {
            this.dialog = false;
        }
    },
})

</script>

<template>
    <div class="text-center">
        <v-btn color="orange" @click="openDialog">
            Explore
        </v-btn>
        <v-dialog v-model="dialog" width="500px" persistent>
            <v-card>
                <v-card-text>
                    <v-expansion-panels>
                        <v-expansion-panel>
                            <v-expansion-panel-title>
                                O Tigre e o Dragão
                            </v-expansion-panel-title>
                            <v-expansion-panel-text>
                                Lorem ipsum seculorum asjdahsjdhadjhadjksa
                            </v-expansion-panel-text>
                        </v-expansion-panel>
                    </v-expansion-panels>
                </v-card-text>
                <v-card-actions>
                    <v-btn color="orange" @click="closeDialog">Fechar</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
    <!--  -->
</template>
