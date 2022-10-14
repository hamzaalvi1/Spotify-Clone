import { configureStore } from '@reduxjs/toolkit'
import TrackReducer from "./SearchTracks/SearchTracksSlice"


const store = configureStore({
    reducer:{
        tracks: TrackReducer

    }
})


export default store