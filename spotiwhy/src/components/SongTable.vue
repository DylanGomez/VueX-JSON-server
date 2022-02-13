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
            :items="songs"
            :search="searchInput"
            @click:row="openPlaylistSelection"
        >
            <template v-slot:top>
                <v-dialog
                    v-model="dialogAdd"
                    max-width="500px"
                >
                    <v-card>
                        <v-card-title class="text-h5">
                            To which playlist do you want to add the song
                        </v-card-title>

                        <v-list>
                            <v-list-item
                                v-for="playlist in playlists"
                                :key="playlist.id"
                            >
                                <v-list-item-content>
                                    <v-list-item-title v-text="playlist.name"></v-list-item-title>
                                </v-list-item-content>
                                <v-list-item-action>
                                    <v-btn icon>
                                        <v-icon color="grey lighten-1">
                                            mdi-plus
                                        </v-icon>
                                    </v-btn>
                                </v-list-item-action>
                            </v-list-item>
                        </v-list>

                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn
                                color="blue darken-1"
                                text
                                @click="closeAddDialog"
                            >
                                Cancel
                            </v-btn>
                            <v-spacer></v-spacer>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
            </template>
            <template v-slot:item.actions="{ item }">
                <v-icon
                    small
                    class="mr-2"
                >
                    mdi-plus
                </v-icon>
            </template>
        </v-data-table>
    </v-card>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'song-table',

    props: {
        songs: {
            type: Array,
            required: true,
        },
        playlistMode: {
            type: Boolean,
            default: false,
        },
    },

    data() {
        return {
            searchInput: '',
            dialogAdd: false,
            selectedPlaylist: 0,
            headers: [
                {
                    text: 'Songname',
                    align: 'start',
                    value: 'name',
                },
                {
                    text: 'Artist',
                    value: 'artist',
                    sortable: false,
                },
                {
                    text: 'Actions',
                    value: 'actions',
                    sortable: false,
                },
            ],
            openedIndex: -1,
            openedItem: {
                name: '',
            },
            defaultItem: {
                name: '',
            },
        }
    },

    computed: {
        ...mapGetters([
            'playlists',
        ]),
    },

    methods: {
        async openPlaylistSelection(item) {
            await this.$store.dispatch('getPlaylists')

            this.openedIndex = item.id
            this.openedItem = item
            this.dialogAdd = true
        },

        closeAddDialog() {
            this.dialogAdd = false
            this.$nextTick(() => {
                this.openedItem = { ...this.defaultItem }
                this.openedIndex = -1
            })
        },
    },

}
</script>
