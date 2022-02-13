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
  name: 'artist',

  components: {
    SongTable
  },

  data() {
    return {
      artistSongs: [],
    }
  },

  computed: {
    ...mapGetters([
      'getArtistById',
    ]),

    artistId() {
      return +this.$route.params.id
    },

    currentArtist() {
      return this.getArtistById(+this.$route.params.id)
    },

  },

  async created() {
    try {
      await this.$store.dispatch('getArtists')
    } catch (error) {
      console.warn('Action getArtists failed', error)
    }
    this.artistSongs = await api.GetSongsForArtist(this.currentArtist.name)
  },

}
</script>
