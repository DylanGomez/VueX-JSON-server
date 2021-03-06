/* eslint-disable no-shadow, no-param-reassign */
import api from '@/api'
import { SET_SONGS, SET_SONGS_FOR_ARTIST, CLEAR_STATE } from '@/store/mutation-types'

const state = {
    songs: [],
    filterSongsForArtist: [],
}

const getters = {
    songs: (state) => state.songs,
    getSongById: (state) => (id) => state.songs.find((song) => song.id === id),
}

const actions = {
    getSongs({ commit, state }) {
        return api.getSongs()
            .then((songs) => {
                commit(SET_SONGS, songs)
                return state.songs
            })
            .catch((error) => console.warn('Error fetching songs', error)) // eslint-disable-line no-console
    },

    getSongsForArtist({ commit, state }, { artistName }) {
        return api.getSongsForArtist(artistName)
            .then((filterSongs) => {
                commit(SET_SONGS_FOR_ARTIST, filterSongs)
                return state.filterSongsForArtist
            })
            // eslint-disable-next-line
            .catch((error) => console.warn(`Error fetching songs for artist${artistName}`, error))
    },
}

const mutations = {
    [SET_SONGS](state, songs) {
        state.songs = songs
    },

    [SET_SONGS_FOR_ARTIST](state, songs) {
        state.songs = songs
    },

    [CLEAR_STATE](state) {
        state.songs = []
    },
}

export default {
    state,
    getters,
    actions,
    mutations,
}
