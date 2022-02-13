<template>
    <v-card>
        <v-card-title>
            <v-text-field
                v-model="searchInput"
                append-icon="mdi-magnify"
                label="Search"
                single-line
                hide-details
            ></v-text-field>
        </v-card-title>
        <v-data-table
            :headers="headers"
            :items="artists"
            :search="searchInput"
            @click:row="handleRowClick"
        >
            <template v-slot:item.actions="{ item }">
                <router-link :to="`/artists/${item.id}`">
                    <v-icon
                        small
                        class="mr-2"
                    >
                        mdi-account-music
                    </v-icon>
                </router-link>
            </template>
        </v-data-table>
    </v-card>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'artists',

    data() {
        return {
            searchInput: '',
            openedArtist: {
                id: -1,
            },
            headers: [
                {
                    text: 'Artist',
                    align: 'start',
                    value: 'name',
                },
                {
                    text: 'Actions',
                    value: 'actions',
                    sortable: false,
                },

            ],
        }
    },

    computed: {
        ...mapGetters([
            'artists',
        ]),
    },

    created() {
        this.$store.dispatch('getArtists')
    },

    methods: {
        handleRowClick(value) {
            this.$router.push(`/artists/${value.id}`)
        },
    },
}
</script>
