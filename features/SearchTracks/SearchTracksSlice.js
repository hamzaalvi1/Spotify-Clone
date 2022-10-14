import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import spotifyApi from "../../lib/spotify";

const initialState = {
  data: null,
  error: {},
  loading: false,
};
export const getUserTracks = createAsyncThunk(
  "tracks/userTracks",
  async ({ accessToken, search }, {rejectWithValue}) => {
    spotifyApi.setAccessToken(accessToken);
    try{
        const response = await spotifyApi.searchTracks(search)
        return response.body.tracks
    }
    catch(err){
        return rejectWithValue(err)
    }
  }
);

 const SearchTracks = createSlice({
  name: "SearchTracks",
  initialState,
  reducers: {},
  extraReducers:{
    [getUserTracks.pending]:(state)=>{
        state.loading = true
    },
    [getUserTracks.fulfilled]:(state,payload)=>{
        state.loading = false
        state.data = payload
    },
    [getUserTracks.rejected]:(state,payload)=>{
       state.loading = false
       state.error = payload
    }
  }

});


export default SearchTracks.reducer