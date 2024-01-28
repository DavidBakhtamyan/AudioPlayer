import { createSlice } from "@reduxjs/toolkit";

const sortSlice = createSlice({
    name: "sortList",
    initialState:[
         {
            name: "Favorites",
            isToggled: true,
            id: 1,
          },
          {
            name: "A-Z",
            isToggled: false,
            id: 2,
          },
    ],
    reducers: {
      toggleSort: (state, { payload }) => {
        return state.map(el => el.id === payload ? {...el, isToggled: !el.isToggled} : {...el, isToggled: false})
      }
      }

})


export const {toggleSort} = sortSlice.actions
export default sortSlice.reducer