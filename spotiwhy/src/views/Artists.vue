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
    >
      <template v-slot:item.actions="{ item }">
        <router-link
          :to="`/artists/${item.id}`"
          class="btn btn-outline-secondary"
        >
          Open
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
        id: -1
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
          sortable: false
        },

      ],
    }
  },

  computed: {
    ...mapGetters([
      'artists',
    ]),

    allArtists() {
      return this.artists
    },
  },

  created() {
    this.$store.dispatch('getArtists')
  },

  methods: {
    openArtistDetails(item) {
      this.openedArtist = Object.assign({}, item)


    },
  }
}
</script>
