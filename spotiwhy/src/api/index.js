import Vue from 'vue'

const basePath = 'http://localhost:3000'

// API methods start here
// Song API's
function getSongs() {
    return Vue.prototype.$axios.get(
        `${basePath}/songs`,
    ).then((response) => (response.data))
}

function GetSongsForArtist(artistName) {
    return Vue.prototype.$axios.get(
        `${basePath}/songs?artist=${artistName}`,
    ).then((response) => (response.data))
}

// Artist API's
function getArtists() {
    return Vue.prototype.$axios.get(
        `${basePath}/artists`,
    ).then((response) => (response.data))
}

function getArtistsById(id) {
    return Vue.prototype.$axios.get(
        `${basePath}/artists?id=${id}`,
    ).then((response) => (response.data))
}

// Playlist API's

function getPlaylists() {
    return Vue.prototype.$axios.get(
        `${basePath}/playlists`,
    ).then((response) => (response.data))
}

function postPlaylist({
    name,
}) {
    return Vue.prototype.$axios.post(
        `${basePath}/playlists`, {
            name,
        },
    )
}

function updatePlaylist({
    id,
    name,
}) {
    return Vue.prototype.$axios.put(
        `${basePath}/playlists/${id}`, {
            name,
        },
    )
}

function deletePlaylist({
    id,
}) {
    return Vue.prototype.$axios.delete(
        `${basePath}/playlists/${id}`,
    )
}

function getPlaylistSongs(playlistId) {
    return Vue.prototype.$axios.get(
        `${basePath}/playlistSongs?_expand=song&playlistId=${playlistId}`,
    ).then((response) => (response.data))
}

export default {
    getSongs,
    getArtists,
    getArtistsById,
    GetSongsForArtist,
    getPlaylists,
    postPlaylist,
    updatePlaylist,
    deletePlaylist,
    getPlaylistSongs,
}
