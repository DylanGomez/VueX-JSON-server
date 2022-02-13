<template>
  <v-card>
    {{currentArtist.name}}
    <song-table :songs="artistSongs" />
  </v-card>

</template>

<script>
import { mapGetters } from 'vuex'
import SongTable from '../components/SongTable.vue'
import api from '@/api'


export default {
  name: 'playlist',

  components: {
    SongTable
  },

  data() {
    return {
      playlistSongs: [],
    }
  },

  computed: {
    ...mapGetters([
      'getPlaylistById',
    ]),

    currentPlaylist() {
      return this.getPlaylistById(+this.$route.params.id)
    },

  },

  async created() {
    try {
      await this.$store.dispatch('getPlaylists')
    } catch (error) {
      console.warn('Action getArtists failed', error)
    }
    this.playlistSongs = await api.GetSongsForArtist(this.currentPlaylist.id)
  },

}
</script>
