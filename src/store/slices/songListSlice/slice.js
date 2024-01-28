import { createSlice } from "@reduxjs/toolkit";

const songListSlice = createSlice({
    name: "songList",
    initialState:[
        {
            name: "Halo",
            artist_name: "Blackbird Blackbird",
            track: "1",
            isPlaying: false,
            favorite: false,
            duration: 5000,
        },
        {
            name: "Blind",
            artist_name: "Blackbird Blackbird",
            track: "2",
            isPlaying: false,
            favorite: false,
            duration: 2000,
        },
        {
            name: "Twin flames",
            artist_name: "Blackbird Blackbird",
            track: "3",
            isPlaying: false,
            favorite: false,
            duration: 2000,
        },
        {
            name: "Left to hurt",
            artist_name: "Blackbird Blackbird",
            track: "4",
            isPlaying: false,
            favorite: false,
            duration: 2000,
        },
        {
            name: "Starlight",
            artist_name: "Blackbird Blackbird",
            track: "5",
            isPlaying: false,
            favorite: false,
            duration: 2000,
        },
        {
            name: "Modern Disbelief",
            artist_name: "Blackbird Blackbird",
            track: "6",
            isPlaying: false,
            favorite: false,
            duration: 2000,
        },
    ],
    reducers: {
        playPause: (state, { payload }) => {
            return state.map(el => (el.track === payload ? {...el, isPlaying: !el.isPlaying} : {...el, isPlaying: false}))
        },
        favoriteAddRemove: (state, { payload }) => {
            return state.map(el => (el.track === payload ? {...el, favorite: !el.favorite} : el))
        },
        uploadMusic: (state, { payload }) => {
            return [
                ...state, 
                {
                    name: payload,
                    artist_name: "Blackbird Blackbird",
                    track: state.length + 1,
                    isPlaying: false,
                    favorite: false,
                    duration: 2000,  
                }
            ]
        }
      }

})


export const {playPause, favoriteAddRemove, uploadMusic} = songListSlice.actions
export default songListSlice.reducer