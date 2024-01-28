import { configureStore } from "@reduxjs/toolkit";
import songListSlice from "./slices/songListSlice/slice"
import sortSlice from "./slices/sortSlice/sortSlice";
import filterSlice from "./slices/filterSlice/filterSlice";
import queueSlice from "./slices/queueSlice/queueSlice";

const stroe = configureStore({
    reducer:{
        songList: songListSlice,
        sortList: sortSlice,
        filter: filterSlice,
        queue: queueSlice,
    }
})

export default stroe;