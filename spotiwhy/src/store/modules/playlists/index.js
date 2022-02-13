/* eslint-disable no-shadow, no-param-reassign */
import api from '@/api'
import { SET_PLAYLISTS, CLEAR_STATE } from '@/store/mutation-types'

const state = {
    playlists: [],
    playlist: {},

}

const getters = {
    playlists: state => state.playlists,
    getPlaylistById: state => id => state.playlists.find(playlist => playlist.id === id),
}

const actions = {
    getPlaylists({ commit, state }) {
        return api.getPlaylists()
            .then((playlists) => {
                console.log('in playlist')
                commit(SET_PLAYLISTS, playlists)
                return state.playlists
            })
            .catch(error => console.warn('Error fetching playlists', error))
    },
}

const mutations = {
    [SET_PLAYLISTS](state, playlists) {
        state.playlists = playlists
    },

    [CLEAR_STATE](state) {
        state.playlists = []
    },
}

export default {
    state,
    getters,
    actions,
    mutations,
}
