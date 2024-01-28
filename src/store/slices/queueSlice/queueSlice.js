import { createSlice } from "@reduxjs/toolkit";

const queueSlice = createSlice({
  name: "queue",
  initialState: {
    queueID: [],
    isPlaying: false
  },
  reducers: {
    startStopPlaying: (state) => {
      return {
        ...state,
        isPlaying: !state.isPlaying
      }
    },
    addToQueue: (state, { payload }) => {
      const isInQueue = state.queueID.includes(payload);

      if (!isInQueue) {
        return {
          ...state,
          queueID: [...state.queueID, payload]
        }
      } else {
        return state
    }
    },
    removeFromQueue: (state, { payload }) => {
        return {
          ...state,
          queueID: state.queueID.filter(el => el !== payload)
        }
    },
    clearQueue: () => {
        return {
          isPlaying: false,
          queueID: []
        }
    }
  }
});

export const { addToQueue, removeFromQueue,clearQueue,startStopPlaying } = queueSlice.actions;
export default queueSlice.reducer;
