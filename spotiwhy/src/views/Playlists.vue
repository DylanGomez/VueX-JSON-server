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
      :items="playlists"
      :search="searchInput"
    >
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>My playlists</v-toolbar-title>
          <v-divider
            class="mx-4"
            inset
            vertical
          ></v-divider>
          <v-spacer></v-spacer>
          <v-dialog
            v-model="dialog"
            max-width="500px"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                color="primary"
                dark
                class="mb-2"
                v-bind="attrs"
                v-on="on"
              >
                New Item
              </v-btn>
            </template>
            <v-card>
              <v-card-title>
                <span class="text-h5">{{formTitle}}</span>
              </v-card-title>

              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col
                      cols="12"
                      sm="6"
                      md="4"
                    >
                      <v-text-field
                        v-model="editedItem.name"
                        label="Playlist name"
                      ></v-text-field>
                    </v-col>

                  </v-row>
                </v-container>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  color="blue darken-1"
                  text
                  @click="close"
                >
                  Cancel
                </v-btn>
                <v-btn
                  color="blue darken-1"
                  text
                  @click="save"
                >
                  Save
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <v-dialog
            v-model="dialogDelete"
            max-width="500px"
          >
            <v-card>
              <v-card-title class="text-h5">Are you sure you want to delete this playlist?</v-card-title>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  color="blue darken-1"
                  text
                  @click="closeDelete"
                >Cancel</v-btn>
                <v-btn
                  color="blue darken-1"
                  text
                  @click="deleteItemConfirm"
                >OK</v-btn>
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-toolbar>
      </template>
      <template v-slot:item.actions="{ item }">
        <v-icon
          small
          class="mr-2"
          @click="editItem(item)"
        >
          mdi-pencil
        </v-icon>
        <v-icon
          small
          @click="deleteItem(item)"
        >
          mdi-delete
        </v-icon>
        <router-link :to="`/playlists/${item.id}`">
          <v-icon
            small
            class="mr-2"
          >
            mdi-arrow-right
          </v-icon>
        </router-link>
      </template>
    </v-data-table>

  </v-card>

</template>

<script>
import { mapGetters } from 'vuex'
import api from '@/api'

export default {
  name: 'playlists',

  data() {
    return {
      searchInput: '',
      dialog: false,
      dialogDelete: false,
      openedArtist: {
        id: -1
      },
      headers: [
        {
          text: 'Playlist',
          align: 'start',
          value: 'name',
        },
        {
          text: 'Actions',
          value: 'actions',
          sortable: false
        },
      ],
      editedIndex: -1,
      editedItem: {
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

    formTitle() {
      return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
    },
  },


  watch: {
    dialog(val) {
      val || this.close()
    },
    dialogDelete(val) {
      val || this.closeDelete()
    },
  },

  created() {
    this.$store.dispatch('getPlaylists')
  },

  methods: {
    editItem(item) {
      console.log(item)
      this.editedIndex = item.id
      this.editedItem = item
      this.dialog = true
    },

    deleteItem(item) {
      this.editedIndex = item.id
      this.editedItem = item
      this.dialogDelete = true
    },

    async deleteItemConfirm() {
      try {
        await api.deletePlaylist({
          id: this.editedIndex,
        })
      } catch (error) {
        console.warn('Error posting playlist', error)
      }
      this.$store.dispatch('getPlaylists')


      this.closeDelete()
    },

    close() {
      this.dialog = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

    closeDelete() {
      this.dialogDelete = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

    async save() {
      if (this.editedIndex > -1) {
        try {
          await api.updatePlaylist({
            id: this.editedIndex,
            name: this.editedItem.name,
          })
        } catch (error) {
          console.warn('Error posting playlist', error)
        }
      } else {
        try {
          await api.postPlaylist({
            name: this.editedItem.name,
          })
        } catch (error) {
          console.warn('Error posting playlist', error)
        }
      }
      this.$store.dispatch('getPlaylists')
      this.close()
    },
  }
}
</script>
