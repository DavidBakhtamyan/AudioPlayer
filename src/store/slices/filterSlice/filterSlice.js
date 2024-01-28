import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name: "filter",
    initialState:"",
    reducers: {
      handleFilter: (state, { payload }) => {
        return payload
      }
    }

})


export const {handleFilter} = filterSlice.actions
export default filterSlice.reducer