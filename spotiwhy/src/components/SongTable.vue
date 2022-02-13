<template>
  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
            Name
          </th>
          <th class="text-left">
            Artist
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="song in songs"
          :key="song.id"
        >
          <td>{{ song.name }}</td>
          <td>{{ song.artist }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>

export default {
  name: 'song-table',

  props: {
    songs: {
      type: Array,
      required: true,
    },
  },

  data() {
    return {
      searchInput: '',
    }
  },

}
</script>
