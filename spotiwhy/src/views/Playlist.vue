<template>
    <v-card>
        <div class="text-h5 ma-4">
            {{ playlist.name }}
        </div>
        <song-table :songs="getSongsFromObject" />
    </v-card>
</template>

<script>
import { mapGetters } from 'vuex'
import api from '@/api'
import SongTable from '../components/SongTable.vue'

export default {
    name: 'playlist',

    components: {
        SongTable,
    },

    data() {
        return {
            playlistSongs: [],
            playlist: {
                name: null,
            },
        }
    },

    computed: {
        ...mapGetters([
            'getPlaylistById',
        ]),

        playlistId() {
            return +this.$route.params.id
        },

        currentPlaylist() {
            return this.getPlaylistById(+this.$route.params.id)
        },

        songsInPlaylist() {
            return api.getPlaylistSongs(+this.$route.params.id)
        },

        getSongsFromObject() {
            const songs = []
            this.playlistSongs.forEach((songObject) => {
                songs.push(songObject.song)
            })
            return songs
        },
    },

    async mounted() {
        try {
            await this.$store.dispatch('getPlaylists')
        } catch (error) {
            console.warn('Action getArtists failed', error)
        }
        this.playlist = this.currentPlaylist
        this.playlistSongs = await this.songsInPlaylist
    },

    methods: {

    },

}
</script>
